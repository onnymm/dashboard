import { toArrayObject } from "./dataFormatting";

export const buildBarData = (
    data, // Objeto de datos retornado del API
    labelsName, // Variable de etiquetas de la gráfica de barras
    datasetNames, // Variable de cada uno de los conjuntos de datos en el objeto
    labels, // Nombres visibles en la gráfica para cada conjunto de datos
    backgroundColors, // Colores de los conjuntos de datos
    // Argumentos opcionales
    xLabelsFormatter = undefined, // Formateo en las etiquetas del eje X
    yLabelsFormatter = undefined, // Formateo los valores del eje Y
) => {
    const datasets = toArrayObject(data)

    // Inicialización del contenedor de datos
    const series = {};
    // Inicialización del contenedor de opciones
    const options = optionsBuilder();
    // Se asignan los nombres de las etiquetas
    series.labels = datasets[labelsName];
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
            // Color del conjunto de datos
            backgroundColor: backgroundColors[i]
        };
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

export const dataFormatters = {
    // Mostrar sólo el primer nombre en un String antes del espacio
    onlyName: (text) => (text.slice(0, text.indexOf(" "))),
    // Números a moneda nacional
    toMXN: (num) => (num.toLocaleString('es-MX', {style: 'currency', currency: 'MXN'})),
    // Nombres de variable de Snake Case a Camel Case
    snakeToCamel: (str) => str.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase())
}

const optionsBuilder = () => {
    const options = {}

    options.scales = {}
    options.scales.x = {}
    options.scales.y = {}
    options.scales.x.ticks = {}
    options.scales.y.ticks = {}

    return options
}