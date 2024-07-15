import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    RadialLinearScale,
    Title,
    Tooltip
} from 'chart.js';

ChartJS.register(
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    RadialLinearScale,
    Filler,
    Legend,
    Title,
    Tooltip,
)


import ChartTemplate from '../components/charts/ChartTemplate';
import { dashboardData } from '../data/appConfig';

const Dashboard = () => {

    return (
        <main style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>

        {dashboardData.charts.map(
            (chartData, index) => (
                <ChartTemplate key={index} chartData={chartData} />
            )
        )}
        </main>
    )
}

export default Dashboard;