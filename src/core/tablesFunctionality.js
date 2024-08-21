export const roundTableHeader = (item, obj, key, size) => {
    // Validación si es el primer elemento
    const isFirstItem = obj[0][key] === item[key]
    // Validación si es el último elemento
    const isLastItem = obj[obj.length - 1][key] === item[key]

    // Retorno del nombre de clase computado en base al índice del elemento
    if ( isFirstItem ) return (`rounded-l-${size}`);
    if ( isLastItem ) return (`rounded-r-${size}`);
    // Retorno de nombre vacío para elementos intermedios
    return "";
}

export const sortTableData = (data, sortingColumns, sortingColumnName, tableID) => {
    // Si no existe columna de ordenamiento no se manipula la colección de datos
    if ( !sortingColumnName ) return data;

    // Mapeo de dirección de ordenamiento
    const sortDirection = {}
    sortDirection[-1] = sortingColumns[sortingColumnName].ascending ? -1 : 1
    sortDirection[1] = sortingColumns[sortingColumnName].ascending ? 1 : -1

    // Ordenamiento de los datos
    data.sort(
        (a, b) => {
            // Ordenamiento de cadenas de texto convirtiéndolas a minúscula
            if ( typeof a[sortingColumnName] === 'string') {
                if ( a[sortingColumnName].toLowerCase() < b[sortingColumnName].toLowerCase() ) return sortDirection[-1];
                if ( a[sortingColumnName].toLowerCase() > b[sortingColumnName].toLowerCase() ) return sortDirection[1];
            }
            // Ordenamiento de otros tipos de dato
            if ( a[sortingColumnName] < b[sortingColumnName] ) return sortDirection[-1];
            if ( a[sortingColumnName] > b[sortingColumnName] ) return sortDirection[1];
            // Valor por defecto en ordenamiento
            return 0;
        }
    )

    // Se establece el deslizamiento a 0 en la tabla
    const tableElement = document.getElementById(tableID);
    tableElement.scrollTo(0, 0);
    
    // Retorno de la colección de datos ordenada
    return data;
}

export const paginateData = (data, itemsPerPage) => {
    // Cálculo de páginas de la información
    const pagesQty = Math.trunc(data.length / itemsPerPage) + (data % itemsPerPage === 0 ? 0 : 1)

    // Páginas de datos
    const paginatedData = []
    
    for ( let i = 0; i < pagesQty; i++ ) {

        // Espacio para la página
        const page = []

        // Inicio de índice de paginación
        const indexStart = paginatedData.length * itemsPerPage;
        // Fin de índice de paginación
        const indexEnd = ((paginatedData.length + 1) * itemsPerPage)

        for ( let j = indexStart; j < indexEnd && j < data.length; j++ ) {
            // Adición de objeto a la página actual
            page.push(data[j])
        }

        // Adición de la página al contenedor de páginas
        paginatedData.push(page)
    }

    return paginatedData;
}
