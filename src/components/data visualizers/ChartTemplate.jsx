import {
	Bar,
	Bubble,
	Doughnut,
	Line,
	Pie,
	PolarArea,
	Radar,
	Scatter
} from 'react-chartjs-2'
import { CHART_TYPES } from '../../constants/charts'
import { buildData } from '../../utils/utils'

const ChartTemplate = ({ chartData, chartSettings, labelsContainerID }) => {


	// Transformación de los datos
	chartData = buildData({
		// Se formatean los datos y se construye la gráfica
		data: chartData,
		...chartSettings,
		labelsContainerID
	})

	// Renderización de la gráfica
	const RenderedChart = ({ dataContainer }) => {
		const chartIndex = {
			// Gráfica de barras
			[CHART_TYPES.BAR]: (
				<Bar data={dataContainer.series} options={dataContainer.options} />
			),
			// Gráfica de líneas
			[CHART_TYPES.LINE]: (
				<Line data={dataContainer.series} options={dataContainer.options} />
			),
			// Gráfica de pastel
			[CHART_TYPES.PIE]: (
				<Pie data={dataContainer.series} options={dataContainer.options} />
			),
			// Gráfica de área polar
			[CHART_TYPES.POLARAREA]: (
				<PolarArea
					data={dataContainer.series}
					options={dataContainer.options}
				/>
			),
			// Gráfica de dona
			[CHART_TYPES.DOUGHNUT]: (
				<Doughnut data={dataContainer.series} options={dataContainer.options} />
			),
			// Gráfica de radar
			[CHART_TYPES.RADAR]: (
				<Radar data={dataContainer.series} options={dataContainer.options} />
			),
			// Gráfica de dispersión
			[CHART_TYPES.SCATTER]: (
				<Scatter data={dataContainer.series} options={dataContainer.options} />
			),
			// Gráfica de burbuja:
			[CHART_TYPES.BUBBLE]: (
				<Bubble data={dataContainer.series} options={dataContainer.options} />
			)
		}

		return chartIndex[chartSettings.chartType]
	}

	// Renderización de la gráfica indicada
	return (
		<div className='flex flex-col gap-2 w-full max-h-full'>
			<div
				className={`flex h-auto flex-grow justify-center overflow-x-hidden overflow-y-hidden`}
			>
				<RenderedChart dataContainer={chartData} />
			</div>
			<div id={`${labelsContainerID}`} className='h-min'></div>
		</div>
	)
}

export default ChartTemplate
