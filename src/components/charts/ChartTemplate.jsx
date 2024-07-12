import { useEffect, useState } from "react";
import { getChartData } from "../../api/get";
import { buildData } from "../../utils/utils";
import BarChart from "./BarChart";
import DoughtnutChart from "./DoughtnutChart";
import LineChart from "./LineChart";

const ChartTemplate = ({ chartData }) => {
    // Estado para carga inicial de los datos
    const [loadData, setLoadData] = useState();
    // Estado para transformación de datos
    const [data, setData] = useState();

    // Carga inicial de los datos
    useEffect(
        () => {
            getChartData(setLoadData, chartData.endpoint)
        }, [chartData.endpoint]
    )

    // Transformación de los datos
    useEffect(
        () => {
            if (loadData) {
                setData(
                    buildData(
                        {
                            data: loadData,
                            ...chartData
                        }
                    )
                )
            }
        }, [loadData, chartData]
    )

    // Renderización de la gráfica
    const RenderedChart = ({dataContainer}) => {
        switch (chartData.chartType) {
            // Gr+afica de barras
            case "bar":
                return (
                    <BarChart dataContainer={dataContainer} />
                )
            // Gráfica de líneas
            case "line":
                return (
                    <LineChart dataContainer={dataContainer} />
                )
            // Gráfica de pastel
            case "doughnut":
                return (
                    <DoughtnutChart dataContainer={dataContainer} />
                )
            // Caso default en caso de no haber sido hallado el tipo provisto
            default:
                return (
                    <div>No hace nada</div>
                )
        }
    }

    // Renderización de la gráfica indicada
    if ( data ) {
        return (
            <RenderedChart
                dataContainer={data}
            />
        )
    // Indicación de carga inicial en caso de no haber cargado datos aún
    } else {
        return (
            <div>
                Cargando...
            </div>
        )
    }
}

export default ChartTemplate;