import { CHART_TYPES } from "../constants/charts";
import { PRESET_COLORS, RED_PALETTE } from "../constants/colors";
import { CHARTS_SERIES_SETTINGS, CHARTS_SETTINGS } from "../constants/settings";

export const chartSettings = {
    [CHARTS_SETTINGS.BACKGROUND_COLORS]: RED_PALETTE,
    // Disposición de etiquetas
    [CHARTS_SETTINGS.LABEL_COLUMNS]: 1,
    // Alineación de elementos dentro de las etiquetas
    [CHARTS_SETTINGS.LABELS_LIST]: 'default',
    // Apariencia del indicador de color de etiqueta
    [CHARTS_SETTINGS.LEGEND_BOX]: 'rounded',
    // Relación de aspecto
    [CHARTS_SETTINGS.ASPECT_RATIO]: 1.5,
    // Tamaño mínimo de elementos de burbuja
    [CHARTS_SETTINGS.MIN_BUBBLE_SIZE]: 2,
    // Tamaño máximo de elementos de burbuja
    [CHARTS_SETTINGS.MAX_BUBBLE_SIZE]: 16,
    // Configuración por tipos de gráficas
    [CHART_TYPES.POLARAREA]: {
        [CHARTS_SETTINGS.BACKGROUND_OPACITY]: 75,
        [CHARTS_SETTINGS.BORDER_OPACITY]: 100
    },
    circularCharts: {
        [CHARTS_SETTINGS.BORDER_COLORS]: PRESET_COLORS.LIGHT_MODE
    },
    fillableCharts: {
        [CHARTS_SERIES_SETTINGS.FILL]: 'origin'
    }
}