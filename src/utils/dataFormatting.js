import { CHART_TYPES, CHARTS_WITH_AXES, RADIAL_CHARTS } from "../constants/charts";
import { OPACITIES } from "../constants/colors";
import { CHARTS_SERIES_SETTINGS, CHARTS_SETTINGS } from "../constants/settings";
import { chartSettings } from "../settings/dashboardSettings";
import { chartWithAxesFormat } from "./tooltipFormatting";
import { labelsCategoryFormats, labelsValueFormats } from "./utils";

// Funciones de construcción de estructuras de datos
const buildBubbleData = ({
    data,
    labelsName
}) => {

    // Inicialización de los objetos
    let series = {}
    series.datasets = []
    let datasets

    // Mepeo y transformación de los valores
    datasets = Object.values(data).map(
        (values) => {
            return {
                x: values[0],
                y: values[1],
                _custom: [2]
            }
        }
    );

    // Se ingresan los datos transformados al objeto de series
    series.datasets.push(
        {
            data: datasets,
            label: labelsName
        }
    );

    // Se ingresan las etiquetas
    series.labels = Object.keys(data)

    // Retorno del objeto contenedor de los datos transformados
    return series
}
const buildScatterData = ({
    data,
    labelsName
}) => {

    // Inicialización de los objetos
    let series = {}
    series.datasets = []
    let datasets

    // Mepeo y transformación de los valores
    datasets = Object.values(data).map(
        (values) => {
            return {
                x: values[0],
                y: values[1],
            }
        }
    );

    // Se ingresan los datos transformados al objeto de series
    series.datasets.push(
        {
            data: datasets,
            label: labelsName
        }
    );
    // Se ingresan las etiquetas
    series.labels = Object.keys(data)

    // Retorno del objeto contenedor de los datos transformados
    return series
}
const buildGenericData = ({
    data,
    strat,
    datasetNames,
    labelsName,
    labels
}) => {

    // Inicialización de contenedores de datos y etiquetas
    let series = {}
    series.datasets = []
    let datasets
    let renamedLabels

    // Se convierte el objeto de objetos recibido por el API a matriz de objetos
    data = Object.values(data);

    // Estratificación por variable categórica (Si se requiere)
    if ( strat ) {
        [datasets, renamedLabels] = stratificateData({ data, categoryName: strat, datasetNames, labelsName })

    // Obtención de un sólo conjunto de datos (Flujo por defecto)
    } else {
        datasets = [ getSingleDataset({ data, labelName: labels[0], varValue: datasetNames[0] }) ]
        renamedLabels = getLabels({ data, labelsName })
    }

    // Se añade(n) el(los) dataset(s) a la matriz de series
    series.datasets = datasets
    
    // Se asignan los nombres de las etiquetas
    if ( labelsName ) {
        series.labels = renamedLabels;
    }

    // Retorno del objeto contenedor de los datos transformados
    return series
}

