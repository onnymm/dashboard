import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { FallbackFeed } from './components/skeletons/FallbackFeed'
import { appLoader } from './data/appLoader'
import Comisiones from './routes/Comisiones'
import ErrorPage from './routes/ErrorPage'
import MyOrders from './routes/MyOrders'

const Homepage = lazy(() => import('./routes/Homepage'))
const Analytics = lazy(() => import('./routes/Analytics'))
const Ecommerce = lazy(() => import('./routes/Ecommerce'))
const Profile = lazy(() => import('./routes/Profile'))
const ToDo = lazy(() => import('./routes/ToDo'))
const UiTests = lazy(() => import('./routes/UiTests'))

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		loader: appLoader,
		children: [
			{
				children: [
					{
						index: true,
						element: (
							<Suspense fallback={<FallbackFeed />}>
								<Homepage />
							</Suspense>
						)
					},
					{
						path: 'myorders',
						element: (
							<Suspense fallback={<FallbackFeed />}>
								<MyOrders />
							</Suspense>
						)
					},
					{
						path: 'profile',
						element: (
							<Suspense fallback={<FallbackFeed />}>
								<Profile />
							</Suspense>
						)
					},
					{
						path: 'ecommerce',
						element: (
							<Suspense fallback={<FallbackFeed />}>
								<Ecommerce />
							</Suspense>
						)
					},
					{
						path: 'analytics',
						element: (
							<Suspense fallback={<FallbackFeed />}>
								<Analytics />
							</Suspense>
						)
					},
					{
						path: 'to-do',
						element: (
							<Suspense fallback={<FallbackFeed />}>
								<ToDo />
							</Suspense>
						)
					},
					{
						path: 'ui-tests',
						element: (
							<Suspense fallback={<FallbackFeed />}>
								<UiTests />
							</Suspense>
						)
					},
					{
						path: 'comisiones',
						element: (
							<Suspense fallback={<FallbackFeed />}>
								<Comisiones />
							</Suspense>
						)
					},
					{
						path: '*',
						element: <ErrorPage /> // Path wildcard para atrapar rutas no definidas
					}
				]
			}
		]
	}
])

export default router
