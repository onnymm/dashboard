import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Analytics from '../components/analytics/Analytics'
import Dashboard from '../components/dashboard/Dashboard'
import Ecommerce from '../components/ecommerce/Ecommerce'

const Router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'dashboard',
				element: <Dashboard />
			},
			{
				path: 'ecommerce',
				element: <Ecommerce />
			},
			{
				path: 'analytics',
				element: <Analytics />
			}
		]
	}
])

export default Router
