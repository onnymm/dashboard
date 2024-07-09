import { dataFormatters } from "./utils"

export const toArrayObject = (data) => {
    // Se transforma data de un diccionario a una matriz
    const transformedData = Object.values(data)

    // Se obtienen todas las llaves de la matriz usando el primer objeto como muestra
    const keys = Object.keys(transformedData[0])

    // Se inicializa el objeto a retornar
    const datasets = {}

    // Se crea el objeto de matrices con las llaves transformadas a Camel Case
    keys.forEach(
        (key) => {
            datasets[dataFormatters.snakeToCamel(key)] = transformedData.map(item => item[key])
        }
    )

    // Retorno del objeto
    return datasets
}