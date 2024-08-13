import { useState } from "react";

const useSortingColumns = (columns) => {
    const initColumnsMap = {}
    const [sortingColumnName, setSortingColumnName] = useState()
    columns.forEach(
        (column) => {
            initColumnsMap[column.name] = {
                isSorting: false,
                ascending: true
            };
        }
    )
    const [sortingColumns, setSortingColumns] = useState(initColumnsMap);
    // Asignación de columna de ordenamiento
    const setSortingColumn = (columnName) => {

        // Definición de si la columna ya está ordenando
        const alreadySorting = sortingColumns[columnName].isSorting;
        // Definición de la dirección de ordenamiento
        const oldAscending = sortingColumns[columnName].ascending;

        // Inicialización del nuevo mapa de columnas
        const columnsMap = {}

        // Generación del mapa de columnas
        columns.forEach(
            (column) => {
                columnsMap[column.name] = {
                    isSorting: false,
                    ascending: true
                };
            }
        )

        // Asignación de la columna de ordenamiento
        columnsMap[columnName].isSorting = true;
        // Asignación de la dirección de ordenamiento en base a si la columna ya estaba ordenando o no
        columnsMap[columnName].ascending = alreadySorting ? !oldAscending: true
        // Asignación de apuntador de columna de ordenamiento
        setSortingColumnName(columnName);

        // Cambio de estado
        setSortingColumns(columnsMap);

    }
    
    // Retorno de estados y función de cambio de estado
    return [sortingColumns, setSortingColumn, sortingColumnName];
}

export default useSortingColumns;