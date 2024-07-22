import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Analytics from '../components/pages/analytics/Analytics'
import Ecommerce from '../components/pages/ecommerce/Ecommerce'
import Profile from '../components/pages/profile/Profile'

const Router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'profile',
				element: <Profile />
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
