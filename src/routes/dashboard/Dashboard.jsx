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
} from 'chart.js'
import ChartTemplate from '../../components/charts/ChartTemplate'
import { dashboardData, PRICEGRID_DATA } from '../../data/appConfig'
import darkMode from '../../plugins/darkMode'
import htmlLegend from '../../plugins/htmlLegend'
import { stylingCSS } from '../../plugins/stylingCSS'
import GridItem from '../ecommerce/GridItem'

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
	stylingCSS
)

const Dashboard = () => {
	return (
		<div className='grid h-min w-full gap-4'>
			<div className='col-span-12 grid h-min grid-cols-12 gap-4'>
				{PRICEGRID_DATA.map(item => (
					<GridItem key={item.id} {...item} />
				))}
			</div>
			<div className='col-span-12 grid grid-cols-12 gap-4'>
				{/* Map through the charts and adjust the span */}
				{dashboardData.charts.map((chartData, index) => (
					<div
						key={index}
						className='col-span-6 h-96 rounded-sm bg-white p-5 shadow-md transition duration-300 dark:bg-navbar-background-d'
					>
						<ChartTemplate
							chartData={chartData}
							labelsContainerID={`chart-${index}`}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default Dashboard
