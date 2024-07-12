import ChartTemplate from '../components/charts/ChartTemplate';
import { dashboardData } from '../data/appConfig';

const Dashboard = () => {

    return (
        dashboardData.charts.map(
            (chartData, index) => (
                <ChartTemplate key={index} chartData={chartData} />
            )
        )
    )
}

export default Dashboard;