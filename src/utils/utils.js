import { CHARTS_SETTINGS } from "../constants/settings";
import { chartSettings } from "../settings/dashboardSettings";
import { buildInitOptions, buildInitSeries, formatLabels, formatTooltip, mapColorsOnSeries, scaleAxes } from "./dataFormatting";

export const buildData = ({
    data, // Objeto de datos retornado del API
    labelsContainerID, // ID del contenedor de etiquetas
    [CHARTS_SETTINGS.CHART_TYPE]: chartType, // Tipo de gráfica
    [CHARTS_SETTINGS.LABELS_NAME]: labelsName, // Variable de etiquetas de la gráfica de barras
    [CHARTS_SETTINGS.DATASETS_NAMES]: datasetNames, // Variable de cada uno de los conjuntos de datos en el objeto
    [CHARTS_SETTINGS.LABELS]: labels, // Nombres visibles en la gráfica para cada conjunto de datos

    // Argumentos opcionales
    [CHARTS_SETTINGS.BACKGROUND_COLORS]: backgroundColors = chartSettings.backgroundColors, // Colores de fondo de los conjuntos de datos
    [CHARTS_SETTINGS.BACKGROUND_OPACITY]: backgroundOpacity = undefined, // Opacidad de los colores de fondo
    [CHARTS_SETTINGS.BORDER_COLORS]: borderColors = undefined, // Colores de borde de los conjuntos de datos
    [CHARTS_SETTINGS.BORDER_OPACITY]: borderOpacity = undefined, // Opacidad de los colores de borde
    [CHARTS_SETTINGS.ASPECT_RATIO]: aspectRatio = undefined, // Relación de aspecto de la gráfica
    [CHARTS_SETTINGS.X_AXIS_FORMAT]: xAxisFormat = undefined, // Formateo en las etiquetas del eje X
    [CHARTS_SETTINGS.Y_AXIS_FORMAT]: yAxisFormat = undefined, // Formateo en las etiquetas del eje Y
    [CHARTS_SETTINGS.CATEGORY_STRATIFICATION_BY]: strat = undefined, // Variable de estratificación
    [CHARTS_SETTINGS.LABEL_COLUMNS]: labelsDisplay = undefined, // Estilo de contenedor de etiquetas
    [CHARTS_SETTINGS.LABELS_LIST]: labelsList = undefined, // Estilo de lista de etiquetas
    [CHARTS_SETTINGS.LEGEND_BOX]: legendBox = undefined, // Estilo de cajas de color de etiquetas
    [CHARTS_SETTINGS.TRANSPOSED]: transposed = false
}) => {

    // Inicialización del contenedor de datos con formato dinámico
    let series = buildInitSeries[chartType]({ data, strat, datasetNames, labelsName, labels, transposed });

    // Mapeo de colores y opacidades preestablecidos a los conjuntos de datos
    series = mapColorsOnSeries({ series, chartType, backgroundColors, backgroundOpacity, borderColors, borderOpacity });

    // Inicialización del contenedor de opciones
    let options = buildInitOptions[chartType]({series, chartType, labelsContainerID, aspectRatio, labelsDisplay, labelsList, legendBox, transposed });

    // Formateo de etiquetas en la gráfica
    [ series, options ] = formatLabels[chartType]({ chartType, series, options, xAxisFormat, yAxisFormat, transposed });
    options = formatTooltip({ chartType, options, xAxisFormat, yAxisFormat })

    // Formateo de escalas en ejes
    options = scaleAxes({ chartType, series, options });

    console.log(options)

    // Retorno del objeto a ingresar al componente de graficación
    return { series, options };
}

export const capitalizeFirstLetter = str => {
	if (str.length === 0) return str
    return str.charAt(0).toUpperCase() + str.slice(1)
}