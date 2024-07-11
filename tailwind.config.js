/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'sidebar-title': '#FFFFFF',
				'sidebar-background': '#1B2436',
				'sidebar-section-title': '#8A99AF',
				'sidebar-section-hover': '#333A48',
				'sidebar-section': '#DEE4EE',

				'content-background': '#E1E8F6',

				'navbar-background': '#FFFFFF',
				'navbar-icons': '#78909C',
				'navbar-icons-hover': '#1565C0',

				'darkmode-switcher': '#FFFFFF',
				'darkmode-switcher-background': '#D6DBDF'
			},
			width: {
				265: '265px'
			},
			height: {
				4000: '4000px'
			},
			boxShadow: {
				'darkmode-switcher-s': '0px 1px 2px 0px rgba(0, 0, 0, 0.6)',
				'darkmode-switcher-background-s':
					'inset 0px 1px 2px 0px rgba(0, 0, 0, 0.45)'
			}
		}
	},
	plugins: []
}
