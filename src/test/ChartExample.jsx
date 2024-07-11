import { useEffect, useState } from "react";
import { getChartData } from "../api/local";
import PieChart from "../components/charts/PieChart";
import { redPalette } from "../constants/colors";
import { buildData, dataFormatters } from "../utils/utils";

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
                    buildData(
                        {
                            data: loadData,
                            labelsName: "userName",
                            datasetNames: ["amountUntaxed"],
                            labels: ["Cotizaciones"],
                            backgroundColors: redPalette,
                            // backgroundOpacity: 75,
                            // borderColors: redPalette,
                            xLabelsFormatter: dataFormatters.onlyName,
                            yLabelsFormatter: dataFormatters.toMXN,
                            chartType: 'pie'
                        }
                    )
                )
            }
        }, [loadData]
    )

    if (data) {
        console.log(data)
        return (
            <div>
                <PieChart
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