// Funciones de construcción de opciones predefinidas
const buildGenericOptions = ({
    labelsContainerID,
    aspectRatio = chartSettings[CHARTS_SETTINGS.ASPECT_RATIO],
    labelsDisplay = chartSettings[CHARTS_SETTINGS.LABEL_COLUMNS],
    labelsList = chartSettings[CHARTS_SETTINGS.LABELS_LIST],
    legendBox = chartSettings[CHARTS_SETTINGS.LEGEND_BOX],
}) => {
    // Inicialización del objeto a retornar
    let options = {}
    
    // Inicialización de atributos preestablecidos de opciones
    options.scales = {}
    options.scales.x = {}
    options.scales.y = {}
    options.scales.x.ticks = {}
    options.scales.y.ticks = {}

    // Configuración de relación de aspecto
    options.aspectRatio = aspectRatio 

    // Integración del plug-in de etiquetas
    options = integrateLegendsPlugIn({
        options,
        labelsContainerID,
        labelsDisplay,
        labelsList,
        legendBox
    })

    // Retorno del objeto de configuración
    return options
}
const buildRadialChartOptions = ({
    labelsContainerID,
    aspectRatio = chartSettings[CHARTS_SETTINGS.ASPECT_RATIO],
    labelsDisplay = chartSettings[CHARTS_SETTINGS.LABEL_COLUMNS],
    labelsList = chartSettings[CHARTS_SETTINGS.LABELS_LIST],
    legendBox = chartSettings[CHARTS_SETTINGS.LEGEND_BOX],
}) => {

    // Inicialización del objeto a retornar
    let options = {}
    
    // Inicialización de atributos preestablecidos de opciones
    options.scales = {}
    options.scales.r = {}
    options.scales.r.pointLabels = {}
    options.scales.r.ticks = {}
    options.scales.r.ticks.backdropColor = "#00000000"
    options.scales.r.display = false // Se desactiva la vista del eje radial
    options.scales.r.angleLines = {}
    options.scales.r.angleLines.display = false // Se desactiva la vista de las líneas categóricas radiales

    // Configuración de relación de aspecto
    options.aspectRatio = aspectRatio 

    // Integración del plug-in de etiquetas
    options = integrateLegendsPlugIn({
        options,
        labelsContainerID,
        labelsDisplay,
        labelsList,
        legendBox
    })

    // Retorno del objeto de configuración
    return options
}
const buildRadarChartOptions = ({
    labelsContainerID,
    aspectRatio = chartSettings[CHARTS_SETTINGS.ASPECT_RATIO],
    labelsDisplay = chartSettings[CHARTS_SETTINGS.LABEL_COLUMNS],
    labelsList = chartSettings[CHARTS_SETTINGS.LABELS_LIST],
    legendBox = chartSettings[CHARTS_SETTINGS.LEGEND_BOX],
}) => {

    // Inicialización del objeto a retornar
    let options = {}
    
    // Inicialización de atributos preestablecidos de opciones
    options.scales = {}
    
    options.scales.r = {}
    options.scales.r.pointLabels = {}
    options.scales.r.ticks = {}
    options.scales.r.ticks.backdropColor = "#00000000"

    options.scales.r.display = true
    options.scales.r.angleLines = {}
    options.scales.r.angleLines.display = true

    // Configuración de relación de aspecto
    options.aspectRatio = aspectRatio 

    // Integración del plug-in de etiquetas
    options = integrateLegendsPlugIn({
        options,
        labelsContainerID,
        labelsDisplay,
        labelsList,
        legendBox
    })

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

    // Validación de tipos de gráfica
    const isPolarArea = chartType === CHART_TYPES.POLARAREA
    const isPie = chartType === CHART_TYPES.PIE
    const isDoughtnut = chartType === CHART_TYPES.DOUGHNUT

    // Asignación de opacidad de colores de fondo para gráficas de área polar
    if ( isPolarArea && !backgroundOpacity ) {
        backgroundOpacity = chartSettings[CHART_TYPES.POLARAREA][CHARTS_SETTINGS.BACKGROUND_OPACITY];
    }

    // Asignación de colores de borde para gráficas circulares
    if ( (isPie || isDoughtnut) && !borderColors ) {
        borderColors = chartSettings.circularCharts[CHARTS_SETTINGS.BORDER_COLORS];
    }

    // Asignación de opacidades y colores de borde para gráficas de área polar
    if ( isPolarArea && !borderColors ) {
        borderColors = backgroundColors; // Asignación de mismos colores de fondo para colores de borde
        borderOpacity = chartSettings[CHART_TYPES.POLARAREA][CHARTS_SETTINGS.BORDER_OPACITY];
    }

    series = colorMapping({ series, backgroundColors, backgroundOpacity, borderColors, borderOpacity, chartType });

    return series;
}

