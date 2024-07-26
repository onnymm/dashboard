import { CHART_TYPES } from "../constants/charts"
import { OPACITIES, PRESET_COLORS } from "../constants/colors"

// Definición de los colores a utilizar
const midTransparentWhite = PRESET_COLORS.WHITE + OPACITIES[50] // Blanco con transparencia media
const highTransparentWhite = PRESET_COLORS.WHITE + OPACITIES[10] // Blanco con transparencia alta
const midTransparentBlack = PRESET_COLORS.BLACK + OPACITIES[50] // Negro con transparencia media
const highTransparentBlack = PRESET_COLORS.BLACK + OPACITIES[10] // Negro con transparencia alta

const setCartesianChartColors = ({mode, options}) => {
    if ( mode === 'dark' ) {
        // Asignación de colores a la cuadrícula
        options.scales.x.grid.color = highTransparentWhite
        options.scales.y.grid.color = highTransparentWhite
        // Asignación de colores a las etiquetas
        options.scales.x.ticks.color = midTransparentWhite
        options.scales.y.ticks.color = midTransparentWhite
    } else {
        // Asignación de colores a la cuadrícula
        options.scales.x.grid.color = highTransparentBlack
        options.scales.y.grid.color = highTransparentBlack
        // Asignación de colores a las etiquetas
        options.scales.x.ticks.color = midTransparentBlack
        options.scales.y.ticks.color = midTransparentBlack
    }

    // Retorno del nuevo objeto de opciones
    return options
}

const setRadialChartColors = ({mode, options}) => {
    if ( mode === 'dark' ) {
        // Asignación de colores a las etiquetas centrales
        options.scales.r.ticks.color = midTransparentWhite
        // Asignación de colores a las líneas
        options.scales.r.grid.color = highTransparentWhite
        // Asignación de colores a las líneas de ángulo
        options.scales.r.angleLines.color = highTransparentWhite
        // Asignación de colores a las etiquetas radiales
        options.scales.r.pointLabels.color = midTransparentWhite
    } else {
        // Asignación de colores a las etiquetas centrales
        options.scales.r.ticks.color = midTransparentBlack
        // Asignación de colores a las líneas
        options.scales.r.grid.color = highTransparentBlack
        // Asignación de colores a las líneas de ángulo
        options.scales.r.angleLines.color = highTransparentBlack
        // Asignación de colores a las etiquetas radiales
        options.scales.r.pointLabels.color = midTransparentBlack
    }

    // Retorno del nuevo objeto de opciones 
    return options
}

// No hace nada
const noHaceNada = ({options}) => {
    return options
}

// Funciones de asignación de colores en modo oscuro y modo claro
const setChartsColors = {
    [CHART_TYPES.BUBBLE]: setCartesianChartColors,
    [CHART_TYPES.SCATTER]: setCartesianChartColors,
    [CHART_TYPES.BAR]: setCartesianChartColors,
    [CHART_TYPES.LINE]: setCartesianChartColors,

    [CHART_TYPES.PIE]: noHaceNada,
    [CHART_TYPES.DOUGHNUT]: noHaceNada,
    [CHART_TYPES.POLARAREA]: noHaceNada,

    [CHART_TYPES.RADAR]: setRadialChartColors,
}

// Plug-in interruptor de modo oscuro
const darkMode = {
    id: 'darkMode',
    afterUpdate(chart) {

        // Extracción del objeto de opciones
        const chartOptions = chart.config._config.options
        // Extracción del tipo de gráfica
        const chartType = chart.config._config.type

        // Se toma el documento HTML para observarlo
        const htmlElement = document.documentElement;

        // Se inicia un observador de mutaciones del elemento HTML
        const observer = new MutationObserver(
            // Lista de cambios
            (mutationList) => {
                // Iteración por cada una de las mutaciones 
                for (let mutation of mutationList) {
                    // Búsqueda de la mutación objetivo, que sea de tipo atributos y que sea de nombre 'class'
                    if ( mutation.type === 'attributes' && mutation.attributeName === 'class' ) {
                        // Ejecución si el modo oscuro está activado
                        if ( htmlElement.classList.contains('dark') ) {
                            // Ejecución de la función y asignación al objeto de opciones de la gráfica
                            chart.config._config.options = setChartsColors[chartType]({mode: 'dark', options: chartOptions})
                            // Actualización de la gráfica
                            chart.update();
                            // Desconexión del observador
                            observer.disconnect();
                            // Ejecución si el modo oscuro está desactivado
                        } else {
                            // Ejecución de la función y asignación al objeto de opciones de la gráfica
                            chart.config._config.options = setChartsColors[chartType]({mode: 'light', options: chartOptions})
                            // Actualización de la gráfica
                            chart.update();
                            // Desconexión del observador
                            observer.disconnect();
                        }
                    }
                }
            }
        )

        // Se inicia la observación por atributos al elemento HTML
        observer.observe(htmlElement, {attributes: true})

    }
};

// Exportación del plug-in
export default darkMode;