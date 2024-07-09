import { useEffect, useState } from "react";
import { getChartData } from "../api/local";
import BarChart from "../components/charts/BarChart";
import { opacity, saturedRed } from "../constants/colors";
import { buildBarData, dataFormatters } from "../utils/utils";

const ChartExample = () => {
    const [loadData, setLoadData] = useState();
    const [data, setData] = useState();

    useEffect(
        () => {
            getChartData(setLoadData, "quotation_amounts")
        }, []
    )

    useEffect(
        () => {
            if (loadData) {
                setData(
                    buildBarData(
                        loadData,
                        "userName",
                        ["amountUntaxed"],
                        ["Cotizaciones"],
                        [`${saturedRed}${opacity[75]}`],
                        dataFormatters.onlyName,
                        dataFormatters.toMXN
                    )
                )
            }
        }, [loadData]
    )

    if (data) {
        return (
            <div>
                <BarChart
                    dataContainer={data}
                />
            </div>
        )
    } else {
        return (
            <div>
                Cargando...
            </div>
        )
    }
}

export default ChartExample;