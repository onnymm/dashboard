const createRegExSearch = (search) => {
    // Transformaciones de símbolos
    const multiple = (_, key) => (`[${key}]`)
    const escaped = (symbol) => (`\\${symbol}`)
    const repeated = (symbol) => (`${symbol}{1,}`)
    const indeterminate = (symbol) => (`${symbol}*?`)
    const oneMissed = (symbol) => (`${symbol}.?`)
    // const oneMissed = (symbol) => (symbol)
    const manyMissed = (symbol) => (`${symbol}.*?`)

    // Casos especiales
    const specialCases = {
        "aáäà": [multiple, repeated, oneMissed],
        "eéëè": [multiple, repeated, oneMissed],
        "iíïìy": [multiple, repeated, oneMissed],
        "oóöò": [multiple, repeated, oneMissed],
        "uúüù": [multiple, repeated, oneMissed],
        "(": [escaped, indeterminate, oneMissed],
        ")": [escaped, indeterminate, oneMissed],
        "[": [escaped, indeterminate, oneMissed],
        "]": [escaped, indeterminate, oneMissed],
        "{": [escaped, indeterminate, oneMissed],
        "}": [escaped, indeterminate, oneMissed],
        ".": [escaped, indeterminate, oneMissed],
        "^": [escaped, indeterminate, oneMissed],
        "$": [escaped, indeterminate, oneMissed],
        "\"": [escaped, indeterminate, oneMissed],
        " ": [indeterminate, manyMissed],
    }

    // Casos comunes
    const commonCases = [repeated, oneMissed]

    // Se inicializa la matriz de símbolos RegEx
    const regExWords = []

    // Partición de caracteres para procesar una RegEx limpia
    const chars = []

    // Se itera por cada caracter del texto entrante
    search.toLowerCase().split("").forEach(
        (char) => {
            // Comparación de igualdad con el último caracter en la matriz de caracteres a transformar
            if ( chars[chars.length-1] !== char ) {
                // Si no son el mismo se añade el caracter actual de la iteración
                chars.push(char)
            }
        }
    )

    // Reestructuración de texto entrante
    search = chars.join("")

    // Iteración por palabra
    search.split(" ").forEach(
        (word) => {
            // Inicialización de matriz de caracteres RegEx
            const regExChars = []
            // Iteración por cada uno de los caracteres del texto entrante
            word.split("").forEach(
                (char) => {
                    // Se inicializa el símbolo RegEx a retornar como valor indefinido
                    let regExSymbol
                    // Condición para iteración controlada
                    let found = false

                    // Iteración controlada
                    while (!found) {
                        // Búsqueda en los valores de las llaves del objeto de casos especiales
                        Object.keys(specialCases).every(
                            (specialCase) => {
                                // Búsqueda del caracter en el valor de la llave
                                if ( specialCase.split("").indexOf(char) !== -1 ) {
                                    // En caso de encontrarse el caracter se ejecutan las funciones del valor del objeto de casos especiales
                                    specialCases[specialCase].forEach(
                                        (callback) => {
                                            // Transformación del caracter en símbolo RegEx
                                            char = callback(char, specialCase)
                                        }
                                    )
                                    // Almacenamiento del símbolo RegEx
                                    regExSymbol = char
                                    // Se indica que el caracter fue encontrado para detener el ciclo while
                                    found = true
                                    // Se detiene el ciclo every
                                    return false
                                }
                                // Se no encontrarse se continúa el ciclo every
                                return true
                            }
                        )

                        // Si el símbolo aún no se halla se itera por las funciones de casos comunes
                        if ( !regExSymbol ) {
                            commonCases.forEach(
                                (callback) => {
                                    // Transformación del caracter en símbolo RegEx
                                    regExSymbol = callback(char)
                                }
                            )
                        }
                        // Se indica que el caracter fue encontrado para detener el ciclo while
                        found = true
                    }
                    // Se añade el símbolo RegEx a la matriz de símbolos RegEx
                    regExChars.push(regExSymbol)
                }
            )
            regExWords.push(`(?=.*${regExChars.join("")})`)
            // (?=.*\bapple\b)
        }
    )

    // Se convierte la matriz a string y después a expresión regular y se retorna
    return RegExp( regExWords.join(" *?"), "i" )
}

export const regExSearch = (value, search) => (
    createRegExSearch(search)
    .test(value)
)
