/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Light
				'sidebar-background': '#162230',
				'sidebar-section-hover': '#19293C',

				'feed-background': '#CED7DD',

				'navbar-background': '#FFFFFF',
				'navbar-icons-hover': '#4855F7',

				'darkmode-switch-background': '#DBDCDD',

				// Dark
				'sidebar-background-d': '#213243',
				'sidebar-section-hover-d': '#19293C',

				'feed-background-d': '#101B26',

				'navbar-background-d': '#1F2F3F',
				'navbar-icons-hover-d': '#4855F7',
				'navbar-icons-background-d': '#142434',

				'darkmode-switch-background-d': '#16212C'
			},
			width: {
				18: '4.5rem'
			},
			height: {
				4000: '4000px'
			},
			boxShadow: {
				back: '0px 0px 5px 1px rgba(0, 0, 0, 0.2)',
				'darkmode-switch-s': '0px 1.5px 2px 1px rgba(0, 0, 0, 0.2)',
				'darkmode-switch-background-s':
					'inset 0px 1px 2px 0px rgba(0, 0, 0, 0.3)'
			},
			keyframes: {
				click: {
					'0%': {
						transform: 'translateY(0)',
						boxShadow: '0px 1.5px 2px 1px rgba(0, 0, 0, 0.2)'
					},
					'20%': {
						transform: 'translateY(2px)',
						boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.2)'
					},
					'75%': {
						transform: 'translateY(1px)',
						boxShadow: '0px 1px 1px 0.5px rgba(0, 0, 0, 0.2)'
					},
					'100%': {
						transform: 'translateY(0)',
						boxShadow: '0px 1.5px 2px 1px rgba(0, 0, 0, 0.2)'
					}
				}
			},
			animation: {
				'button-click': 'click 0.35s ease-in-out'
			},
			transitionProperty: {
				width: 'width',
				height: 'height'
			}
		}
	},
	plugins: []
}
