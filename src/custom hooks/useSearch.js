import { useEffect, useState } from "react";

/**
 *  ## Custom Hook useSearch
 *  Este Custom Hook recibe un alcance de búsqueda y retorna un estado de búsqueda
 *  para ser usado para solicitud de datos en el servidor Backend y una función de
 *  cambio de estado de texto de búsqueda para utilizarse en el campo de búsqueda
 *  provisto al componente en el que se usará este Custom Hook
 * 
 *  Uso:
 *  ````js
 *  searchScope = {
 *      field_1: "re",
 *      field_2: "contains",
 *      field_3: "exact"
 *  }
 *  
 *  const { setSearchText, apiSearch } = useSearch(searchScope)
 *  ````
 *  
 *  El retorno de este Custom Hook es un objeto contenedor de un estado de React y una
 *  función de cambio de estado:
 *  - {@link useSearch~apiSearch}: Estado de búsqueda para utilizarse en solicitud de datos al Backend.
 *  - {@link useSearch~setSearchText}: Estado de valor de texto de búsqueda en el campo de búsqueda provisto
 *  al componente en donde se utiliza este Custom Hook.
 * 
 * @param {object} searchScope 
 * @returns 
 */
const useSearch = (
    searchScope
) => {

    // Inicialización de valor de texto de búsqueda
    const [searchText, setSearchText] = useState("");
    // Inicialización de objeto de parámetros de búsqueda para el backend
    const [apiSearch, setApiSearch] = useState();

    // Cambio de estado search por cada vez que el texto de búsqueda cambie
    useEffect(
        () => {
            // Inicialización de la estructura de datos con matriz vacía
            let searchStructure = [];

            // Si el texto de búsqueda no está vacío y se proporcionó un alcance de búsqueda
            if ( searchText !== "" && searchScope ) {
                
                // Se crea un objeto de búsqueda por cada campo y su tipo del alcance de búsqueda
                Object.keys(searchScope).forEach(
                    (key) => {
                        searchStructure.push(
                            {
                                "field": key,
                                "search": searchText,
                                "type": searchScope[key]
                            }
                        )
                    }
                );

                // Se establece el valor de la estructura de búsqueda como estado de búsqueda para el backend
                setApiSearch(searchStructure);

            // De no haber texto de búsqueda o alcance de búsqueda se establece el estado de búsqueda a indefinido
            } else {
                setApiSearch();
            }

        }, [searchText, searchScope]
    );

    return { searchText, setSearchText, apiSearch };
}

export default useSearch;
