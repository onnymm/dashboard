import {
	Cog8ToothIcon,
	IdentificationIcon,
	PaintBrushIcon,
	ShoppingBagIcon
} from '@heroicons/react/24/outline'
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
import { dashboardData } from '../../data/appConfig'
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

const PRICEGRID_DATA = [
	{
		id: 0,
		icon: PaintBrushIcon,
		amount: '66.66MC',
		label: 'Total earned',
		percent: '0.01',
		gain: undefined
	},
	{
		id: 1,
		icon: Cog8ToothIcon,
		amount: '12.30IC',
		label: 'Total spent',
		percent: '280%',
		gain: true
	},
	{
		id: 2,
		icon: ShoppingBagIcon,
		amount: '99G',
		label: 'Actives',
		percent: '3.20%',
		gain: false
	},
	{
		id: 3,
		icon: IdentificationIcon,
		amount: '-200K',
		label: 'Credit score',
		percent: '15%',
		gain: false
	}
]

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
