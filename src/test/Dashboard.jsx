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
    Tooltip,
} from 'chart.js';
import ChartTemplate from '../components/charts/ChartTemplate';
import { dashboardData } from '../data/appConfig';
import darkMode from '../plugins/darkMode';
import htmlLegend from '../plugins/htmlLegend';
import { stylingCSS } from '../plugins/stylingCSS';

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
    htmlLegend,
    darkMode,
    stylingCSS,
)

const Dashboard = () => {

    return (
        <main style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
                {
                    dashboardData.charts.map(
                        (chartData, index) => (
                            <div key={index} style={{width: '445px'}}>
                                <ChartTemplate chartData={chartData} labelsContainerID={`chart-${index}`}/>
                            </div>
                        )
                    )
                }
        </main>
    )
}

export default Dashboard;