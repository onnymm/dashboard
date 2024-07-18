import { CHART_TYPES } from "../constants/charts";
import { PRESET_COLORS, OPACITIES } from "../constants/colors";
import { CHARTS_SETTINGS } from "../constants/settings";
import { stratificateData as _stratificateData } from "./dataFormatting";

export const buildData = ({
    data, // Objeto de datos retornado del API
    labelsContainerID, // ID del contenedor de etiquetas
    [CHARTS_SETTINGS.CHART_TYPE]: chartType, // Tipo de gráfica
    [CHARTS_SETTINGS.LABELS_NAME]: labelsName, // Variable de etiquetas de la gráfica de barras
    [CHARTS_SETTINGS.DATASETS_NAMES]: datasetNames, // Variable de cada uno de los conjuntos de datos en el objeto
    [CHARTS_SETTINGS.LABELS]: labels, // Nombres visibles en la gráfica para cada conjunto de datos
    [CHARTS_SETTINGS.BACKGROUND_COLORS]: backgroundColors, // Colores de fondo de los conjuntos de datos
    [CHARTS_SETTINGS.BACKGROUND_OPACITY]: backgroundOpacity = undefined, // Opacidad de los colores de fondo
    [CHARTS_SETTINGS.BORDER_COLORS]: borderColors, // Colores de borde de los conjuntos de datos
    [CHARTS_SETTINGS.BORDER_OPACITY]: borderOpacity = undefined, // Opacidad de los colores de borde

    // Argumentos opcionales
    [CHARTS_SETTINGS.X_AXIS_FORMAT]: xLabelsFormatter = undefined, // Formateo en las etiquetas del eje X
    [CHARTS_SETTINGS.Y_AXIS_FORMAT]: yLabelsFormatter = undefined, // Formateo los valores del eje Y,
    [CHARTS_SETTINGS.CATEGORY_STRATIFICATION_BY]: strat = undefined, // Variable de estratificación
    [CHARTS_SETTINGS.LABELS_DISPLAY]: labelsDisplay, // Estilo de contenedor de etiquetas
    [CHARTS_SETTINGS.LABELS_LIST]: labelsList, // Estilo de lista de etiquetas
    [CHARTS_SETTINGS.LEGEND_BOX]: legendBox, // Estilo de cajas de color de etiquetas
}) => {

    // Inicialización del contenedor de datos con formato dinámico
    let series = _buildInitSeries({data, strat, datasetNames, labelsName, labels})

    // Mapeo de colores y opacidades preestablecidos a los conjuntos de datos
    if ( chartType === CHART_TYPES.POLARAREA && !backgroundOpacity ) {
        backgroundOpacity = 75;
    }
    if ( (chartType === CHART_TYPES.PIE || chartType === CHART_TYPES.DOUGHNUT) && !borderColors ) {
        borderColors = PRESET_COLORS.LIGHT_MODE;
    }
    if ( chartType === CHART_TYPES.POLARAREA && !borderColors ) {
        borderColors = PRESET_COLORS.BLACK;
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
        CHART_TYPES.PIE,
        CHART_TYPES.DOUGHNUT,
        CHART_TYPES.POLARAREA,
        CHART_TYPES.RADAR,
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
    if ( (chartType === CHART_TYPES.LINE || chartType === CHART_TYPES.RADAR) && backgroundColors ) {
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
        return (colors + OPACITIES[colorOpacity])
    
    // Concatenación de la opacidad a cada uno de los valores de la matriz
    } else {
        return (colors.map(bgColor => bgColor + OPACITIES[colorOpacity]))
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