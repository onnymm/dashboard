import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Analytics from './routes/analytics/Analytics'
import Ecommerce from './routes/ecommerce/Ecommerce'
import Homepage from './routes/homepage/Homepage'
import Profile from './routes/profile/Profile'
import ToDo from './routes/to do/ToDo'
import UiTests from './routes/ui tests/UiTests'

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
