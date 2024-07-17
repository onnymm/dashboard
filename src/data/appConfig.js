import { redPalette } from '../constants/colors'
import { dataFormatters } from '../utils/utils'

// Dominios locales para obtener la información
export const defaultDomain = 'localDomain'

// Configuración de las gráficas
export const dashboardData = {
	charts: [
		{
			endpoint: 'quotation_amounts',
			chartType: 'bar',
			name: 'Cotizaciones por vendedora',
			labelsName: 'user_name',
			datasetNames: ['amount_untaxed'],
			labels: ['Cotizaciones'],
			backgroundColors: redPalette,
			xLabelsFormatter: dataFormatters.onlyName,
			yLabelsFormatter: dataFormatters.toThousandsMXN
		},
		{
			endpoint: 'quotation_amounts',
			chartType: 'line',
			name: 'Cotizaciones por vendedora',
			labelsName: 'user_name',
			datasetNames: ['amount_untaxed'],
			labels: ['Cotizaciones'],
			backgroundColors: redPalette[3],
			backgroundOpacity: 50,
			borderColors: redPalette[3],
			xLabelsFormatter: dataFormatters.onlyName,
			yLabelsFormatter: dataFormatters.toMillionsMXN
		},
		{
			endpoint: 'quotation_amounts',
			chartType: 'pie',
			name: 'Cotizaciones por vendedora',
			labelsName: 'user_name',
			datasetNames: ['amount_untaxed'],
			labels: ['Cotizaciones'],
			backgroundColors: redPalette
		},
		{
			endpoint: 'quotation_amounts',
			chartType: 'doughnut',
			name: 'Cotizaciones por vendedora',
			labelsName: 'user_name',
			datasetNames: ['amount_untaxed'],
			labels: ['Cotizaciones'],
			backgroundColors: redPalette
		},
		{
			endpoint: 'quotation_amounts',
			chartType: 'polar area',
			name: 'Cotizaciones por vendedora',
			labelsName: 'user_name',
			datasetNames: ['amount_untaxed'],
			labels: ['Cotizaciones'],
			backgroundColors: redPalette
		},
		{
			endpoint: 'quotation_amounts',
			chartType: 'radar',
			name: 'Cotizaciones por vendedora',
			labelsName: 'user_name',
			datasetNames: ['amount_untaxed'],
			labels: ['Cotizaciones'],
			backgroundColors: redPalette[3],
			backgroundOpacity: 75,
			borderColors: redPalette[3],
			xLabelsFormatter: dataFormatters.onlyName
		},
		{
			chartType: 'bar',
			endpoint: 'monthly_total_amounts',
			name: 'No hace nada',
			labelsName: 'month',
			datasetNames: ['total_amount'],
			labels: ['Cotizaciones'],
			borderColors: ['#FF0000', '#0000FF'],
			backgroundColors: ['#FF0000', '#0000FF'],
			backgroundOpacity: 75,
			yLabelsFormatter: dataFormatters.toMillionsMXN,
			strat: 'warehouse'
		},
		{
			chartType: 'line',
			endpoint: 'monthly_total_amounts',
			name: 'No hace nada',
			labelsName: 'month',
			datasetNames: ['total_amount'],
			labels: ['Cotizaciones'],
			borderColors: ['#FF0000', '#0000FF'],
			backgroundColors: ['#FF0000', '#0000FF'],
			backgroundOpacity: 25,
			yLabelsFormatter: dataFormatters.toMillionsMXN,
			strat: 'warehouse'
		},
		{
			chartType: 'radar',
			endpoint: 'monthly_total_amounts',
			name: 'No hace nada',
			labelsName: 'month',
			datasetNames: ['total_amount'],
			labels: ['Cotizaciones'],
			borderColors: ['#FF0000', '#0000FF'],
			backgroundColors: ['#FF0000', '#0000FF'],
			backgroundOpacity: 50,
			yLabelsFormatter: dataFormatters.toMillionsMXN,
			strat: 'warehouse'
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