const integrateLegendsPlugIn = ({
    options,
    labelsContainerID,
    labelsDisplay,
    labelsList,
    legendBox
}) => {

    // Integración de plugins
    options.plugins = {

        // Plug-in para etiquetas desacopladas de la gráfica
        htmlLegend: {
            containerID: labelsContainerID
        },
        
        // Desactivación de muestra de etiquetas integradas en la gráfica
        legend: {
            display: false,
        },

        tooltip: {}
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

    // Retorno del objeto contenedor de las opciones
    return options
}

export const formatLabels = ({
    chartType,
    series,
    options,
    xLabelFormat,
    // yLabelsFormatter,
    yValueType
}) => {

    // Validación de si la gráfica es de radar
    const isRadar = chartType === CHART_TYPES.RADAR
    const isRadial = RADIAL_CHARTS.indexOf(chartType) !== -1

    // Definción del formateador de etiquetas numéricas
    const yLabelsFormatter = assignYLabelsFormatter({series, yValueType})
    
    // Formateo de etiquetas en el eje X
    if ( xLabelFormat ) {
        // Ajustes predeterminados para gráfica de radar
        if ( isRadar ) {
            options.scales.r.pointLabels.callback = labelsCategoryFormats[xLabelFormat]
        } else  {
            // options.scales.x.ticks.callback = labelsCategoryFormats[xLabelFormat]
            series.labels = series.labels.map((value) => {
                return labelsCategoryFormats[xLabelFormat](value)
                // console.log(value)
            })
        } 
        // Formateo de etiquetas en el eje Y
    }

    if ( yLabelsFormatter ) {
        if ( isRadar ) {
            options.scales.r.ticks.callback = yLabelsFormatter
        } else if (!isRadial) {
            // series.labels = series.labels.map((value) => labelsCategoryFormats[xLabelFormat](value))
            options.scales.y.ticks.callback = yLabelsFormatter
        }
    }

    // Formateo de etiquetas en el tooltip
    options = formatTooltipLabels({chartType, options, yValueType})

    // Retorno de los conjuntos de datos y objeto de opciones
    return [ series, options ]
}

export const scaleAxes = ({
    chartType,
    series,
    options
}) => {

    // Prevención de corte en el eje Y
    options = avoidYAxisCut({ chartType, series, options })

    return options
}

const assignYLabelsFormatter = ({
    series,
    yValueType
}) => {
    // Creación de contenedor de número mayor
    let maxNumber = 0;

    // Iteración de conjuntos de datos
    series.datasets.forEach(
        (dataset) => {
            // Iteración por cada valor de cada conjunto de datos
            dataset.data.forEach(
                (value) => {
                    // Búsqueda del número mayor en todos los conjuntos de datos de la gráfica
                    if (value > maxNumber ) {
                        maxNumber = value
                    }
                }
            )
        }
    )

    // Asignación de abreviación por millones
    if ( maxNumber >= 1000000 ) {
        return labelsValueFormats[yValueType].toMillions

    // Asignación de abreviación por miles
    } else if ( maxNumber >= 3000 ) {
        return labelsValueFormats[yValueType].toThousands
    
    // Formateo por defecto
    } else {
        return labelsValueFormats[yValueType].raw
    }
}

const formatTooltipLabels = ({
    chartType,
    options,
    yValueType
}) => {

    // Inicialización de objeto
    options.plugins.tooltip.callbacks = {}

    // Formateo de valores de etiquetas si el tipo de gráfica soporta ejes
    if ( CHARTS_WITH_AXES.indexOf(chartType) !== -1 ) {
        // Asignación de formateo
        options.plugins.tooltip.callbacks.label = chartWithAxesFormat(yValueType)
    } else {
        // options.plugins.tooltip.callbacks.label = (context) => {console.log(context)}
    }

    return options
}

const stratificateData = ({
    data,
    categoryName,
    datasetNames,
    labelsName
}) => {

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

const getSingleDataset = ({
    data,
    labelName,
    varValue
}) => {

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

const getLabels = ({
    data,
    labelsName
}) => {

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
    if ( backgroundOpacity !== undefined ) {
        backgroundColors = mapOpacities({ colors: backgroundColors, colorOpacity: backgroundOpacity })
    }
    if ( borderOpacity !== undefined ) {
        borderColors = mapOpacities({ colors: borderColors, colorOpacity: borderOpacity })
    }

    // Mapeo de colores a los conjuntos de datos
    if ( backgroundColors ) {
        series = mapColors({ series, colors: backgroundColors, colorType: CHARTS_SERIES_SETTINGS.BACKGROUND_COLOR })
    }
    if ( borderColors ) {
        series = mapColors({ series, colors: borderColors, colorType: CHARTS_SERIES_SETTINGS.BORDER_COLOR })
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

const mapOpacities = ({
    colors,
    colorOpacity
}) => {

    // Concatenación de la opacidad si el color es un texto
    if (typeof colors === 'string') {
        return (colors + OPACITIES[colorOpacity])
    
    // Concatenación de la opacidad a cada uno de los valores de la matriz
    } else {
        return (
            colors.map(
                (color) => (color + OPACITIES[colorOpacity])
            )
        )
    }
}

const mapColors = ({
    series,
    colors,
    colorType
}) => {

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

const avoidYAxisCut = ({
    chartType,
    series,
    options
}) => {

    const isRadial = RADIAL_CHARTS.indexOf(chartType) !== -1

    // Inicialización del número menor
    let minNumber = 0

    // Iteración por cada conjunto de datos de la gráfica
    series.datasets.forEach(
        // Iteración por cada valor de cada conjunto de datos
        (dataset) => dataset.data.forEach(
            (value) => {
                // Búsqueda del número menor
                if ( value < minNumber ) {
                    minNumber = value
                }
            }
        )
    )

    // Asignación de la etiqueta mínima en el eje Y en 0 si el número menor no es negativo
    if ( !(minNumber < 0) ) {
        if ( isRadial ) {
            options.scales.r.min = 0
        } else {
            options.scales.y.min = 0
        }
    }

    // Retorno del objeto de opciones
    return options
}

export const buildInitSeries = {
    [CHART_TYPES.BUBBLE]: buildBubbleData,

    [CHART_TYPES.SCATTER]: buildScatterData,

    [CHART_TYPES.BAR]: buildGenericData,
    [CHART_TYPES.LINE]: buildGenericData,
    [CHART_TYPES.PIE]: buildGenericData,
    [CHART_TYPES.DOUGHNUT]: buildGenericData,
    [CHART_TYPES.POLARAREA]: buildGenericData,
    [CHART_TYPES.RADAR]: buildGenericData,
}

export const buildInitOptions = {
    [CHART_TYPES.BUBBLE]: buildGenericOptions,
    [CHART_TYPES.SCATTER]: buildGenericOptions,
    [CHART_TYPES.BAR]: buildGenericOptions,
    [CHART_TYPES.LINE]: buildGenericOptions,

    [CHART_TYPES.PIE]: buildRadialChartOptions,
    [CHART_TYPES.DOUGHNUT]: buildRadialChartOptions,
    [CHART_TYPES.POLARAREA]: buildRadialChartOptions,

    [CHART_TYPES.RADAR]: buildRadarChartOptions,
}
