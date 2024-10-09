import {
	CurrencyDollarIcon,
	DocumentPlusIcon,
	ShoppingBagIcon,
	UserIcon
} from '@heroicons/react/24/outline'
import { PRESET_COLORS, RED_PALETTE } from '../constants/colors'
import { CHARTS_SETTINGS } from '../constants/settings'

// Dominios locales para obtener la información
export const defaultDomain = 'localdomain'

// Configuración de las gráficas
export const homepageCharts = {
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
			[CHARTS_SETTINGS.Y_AXIS_FORMAT]: 'monetary'
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
			[CHARTS_SETTINGS.X_AXIS_FORMAT]: 'only name'
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
			[CHARTS_SETTINGS.LABEL_COLUMNS]: 2,
			[CHARTS_SETTINGS.BACKGROUND_COLORS]: RED_PALETTE,
			[CHARTS_SETTINGS.X_AXIS_FORMAT]: 'only name',
			[CHARTS_SETTINGS.Y_AXIS_FORMAT]: 'monetary'
		},
		{
			[CHARTS_SETTINGS.ENDPOINT]: 'quotation_amounts',
			[CHARTS_SETTINGS.CHART_TYPE]: 'polarArea',
			[CHARTS_SETTINGS.NAME]: 'Cotizaciones por vendedora',
			[CHARTS_SETTINGS.LABELS_NAME]: 'user_name',
			[CHARTS_SETTINGS.DATASETS_NAMES]: ['amount_untaxed'],
			[CHARTS_SETTINGS.LABELS]: ['Cotizaciones'],
			[CHARTS_SETTINGS.BACKGROUND_COLORS]: RED_PALETTE,
			[CHARTS_SETTINGS.LABELS_DISPLAY]: 'grid3',
			[CHARTS_SETTINGS.Y_AXIS_FORMAT]: 'monetary'
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
			[CHARTS_SETTINGS.LABEL_COLUMNS]: 1,
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
			[CHARTS_SETTINGS.LABELS_NAME]: 'Hola',
			[CHARTS_SETTINGS.LABELS]: ['Cotizaciones'],
			[CHARTS_SETTINGS.BACKGROUND_COLORS]: RED_PALETTE[3],
			[CHARTS_SETTINGS.BACKGROUND_OPACITY]: 10,
			[CHARTS_SETTINGS.BORDER_COLORS]: PRESET_COLORS.WHITE,
			[CHARTS_SETTINGS.BORDER_OPACITY]: 0,
			[CHARTS_SETTINGS.X_AXIS_FORMAT]: 'monetary',
			[CHARTS_SETTINGS.Y_AXIS_FORMAT]: 'monetary',
			[CHARTS_SETTINGS.Z_AXIS_FORMAT]: 'monetary',
			[CHARTS_SETTINGS.LEGEND_BOX]: 'square'
		},
		{
			[CHARTS_SETTINGS.CHART_TYPE]: 'scatter',
			[CHARTS_SETTINGS.ENDPOINT]: 'products_week',
			[CHARTS_SETTINGS.LABELS_NAME]: 'Hola',
			[CHARTS_SETTINGS.LABELS]: ['Cotizaciones'],
			[CHARTS_SETTINGS.BACKGROUND_COLORS]: RED_PALETTE[3],
			[CHARTS_SETTINGS.BACKGROUND_OPACITY]: 25,
			[CHARTS_SETTINGS.BORDER_COLORS]: RED_PALETTE[3],
			[CHARTS_SETTINGS.BORDER_OPACITY]: 0,
			[CHARTS_SETTINGS.Y_AXIS_FORMAT]: 'monetary',
			[CHARTS_SETTINGS.X_AXIS_FORMAT]: 'monetary',
			[CHARTS_SETTINGS.LEGEND_BOX]: 'square'
		}
	]
}

// Notificaciones recibidas
export const NOTIFICATIONS = [
	{
		id: 1,
		header: 'Oportunidad de venta',
		content:
			"Tienes una oportunidad de venta adicional en tu orden con folio S40610."
	},
	{
		id: 2,
		header: '8 actividades para hoy, 1 vencida',
		content:
			'Tienes 8 actividades para el día de hoy mas 1 tarea que venció ayer a las 5:45 p.m.'
	},
	{
		id: 3,
		header: 'iaCele',
		content: 'Termina de configurar tu cuenta.'
	},
	{
		id: 4,
		header: 'Reporte mensual',
		content: 'Ya está listo tu reporte mensual de Agosto.'
	},
	{
		id: 5,
		header: 'Seguimiento a tu compra',
		content: 'Tu compra ha llegado a tu sucursal.'
	}
]

// Mensajes recibidos
export const MESSAGES = [
	{
		id: 1,
		avatar: 'default_profile.webp',
		header: 'Evlin Sánchez Lucio',
		content: 'me apoyas en whatsapp por favor'
	},
	{
		id: 2,
		avatar: 'csl.jpg',
		header: 'Cabo San Lucas',
		content: 'Mariana: 👍'
	},
	{
		id: 3,
		avatar: 'default_profile.webp',
		header: 'Reyna Arriaga Flores',
		content: 'Tú: Si por favor'
	},
	{
		id: 4,
		avatar: 'logo.webp',
		header: 'iaCele',
		content: 'Tu solicitud de compra ya está en proceso...'
	},
	{
		id: 5,
		avatar: 'default_profile.webp',
		header: 'Leticia Terán Salinas',
		content: "ok"
	},
	// {
	// 	id: 4,
	// 	avatar: './Jabba.webp',
	// 	header: 'xXJabbaDaHuttXx',
	// 	content: 'hei dud you down for som minecraft? i just bought a realm'
	// },
	// {
	// 	id: 5,
	// 	avatar: './Jabba.webp',
	// 	header: 'xXJabbaDaHuttXx',
	// 	content: 'hei dud you down for som minecraft? i just bought a realm'
	// }
]

// Enlaces del dropdown de perfil de la navbar
export const PROFILE_LINKS = [
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

// Enlaces del dropdown "dashboard"
export const DASHBOARD_LINKS = [
	{
		id: 3,
		label: 'Mis comisiones',
		route: 'comisiones',
	},
	{
		id: 1,
		label: 'Mis órdenes',
		route: 'myorders'
	},
	{
		id: 2,
		label: 'Productos',
		route: 'analytics'
	},
]

// Enlaces del dropdown "tasks"
export const TASKS_LINKS = [
	{
		id: 1,
		label: 'Actividades',
		route: 'to-do'
	}
]

export const PRICEGRID_DATA = [
	{
		id: 0,
		icon: CurrencyDollarIcon,
		amount: '$649,661.26',
		label: 'Total vendido',
		percent: '12.02%',
		gain: true
	},
	{
		id: 1,
		icon: UserIcon,
		amount: '133',
		label: 'Clientes atendidos',
		percent: '2.08',
		gain: false
	},
	{
		id: 2,
		icon: ShoppingBagIcon,
		amount: '25175.26',
		label: 'Productos vendidos',
		percent: '13.74%',
		gain: true
	},
	{
		id: 3,
		icon: DocumentPlusIcon,
		amount: '608',
		label: 'Ventas realizadas',
		percent: '2.18%',
		gain: false
	}
]

// Delimitador de pantalla ancha (para ajustes visuales y de estado)
export const thresholdForWideScreen = 768
