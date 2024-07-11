import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Dashboard from '../components/dashboard/Dashboard'

const Router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'dashboard',
				element: <Dashboard />
			}
		]
	}
])

export default Router
