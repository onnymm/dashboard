import { CHARTS_SETTINGS } from '../constants/settings'
import { PRESET_COLORS, RED_PALETTE } from '../constants/colors'

// Dominios locales para obtener la información
export const defaultDomain = 'localdomain'

// Configuración de las gráficas
export const dashboardData = {
	charts: [
		{
			[CHARTS_SETTINGS.ENDPOINT]: 'quotation_amounts',
			[CHARTS_SETTINGS.CHART_TYPE]: 'bar',
			[CHARTS_SETTINGS.NAME]: 'Cotizaciones por vendedora',
			[CHARTS_SETTINGS.LABELS_NAME]: 'user_name',
			[CHARTS_SETTINGS.DATASETS_NAMES]: ['amount_untaxed'],
			[CHARTS_SETTINGS.LABELS]: ['Cotizaciones'],
			[CHARTS_SETTINGS.BACKGROUND_COLORS]: RED_PALETTE,
			[CHARTS_SETTINGS.BACKGROUND_OPACITY]: 75,
			[CHARTS_SETTINGS.X_AXIS_FORMAT]: 'only name',
			[CHARTS_SETTINGS.Y_AXIS_FORMAT]: 'monetary',
		},
		{
			[CHARTS_SETTINGS.ENDPOINT]: 'quotation_amounts',
			[CHARTS_SETTINGS.CHART_TYPE]: 'bar',
			[CHARTS_SETTINGS.NAME]: 'Cotizaciones por vendedora',
			[CHARTS_SETTINGS.LABELS_NAME]: 'user_name',
			[CHARTS_SETTINGS.DATASETS_NAMES]: ['amount_untaxed'],
			[CHARTS_SETTINGS.LABELS]: ['Cotizaciones'],
			[CHARTS_SETTINGS.BACKGROUND_COLORS]: RED_PALETTE,
			[CHARTS_SETTINGS.BACKGROUND_OPACITY]: 75,
			[CHARTS_SETTINGS.X_AXIS_FORMAT]: 'only name',
			[CHARTS_SETTINGS.Y_AXIS_FORMAT]: 'monetary',
			[CHARTS_SETTINGS.TRANSPOSED]: true
		},
		{
			[CHARTS_SETTINGS.ENDPOINT]: 'quotation_amounts',
			[CHARTS_SETTINGS.CHART_TYPE]: 'line',
			[CHARTS_SETTINGS.NAME]: 'Cotizaciones por vendedora',
			[CHARTS_SETTINGS.LABELS_NAME]: 'user_name',
			[CHARTS_SETTINGS.DATASETS_NAMES]: ['amount_untaxed'],
			[CHARTS_SETTINGS.LABELS]: ['Cotizaciones'],
			[CHARTS_SETTINGS.BACKGROUND_COLORS]: RED_PALETTE[3],
			[CHARTS_SETTINGS.BACKGROUND_OPACITY]: 50,
			[CHARTS_SETTINGS.BORDER_COLORS]: RED_PALETTE[3],
			[CHARTS_SETTINGS.Y_AXIS_FORMAT]: 'monetary',
			[CHARTS_SETTINGS.X_AXIS_FORMAT]: 'only name',
		},
		{
			[CHARTS_SETTINGS.ENDPOINT]: 'quotation_amounts',
			[CHARTS_SETTINGS.CHART_TYPE]: 'pie',
			[CHARTS_SETTINGS.NAME]: 'Cotizaciones por vendedora',
			[CHARTS_SETTINGS.LABELS_NAME]: 'user_name',
			[CHARTS_SETTINGS.DATASETS_NAMES]: ['amount_untaxed'],
			[CHARTS_SETTINGS.LABELS]: ['Cotizaciones'],
			[CHARTS_SETTINGS.BACKGROUND_COLORS]: RED_PALETTE,
			[CHARTS_SETTINGS.Y_AXIS_FORMAT]: 'monetary',
			[CHARTS_SETTINGS.X_AXIS_FORMAT]: 'only name'
		},
		{
			[CHARTS_SETTINGS.ENDPOINT]: 'quotation_amounts',
			[CHARTS_SETTINGS.CHART_TYPE]: 'doughnut',
			[CHARTS_SETTINGS.NAME]: 'Cotizaciones por vendedora',
			[CHARTS_SETTINGS.LABELS_NAME]: 'user_name',
			[CHARTS_SETTINGS.DATASETS_NAMES]: ['amount_untaxed'],
			[CHARTS_SETTINGS.LABELS]: ['Cotizaciones'],
			[CHARTS_SETTINGS.BACKGROUND_COLORS]: RED_PALETTE,
			[CHARTS_SETTINGS.Y_AXIS_FORMAT]: 'monetary',
		},
		{
			[CHARTS_SETTINGS.ENDPOINT]: 'quotation_amounts',
			[CHARTS_SETTINGS.CHART_TYPE]: 'polar area',
			[CHARTS_SETTINGS.NAME]: 'Cotizaciones por vendedora',
			[CHARTS_SETTINGS.LABELS_NAME]: 'user_name',
			[CHARTS_SETTINGS.DATASETS_NAMES]: ['amount_untaxed'],
			[CHARTS_SETTINGS.LABELS]: ['Cotizaciones'],
			[CHARTS_SETTINGS.BACKGROUND_COLORS]: RED_PALETTE,
			[CHARTS_SETTINGS.LABELS_DISPLAY]: 'grid3',
			[CHARTS_SETTINGS.Y_AXIS_FORMAT]: 'monetary',
		},
		{
			[CHARTS_SETTINGS.ENDPOINT]: 'quotation_amounts',
			[CHARTS_SETTINGS.CHART_TYPE]: 'radar',
			[CHARTS_SETTINGS.NAME]: 'Cotizaciones por vendedora',
			[CHARTS_SETTINGS.LABELS_NAME]: 'user_name',
			[CHARTS_SETTINGS.DATASETS_NAMES]: ['amount_untaxed'],
			[CHARTS_SETTINGS.LABELS]: ['Cotizaciones'],
			[CHARTS_SETTINGS.BACKGROUND_COLORS]: RED_PALETTE[3],
			[CHARTS_SETTINGS.BACKGROUND_OPACITY]: 75,
			[CHARTS_SETTINGS.BORDER_COLORS]: RED_PALETTE[3],
			[CHARTS_SETTINGS.Y_AXIS_FORMAT]: 'monetary',
			[CHARTS_SETTINGS.X_AXIS_FORMAT]: 'only name'
		},
		{
			[CHARTS_SETTINGS.CHART_TYPE]: 'bar',
			[CHARTS_SETTINGS.ENDPOINT]: 'monthly_total_amounts',
			[CHARTS_SETTINGS.NAME]: 'No hace nada',
			[CHARTS_SETTINGS.LABELS_NAME]: 'month',
			[CHARTS_SETTINGS.DATASETS_NAMES]: ['total_amount'],
			[CHARTS_SETTINGS.LABELS]: ['Cotizaciones'],
			[CHARTS_SETTINGS.BORDER_COLORS]: ['#FF0000', '#0000FF'],
			[CHARTS_SETTINGS.BACKGROUND_COLORS]: ['#FF0000', '#0000FF'],
			[CHARTS_SETTINGS.BACKGROUND_OPACITY]: 75,
			[CHARTS_SETTINGS.Y_AXIS_FORMAT]: 'monetary',
			[CHARTS_SETTINGS.CATEGORY_STRATIFICATION_BY]: 'warehouse',
			[CHARTS_SETTINGS.LEGEND_BOX]: 'rounded'
		},
		{
			[CHARTS_SETTINGS.CHART_TYPE]: 'line',
			[CHARTS_SETTINGS.ENDPOINT]: 'monthly_total_amounts',
			[CHARTS_SETTINGS.NAME]: 'No hace nada',
			[CHARTS_SETTINGS.LABELS_NAME]: 'month',
			[CHARTS_SETTINGS.DATASETS_NAMES]: ['total_amount'],
			[CHARTS_SETTINGS.LABELS]: ['Cotizaciones'],
			[CHARTS_SETTINGS.BORDER_COLORS]: ['#FF0000', '#0000FF'],
			[CHARTS_SETTINGS.BACKGROUND_COLORS]: ['#FF0000', '#0000FF'],
			[CHARTS_SETTINGS.BACKGROUND_OPACITY]: 50,
			[CHARTS_SETTINGS.Y_AXIS_FORMAT]: 'monetary',
			[CHARTS_SETTINGS.CATEGORY_STRATIFICATION_BY]: 'warehouse',
			[CHARTS_SETTINGS.LEGEND_BOX]: 'circle'
		},
		{
			[CHARTS_SETTINGS.CHART_TYPE]: 'radar',
			[CHARTS_SETTINGS.ENDPOINT]: 'monthly_total_amounts',
			[CHARTS_SETTINGS.NAME]: 'No hace nada',
			[CHARTS_SETTINGS.LABELS_NAME]: 'month',
			[CHARTS_SETTINGS.DATASETS_NAMES]: ['total_amount'],
			[CHARTS_SETTINGS.LABELS]: ['Cotizaciones'],
			[CHARTS_SETTINGS.BORDER_COLORS]: ['#FF0000', '#0000FF'],
			[CHARTS_SETTINGS.BACKGROUND_COLORS]: ['#FF0000', '#0000FF'],
			[CHARTS_SETTINGS.BACKGROUND_OPACITY]: 50,
			[CHARTS_SETTINGS.Y_AXIS_FORMAT]: 'monetary',
			[CHARTS_SETTINGS.CATEGORY_STRATIFICATION_BY]: 'warehouse',
			[CHARTS_SETTINGS.LEGEND_BOX]: 'square'
		},
		{
			[CHARTS_SETTINGS.CHART_TYPE]: 'bubble',
			[CHARTS_SETTINGS.ENDPOINT]: 'products_week',
			[CHARTS_SETTINGS.LABELS_NAME]: "Hola",
			[CHARTS_SETTINGS.LABELS]: ['Cotizaciones'],
			[CHARTS_SETTINGS.BACKGROUND_COLORS]: RED_PALETTE[3],
			[CHARTS_SETTINGS.BACKGROUND_OPACITY]: 10,
			[CHARTS_SETTINGS.BORDER_COLORS]: PRESET_COLORS.WHITE,
			[CHARTS_SETTINGS.BORDER_OPACITY]: 0,
			[CHARTS_SETTINGS.Y_AXIS_FORMAT]: 'monetary',
			[CHARTS_SETTINGS.X_AXIS_FORMAT]: 'monetary',
			[CHARTS_SETTINGS.LEGEND_BOX]: 'square',
		},
		{
			[CHARTS_SETTINGS.CHART_TYPE]: 'scatter',
			[CHARTS_SETTINGS.ENDPOINT]: 'products_week',
			[CHARTS_SETTINGS.LABELS_NAME]: "Hola",
			[CHARTS_SETTINGS.LABELS]: ['Cotizaciones'],
			[CHARTS_SETTINGS.BACKGROUND_COLORS]: RED_PALETTE[3],
			[CHARTS_SETTINGS.BACKGROUND_OPACITY]: 25,
			[CHARTS_SETTINGS.BORDER_COLORS]: RED_PALETTE[3],
			[CHARTS_SETTINGS.BORDER_OPACITY]: 0,
			[CHARTS_SETTINGS.Y_AXIS_FORMAT]: 'monetary',
			[CHARTS_SETTINGS.X_AXIS_FORMAT]: 'monetary',
			[CHARTS_SETTINGS.LEGEND_BOX]: 'square',
		},
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
		route: 'profile'
	},
	{
		id: 2,
		icon: 'face_frown',
		label: 'IRS receipts',
		route: ''
	}
]

export const SIDEBAR_LINKS = [
	{
		id: 1,
		label: 'eCommerce',
		route: 'ecommerce'
	},
	{
		id: 2,
		label: 'Analytics',
		route: 'analytics'
	}
]
