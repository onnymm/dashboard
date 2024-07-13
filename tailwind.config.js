/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Light
				'sidebar-background': '#07192E',
				'sidebar-section-hover': '#19293C',

				'feed-background': '#CED7DD',

				'navbar-background': '#FFFFFF',
				'navbar-icons-hover': '#1565C0',

				'darkmode-switch-background': '#D6DBDF',

				// Dark
				'sidebar-background-d': '#0F0716',
				'sidebar-section-hover-d': '#1D1623',

				'feed-background-d': '#261736',

				'navbar-background-d': '#130B1B',
				'navbar-icons-hover-d': '#F489EA',
				'navbar-icons-background-d': '#392250',

				'darkmode-switch-background-d': '#985BD6'
			},
			width: {
				18: '4.5rem'
			},
			height: {
				4000: '4000px'
			},
			boxShadow: {
				'darkmode-switch-s': '0px 1px 2px 1px rgba(0, 0, 0, 0.5)',
				'darkmode-switch-background-s':
					'inset 0px 1px 2px 0px rgba(0, 0, 0, 0.45)'
			}
		}
	},
	plugins: []
}
