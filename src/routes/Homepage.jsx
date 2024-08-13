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
import ChartCard from '../components/data visualizers/ChartCard'
import DataCard from '../components/data visualizers/DataCard'
import { homepageCharts, PRICEGRID_DATA } from '../data/appConfig'
import darkMode from '../plugins/darkMode'
import htmlLegend from '../plugins/htmlLegend'
import { stylingCSS } from '../plugins/stylingCSS'

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

const Homepage = () => {
	return (
		<div className='flex h-min flex-grow flex-col gap-4'>
			{/* Grid de tarjetas de datos */}
			<div className='custom-gridrow'>
				{PRICEGRID_DATA.map(item => (
					<DataCard key={item.id} {...item} />
				))}
			</div>
			<div className='custom-gridrow'>
				<ChartCard
					chartSettings={homepageCharts.charts[0]}
					extraStyle='col-span-6'
				/>
				<ChartCard
					chartSettings={homepageCharts.charts[1]}
					extraStyle='col-span-6'
				/>
			</div>
			<div className='custom-gridrow'>
				<ChartCard
					chartSettings={homepageCharts.charts[2]}
					extraStyle='col-span-6'
				/>
				<ChartCard
					chartSettings={homepageCharts.charts[3]}
					extraStyle='col-span-6'
				/>
			</div>
			<div className='custom-gridrow'>
				<ChartCard
					chartSettings={homepageCharts.charts[4]}
					extraStyle='col-span-6'
				/>
				<ChartCard
					chartSettings={homepageCharts.charts[5]}
					extraStyle='col-span-6'
				/>
			</div>
			<div className='custom-gridrow'>
				<ChartCard
					chartSettings={homepageCharts.charts[6]}
					extraStyle='col-span-6'
				/>
				<ChartCard
					chartSettings={homepageCharts.charts[7]}
					extraStyle='col-span-6'
				/>
			</div>
		</div>
	)
}

export default Homepage
