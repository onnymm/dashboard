import { COLOR_THEME } from './src/settings/appSettings';
import { htmlTooltipClassNames } from './src/settings/classNames';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	safelist: [
		"rounded-l-lg",
		"rounded-r-lg",
		"p-2",
		"w-[calc(100%_-_18rem)]",
		"grid-columns-[repeat(auto-fill,_minmax(0,_1fr))]",
		"text-ellipsis",
		"bg-red-500/30",
		"bg-yellow-500/30",
		"dark:text-yellow-500",
		"text-yellow-600",
		"bg-green-500/30",
		"bg-sky-500/30",
		"bg-gray-500/30",
		"bg-gray-500/30",
		...htmlTooltipClassNames.tooltip,
		...htmlTooltipClassNames.th,
		...htmlTooltipClassNames.td,
		...htmlTooltipClassNames.colorBox,
		...htmlTooltipClassNames.span,
	],
	theme: {
		extend: {
			colors: {
				// Light
				'sidebar-background': '#162230',
				'sidebar-section-hover': '#19293C',

				'feed-background': '#FFFFFF',
				'feed-buttons': '#4C678A',
				'feed-buttons-hover': '#385171',

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

				'darkmode-switch-background-d': '#16212C',
				'main': COLOR_THEME
			},
			width: {
				18: '4.5rem',
				54: '13.5rem',
				50: '12.5rem',
			},
			maxWidth: {
				'feed-width': '100rem',
				50: '12.5rem',
			},
			height: {
				50: '12.5rem',
				4000: '4000px'
			},
			maxHeight: {
				50: '12.5rem',
			},
			margin: {
				17: '4.25rem'
			},
			rotate: {
				50: '50deg'
			},
			zIndex: {
				1: '1',
				9: '9',
				99: '99',
				999: '999',
				9999: '9999',
				99999: '99999'
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
				},
				hideAndUnmount: {
					'0%': {
						opacity: '1'
					},
					'100%': {
						opacity: '0',
						display: 'none'
					}
				},
				mountAndUnhide: {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1',
						display: 'block'
					}
				},
				shrinkGrow: {
					'0%': {
						transform: 'scale(1)'
					},
					'50%': {
						transform: 'scale(0.9)'
					},
					'100%': {
						transform: 'scale(1)'
					}
				},
				shrinkGrowSmall: {
					'0%': {
						transform: 'scale(1)'
					},
					'50%': {
						transform: 'scale(0.75)'
					},
					'100%': {
						transform: 'scale(1)'
					}
				},
				fadeGrowIn: {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				fadeShrinkOut: {
					'0%': { opacity: '1', transform: 'scale(1)' },
					'100%': { opacity: '0', transform: 'scale(0.95)' }
				}
			},
			animation: {
				'button-click': 'click 0.35s ease-in-out',
				'hide-unmount': 'hideAndUnmount 0.3s forwards',
				'mount-unhide': 'mountAndUnhide 0.3s forwards',
				'avatar-click': 'shrinkGrow 0.25s ease',
				'bars3-click': 'shrinkGrowSmall 0.15s ease',
				'bars3-click-sm': 'shrinkGrowSmall 0.25s ease',
				'fade-grow-in': 'fadeGrowIn 0.1s ease-out forwards',
				'fade-shrink-out': 'fadeShrinkOut 0.1s ease-in forwards'
			},
			transitionProperty: {
				width: 'width',
				height: 'height'
			},
			transitionDuration: {
				dark: '100ms'
			}
		}
	},
	plugins: []
}
