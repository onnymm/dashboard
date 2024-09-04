import { CHART_TYPES, RADIAL_CHARTS } from '../constants/charts'
import { OPACITIES, PRESET_COLORS } from '../constants/colors'
import {
	CHARTS_SERIES_SETTINGS,
	CHARTS_SETTINGS,
	LABELS_FORMATS_SETTINGS
} from '../constants/settings'
import { chartElementsStyling } from '../settings/chartElementsStyling'
import { chartSettings } from '../settings/dashboardSettings'

const midTransparentBlack = PRESET_COLORS.BLACK + OPACITIES[50] // Negro con transparencia media

// Funciones de construcción de estructuras de datos
const buildBubbleData = ({
	data,
	[CHARTS_SETTINGS.LABELS_NAME]: labelsName,
	[CHARTS_SETTINGS.TRANSPOSED]: transposed
}) => {
	// Inicialización de los objetos
	let series = {}
	series.datasets = []
	let datasets

	// Validación de indicación de gráfica transpuesta
	if (transposed) {
		// Mapeo y transformación de los valores
		datasets = Object.values(data).map(values => {
			return {
				x: values[1],
				y: values[0],
				_custom: values[2]
			}
		})
	} else {
		// Mapeo y transformación de los valores
		datasets = Object.values(data).map(values => {
			return {
				x: values[0],
				y: values[1],
				_custom: values[2]
			}
		})
	}

	// Se ingresan los datos transformados al objeto de series
	series.datasets.push({
		data: datasets,
		label: labelsName
	})

	// Se ingresan las etiquetas
	series.labels = Object.keys(data)

	// Retorno del objeto contenedor de los datos transformados
	return series
}
const buildScatterData = ({
	data,
	[CHARTS_SETTINGS.LABELS_NAME]: labelsName,
	[CHARTS_SETTINGS.TRANSPOSED]: transposed
}) => {
	// Inicialización de los objetos
	let series = {}
	series.datasets = []
	let datasets

	// Validación de indicación de gráfica transpuesta
	if (transposed) {
		// Mapeo y transformación de los valores
		datasets = Object.values(data).map(values => {
			return {
				x: values[1],
				y: values[0]
			}
		})
	} else {
		// Mapeo y transformación de los valores
		datasets = Object.values(data).map(values => {
			return {
				x: values[0],
				y: values[1]
			}
		})
	}

	// Se ingresan los datos transformados al objeto de series
	series.datasets.push({
		data: datasets,
		label: labelsName
	})
	// Se ingresan las etiquetas
	series.labels = Object.keys(data)

	// Retorno del objeto contenedor de los datos transformados
	return series
}
const buildGenericData = ({
	data,
	[CHARTS_SETTINGS.CATEGORY_STRATIFICATION_BY]: strat,
	[CHARTS_SETTINGS.DATASETS_NAMES]: datasetNames,
	[CHARTS_SETTINGS.LABELS_NAME]: labelsName,
	[CHARTS_SETTINGS.LABELS]: labels
}) => {
	// Inicialización de contenedores de datos y etiquetas
	let series = {}
	series.datasets = []
	let datasets
	let renamedLabels

	// Se convierte el objeto de objetos recibido por el API a matriz de objetos
	data = Object.values(data)

	// Estratificación por variable categórica (Si se requiere)
	if (strat) {
		[datasets, renamedLabels] = stratificateData({
			data,
			categoryName: strat,
			datasetNames,
			labelsName
		})

		// Obtención de un sólo conjunto de datos (Flujo por defecto)
	} else {
		datasets = [
			getSingleDataset({
				data,
				labelName: labels[0],
				varValue: datasetNames[0]
			})
		]
		renamedLabels = getLabels({ data, labelsName })
	}

	// Se añade(n) el(los) dataset(s) a la matriz de series
	series.datasets = datasets

	// Se asignan los nombres de las etiquetas
	if (labelsName) {
		series.labels = renamedLabels
	}

	// Retorno del objeto contenedor de los datos transformados
	return series
}

