import { useEffect, useState } from "react";
import { getChartData } from "../../api/get";
import { chartTypes } from "../../constants/charts";
import { buildData } from "../../utils/utils";
import BarChart from "./BarChart";
import DoughtnutChart from "./DoughtnutChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import PolarChart from "./PolarChart";
import RadarChart from "./RadarChart";

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
    );

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
    );

    // Renderización de la gráfica
    const RenderedChart = ({dataContainer}) => {
        const chartIndex = {
            // Gráfica de barras
            [chartTypes.bar]: <BarChart dataContainer={dataContainer} />,
            // Gráfica de líneas
            [chartTypes.line]: <LineChart dataContainer={dataContainer} />,
            // Gráfica de pastel
            [chartTypes.pie]: <PieChart dataContainer={dataContainer} />,
            // Gráfica de área polar
            [chartTypes.polarArea]: <PolarChart dataContainer={dataContainer} />,
            // Gráfica de dona
            [chartTypes.doughnut]: <DoughtnutChart dataContainer={dataContainer} />,
            // Gráfica de radar
            [chartTypes.radar]: <RadarChart dataContainer={dataContainer} />
        };

        return chartIndex[chartData.chartType];
    }

    // Renderización de la gráfica indicada
    if ( data ) {
        return (
            <RenderedChart
                dataContainer={data}
            />
        );
    // Indicación de carga inicial en caso de no haber cargado datos aún
    } else {
        return (
            <div>
                Cargando...
            </div>
        );
    }
}

export default ChartTemplate;