import { RED_PALETTE } from '../constants/colors'
import { CHARTS_SETINGS } from '../constants/settings'
import { dataFormatters } from '../utils/utils'

// Dominios locales para obtener la información
export const defaultDomain = 'localdomain'

// Configuración de las gráficas
export const dashboardData = {
	charts: [
		{
			[CHARTS_SETINGS.ENDPOINT]: 'quotation_amounts',
			[CHARTS_SETINGS.CHART_TYPE]: 'bar',
			[CHARTS_SETINGS.NAME]: 'Cotizaciones por vendedora',
			[CHARTS_SETINGS.LABELS_NAME]: 'user_name',
			[CHARTS_SETINGS.DATASETS_NAMES]: ['amount_untaxed'],
			[CHARTS_SETINGS.LABELS]: ['Cotizaciones'],
			[CHARTS_SETINGS.BACKGROUND_COLORS]: RED_PALETTE,
			[CHARTS_SETINGS.X_AXIS_FORMAT]: dataFormatters.onlyName,
			[CHARTS_SETINGS.Y_AXIS_FORMAT]: dataFormatters.toThousandsMXN,
		},
		{
			[CHARTS_SETINGS.ENDPOINT]: 'quotation_amounts',
			[CHARTS_SETINGS.CHART_TYPE]: 'line',
			[CHARTS_SETINGS.NAME]: 'Cotizaciones por vendedora',
			[CHARTS_SETINGS.LABELS_NAME]: 'user_name',
			[CHARTS_SETINGS.DATASETS_NAMES]: ['amount_untaxed'],
			[CHARTS_SETINGS.LABELS]: ['Cotizaciones'],
			[CHARTS_SETINGS.BACKGROUND_COLORS]: RED_PALETTE[3],
			[CHARTS_SETINGS.BACKGROUND_OPACITY]: 50,
			[CHARTS_SETINGS.BORDER_COLORS]: RED_PALETTE[3],
			[CHARTS_SETINGS.X_AXIS_FORMAT]: dataFormatters.onlyName,
			[CHARTS_SETINGS.Y_AXIS_FORMAT]: dataFormatters.toMillionsMXN
		},
		{
			[CHARTS_SETINGS.ENDPOINT]: 'quotation_amounts',
			[CHARTS_SETINGS.CHART_TYPE]: 'pie',
			[CHARTS_SETINGS.NAME]: 'Cotizaciones por vendedora',
			[CHARTS_SETINGS.LABELS_NAME]: 'user_name',
			[CHARTS_SETINGS.DATASETS_NAMES]: ['amount_untaxed'],
			[CHARTS_SETINGS.LABELS]: ['Cotizaciones'],
			[CHARTS_SETINGS.BACKGROUND_COLORS]: RED_PALETTE,
		},
		{
			[CHARTS_SETINGS.ENDPOINT]: 'quotation_amounts',
			[CHARTS_SETINGS.CHART_TYPE]: 'doughnut',
			[CHARTS_SETINGS.NAME]: 'Cotizaciones por vendedora',
			[CHARTS_SETINGS.LABELS_NAME]: 'user_name',
			[CHARTS_SETINGS.DATASETS_NAMES]: ['amount_untaxed'],
			[CHARTS_SETINGS.LABELS]: ['Cotizaciones'],
			[CHARTS_SETINGS.BACKGROUND_COLORS]: RED_PALETTE,
		},
		{
			[CHARTS_SETINGS.ENDPOINT]: 'quotation_amounts',
			[CHARTS_SETINGS.CHART_TYPE]: 'polar area',
			[CHARTS_SETINGS.NAME]: 'Cotizaciones por vendedora',
			[CHARTS_SETINGS.LABELS_NAME]: 'user_name',
			[CHARTS_SETINGS.DATASETS_NAMES]: ['amount_untaxed'],
			[CHARTS_SETINGS.LABELS]: ['Cotizaciones'],
			[CHARTS_SETINGS.BACKGROUND_COLORS]: RED_PALETTE,
			[CHARTS_SETINGS.LABELS_DISPLAY]: 'grid3'
		},
		{
			[CHARTS_SETINGS.ENDPOINT]: 'quotation_amounts',
			[CHARTS_SETINGS.CHART_TYPE]: 'radar',
			[CHARTS_SETINGS.NAME]: 'Cotizaciones por vendedora',
			[CHARTS_SETINGS.LABELS_NAME]: 'user_name',
			[CHARTS_SETINGS.DATASETS_NAMES]: ['amount_untaxed'],
			[CHARTS_SETINGS.LABELS]: ['Cotizaciones'],
			[CHARTS_SETINGS.BACKGROUND_COLORS]: RED_PALETTE[3],
			[CHARTS_SETINGS.BACKGROUND_OPACITY]: 75,
			[CHARTS_SETINGS.BORDER_COLORS]: RED_PALETTE[3],
			[CHARTS_SETINGS.X_AXIS_FORMAT]: dataFormatters.onlyName
		},
		{
			[CHARTS_SETINGS.CHART_TYPE]: 'bar',
			[CHARTS_SETINGS.ENDPOINT]: 'monthly_total_amounts',
			[CHARTS_SETINGS.NAME]: 'No hace nada',
			[CHARTS_SETINGS.LABELS_NAME]: 'month',
			[CHARTS_SETINGS.DATASETS_NAMES]: ['total_amount'],
			[CHARTS_SETINGS.LABELS]: ['Cotizaciones'],
			[CHARTS_SETINGS.BORDER_COLORS]: ['#FF0000', '#0000FF'],
			[CHARTS_SETINGS.BACKGROUND_COLORS]: ['#FF0000', '#0000FF'],
			[CHARTS_SETINGS.BACKGROUND_OPACITY]: 75,
			[CHARTS_SETINGS.Y_AXIS_FORMAT]: dataFormatters.toMillionsMXN,
			[CHARTS_SETINGS.CATEGORY_STRATIFICATION_BY]: 'warehouse',
			[CHARTS_SETINGS.LEGEND_BOX]: 'rounded'
		},
		{
			[CHARTS_SETINGS.CHART_TYPE]: 'line',
			[CHARTS_SETINGS.ENDPOINT]: 'monthly_total_amounts',
			[CHARTS_SETINGS.NAME]: 'No hace nada',
			[CHARTS_SETINGS.LABELS_NAME]: 'month',
			[CHARTS_SETINGS.DATASETS_NAMES]: ['total_amount'],
			[CHARTS_SETINGS.LABELS]: ['Cotizaciones'],
			[CHARTS_SETINGS.BORDER_COLORS]: ['#FF0000', '#0000FF'],
			[CHARTS_SETINGS.BACKGROUND_COLORS]: ['#FF0000', '#0000FF'],
			[CHARTS_SETINGS.BACKGROUND_OPACITY]: 25,
			[CHARTS_SETINGS.Y_AXIS_FORMAT]: dataFormatters.toMillionsMXN,
			[CHARTS_SETINGS.CATEGORY_STRATIFICATION_BY]: 'warehouse',
			[CHARTS_SETINGS.LEGEND_BOX]: 'circle'
		},
		{
			[CHARTS_SETINGS.CHART_TYPE]: 'radar',
			[CHARTS_SETINGS.ENDPOINT]: 'monthly_total_amounts',
			[CHARTS_SETINGS.NAME]: 'No hace nada',
			[CHARTS_SETINGS.LABELS_NAME]: 'month',
			[CHARTS_SETINGS.DATASETS_NAMES]: ['total_amount'],
			[CHARTS_SETINGS.LABELS]: ['Cotizaciones'],
			[CHARTS_SETINGS.BORDER_COLORS]: ['#FF0000', '#0000FF'],
			[CHARTS_SETINGS.BACKGROUND_COLORS]: ['#FF0000', '#0000FF'],
			[CHARTS_SETINGS.BACKGROUND_OPACITY]: 50,
			[CHARTS_SETINGS.Y_AXIS_FORMAT]: dataFormatters.toMillionsMXN,
			[CHARTS_SETINGS.CATEGORY_STRATIFICATION_BY]: 'warehouse',
			[CHARTS_SETINGS.LEGEND_BOX]: 'square'
		}
	]
}

