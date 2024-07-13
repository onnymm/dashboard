import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register( Legend, Title, Tooltip, CategoryScale, LinearScale)

const RadarChart = ({ dataContainer = undefined }) => {

    if ( dataContainer ) {
        return (
            <Radar
                data={dataContainer.series}
                options={dataContainer.options}
            />
        )
    }
}

export default RadarChart;