// Funciones de construcción de opciones predefinidas
const buildBubbleChartOptions = ({
	series,
	labelsContainerID,
	[CHARTS_SETTINGS.LABEL_COLUMNS]: labelsDisplay = chartSettings[
		CHARTS_SETTINGS.LABEL_COLUMNS
	],
	[CHARTS_SETTINGS.LABELS_LIST]: labelsList = chartSettings[
		CHARTS_SETTINGS.LABELS_LIST
	],
	[CHARTS_SETTINGS.LEGEND_BOX]: legendBox = chartSettings[
		CHARTS_SETTINGS.LEGEND_BOX
	],
	[CHARTS_SETTINGS.TRANSPOSED]: transposed,
	[CHARTS_SETTINGS.NAME]: name,
}) => {
	// Inicialización del objeto a retornar
	let options = {}

	// Inversión de los ejes X y Y si se indica la transposición
	options.indexAxis = transposed ? 'y' : 'x'

	// Inicialización de atributos preestablecidos de opciones
	options.scales = {}
	options.scales.x = {}
	options.scales.y = {}
	options.scales.x.ticks = {}
	options.scales.y.ticks = {}
	options.font = { color: midTransparentBlack }

	// Configuración de relación de aspecto
	options.maintainAspectRatio = false

	// Obtención de los valores de tamaño
	const radiusValues = series.datasets[0].data.map(values => values._custom)

	// Escalación de valores
	const scaledValues = scaleSizes(radiusValues)
	options.radius = scaledValues

	// Integración del plug-in de etiquetas
	options = setPlugInsConfig({
		options,
		labelsContainerID,
		labelsDisplay,
		labelsList,
		legendBox,
		name
	})

	// Retorno del objeto de configuración
	return options
}
const buildCartesianChartOptions = ({
	labelsContainerID,
	[CHARTS_SETTINGS.LABEL_COLUMNS]: labelsDisplay = chartSettings[
		CHARTS_SETTINGS.LABEL_COLUMNS
	],
	[CHARTS_SETTINGS.LABELS_LIST]: labelsList = chartSettings[
		CHARTS_SETTINGS.LABELS_LIST
	],
	[CHARTS_SETTINGS.LEGEND_BOX]: legendBox = chartSettings[
		CHARTS_SETTINGS.LEGEND_BOX
	],
	[CHARTS_SETTINGS.TRANSPOSED]: transposed,
	[CHARTS_SETTINGS.NAME]: name,
}) => {
	// Inicialización del objeto a retornar
	let options = {}

	// Inversión de los ejes X y Y si se indica la transposición
	options.indexAxis = transposed ? 'y' : 'x'

	// Inicialización de atributos preestablecidos de opciones
	options.scales = {}
	options.scales.x = {}
	options.scales.y = {}
	options.scales.x.ticks = {}
	options.scales.y.ticks = {}
	options.scales.x.grid = { color: undefined }
	options.scales.y.grid = { color: undefined }
	options.font = { color: midTransparentBlack }

	console.log(name)

	// Configuración de relación de aspecto
	options.maintainAspectRatio = false

	// Integración del plug-in de etiquetas
	options = setPlugInsConfig({
		options,
		labelsContainerID,
		labelsDisplay,
		labelsList,
		legendBox,
		name
	})

	// Retorno del objeto de configuración
	return options
}
const buildRadialChartOptions = ({
	labelsContainerID,
	[CHARTS_SETTINGS.LABEL_COLUMNS]: labelsDisplay = chartSettings[
		CHARTS_SETTINGS.LABEL_COLUMNS
	],
	[CHARTS_SETTINGS.LABELS_LIST]: labelsList = chartSettings[
		CHARTS_SETTINGS.LABELS_LIST
	],
	[CHARTS_SETTINGS.LEGEND_BOX]: legendBox = chartSettings[
		CHARTS_SETTINGS.LEGEND_BOX
	],
	[CHARTS_SETTINGS.NAME]: name
}) => {
	// Inicialización del objeto a retornar
	let options = {}

	// Inicialización de atributos preestablecidos de opciones
	options.scales = {}
	options.scales.r = {}
	options.scales.r.pointLabels = {}
	options.scales.r.ticks = {}
	options.scales.r.ticks.backdropColor = '#00000000'
	options.scales.r.display = false // Se desactiva la vista del eje radial
	options.scales.r.angleLines = {}
	options.scales.r.angleLines.display = false // Se desactiva la vista de las líneas categóricas radiales
	options.font = { color: midTransparentBlack }

	// Configuración de relación de aspecto
	options.maintainAspectRatio = false

	// Integración del plug-in de etiquetas
	options = setPlugInsConfig({
		options,
		labelsContainerID,
		labelsDisplay,
		labelsList,
		legendBox,
		name,
	})

	// Retorno del objeto de configuración
	return options
}
const buildRadarChartOptions = ({
	labelsContainerID,
	[CHARTS_SETTINGS.LABEL_COLUMNS]: labelsDisplay = chartSettings[
		CHARTS_SETTINGS.LABEL_COLUMNS
	],
	[CHARTS_SETTINGS.LABELS_LIST]: labelsList = chartSettings[
		CHARTS_SETTINGS.LABELS_LIST
	],
	[CHARTS_SETTINGS.LEGEND_BOX]: legendBox = chartSettings[
		CHARTS_SETTINGS.LEGEND_BOX
	],
	[CHARTS_SETTINGS.NAME]: name,
}) => {
	// Inicialización del objeto a retornar
	let options = {}

	// Inicialización de atributos preestablecidos de opciones
	options.scales = {}

	options.scales.r = {}
	options.scales.r.pointLabels = {}
	options.scales.r.ticks = {}
	options.scales.r.ticks.backdropColor = '#00000000'

	options.scales.r.display = true
	options.scales.r.angleLines = {}
	options.scales.r.angleLines.display = true

	options.scales.r.grid = { color: undefined }
	options.font = { color: midTransparentBlack }

	options.title = {}
	options.title.display = true

	// Configuración de relación de aspecto
	options.maintainAspectRatio = false

	// Integración del plug-in de etiquetas
	options = setPlugInsConfig({
		options,
		labelsContainerID,
		labelsDisplay,
		labelsList,
		legendBox,
		name,
	})

	// Retorno del objeto de configuración
	return options
}

