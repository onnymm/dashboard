import axios from "axios"
import { transformData } from "../utils/utils";

const getBarData = async (stateSetter) => {
    // Se obtiene la información desde el API
    const response = await axios.get("http://192.168.1.89:8000/quotation_amounts")
    
    // Se retorna la información transformada
    stateSetter(
        transformData(response.data)
    )
}

export default getBarData;