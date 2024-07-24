import { useEffect, useState } from "react";
import { getChartData } from "../../api/get";
import { CHART_TYPES } from "../../constants/charts";
import { buildData } from "../../utils/utils";
import BarChart from "./BarChart";
import BubbleChart from "./BubbleChart";
import DoughtnutChart from "./DoughtnutChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import PolarChart from "./PolarChart";
import RadarChart from "./RadarChart";
import ScatterChart from "./ScatterChart";

const ChartTemplate = ({ chartData, labelsContainerID }) => {
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
                            ...chartData,
                            labelsContainerID
                        }
                    )
                )
            }
        }, [loadData, chartData, labelsContainerID]
    );

    // Renderización de la gráfica
    const RenderedChart = ({ dataContainer }) => {
        const chartIndex = {
            // Gráfica de barras
            [CHART_TYPES.BAR]: <BarChart dataContainer={dataContainer} />,
            // Gráfica de líneas
            [CHART_TYPES.LINE]: <LineChart dataContainer={dataContainer} />,
            // Gráfica de pastel
            [CHART_TYPES.PIE]: <PieChart dataContainer={dataContainer} />,
            // Gráfica de área polar
            [CHART_TYPES.POLARAREA]: <PolarChart dataContainer={dataContainer} />,
            // Gráfica de dona
            [CHART_TYPES.DOUGHNUT]: <DoughtnutChart dataContainer={dataContainer} />,
            // Gráfica de radar
            [CHART_TYPES.RADAR]: <RadarChart dataContainer={dataContainer} />,
            // Gráfica de dispersión
            [CHART_TYPES.SCATTER]: <ScatterChart dataContainer={dataContainer} />,
            // Gráfica de burbuja:
            [CHART_TYPES.BUBBLE]: <BubbleChart dataContainer={dataContainer} />,
        };

        return chartIndex[chartData.chartType];
    }

    // Renderización de la gráfica indicada
    if ( data ) {
        return (
            <div>
                <div id={`${labelsContainerID}`}></div>
                <RenderedChart
                    dataContainer={data}
                />
            </div>
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