// Funciones de formateo de etiquetas de ejes
const formatScatterChartLabels = ({
	series,
	options,
	[CHARTS_SETTINGS.X_AXIS_FORMAT]: xAxisFormat,
	[CHARTS_SETTINGS.Y_AXIS_FORMAT]: yAxisFormat,
	[CHARTS_SETTINGS.TRANSPOSED]: transposed
}) => {
	// Inicialización de las funciones formateadoras
	let xLabelsFormatter
	let yLabelsFormatter

	options.rawData = series.labels

	// Validación de indicación de gráfica transpuesta
	if (transposed) {
		// Formateo de etiquetas en ambos ejes
		if (xAxisFormat) {
			yLabelsFormatter = assignNumericLabelsFormatter({
				series,
				axisFormat: xAxisFormat,
				axis: 'x'
			})
			options.scales.y.ticks.callback = yLabelsFormatter
		}
		if (yAxisFormat) {
			xLabelsFormatter = assignNumericLabelsFormatter({
				series,
				axisFormat: yAxisFormat,
				axis: 'y'
			})
			options.scales.x.ticks.callback = xLabelsFormatter
		}
	} else {
		// Formateo de etiquetas en ambos ejes
		if (xAxisFormat) {
			xLabelsFormatter = assignNumericLabelsFormatter({
				series,
				axisFormat: xAxisFormat,
				axis: 'x'
			})
			options.scales.x.ticks.callback = xLabelsFormatter
		}
		if (yAxisFormat) {
			yLabelsFormatter = assignNumericLabelsFormatter({
				series,
				axisFormat: yAxisFormat,
				axis: 'y'
			})
			options.scales.y.ticks.callback = yLabelsFormatter
		}
	}

	// Retorno de los conjuntos de datos y objeto de opciones
	return [series, options]
}
const formatCartesianChartLabels = ({
	series,
	options,
	[CHARTS_SETTINGS.X_AXIS_FORMAT]: xAxisFormat,
	[CHARTS_SETTINGS.Y_AXIS_FORMAT]: yAxisFormat,
	[CHARTS_SETTINGS.TRANSPOSED]: transposed
}) => {
	let yLabelsFormatter
	let xLabelsFormatter

	// Validación de indicación de gráfica transpuesta
	if (transposed) {
		// Formateo de etiquetas en el eje X
		if (yAxisFormat) {
			xLabelsFormatter = assignLabelsFormatter({
				series,
				axisFormat: yAxisFormat
			})
			options.scales.x.ticks.callback = xLabelsFormatter
		}

		// Formateo de etiquetas en el eje Y
		if (xAxisFormat) {
			series.labels = series.labels.map(value => {
				return labelsFormats[xAxisFormat].raw(value)
			})
		}
	} else {
		// Formateo de etiquetas en el eje X
		if (xAxisFormat) {
			series.labels = series.labels.map(value => {
				return labelsFormats[xAxisFormat].raw(value)
			})
		}

		// Formateo de etiquetas en el eje Y
		if (yAxisFormat) {
			yLabelsFormatter = assignLabelsFormatter({
				series,
				axisFormat: yAxisFormat
			})
			options.scales.y.ticks.callback = yLabelsFormatter
		}
	}

	// Retorno de los conjuntos de datos y objeto de opciones
	return [series, options]
}
const formatRadialChartsLabels = ({ series, options }) => {
	// Retorno de los conjuntos de datos y objeto de opciones
	return [series, options]
}
const formatRadarChartLabels = ({
	series,
	options,
	[CHARTS_SETTINGS.X_AXIS_FORMAT]: xAxisFormat,
	[CHARTS_SETTINGS.Y_AXIS_FORMAT]: yAxisFormat
}) => {

	// Definción del formateador de etiquetas numéricas
	if (yAxisFormat) {
		const yLabelsFormatter = assignLabelsFormatter({
			series,
			axisFormat: yAxisFormat
		})
		options.scales.r.ticks.callback = yLabelsFormatter
	}

	// Formateo de etiquetas en el eje X
	if (xAxisFormat) {
		options.scales.r.pointLabels.callback = labelsFormats[xAxisFormat].raw
	}

	// Retorno de los conjuntos de datos y objeto de opciones
	return [series, options]
}

