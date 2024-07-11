import { opacity } from "../constants/colors";
import { toArrayObject } from "./dataFormatting";

export const buildData = ({
    data, // Objeto de datos retornado del API
    chartType, // Tipo de gráfica
    labelsName, // Variable de etiquetas de la gráfica de barras
    datasetNames, // Variable de cada uno de los conjuntos de datos en el objeto
    labels, // Nombres visibles en la gráfica para cada conjunto de datos
    backgroundColors, // Colores de fondo de los conjuntos de datos
    backgroundOpacity = undefined, // Opacidad de los colores de fondo
    borderColors, // Colores de borde de los conjuntos de datos
    borderOpacity = undefined, // Opacidad de los colores de borde 
    // Argumentos opcionales
    xLabelsFormatter = undefined, // Formateo en las etiquetas del eje X
    yLabelsFormatter = undefined, // Formateo los valores del eje Y
}) => {

    // Transformación del objeto de datos
    const datasets = toArrayObject(data)

    // Inicialización del contenedor de datos a retornar
    let series = {};
    // Inicialización del contenedor de opciones
    const options = _optionsBuilder(chartType);

    // Se asignan los nombres de las etiquetas
    if (labelsName){
        series.labels = datasets[labelsName];
    }

    // Se inicializa la matriz de conjuntos de datos
    series.datasets = [];

    // Iteración por cada uno de los conjuntos de datos
    for (let i = 0; i < datasetNames.length; i++) {
        // Se crea cada uno de los objetos
        series.datasets[i] = {
            // Nombre visible del conjunto de datos
            label: labels[i],
            // Variable contenedora del conjunto de datos
            data: datasets[datasetNames[i]],
        };
    }

    // Mapeo de opacidad a los colores de fondo
    if (backgroundOpacity) {
        backgroundColors = _mapOpacities(backgroundColors, backgroundOpacity)
    }
    if (borderOpacity) {
        borderColors = _mapOpacities(borderColors, borderOpacity)
    }

    // Mapeo de colores a los conjuntos de datos
    if (backgroundColors) {
        series = _mapColors(series, backgroundColors, 'backgroundColor')
    }
    if (borderColors) {
        series = _mapColors(series, borderColors, 'borderColor')
    }

    // Configuración con argumentos opcionales

    // Formateo de etiquetas en el eje X
    if (xLabelsFormatter) {
        series.labels = series.labels.map((value) => xLabelsFormatter(value))
    }
    // Formateo de etiquetas en el eje Y
    if (yLabelsFormatter) {
        options.scales.y.ticks.callback = yLabelsFormatter
    }

    // Retorno del objeto a ingresar al componente de graficación
    return {options, series}
};

const _optionsBuilder = (chartType) => {
    const options = {}

    options.scales = {}
    options.scales.x = {}
    options.scales.y = {}
    options.scales.x.ticks = {}
    options.scales.y.ticks = {}

    if (chartType === 'pie' || chartType === 'doughnut') {
        options.scales.x.display = false
        options.scales.y.display = false
    }

    return options
}

export const dataFormatters = {
    // Mostrar sólo el primer nombre en un String antes del espacio
    onlyName: (text) => (text.slice(0, text.indexOf(" "))),
    // Números a moneda nacional
    toMXN: (num) => (num.toLocaleString('es-MX', {style: 'currency', currency: 'MXN'})),
    // Nombres de variable de Snake Case a Camel Case
    snakeToCamel: (str) => str.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase())
}

const _mapOpacities = (backgroundColors, colorOpacity) => {
    // Concatenación de la opacidad si el color es un texto
    if (typeof backgroundColors === 'string') {
        return (backgroundColors + opacity[colorOpacity])
    
    // Concatenación de la opacidad a cada uno de los valores de la matriz
    } else {
        return (backgroundColors.map(bgColor => bgColor + opacity[colorOpacity]))
    }
}

const _mapColors = (series, backgroundColors, colorType) => {
    if (series.datasets.length === 1) {
        series.datasets[0][colorType] = backgroundColors

    // Mapeo de paleta de colores a varios conjuntos de datos
    } else if (backgroundColors.length > 1) {
        for (let i = 0; i < series.datasets.length; i++) {
            series.datasets[i][colorType] = backgroundColors[i]
        }

    // Mapeo de color a varios conjuntos de datos
    } else {
        for (let i = 0; i < series.datasets.length; i++) {
            series.datasets[i][colorType] = backgroundColors
        }
    }

    // Retorno de los datos con colores mapeados
    return series;
}