export const NOTIFICATIONS = [
	{
		id: 1,
		header: 'Kyber sales cut by 20%',
		content:
			"Hey boss, sorry to bother you on christmas but Master Plo kind of snorted a whole crate of Kyber haha. He's in the ER right now. How do we proceed?"
	},
	{
		id: 2,
		header: 'There are 6 horny Natuloans near you',
		content:
			'This link for meet singel ladie!!1 not virus. pelase trust... https://tinyurl.com/kyhzfahz'
	},
	{
		id: 3,
		header: 'Grindr',
		content: 'HXRNY EXHIBTNIST: sent a picture. Press for more'
	},
	{
		id: 4,
		header: 'Grindr',
		content: 'HXRNY EXHIBTNIST: sent a picture. Press for more'
	},
	{
		id: 5,
		header: 'Grindr',
		content: 'HXRNY EXHIBTNIST: sent a picture. Press for more'
	}
]

export const MESSAGES = [
	{
		id: 1,
		avatar: './Jabba.jpg',
		header: 'xXJabbaDaHuttXx',
		content: 'hei dud you down for som minecraft? i just bought a realm'
	},
	{
		id: 2,
		avatar: './Jabba.jpg',
		header: 'xXJabbaDaHuttXx',
		content: 'hei dud you down for som minecraft? i just bought a realm'
	},
	{
		id: 3,
		content:
			"My name is Carmen Winstead, I'm seventeen years old. I am very similar to you... Did I mention to you that I'm dead. A few years ago a group of girls pushed me down a sewer hole to try"
	},
	{
		id: 4,
		avatar: './Jabba.jpg',
		header: 'xXJabbaDaHuttXx',
		content: 'hei dud you down for som minecraft? i just bought a realm'
	},
	{
		id: 5,
		avatar: './Jabba.jpg',
		header: 'xXJabbaDaHuttXx',
		content: 'hei dud you down for som minecraft? i just bought a realm'
	}
]

export const links = [
	{
		id: 1,
		icon: 'user',
		label: 'Profile',
		route: ''
	},
	{
		id: 2,
		icon: 'face_frown',
		label: 'IRS receipts'
	}
]
