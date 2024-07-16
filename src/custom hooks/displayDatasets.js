import { useState } from "react"

export const useCategoryDataset = (dataContainer) => {
    const datasets = dataContainer.series.datasets

    // Inicialización del objeto interno de mapeo de conjuntos de datos
    const datasetsToDisplay = {}

    // Mapeo de conjuntos de datos
    for (let i = 0; i < datasets.length; i++) {
        datasetsToDisplay[i] = true
    }

    // Inicialización de matriz contenedora de todos los índices de conjuntos de datos
    const datasetsKeys = Object.keys(datasetsToDisplay)

    // Inicialización de estado interno de mapeo de conjuntos de datos
    const [displayedDatasets, setDisplayedDatasets] = useState(dataContainer)
    // Inicialización de estado interno de conjuntos de datos a mostrar
    const [toggleDatasets, setToggleDatasets] = useState(datasetsToDisplay)

    // Inicialización de función de estado personalizada
    const setDatasets = (keyToToggle) => {

        // Copia del estado de mapeo de conjuntos de datos para poder usarlo tras un cambio
        const newToggleDatasets = {...toggleDatasets}
        // Inicialización de nueva matriz de conjuntos de datos a usar en el cambio de estado
        const newDatasets = []

        // Iteración por las llaves del objeto de mapeo de conjuntos de datos para usar sus índices
        datasetsKeys.forEach(
            (datasetKey) => {
                // Se cambia el estado booleano del item si coincide con la llave provista
                if ( datasetKey === keyToToggle ) {
                    newToggleDatasets[datasetKey] = !newToggleDatasets[datasetKey]
                }

                // Se toman los conjuntos de datos donde su índice sea verdadero (Mostrarse)
                if ( newToggleDatasets[datasetKey] ) {
                    newDatasets.push(datasets[datasetKey])
                }
            }
        )

        // Actualización de estado del mapeo de conjuntos de datos
        setToggleDatasets(newToggleDatasets)
        // Actualización de estado de conjuntos de datos mostrados
        const newDataContainer = {
            options: dataContainer.options,
            series: {
                ...dataContainer.series,
                datasets: newDatasets
            }
        }

        setDisplayedDatasets(newDataContainer)
    }

    return [displayedDatasets, setDatasets, datasetsKeys]
}