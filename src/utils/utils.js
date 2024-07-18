import { chartTypes } from "../constants/charts";
import { presetColors, opacity } from "../constants/colors";
import { CHARTSSETINGSNAMES } from "../constants/settings";
import { stratificateData as _stratificateData } from "./dataFormatting";

export const buildData = ({
    data, // Objeto de datos retornado del API
    chartType, // Tipo de gráfica
    labelsName, // Variable de etiquetas de la gráfica de barras
    datasetNames, // Variable de cada uno de los conjuntos de datos en el objeto
    labels, // Nombres visibles en la gráfica para cada conjunto de datos
    backgroundColors, // Colores de fondo de los conjuntos de datos
    backgroundOpacity = undefined, // Opacidad de los colores de fondo
    borderColors, // Colores de borde de los conjuntos de datos
    borderOpacity = undefined, // Opacidad de los colores de borde

    // Argumentos opcionales
    xLabelsFormatter = undefined, // Formateo en las etiquetas del eje X
    yLabelsFormatter = undefined, // Formateo los valores del eje Y,
    strat = undefined, // Variable de estratificación
    labelsContainerID, // ID del contenedor de etiquetas
    [CHARTSSETINGSNAMES.LABELSDISPLAY]: labelsDisplay, // Estilo de contenedor de etiquetas
    [CHARTSSETINGSNAMES.LABELSLIST]: labelsList, // Estilo de lista de etiquetas
    [CHARTSSETINGSNAMES.LEGENDBOX]: legendBox, // Estilo de cajas de color de etiquetas
}) => {

    // Inicialización del contenedor de datos con formato dinámico
    let series = _buildInitSeries({data, strat, datasetNames, labelsName, labels})

    // Mapeo de colores y opacidades preestablecidos a los conjuntos de datos
    if ( chartType === chartTypes.polarArea && !backgroundOpacity ) {
        backgroundOpacity = 75;
    }
    if ( (chartType === chartTypes.pie || chartType === chartTypes.doughnut) && !borderColors ) {
        borderColors = presetColors.lightMode;
    }
    if ( chartType === chartTypes.polarArea && !borderColors ) {
        borderColors = presetColors.black;
        borderOpacity = 0;
    }

    series = _colorMapping({series, backgroundColors, backgroundOpacity, borderColors, borderOpacity, chartType})

    // Configuración con argumentos opcionales

    const legendParams = {
        labelsDisplay,
        labelsList,
        legendBox
    }

    // Inicialización del contenedor de opciones
    const options = _optionsBuilder(chartType, labelsContainerID, legendParams);

    // Formateo de etiquetas en el eje X
    if ( xLabelsFormatter ) {
        series.labels = series.labels.map((value) => xLabelsFormatter(value))
    }
    // Formateo de etiquetas en el eje Y
    if ( yLabelsFormatter ) {
        options.scales.y.ticks.callback = yLabelsFormatter
    }

    // Retorno del objeto a ingresar al componente de graficación
    return { options, series }
}

const _buildInitSeries = ({
    data,
    strat,
    datasetNames,
    labelsName,
    labels
}) => {
    // Inicialización del contenedor de datos a retornar
    let series = {};

    // Se inicializa la matriz de conjuntos de datos
    series.datasets = [];

    // Se convierte el objeto de objetos recibido por el API a matriz de objetos
    data = Object.values(data)

    // Inicialización de contenedores de datos y etiquetas
    let datasets
    let renamedLabels

    // Estratificación por variable categórica (Si se requiere)
    if ( strat ) {
        [datasets, renamedLabels] = _stratificateData(data, strat, datasetNames, labelsName)
    // Obtención de un sólo conjunto de datos (Flujo por defecto)
    } else {
        datasets = [_getSingleDataset(data, labels[0], datasetNames[0])]
        renamedLabels = _getLabels(data, labelsName)
    }

    // Se añade(n) el(los) dataset(s) a la matriz de series
    series.datasets = datasets

    // Se asignan los nombres de las etiquetas
    if (labelsName){
        series.labels = renamedLabels;
    }

    // Retorno del contenedor de datos
    return series
}

export const dataFormatters = {
    // Mostrar sólo el primer nombre en un String antes del espacio
    onlyName: (text) => (text.slice(0, text.indexOf(" "))),
    // Números a moneda nacional
    toMXN: (num) => (num.toLocaleString('es-MX', {style: 'currency', currency: 'MXN'})),
    // Números a miles en moneda nacional
    toThousandsMXN: (num) => (`$${num / 1000} K`),
    // Números a millones en moneda nacional
    toMillionsMXN: (num) => (`$${num / 1000000} M`),
    // Nombres de variable de Snake Case a Camel Case
    snakeToCamel: (str) => str.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase()),
    // Cualquiera a Camel Case
    anyToCamel: (str) => str.toLowerCase().replace(/[\s_-]([a-z])/g, (match, p1) => p1.toUpperCase())
}