// Funciones de formateo en tooltip
const formatBubbleChartTooltip = ({
	[CHARTS_SETTINGS.X_AXIS_FORMAT]: xAxisFormat,
	[CHARTS_SETTINGS.Y_AXIS_FORMAT]: yAxisFormat,
	[CHARTS_SETTINGS.Z_AXIS_FORMAT]: zAxisFormat
}) => {
	// Generación de función con el tipo de valor a formatear
	return context => {
		// Se inicializa el contenedor de la etiqueta
		let label = context.dataset.label || ''

		// Si la etiqueta no está vacía, se concatena un ': '
		if (label) {
			label += ': '
		}

		// Formateo del valor de la etiqueta en función del tipo de valor del conjunto de datos
		label += '['
		label += labelsFormats[xAxisFormat].raw(context.parsed.x)
		label += ', '
		label += labelsFormats[yAxisFormat].raw(context.parsed.y)
		label += ', '
		label += labelsFormats[zAxisFormat].raw(context.parsed._custom)
		label += ']'

		return label
	}
}
const formatScatterChartTooltip = ({
	[CHARTS_SETTINGS.X_AXIS_FORMAT]: xAxisFormat,
	[CHARTS_SETTINGS.Y_AXIS_FORMAT]: yAxisFormat
}) => {
	// Generación de función con el tipo de valor a formatear
	return context => {
		// Se inicializa el contenedor de la etiqueta
		let label = context.dataset.label || ''

		// Si la etiqueta no está vacía, se concatena un ': '
		if (label) {
			label += ': '
		}

		// Formateo del valor de la etiqueta en función del tipo de valor del conjunto de datos
		label += '['
		label += labelsFormats[xAxisFormat].raw(context.parsed.x)
		label += ', '
		label += labelsFormats[yAxisFormat].raw(context.parsed.y)
		label += ']'

		return label
	}
}
const formatCartesianChartTooltip = ({
	[CHARTS_SETTINGS.Y_AXIS_FORMAT]: yAxisFormat
}) => {
	// Generación de función con el tipo de valor a formatear
	return context => {
		// Inicialización del eje de valores numéricos
		let dataAxis

		// Definición del eje de valores numéricos
		if (context.chart.config._config.options.indexAxis === 'x') {
			dataAxis = 'y'
		} else if (context.chart.config._config.options.indexAxis === 'y') {
			dataAxis = 'x'
		}

		// Se inicializa el contenedor de la etiqueta
		let label = context.dataset.label || ''

		// Si la etiqueta no está vacía, se concatena un ': '
		if (label) {
			label += ': '
		}

		// Formateo del valor de la etiqueta en función del tipo de valor del conjunto de datos
		label += labelsFormats[yAxisFormat].raw(context.parsed[dataAxis])

		return label
	}
}
const formatCircularChartTooltip = ({
	[CHARTS_SETTINGS.Y_AXIS_FORMAT]: yAxisFormat
}) => {
	// Generación de función con el tipo de valor a formatear
	return context => {
		// Se inicializa el contenedor de la etiqueta
		let label = context.dataset.label || ''

		// Si la etiqueta no está vacía, se concatena un ': '
		if (label) {
			label += ': '
		}

		// Formateo del valor de la etiqueta en función del tipo de valor del conjunto de datos
		label += labelsFormats[yAxisFormat].raw(context.parsed)

		return label
	}
}
const formatRadialChartTooltip = ({
	[CHARTS_SETTINGS.Y_AXIS_FORMAT]: yAxisFormat
}) => {
	// Generación de función con el tipo de valor a formatear
	return context => {
		// Se inicializa el contenedor de la etiqueta
		let label = context.dataset.label || ''

		// Si la etiqueta no está vacía, se concatena un ': '
		if (label) {
			label += ': '
		}

		// Formateo del valor de la etiqueta en función del tipo de valor del conjunto de datos
		label += labelsFormats[yAxisFormat].raw(context.parsed.r)

		return label
	}
}

