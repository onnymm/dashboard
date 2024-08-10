import { DOMAINS } from "../constants/backendDomains";
import { CHART_TYPES } from "../constants/charts";
import { PRESET_COLORS, RED_PALETTE } from "../constants/colors";
import { CHARTS_SERIES_SETTINGS, CHARTS_SETTINGS } from "../constants/settings";

export const chartSettings = {
    // Colores de fondo
    [CHARTS_SETTINGS.BACKGROUND_COLORS]: RED_PALETTE,
    // Columnas de etiquetas
    [CHARTS_SETTINGS.LABEL_COLUMNS]: 1,
    // Orientación de elementos dentro de las etiquetas
    [CHARTS_SETTINGS.LABELS_LIST]: 'default',
    // Forma del indicador de etiqueta
    [CHARTS_SETTINGS.LEGEND_BOX]: 'rounded',
    // Tamaño mínimo de elementos de burbuja
    [CHARTS_SETTINGS.MIN_BUBBLE_SIZE]: 2,
    // Tamaño máximo de elementos de burbuja
    [CHARTS_SETTINGS.MAX_BUBBLE_SIZE]: 16,
    // Configuración por tipos de gráficas
    [CHART_TYPES.POLARAREA]: {
        // Opacidad de fondo en gráfica de área polar
        [CHARTS_SETTINGS.BACKGROUND_OPACITY]: 75,
        // Opacidad de borde en gráfica de área polar
        [CHARTS_SETTINGS.BORDER_OPACITY]: 100
    },
    circularCharts: {
        // Colores de borde en gráficas circulares
        [CHARTS_SETTINGS.BORDER_COLORS]: PRESET_COLORS.LIGHT_MODE
    },
    fillableCharts: {
        // Tipo de relleno en gráficas rellenables
        [CHARTS_SERIES_SETTINGS.FILL]: 'origin'
    }
}

// Dominios locales para obtener la información
export const defaultDomain = DOMAINS.LOCAL_DOMAIN