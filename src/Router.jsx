import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { FallbackFeed } from './components/skeletons/FallbackFeed'
import { appLoader } from './data/appLoader'
import ErrorPage from './routes/error components/ErrorPage'

const Dashboard = lazy(() => import('./routes/dashboard/Dashboard'))
const Homepage = lazy(() => import('./routes/homepage/Homepage'))
const Analytics = lazy(() => import('./routes/analytics/Analytics'))
const Ecommerce = lazy(() => import('./routes/ecommerce/Ecommerce'))
const Profile = lazy(() => import('./routes/profile/Profile'))
const ToDo = lazy(() => import('./routes/to do/ToDo'))
const UiTests = lazy(() => import('./routes/ui tests/UiTests'))

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
						path: 'dashboard',
						element: (
							<Suspense fallback={<FallbackFeed />}>
								<Dashboard />
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