const stratificateData = ({ data, categoryName, datasetNames, labelsName }) => {
	// Se inicializa la matriz a retornar
	const datasets = []
	// Se inicializa el contenedor de los nombres de grupo en el conjunto de datos
	const groups = []
	// Se inicializa el contenedor de los nombres de etiquetas
	const labels = []

	// Se obtienen todos los nombres de grupo del conjunto de datos
	data.forEach(sample => {
		// Si el nombre no existe en la matriz, se agrega
		if (groups.indexOf(sample[categoryName]) === -1) {
			groups.push(sample[categoryName])
		}
		if (labels.indexOf(sample[labelsName]) === -1) {
			labels.push(sample[labelsName])
		}
	})

	// Se realiza la búsqueda y agrupación por todos los nombres de grupo
	groups.forEach(
		// Iteración por nombres de grupo
		name => {
			// Se crea un conjunto de datos vacío
			const dataset = {}
			// Se designa el nombre como etiqueta del conjunto de datos
			dataset.label = name
			// Se inicializa el contenedor de valores del conjunto de datos
			dataset.data = []

			// Iteración por cada valor del conjunto de datos
			data.forEach(sample => {
				// Se agrega el valor del conjunto de datos entrante si pertenece al grupo del nombre
				if (sample[categoryName] === name) {
					dataset.data.push(sample[datasetNames])
				}
			})

			// Finalizada la iteración por el conjunto de datos entrante, se añade el nuevo conjunto de datos al objeto a retornar
			datasets.push(dataset)
		}
	)

	return [datasets, labels]
}

const getSingleDataset = ({ data, labelName, varValue }) => {
	// Se crea un conjunto de datos vacío
	const dataset = {}

	// Se designa el nombre como etiqueta del conjunto de datos
	dataset.label = labelName

	// Se inicializa el contenedor de valores del conjunto de datos
	dataset.data = []

	// Iteración por cada valor del conjunto de datos
	data.forEach(sample => {
		dataset.data.push(sample[varValue])
	})

	// Retorno del conjunto de datos
	return dataset
}

const getLabels = ({ data, labelsName }) => {
	// Se inicializa el contenedor de los nombres de etiquetas
	const labels = []

	// Se obtienen todas las etiquetas únicas
	data.forEach(sample => {
		// Si el nombre no existe en la matriz, se agrega
		if (labels.indexOf(sample[labelsName]) === -1) {
			labels.push(sample[labelsName])
		}
	})

	// Retorno de la matriz de etiquetas
	return labels
}

