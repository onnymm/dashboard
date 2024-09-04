export const CHARTS_SETTINGS = {
    // Endpoint de URL de donde se solicitará la información
    ENDPOINT: 'endpoint',
    // Tipo de gráfica
    CHART_TYPE: 'chartType',
    // Nombre de la gráfica
    NAME: 'name',
    // Nombre del grupo de etiquetas
    LABELS_NAME: "labelsName",
    // Nombres de las variables contenedoras de los conjuntos de datos
    DATASETS_NAMES: "datasetNames",
    // Variable contenedora de las etiquetas
    LABELS: "labels",
    // Colores de fondo
    BACKGROUND_COLORS: "backgroundColors",
    // Opacidad de colores de fondo
    BACKGROUND_OPACITY: "backgroundOpacity",
    // Colores de borde
    BORDER_COLORS: "borderColors",
    // Opacidad de colores de borde
    BORDER_OPACITY: "borderOpacity",
    // Formateo de etiquetas en el eje X
    X_AXIS_FORMAT: "xAxisFormat",
    // Tipo de valor en el eje Y
    Y_AXIS_FORMAT: 'yAxisFormat',
    // Tipo de valor en el eje Z
    Z_AXIS_FORMAT: 'zAxisFormat',
    // Variable categórica de estratificación de un conjunto de datos en varios conjuntos de datos
    CATEGORY_STRATIFICATION_BY: "strat",
    // Orientación y alineación de las etiquetas
    LABEL_COLUMNS: "labelsDisplay",
    // Orientación y alineación de cada contenedor de etiqueta
    LABELS_LIST: "labelsList",
    // Apariencia de la caja de la etiqueta
    LEGEND_BOX: "legendBox",
    // Tamaño mínimo de elementos de burbuja
    MIN_BUBBLE_SIZE: 'minBubbleSize',
    // Tamaño máximo de elementos de burbuja
    MAX_BUBBLE_SIZE: 'maxBubbleSize',
    // Indicador de transposición de gráfica
    TRANSPOSED: 'transposed'
}

export const CHARTS_SERIES_SETTINGS = {
    // Color de fondo
    BACKGROUND_COLOR: "backgroundColor",
    // Color de borde
    BORDER_COLOR: "borderColor",
    // Color de relleno
    FILL: 'fill',
}

export const LABELS_FORMATS_SETTINGS = {
    // Tipo numérico
    NUMERIC: 'numeric',
    // Tipo moneda
    MONETARY: 'monetary',
    // Sólo el primer nombre antes de un espacio
    ONLY_NAME: 'only name'
}

export const CHARTS_SETTINGS_OPTIONS = {
    // Orientación y alineación de las etiquetas
    [CHARTS_SETTINGS.LABEL_COLUMNS]: {
        1: {
            display: 'flex',
            flexDirection: 'column'
        },
        2: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
        },
        3: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
        },
        4: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
        },
        6: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
        },
    },
    // Orientación y alineación de cada contenedor de etiqueta
    [CHARTS_SETTINGS.LABELS_LIST]: {
        default: {
            alignItems: 'center',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'row',
        }
    },
    // Apariencia de la caja de la etiqueta
    [CHARTS_SETTINGS.LEGEND_BOX]: {
        circle: {
            borderWidth: '0px',
            borderRadius: '50%',
            display: 'inline-block',
            flexShrink: 0,
            height: '1rem',
            width: '1rem',
        },
        rounded: {
            borderWidth: '0px',
            borderRadius: '25%',
            display: 'inline-block',
            flexShrink: 0,
            height: '1rem',
            width: '1rem',
        },
        square: {
            borderWidth: '0px',
            display: 'inline-block',
            flexShrink: 0,
            height: '1rem',
            width: '1rem',
        }
    }
}