import { CHART_TYPES, CHARTS_WITHOUT_AXES } from "../constants/charts";
import { OPACITIES } from "../constants/colors";
import { CHARTS_SERIES_SETTINGS, CHARTS_SETTINGS } from "../constants/settings";
import { chartSettings } from "../settings/dashboardSettings";

export const buildInitSeries = ({
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
        [datasets, renamedLabels] = stratificateData(data, strat, datasetNames, labelsName)
    // Obtención de un sólo conjunto de datos (Flujo por defecto)
    } else {
        datasets = [ getSingleDataset(data, labels[0], datasetNames[0]) ]
        renamedLabels = getLabels(data, labelsName)
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

export const buildOptions = ({
    chartType,
    labelsContainerID,
    aspectRatio = chartSettings[CHARTS_SETTINGS.ASPECT_RATIO],
    labelsDisplay = chartSettings[CHARTS_SETTINGS.LABELS_DISPLAY],
    labelsList = chartSettings[CHARTS_SETTINGS.LABELS_LIST],
    legendBox = chartSettings[CHARTS_SETTINGS.LEGEND_BOX],
}) => {

    // Inicialización del objeto a retornar
    const options = {}

    // Inicialización de atributos preestablecidos de opciones
    options.scales = {}
    options.scales.x = {}
    options.scales.y = {}
    options.scales.x.ticks = {}
    options.scales.y.ticks = {}

    // Configuración preestablecida para gráficas radiales
    if ( Object.values(CHARTS_WITHOUT_AXES).indexOf(chartType) !== -1 ) {
        options.scales.x.display = false
        options.scales.y.display = false
    }

    // Configuración de relación de aspecto
    options.aspectRatio = aspectRatio 

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

    const legendParams = {
        labelsDisplay,
        labelsList,
        legendBox
    }

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

export const mapColorsOnSeries = ({
    series,
    chartType,
    backgroundColors,
    backgroundOpacity,
    borderColors,
    borderOpacity
}) => {

    // Asignación de opacidad de colores de fondo para gráficas de área polar
    if ( chartType === CHART_TYPES.POLARAREA && !backgroundOpacity ) {
        backgroundOpacity = chartSettings[CHART_TYPES.POLARAREA][CHARTS_SETTINGS.BACKGROUND_OPACITY];
    }

    // Asignación de colores de borde para gráficas circulares
    if ( (chartType === CHART_TYPES.PIE || chartType === CHART_TYPES.DOUGHNUT) && !borderColors ) {
        borderColors = chartSettings.circularCharts[CHARTS_SETTINGS.BORDER_COLORS];
    }

    // Asignación de opacidades y colores de borde para gráficas de área polar
    if ( chartType === CHART_TYPES.POLARAREA && !borderColors ) {
        borderColors = backgroundColors; // Asignación de mismos colores de fondo para colores de borde
        borderOpacity = chartSettings[CHART_TYPES.POLARAREA][CHARTS_SETTINGS.BORDER_OPACITY];
    }

    series = colorMapping({ series, backgroundColors, backgroundOpacity, borderColors, borderOpacity, chartType });

    return series;
}

export const formatLabels = ({
    series,
    options,
    xLabelsFormatter,
    yLabelsFormatter
}) => {

    // Formateo de etiquetas en el eje X
    if ( xLabelsFormatter ) {
        series.labels = series.labels.map((value) => xLabelsFormatter(value))
    }
    // Formateo de etiquetas en el eje Y
    if ( yLabelsFormatter ) {
        options.scales.y.ticks.callback = yLabelsFormatter
    }

    // Retorno de los conjuntos de datos y objeto de opciones
    return [ series, options ]
}

const stratificateData = (data, categoryName, datasetNames, labelsName) => {
    // Se inicializa la matriz a retornar
    const datasets = []
    // Se inicializa el contenedor de los nombres de grupo en el conjunto de datos
    const groups = []
    // Se inicializa el contenedor de los nombres de etiquetas
    const labels = []

    
    // Se obtienen todos los nombres de grupo del conjunto de datos
    data.forEach(
        (sample) => {
            // Si el nombre no existe en la matriz, se agrega
            if ( groups.indexOf(sample[categoryName]) === -1 ) {
                groups.push(sample[categoryName])
            }
            if ( labels.indexOf(sample[labelsName]) === -1 ) {
                labels.push(sample[labelsName])
            }
        }
    )
    
    // Se realiza la búsqueda y agrupación por todos los nombres de grupo
    groups.forEach(
        // Iteración por nombres de grupo
        (name) => {
            // Se crea un conjunto de datos vacío
            const dataset = {}
            // Se designa el nombre como etiqueta del conjunto de datos
            dataset.label = name
            // Se inicializa el contenedor de valores del conjunto de datos
            dataset.data = []
            
            // Iteración por cada valor del conjunto de datos
            data.forEach(
                (sample) => {
                    // Se agrega el valor del conjunto de datos entrante si pertenece al grupo del nombre
                    if ( sample[categoryName] === name ) {
                        dataset.data.push(sample[datasetNames])
                    }
                }
            )
            
            // Finalizada la iteración por el conjunto de datos entrante, se añade el nuevo conjunto de datos al objeto a retornar
            datasets.push(dataset)
        }
    )

    return [ datasets, labels ]
}

const getSingleDataset = (data, labelName, varValue) => {

    // Se crea un conjunto de datos vacío
    const dataset = {}

    // Se designa el nombre como etiqueta del conjunto de datos
    dataset.label = labelName

    // Se inicializa el contenedor de valores del conjunto de datos
    dataset.data = []

    // Iteración por cada valor del conjunto de datos
    data.forEach(
        (sample) => {
            dataset.data.push(sample[varValue])
        }
    )

    // Retorno del conjunto de datos
    return dataset
}

const getLabels = (data, labelsName) => {
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

    // Retorno de la matriz de etiquetas
    return labels
}

const colorMapping = ({
    series,
    backgroundColors,
    backgroundOpacity,
    borderColors,
    borderOpacity,
    chartType,
}) => {
    // Variables booleanas
    const isFillableChart = chartType === CHART_TYPES.LINE || chartType === CHART_TYPES.RADAR

    // Mapeo de opacidad a los colores de fondo
    if ( backgroundOpacity ) {
        backgroundColors = mapOpacities(backgroundColors, backgroundOpacity)
    }
    if ( borderOpacity ) {
        borderColors = mapOpacities(borderColors, borderOpacity)
    }

    // Mapeo de colores a los conjuntos de datos
    if ( backgroundColors ) {
        series = mapColors(series, backgroundColors, CHARTS_SERIES_SETTINGS.BACKGROUND_COLOR)
    }
    if ( borderColors ) {
        series = mapColors(series, borderColors, CHARTS_SERIES_SETTINGS.BORDER_COLOR)
    }

    
    // Activación de color de fondo para gráficas de línea y radar
    if ( isFillableChart && backgroundColors ) {
        // Activación por dataset
        series.datasets.forEach(
            (dataset) => {
                dataset.fill = chartSettings.fillableCharts[CHARTS_SERIES_SETTINGS.FILL]
            }
        )
    }

    return series
}

const mapOpacities = (colors, colorOpacity) => {
    // Concatenación de la opacidad si el color es un texto
    if (typeof colors === 'string') {
        return (colors + OPACITIES[colorOpacity])
    
    // Concatenación de la opacidad a cada uno de los valores de la matriz
    } else {
        return (
            colors.map(
                (bgColor) => (bgColor + OPACITIES[colorOpacity])
            )
        )
    }
}

const mapColors = (series, colors, colorType) => {
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
