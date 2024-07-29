import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Analytics from '../components/pages/analytics/Analytics'
import Ecommerce from '../components/pages/ecommerce/Ecommerce'
import Homepage from '../components/pages/homepage/Homepage'
import Profile from '../components/pages/profile/Profile'
import ToDo from '../components/pages/to do/ToDo'
import UiTests from '../components/pages/ui tests/UiTests'

const Router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '',
				element: <Homepage />
			},
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
			},
			{
				path: 'to-do',
				element: <ToDo />
			},
			{
				path: 'ui-tests',
				element: <UiTests />
			}
		]
	}
])

export default Router
