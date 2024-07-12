import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register( Legend, Title, Tooltip, CategoryScale, LinearScale)

const PieChart = ({ dataContainer = undefined }) => {

    if ( dataContainer ) {
        return (
            <Pie
                data={dataContainer.series}
                options={dataContainer.options}
            />
        )
    }
}

export default PieChart;