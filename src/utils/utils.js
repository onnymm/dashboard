import { CHARTS_SETTINGS } from "../constants/settings";
import { buildInitSeries, buildOptions, formatLabels, mapColorsOnSeries, scaleAxes } from "./dataFormatting";

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
    [CHARTS_SETTINGS.ASPECT_RATIO]: aspectRatio = undefined, // Formateo en las etiquetas del eje X
    [CHARTS_SETTINGS.Y_VALUE_TYPE]: yValueType,
    [CHARTS_SETTINGS.X_AXIS_FORMAT]: xLabelsFormatter = undefined, // Formateo en las etiquetas del eje X
    [CHARTS_SETTINGS.Y_AXIS_FORMAT]: yLabelsFormatter = undefined, // Formateo los valores del eje Y,
    [CHARTS_SETTINGS.CATEGORY_STRATIFICATION_BY]: strat = undefined, // Variable de estratificación
    [CHARTS_SETTINGS.LABELS_DISPLAY]: labelsDisplay, // Estilo de contenedor de etiquetas
    [CHARTS_SETTINGS.LABELS_LIST]: labelsList, // Estilo de lista de etiquetas
    [CHARTS_SETTINGS.LEGEND_BOX]: legendBox, // Estilo de cajas de color de etiquetas
}) => {

    // Inicialización del contenedor de datos con formato dinámico
    let series = buildInitSeries({ data, strat, datasetNames, labelsName, labels })

    // Mapeo de colores y opacidades preestablecidos a los conjuntos de datos
    series = mapColorsOnSeries({ series, chartType, backgroundColors, backgroundOpacity, borderColors, borderOpacity })

    // Inicialización del contenedor de opciones
    let options = buildOptions({ chartType, labelsContainerID, aspectRatio, labelsDisplay, labelsList, legendBox });
    
    // Formateo de etiquetas en la gráfica
    [ series, options ] = formatLabels({ chartType, series, options, xLabelsFormatter, yLabelsFormatter, yValueType })
    
    // Formateo de escalas en ejes
    options = scaleAxes({ series, options });

    // Retorno del objeto a ingresar al componente de graficación
    return { series, options }
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

export const valueTypesFormats = {
    monetary: {
        raw: (num) => (num.toLocaleString('es-MX', {style: 'currency', currency: 'MXN'})),
        toThousands: (num) => (`$${num / 1000} K`),
        toMillions: (num) => (`$${num / 1000000} M`),
    },
    numeric: {
        raw: (num) => (num),
        toThousands: (num) => (`${num / 1000} K`),
        toMillions: (num) => (`${num / 1000000} M`),
    }
}