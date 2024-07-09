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
				'sidebar-section': '#DEE4EE'
			}
		}
	},
	plugins: []
}