const setPlugInsConfig = ({
	options,
	labelsContainerID,
	labelsDisplay,
	labelsList,
	legendBox,
	name
}) => {
	const legendParams = {
		labelsDisplay,
		labelsList,
		legendBox
	}

	// Integración de plugins
	options.plugins = {
		// Plug-in para etiquetas desacopladas de la gráfica
		htmlLegend: {
			containerID: labelsContainerID,
			config: legendParams
		},

		// Desactivación de muestra de etiquetas integradas en la gráfica
		legend: {
			display: false
		},

		tooltip: {}
	}

	options.plugins.title = {}
	options.plugins.title.display = true
	options.plugins.title.text = name
	options.plugins.title.font = {
		size: 16
	}

	console.log(options.plugins.title)

	// Retorno del objeto contenedor de las opciones
	return options
}

const scaleSizes = data => {
	// Obtención del número mayor en la matriz
	const maxNum = Math.max(...data)

	// Obtención del número máximo a escalar restando el número mínimo
	const adjustedMaxSize =
		chartSettings[CHARTS_SETTINGS.MAX_BUBBLE_SIZE] -
		chartSettings[CHARTS_SETTINGS.MIN_BUBBLE_SIZE]

	// Escalamiento de valores multiplicando por el número ajustado y sumando el valor mínimo permitido
	const scaledValues = data.map(
		value =>
			(value / maxNum) * adjustedMaxSize +
			chartSettings[CHARTS_SETTINGS.MIN_BUBBLE_SIZE]
	)

	// Retorno del objeto con los valores escalados
	return scaledValues
}

const assignLabelsFormatter = ({ series, axisFormat }) => {
	// Inicialización de la función a retornar
	let labelsFormatter

	if (labelsFormats[axisFormat].type === Number) {
		labelsFormatter = assignNumericLabelsFormatter({ series, axisFormat })
	} else {
		labelsFormatter = labelsFormats[axisFormat].raw
	}

	// Retorno de la función
	return labelsFormatter
}

const assignNumericLabelsFormatter = ({
	series,
	axisFormat,
	axis = undefined
}) => {
	// Creación de contenedor de número mayor
	let maxNumber = 0

	// Iteración de conjuntos de datos
	series.datasets.forEach(dataset => {
		// Iteración por cada valor de cada conjunto de datos
		dataset.data.forEach(value => {
			// Búsqueda del número mayor en todos los conjuntos de datos de la gráfica
			if (axis) {
				if (value[axis] > maxNumber) {
					maxNumber = value[axis]
				}
			} else {
				if (value > maxNumber) {
					maxNumber = value
				}
			}
		})
	})

	// Asignación de abreviación por millones
	if (maxNumber >= 1000000) {
		return labelsFormats[axisFormat].toMillions

		// Asignación de abreviación por miles
	} else if (maxNumber >= 3000) {
		return labelsFormats[axisFormat].toThousands

		// Formateo por defecto
	} else {
		return labelsFormats[axisFormat].raw
	}
}

const colorMapping = ({
	series,
	backgroundColors,
	backgroundOpacity,
	borderColors,
	borderOpacity,
	chartType
}) => {
	// Variables booleanas
	const isFillableChart =
		chartType === CHART_TYPES.LINE || chartType === CHART_TYPES.RADAR

	// Mapeo de opacidad a los colores de fondo
	if (backgroundOpacity !== undefined) {
		backgroundColors = mapOpacities({
			colors: backgroundColors,
			colorOpacity: backgroundOpacity
		})
	}
	// Mapeo de opacidad a los colores de borde
	if (borderOpacity !== undefined) {
		borderColors = mapOpacities({
			colors: borderColors,
			colorOpacity: borderOpacity
		})
	}

	// Mapeo de colores de fondo a los conjuntos de datos
	if (backgroundColors) {
		series = mapColors({
			series,
			colors: backgroundColors,
			colorType: CHARTS_SERIES_SETTINGS.BACKGROUND_COLOR
		})
	}
	// Mapeo de colores de borde a los conjuntos de datos
	if (borderColors) {
		series = mapColors({
			series,
			colors: borderColors,
			colorType: CHARTS_SERIES_SETTINGS.BORDER_COLOR
		})
	}

	// Activación de color de fondo para gráficas de línea y radar
	if (isFillableChart && backgroundColors) {
		// Activación por dataset
		series.datasets.forEach(dataset => {
			dataset.fill = chartSettings.fillableCharts[CHARTS_SERIES_SETTINGS.FILL]
		})
	}

	return series
}

