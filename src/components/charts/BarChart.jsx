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

const BarChart = ({ data = undefined }) => {
    
    if ( data ) {
        const series = {
            labels: data.userName,
            datasets: [
                {
                    label: "Cotizaciones",
                    data: data.amounts,
                    backgroundColor: "#0000FF"
                }
            ]
        }

        // const option

        return (
            <Bar
                data={series}
            />
        )
    }



}

export default BarChart;