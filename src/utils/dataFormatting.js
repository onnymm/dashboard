export const buildInitSeries = ({
    data,
    strat,
    datasetNames,
    labelsName,
    labels
}) => {
    // Inicialización del contenedor de datos a retornar
    let series = {};
    
    // Se inicializa la matriz de conjuntos de datos
    series.datasets = [];
    
    // Se convierte el objeto de objetos recibido por el API a matriz de objetos
    data = Object.values(data)

    // Inicialización de contenedores de datos y etiquetas
    let datasets
    let renamedLabels

    // Estratificación por variable categórica (Si se requiere)
    if ( strat ) {
        [datasets, renamedLabels] = stratificateData(data, strat, datasetNames, labelsName)
    // Obtención de un sólo conjunto de datos (Flujo por defecto)
    } else {
        datasets = [ getSingleDataset(data, labels[0], datasetNames[0]) ]
        renamedLabels = getLabels(data, labelsName)
    }

    // Se añade(n) el(los) dataset(s) a la matriz de series
    series.datasets = datasets

    // Se asignan los nombres de las etiquetas
    if (labelsName){
        series.labels = renamedLabels;
    }

    // Retorno del contenedor de datos
    return series
}

const stratificateData = (data, categoryName, datasetNames, labelsName) => {
    // Se inicializa la matriz a retornar
    const datasets = []
    // Se inicializa el contenedor de los nombres de grupo en el conjunto de datos
    const groups = []
    // Se inicializa el contenedor de los nombres de etiquetas
    const labels = []

    
    // Se obtienen todos los nombres de grupo del conjunto de datos
    data.forEach(
        (sample) => {
            // Si el nombre no existe en la matriz, se agrega
            if ( groups.indexOf(sample[categoryName]) === -1 ) {
                groups.push(sample[categoryName])
            }
            if ( labels.indexOf(sample[labelsName]) === -1 ) {
                labels.push(sample[labelsName])
            }
        }
    )
    
    // Se realiza la búsqueda y agrupación por todos los nombres de grupo
    groups.forEach(
        // Iteración por nombres de grupo
        (name) => {
            // Se crea un conjunto de datos vacío
            const dataset = {}
            // Se designa el nombre como etiqueta del conjunto de datos
            dataset.label = name
            // Se inicializa el contenedor de valores del conjunto de datos
            dataset.data = []
            
            // Iteración por cada valor del conjunto de datos
            data.forEach(
                (sample) => {
                    // Se agrega el valor del conjunto de datos entrante si pertenece al grupo del nombre
                    if ( sample[categoryName] === name ) {
                        dataset.data.push(sample[datasetNames])
                    }
                }
            )
            
            // Finalizada la iteración por el conjunto de datos entrante, se añade el nuevo conjunto de datos al objeto a retornar
            datasets.push(dataset)
        }
    )

    return [ datasets, labels ]
}

const getSingleDataset = (data, labelName, varValue) => {

    // Se crea un conjunto de datos vacío
    const dataset = {}

    // Se designa el nombre como etiqueta del conjunto de datos
    dataset.label = labelName

    // Se inicializa el contenedor de valores del conjunto de datos
    dataset.data = []

    // Iteración por cada valor del conjunto de datos
    data.forEach(
        (sample) => {
            dataset.data.push(sample[varValue])
        }
    )

    // Retorno del conjunto de datos
    return dataset
}

const getLabels = (data, labelsName) => {
    // Se inicializa el contenedor de los nombres de etiquetas
    const labels = []

    // Se obtienen todas las etiquetas únicas
    data.forEach(
        (sample) => {
            // Si el nombre no existe en la matriz, se agrega
            if ( labels.indexOf(sample[labelsName]) === -1 ) {
                labels.push(sample[labelsName])
            }
        }
    )

    // Retorno de la matriz de etiquetas
    return labels
}