const avoidYAxisCut = ({ chartType, series, options }) => {
	const isRadial = RADIAL_CHARTS.indexOf(chartType) !== -1

	// Inicialización del número menor
	let minNumber = 0

	// Iteración por cada conjunto de datos de la gráfica
	series.datasets.forEach(
		// Iteración por cada valor de cada conjunto de datos
		dataset => {
			dataset.data.forEach(value => {
				// Búsqueda del número menor
				if (value < minNumber) {
					minNumber = value
				}
			})
		}
	)

	// Asignación de la etiqueta mínima en el eje Y en 0 si el número menor no es negativo
	if (!(minNumber < 0)) {
		if (isRadial) {
			options.scales.r.min = 0
		} else {
			options.scales.y.min = 0
		}
	}

	// Retorno del objeto de opciones
	return options
}

const mapOpacities = ({ colors, colorOpacity }) => {
	// Concatenación de la opacidad si el color es un texto
	if (typeof colors === 'string') {
		return colors + OPACITIES[colorOpacity]

		// Concatenación de la opacidad a cada uno de los valores de la matriz
	} else {
		return colors.map(color => color + OPACITIES[colorOpacity])
	}
}

const mapColors = ({ series, colors, colorType }) => {
	// Mapeo de colores a un solo conjunto de datos
	if (series.datasets.length === 1) {
		series.datasets[0][colorType] = colors

		// Mapeo de paleta de colores a varios conjuntos de datos
	} else if (colors.length > 1) {
		for (let i = 0; i < series.datasets.length; i++) {
			series.datasets[i][colorType] = colors[i]
		}

		// Mapeo de color a varios conjuntos de datos
	} else {
		for (let i = 0; i < series.datasets.length; i++) {
			series.datasets[i][colorType] = colors
		}
	}

	// Retorno de los datos con colores mapeados
	return series
}

export const mapColorsOnSeries = ({
	series,
	[CHARTS_SETTINGS.CHART_TYPE]: chartType,
	[CHARTS_SETTINGS.BACKGROUND_COLORS]: backgroundColors,
	[CHARTS_SETTINGS.BACKGROUND_OPACITY]: backgroundOpacity,
	[CHARTS_SETTINGS.BORDER_COLORS]: borderColors,
	[CHARTS_SETTINGS.BORDER_OPACITY]: borderOpacity
}) => {
	// Validación de tipos de gráfica
	const isPolarArea = chartType === CHART_TYPES.POLARAREA
	const isPie = chartType === CHART_TYPES.PIE
	const isDoughtnut = chartType === CHART_TYPES.DOUGHNUT

	// Asignación de opacidad de colores de fondo para gráficas de área polar
	if (isPolarArea && !backgroundOpacity) {
		backgroundOpacity =
			chartSettings[CHART_TYPES.POLARAREA][CHARTS_SETTINGS.BACKGROUND_OPACITY]
	}

	// Asignación de colores de borde para gráficas circulares
	if ((isPie || isDoughtnut) && !borderColors) {
		borderColors = chartSettings.circularCharts[CHARTS_SETTINGS.BORDER_COLORS]
	}

	// Asignación de opacidades y colores de borde para gráficas de área polar
	if (isPolarArea && !borderColors) {
		borderColors = backgroundColors // Asignación de mismos colores de fondo para colores de borde
		borderOpacity =
			chartSettings[CHART_TYPES.POLARAREA][CHARTS_SETTINGS.BORDER_OPACITY]
	}

	series = colorMapping({
		series,
		backgroundColors,
		backgroundOpacity,
		borderColors,
		borderOpacity,
		chartType
	})

	return series
}

export const scaleAxes = ({
	series,
	options,
	[CHARTS_SETTINGS.CHART_TYPE]: chartType
}) => {
	if (chartType === CHART_TYPES.LINE || chartType === CHART_TYPES.RADAR) {
		// Prevención de corte en el eje Y
		options = avoidYAxisCut({ chartType, series, options })
	}

	return options
}

