import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip)

const BarChart = ({ dataContainer = undefined }) => {

    if ( dataContainer ) {
        return (
            <Bar
                data={dataContainer.series}
                options={dataContainer.options}
            />
        )
    }



}

export default BarChart;