import { CHARTS_SETTINGS } from "../constants/settings";
import { chartSettings } from "../settings/dashboardSettings";
import {
    assignCSSStyles,
    buildInitOptions,
    buildInitSeries,
    formatLabels,
    formatTooltip,
    mapColorsOnSeries,
    scaleAxes
} from "./dataFormatting";

export const buildData = ({
    // Objeto de datos retornado del API
    data,
    // ID del contenedor de etiquetas
    labelsContainerID,
    // Tipo de gráfica
    [CHARTS_SETTINGS.CHART_TYPE]: chartType,
    // Variable de etiquetas de la gráfica de barras
    [CHARTS_SETTINGS.LABELS_NAME]: labelsName,
    // Variable de cada uno de los conjuntos de datos en el objeto
    [CHARTS_SETTINGS.DATASETS_NAMES]: datasetNames,
    // Nombres visibles en la gráfica para cada conjunto de datos
    [CHARTS_SETTINGS.LABELS]: labels,

    // Argumentos opcionales
    // Colores de fondo de los conjuntos de datos
    [CHARTS_SETTINGS.BACKGROUND_COLORS]: backgroundColors = chartSettings[ [CHARTS_SETTINGS.BACKGROUND_COLORS] ],
    // Opacidad de los colores de fondo
    [CHARTS_SETTINGS.BACKGROUND_OPACITY]: backgroundOpacity = chartSettings[ [CHARTS_SETTINGS.BACKGROUND_OPACITY] ],
    // Colores de borde de los conjuntos de datos
    [CHARTS_SETTINGS.BORDER_COLORS]: borderColors = chartSettings[ [CHARTS_SETTINGS.BORDER_COLORS] ],
    // Opacidad de los colores de borde
    [CHARTS_SETTINGS.BORDER_OPACITY]: borderOpacity = chartSettings[ [CHARTS_SETTINGS.BORDER_OPACITY] ],
    // Relación de aspecto de la gráfica
    [CHARTS_SETTINGS.ASPECT_RATIO]: aspectRatio = chartSettings[ [CHARTS_SETTINGS.ASPECT_RATIO] ],
    // Formateo en las etiquetas del eje X
    [CHARTS_SETTINGS.X_AXIS_FORMAT]: xAxisFormat = chartSettings[ [CHARTS_SETTINGS.X_AXIS_FORMAT] ],
    // Formateo en las etiquetas del eje Y
    [CHARTS_SETTINGS.Y_AXIS_FORMAT]: yAxisFormat = chartSettings[ [CHARTS_SETTINGS.Y_AXIS_FORMAT] ],
    // Formateo en las etiquetas del eje Z
    [CHARTS_SETTINGS.Z_AXIS_FORMAT]: zAxisFormat = chartSettings[ [CHARTS_SETTINGS.Z_AXIS_FORMAT] ],
    // Variable de estratificación
    [CHARTS_SETTINGS.CATEGORY_STRATIFICATION_BY]: strat = chartSettings[ [CHARTS_SETTINGS.CATEGORY_STRATIFICATION_BY] ],
    // Estilo de contenedor de etiquetas
    [CHARTS_SETTINGS.LABEL_COLUMNS]: labelsDisplay = chartSettings[ [CHARTS_SETTINGS.LABEL_COLUMNS] ],
    // Estilo de lista de etiquetas
    [CHARTS_SETTINGS.LABELS_LIST]: labelsList = chartSettings[ [CHARTS_SETTINGS.LABELS_LIST] ],
    // Estilo de cajas de color de etiquetas
    [CHARTS_SETTINGS.LEGEND_BOX]: legendBox = chartSettings[ [CHARTS_SETTINGS.LEGEND_BOX] ],
    // Indicador de transposición de ejes en la gráfica
    [CHARTS_SETTINGS.TRANSPOSED]: transposed = chartSettings[ [CHARTS_SETTINGS.TRANSPOSED] ]
}) => {

    // Inicialización del contenedor de datos con formato dinámico
    let series = buildInitSeries[chartType]({
        data,
        [CHARTS_SETTINGS.CATEGORY_STRATIFICATION_BY]: strat,
        [CHARTS_SETTINGS.DATASETS_NAMES]: datasetNames,
        [CHARTS_SETTINGS.LABELS_NAME]: labelsName,
        [CHARTS_SETTINGS.LABELS]: labels,
        [CHARTS_SETTINGS.TRANSPOSED]: transposed,
    });

    // Mapeo de colores y opacidades preestablecidos a los conjuntos de datos
    series = mapColorsOnSeries({
        series,
        [CHARTS_SETTINGS.CHART_TYPE]: chartType,
        [CHARTS_SETTINGS.BACKGROUND_COLORS]: backgroundColors,
        [CHARTS_SETTINGS.BACKGROUND_OPACITY]: backgroundOpacity,
        [CHARTS_SETTINGS.BORDER_COLORS]: borderColors,
        [CHARTS_SETTINGS.BORDER_OPACITY]: borderOpacity
    });

    // Inicialización del contenedor de opciones
    let options = buildInitOptions[chartType]({
        series,
        labelsContainerID,
        [CHARTS_SETTINGS.ASPECT_RATIO]: aspectRatio,
        [CHARTS_SETTINGS.LABEL_COLUMNS]: labelsDisplay,
        [CHARTS_SETTINGS.LABELS_LIST]: labelsList,
        [CHARTS_SETTINGS.LEGEND_BOX]: legendBox,
        [CHARTS_SETTINGS.TRANSPOSED]: transposed,
    });

    // Asignación de nombres de clase a elementos HTML internos de la gráfica
    options = assignCSSStyles({ options });

    // Formateo de etiquetas en la gráfica
    [ series, options ] = formatLabels[chartType]({
        series,
        options,
        [CHARTS_SETTINGS.CHART_TYPE]: chartType,
        [CHARTS_SETTINGS.X_AXIS_FORMAT]: xAxisFormat,
        [CHARTS_SETTINGS.Y_AXIS_FORMAT]: yAxisFormat,
        [CHARTS_SETTINGS.TRANSPOSED]: transposed,
    });

    // Formateo de datos en tooltip
    options = formatTooltip({
        options,
        [CHARTS_SETTINGS.CHART_TYPE]: chartType,
        [CHARTS_SETTINGS.X_AXIS_FORMAT]: xAxisFormat,
        [CHARTS_SETTINGS.Y_AXIS_FORMAT]: yAxisFormat,
        [CHARTS_SETTINGS.Z_AXIS_FORMAT]: zAxisFormat,
    })

    // Formateo de escalas en ejes
    options = scaleAxes({
        [CHARTS_SETTINGS.CHART_TYPE]: chartType,
        series,
        options
    });

    // Retorno del objeto a ingresar al componente de graficación
    return { series, options };
}

export const capitalizeFirstLetter = str => {
	if (str.length === 0) return str
    return str.charAt(0).toUpperCase() + str.slice(1)
}