export const formatTooltip = ({
	options,
	[CHARTS_SETTINGS.CHART_TYPE]: chartType,
	[CHARTS_SETTINGS.X_AXIS_FORMAT]: xAxisFormat,
	[CHARTS_SETTINGS.Y_AXIS_FORMAT]: yAxisFormat,
	[CHARTS_SETTINGS.Z_AXIS_FORMAT]: zAxisFormat
}) => {
	// Inicialización de las variables
	options.plugins.tooltip.callbacks = {}
	options.plugins.tooltip.callbacks.label = formatTooltips[chartType]({
		[CHARTS_SETTINGS.X_AXIS_FORMAT]: xAxisFormat,
		[CHARTS_SETTINGS.Y_AXIS_FORMAT]: yAxisFormat,
		[CHARTS_SETTINGS.Z_AXIS_FORMAT]: zAxisFormat
	})

	// Retorno del objeto contenedor de opciones
	return options
}

export const assignCSSStyles = ({ options }) => {
	// Asignación de los estilos previamente configurados
	options.plugins.stylingCSS = chartElementsStyling

	// Retorno del nuevo objeto de opciones
	return options
}

// Funciones de formateo de valores
export const labelsFormats = {
	// Formato numérico
	[LABELS_FORMATS_SETTINGS.NUMERIC]: {
		raw: num => num.toFixed(2),
		toThousands: num => `${num / 1000} K`,
		toMillions: num => `${num / 1000000} M`,
		type: Number
	},

	// Formato en moneda nacional
	[LABELS_FORMATS_SETTINGS.MONETARY]: {
		raw: num =>
			num.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' }),
		toThousands: num => `$${num / 1000} K`,
		toMillions: num => `$${num / 1000000} M`,
		type: Number
	},

	// Mostrar sólo el primer nombre en un String antes del espacio
	[LABELS_FORMATS_SETTINGS.ONLY_NAME]: {
		raw: text => text.slice(0, text.indexOf(' ')),
		type: String
	}
}

export const buildInitSeries = {
	[CHART_TYPES.BUBBLE]: buildBubbleData,

	[CHART_TYPES.SCATTER]: buildScatterData,

	[CHART_TYPES.BAR]: buildGenericData,
	[CHART_TYPES.LINE]: buildGenericData,
	[CHART_TYPES.PIE]: buildGenericData,
	[CHART_TYPES.DOUGHNUT]: buildGenericData,
	[CHART_TYPES.POLARAREA]: buildGenericData,
	[CHART_TYPES.RADAR]: buildGenericData
}

export const buildInitOptions = {
	[CHART_TYPES.BUBBLE]: buildBubbleChartOptions,

	[CHART_TYPES.SCATTER]: buildCartesianChartOptions,
	[CHART_TYPES.BAR]: buildCartesianChartOptions,
	[CHART_TYPES.LINE]: buildCartesianChartOptions,

	[CHART_TYPES.PIE]: buildRadialChartOptions,
	[CHART_TYPES.DOUGHNUT]: buildRadialChartOptions,
	[CHART_TYPES.POLARAREA]: buildRadialChartOptions,

	[CHART_TYPES.RADAR]: buildRadarChartOptions
}

export const formatLabels = {
	[CHART_TYPES.BUBBLE]: formatScatterChartLabels,
	[CHART_TYPES.SCATTER]: formatScatterChartLabels,

	[CHART_TYPES.BAR]: formatCartesianChartLabels,
	[CHART_TYPES.LINE]: formatCartesianChartLabels,

	[CHART_TYPES.PIE]: formatRadialChartsLabels,
	[CHART_TYPES.DOUGHNUT]: formatRadialChartsLabels,
	[CHART_TYPES.POLARAREA]: formatRadialChartsLabels,

	[CHART_TYPES.RADAR]: formatRadarChartLabels
}

export const formatTooltips = {
	[CHART_TYPES.BUBBLE]: formatBubbleChartTooltip,

	[CHART_TYPES.SCATTER]: formatScatterChartTooltip,

	[CHART_TYPES.BAR]: formatCartesianChartTooltip,
	[CHART_TYPES.LINE]: formatCartesianChartTooltip,

	[CHART_TYPES.PIE]: formatCircularChartTooltip,
	[CHART_TYPES.DOUGHNUT]: formatCircularChartTooltip,

	[CHART_TYPES.POLARAREA]: formatRadialChartTooltip,
	[CHART_TYPES.RADAR]: formatRadialChartTooltip
}