const _getSingleDataset = (data, label, varValue) => {

    // Se crea un conjunto de datos vacío
    const dataset = {}

    // Se designa el nombre como etiqueta del conjunto de datos
    dataset.label = label

    // Se inicializa el contenedor de valores del conjunto de datos
    dataset.data = []

    // Iteración por cada valor del conjunto de datos
    data.forEach(
        (sample) => {
            dataset.data.push(sample[varValue])
        }
    )

    return dataset
}

const _getLabels = (data, labelsName) => {
    // Se inicializa el contenedor de los nombres de etiquetas
    const labels = []

    // Se obtienen todas las etiquetas únicas
    data.forEach(
        (sample) => {
            // Si el nombre no existe en la matriz, se agrega
            if ( labels.indexOf(sample[labelsName]) === -1 ) {
                labels.push(sample[labelsName])
            }
        }
    )

    return labels
}

const _optionsBuilder = (chartType, labelsContainerID, legendParams) => {
    // Gráficas radiales
    const chartsWithoutAxes = [
        chartTypes.pie,
        chartTypes.doughnut,
        chartTypes.polarArea,
        chartTypes.radar,
    ]

    // Inicialización del objeto a retornar
    const options = {}

    // Inicialización de atributos preestablecidos de opciones
    options.scales = {}
    options.scales.x = {}
    options.scales.y = {}
    options.scales.x.ticks = {}
    options.scales.y.ticks = {}

    // Configuración preestablecida para gráficas radiales
    if ( Object.values(chartsWithoutAxes).indexOf(chartType) !== -1 ) {
        options.scales.x.display = false
        options.scales.y.display = false
    }

    // Configuración de relación de aspecto
    options.aspectRatio = 1.5

    // Integración de plugins
    options.plugins = {

        // Plug-in para etiquetas desacopladas de la gráfica
        htmlLegend: {
            containerID: labelsContainerID
        },
        // Desactivación de muestra de etiquetas integradas en la gráfica
        legend: {
            display: false,
        }
    }

    // Inicialización de objeto de extensión de opciones para uso de este proyecto
    options.extension = {}

    // Integración de parámetros personalizados de la gráfica en caso de ser provistos
    Object.keys(legendParams).forEach(
        (paramsKey) => {
            if ( legendParams ) {
                options.extension[paramsKey] = legendParams[paramsKey]
            }
        }
    )

    // Retorno del objeto de configuración
    return options
}

const _colorMapping = ({
    series,
    backgroundColors,
    backgroundOpacity,
    borderColors,
    borderOpacity,
    chartType,
}) => {
    // Mapeo de opacidad a los colores de fondo
    if (backgroundOpacity) {
        backgroundColors = _mapOpacities(backgroundColors, backgroundOpacity)
    }
    if (borderOpacity !== undefined) {
        borderColors = _mapOpacities(borderColors, borderOpacity)
    }

    // Mapeo de colores a los conjuntos de datos
    if (backgroundColors) {
        series = _mapColors(series, backgroundColors, 'backgroundColor')
    }
    if (borderColors !== undefined) {
        series = _mapColors(series, borderColors, 'borderColor')
    }

    // Activación de color de fondo para gráficas de línea y radar
    if ( (chartType === chartTypes.line || chartType === chartTypes.radar) && backgroundColors ) {
        // Activación por dataset
        series.datasets.forEach(
            (dataset) => dataset.fill = 'origin'
        )
    }

    return series
}

const _mapOpacities = (colors, colorOpacity) => {
    // Concatenación de la opacidad si el color es un texto
    if (typeof colors === 'string') {
        return (colors + opacity[colorOpacity])
    
    // Concatenación de la opacidad a cada uno de los valores de la matriz
    } else {
        return (colors.map(bgColor => bgColor + opacity[colorOpacity]))
    }
}

const _mapColors = (series, colors, colorType) => {
    if (series.datasets.length === 1) {
        series.datasets[0][colorType] = colors

    // Mapeo de paleta de colores a varios conjuntos de datos
    } else if (colors.length > 1) {
        for (let i = 0; i < series.datasets.length; i++) {
            series.datasets[i][colorType] = colors[i]
        }

    // Mapeo de color a varios conjuntos de datos
    } else {
        for (let i = 0; i < series.datasets.length; i++) {
            series.datasets[i][colorType] = colors
        }
    }

    // Retorno de los datos con colores mapeados
    return series;
}