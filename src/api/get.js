import axios from "axios"
import { defaultDomain } from "../settings/dashboardSettings"
import { buildGet } from "./buildAPIrequests"
import { domains } from "../settings/backendDomains"

export const getChartData = async (
    stateSetter, // Función useState para cambio de estado
    endpoint, // Endpoint del cual se obtendrán los datos
    domain, // Dominio específico en caso de usar uno diferente al default
) => {

    // Uso de dominio por defecto en caso de no haber sido provisto
    if (!domain) {
        domain = defaultDomain
    }

    // Se obtiene la información desde el API
    const response = await axios.get(`${domain}${endpoint}`)
    // Se retorna la información transformada
    stateSetter(response.data)
}

export const getTableData = buildGet(
    {
        domain: domains.localdomain,
        name: "list_data",
        params: {
            "model": "string",
            "search_criteria": "pyExp",
            "fields": "array",
            "page": "number",
            "items_per_page": "number",
            "sortby": "string",
            "ascending": "boolean",
            "search": "objectList",
        }
    }
)

// Solicitud GET de prueba
export const comisiones = buildGet(
    {
        domain: domains.localdomain,
        name: "comisiones",
        params: {
            "page": "number",
            "items_per_page": "number",
            "search_criteria": "pyExp",
            "sortby": "string",
            "ascending": "boolean",
            "search": "objectList",
        }
    }
)

// Métodos GET para pruebas
export const getUsers = async (stateSetter) => {
    // Se obtiene la información desde el API
    const response = await axios.get(`${defaultDomain}fields`)
    // Se retorna la información transformada
    stateSetter(response.data)
}
export const getSaleOrders = async (stateSetter) => {
    // Se obtiene la información desde el API
    const response = await axios.get(`${defaultDomain}sale_orders`)
    // Se retorna la información transformada
    stateSetter(response.data)
}
export const getProductsStock = async (stateSetter) => {
    // Se obtiene la información desde el API
    const response = await axios.get(`${defaultDomain}products_stock`)
    // Se retorna la información transformada
    stateSetter(response.data)
}
export const getStats = async (stateSetter) => {
    const response = await axios.get(`${defaultDomain}get_stats`)
    stateSetter(response.data)
}
