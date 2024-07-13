import {
    ArcElement,
    CategoryScale,
    Chart as ChartJS,
    DoughnutController,
    Legend,
    LinearScale,
    Title,
    Tooltip
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, DoughnutController, Legend, Title, Tooltip, CategoryScale, LinearScale)

const DoughtnutChart = ({ dataContainer = undefined }) => {

    if ( dataContainer ) {
        return (
            <Doughnut
                data={dataContainer.series}
                options={dataContainer.options}
            />
        )
    }
}

export default DoughtnutChart;