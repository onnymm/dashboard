import { useEffect, useState } from 'react'
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
import { getChartData } from '../../api/get'
import { CHART_TYPES } from '../../constants/charts'
import { buildData } from '../../utils/utils'

const ChartTemplate = ({ chartData, labelsContainerID }) => {
	// Estado para carga inicial de los datos
	const [loadData, setLoadData] = useState()
	// Estado para transformación de datos
	const [data, setData] = useState()

	// Carga inicial de los datos
	useEffect(() => {
		getChartData(setLoadData, chartData.endpoint)
	}, [chartData.endpoint])

	// Transformación de los datos
	useEffect(() => {
		if (loadData) {
			setData(
				buildData({
					data: loadData,
					...chartData,
					labelsContainerID
				})
			)
		}
	}, [loadData, chartData, labelsContainerID])

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

		return chartIndex[chartData.chartType]
	}

	// Renderización de la gráfica indicada
	if (data) {
		return (
			<div className='grid h-full gap-4'>
				<div id={`${labelsContainerID}`}></div>
				<div className={`relative h-auto flex-grow`}>
					<RenderedChart dataContainer={data} />
				</div>
			</div>
		)
		// Indicación de carga inicial en caso de no haber cargado datos aún
	} else {
		return <div>Cargando...</div>
	}
}

export default ChartTemplate
