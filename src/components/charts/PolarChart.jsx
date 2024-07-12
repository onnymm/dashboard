import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    RadialLinearScale,
    Title,
    Tooltip
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register( Legend, Title, Tooltip, CategoryScale, LinearScale, RadialLinearScale)

const PolarChart = ({ dataContainer = undefined }) => {

    if ( dataContainer ) {
        return (
            <PolarArea
                data={dataContainer.series}
                options={dataContainer.options}
            />
        )
    }
}

export default PolarChart;