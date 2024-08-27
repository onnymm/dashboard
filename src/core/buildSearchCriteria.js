import { regExSearch } from "./regExSearch"

export const buildSearchCriteria = (e, searchScope) => {

    // Tipos de búsqueda disponibles
    const searchType = {
        // Búsqueda por texto exacto
        exact: (key) => (item) => item[key] === e.target.value,
        // Búsqueda por texto sin distinguir mayúsculas y minúsculas
        text: (key) => (item) => item[key].toLowerCase().includes( e.target.value.toLowerCase() ),
        // Búsqueda por expresión regular generada
        regex: (key) => (item) => regExSearch(item[key], e.target.value),
    }

    // Inicialización de matriz de funciones
    const criteriaCallbacks = []

    // Generación de funciones
    Object.keys(searchScope).forEach(
        (column) => {
            // Tipo de función a generar
            const type = searchScope[column]
            // Función generada
            const callback = searchType[type](column)
            // Adición a matriz de funciones para búsqueda en dominio
            criteriaCallbacks.push(callback)
        }
    )

    // Función de evaluación de registro
    const criteria = (item) => {
        // Inicialización de variable en falso
        let evaluation = false
        // Unión de evaluaciones con cada función de la matriz de criterios
        criteriaCallbacks.forEach(
            (callback) => {
                evaluation = evaluation || callback(item)
            }
        )
        // Retorno de la unión de evaluaciones
        return evaluation
    }

    return criteria
}