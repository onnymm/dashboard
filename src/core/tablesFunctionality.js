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

export const getSmartPageSelector = (pages, currentPosition) => {
    // Se retorna la matriz original si su tamaño es muy pequeño
    if ( pages.length <= 7 ) return pages;

    // Matriz a retornar
    const pagesToShow = []

    // Validación de si la posición actual es superior o igual a 4
    const isSuperior = pages.slice(0, currentPosition).length >= 4;
    // Validación de si la posición actual es inferior a los 4 últimos índices
    const isInferior = pages.slice(currentPosition + 1, pages.length).length >= 4;

    // Lista truncada en ambos extremos
    if ( isSuperior && isInferior ) {
        pagesToShow.push(0, "<", currentPosition - 1, currentPosition, currentPosition + 1, ">", pages.length -1 );
    // Lista truncada en el extremo superior
    } else if ( isSuperior ) {
        pagesToShow.push(0, "<", pages.length - 5, pages.length - 4, pages.length - 3, pages.length - 2, pages.length -1 );
    // Lista truncada en el extremo inferior
    } else {
        pagesToShow.push(0, 1, 2, 3, 4, ">", pages.length - 1);
    }

    // Retorno de la matriz de selección de páginas
    return pagesToShow;
}
