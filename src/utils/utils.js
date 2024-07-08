export const transformData = (data) => {
    // Se crea el convertidor de Snake Case a Camel Case
    const toCamelCase = (str) => str.replace(/_([a-z])/g, (match, p1) => p1.toUpperCase());

    // Se transforma data de un diccionario a una matriz
    const transformedData = Object.values(data)

    // Se obtienen todas las llaves de la matriz usando el primer objeto como muestra
    const keys = Object.keys(transformedData[0])

    // Se inicializa el objeto a retornar
    const series = {}

    // Se crea el objeto de matrices con las llaves transformadas a Camel Case
    keys.forEach(
        (key) => {
            series[toCamelCase(key)] = transformedData.map(item => item[key])
        }
    )

    // Se retorna el objeto
    return (series)
}