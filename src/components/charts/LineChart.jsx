import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(Legend, Title, Tooltip, CategoryScale, LinearScale, PointElement, LineElement)

const LineChart = ({ dataContainer = undefined }) => {

    if ( dataContainer ) {
        return (
            <Line
                data={dataContainer.series}
                options={dataContainer.options}
            />
        )
    }
}

export default LineChart;