import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Dashboard from '../components/pages//Dashboard'
import Analytics from '../components/pages/Analytics'
import Ecommerce from '../components/pages/Ecommerce'

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
