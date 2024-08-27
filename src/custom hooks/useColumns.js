import { useState } from "react"

export const useColumns = (columnsArray, columnsToRender) => {
    // Inicialización de columnas para contenido sin formateo
    let columns = []

    // Iteración por todas las columnas entrantes
    columnsArray.forEach(
        (item) => {
            columns.push(
                {
                    name: item.name,
                    displayName: item.field_description,
                }
            )
        }
    )

    // Inicialización de referencia de índice para asignación controlada
    let index = 0

    const newColumns = Object.keys(columnsToRender).map(
        (key) => {
            // Búsqueda por columnas con contenido sin formato
            if ( columnsToRender[key] === 'data' ) {
                const column = columns.find( (column) => (column.name === key) )
                return column
            // Búsqueda por columnas que invocan componentes
            } else {
                const column = columnsToRender[key]
                // Se agrega un índice a la columna si puede ocultarse y mostrarse
                if ( column.visible !== undefined ) {
                    column.index = index
                    // En caso de agregarse un índice, éste se incrementa
                    index++
                }
                return column
            }
        }
    )

    // Estado para columnas activas
    const [activeColumns, setActiveColumns] = useState(newColumns)

    // Función para asignación de estado de columnas activas
    const toggleColumn = (toggleIndex) => {
        // Destructuración del estado a una variable
        let columnsMap = [...activeColumns]
        // Cambio de valor de visibilidad a la columna del índice entrante
        columnsMap.forEach(
            (column) => {
                if ( column.index === toggleIndex ) {
                    column.visible = !column.visible
                }
            }
        )
        // Asignación de estado con el mapa de columnas actualizado
        setActiveColumns(columnsMap)
    }

    // Inicialización de matriz de columna disponibles
    const availableColumns = []

    // Iteración por todas las columnas del estado
    activeColumns.forEach(
        (option) => {
            // Se agregan sólo las columnas con el valor de visibilidad disponible
            if ( option.visible !== undefined ) {
                availableColumns.push(option)
            }
        }
    )

    // Retorno de las columnas disponibles, las columnas activas y el estado de cambio de columna activa
    return { availableColumns, activeColumns, toggleColumn }
}
