import axios from "axios"
import { localDomain } from "../constants/backendDomains"

export const getChartData = async (
    stateSetter, // Función useState para cambio de estado
    endpoint, // Endpoint del cual se obtendrán los datos
) => {
    // Se obtiene la información desde el API
    const response = await axios.get(`${localDomain}${endpoint}`)
    // Se retorna la información transformada
    stateSetter(response.data)
}