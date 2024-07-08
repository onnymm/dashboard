import axios from "axios"
import { transformData } from "../utils/utils";

const getBarData = async () => {
    // Se obtiene la información desde el API
    const response = await axios.get("http://192.168.1.89:8000/quotation_amounts")
    
    // Se retorna la información transformada
    console.log(
        transformData(response.data)
    )
}

export default getBarData;