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

const REACTIVE_COLSPAN_PRESETS = {
	3: 'col-span-12 lg:col-span-3',
	6: 'col-span-12 sm:col-span-6'
}

const Dashboard = () => {
	return (
		<div className='flex h-min flex-grow flex-col gap-4'>
			<div className='grid h-min grid-cols-12 gap-4'>
				{PRICEGRID_DATA.map(item => (
					<GridItem key={item.id} {...item} />
				))}
			</div>
			<div className='grid grid-cols-12 gap-4'>
				{/* Map through the charts and adjust the span */}
				{dashboardData.charts.map((chartData, index) => (
					<div
						key={index}
						className={`${REACTIVE_COLSPAN_PRESETS[6]} flex h-96 rounded-sm bg-white p-5 shadow-md transition duration-300 dark:bg-navbar-background-d`}
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
