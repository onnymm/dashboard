import { CHART_TYPES } from "../constants/charts";
import { PRESET_COLORS } from "../constants/colors";
import { CHARTS_SERIES_SETTINGS, CHARTS_SETTINGS } from "../constants/settings";

export const chartSettings = {
    // Disposición de etiquetas
    labelsDisplay: 'list',
    // Alineación de elementos dentro de las etiquetas
    labelsList: 'default',
    // Apariencia del indicador de color de etiqueta
    legendBox: 'rounded',
    // Relación de aspecto
    aspectRatio: 1.5,
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