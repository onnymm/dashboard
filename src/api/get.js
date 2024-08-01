import axios from "axios"
import { defaultDomain } from "../settings/dashboardSettings"

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