import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { FallbackFeed } from './components/feed/FallbackFeed'
import ErrorPage from './routes/error elements/ErrorPage'

const Homepage = lazy(() => import('./routes/homepage/Homepage'))
const Analytics = lazy(() => import('./routes/analytics/Analytics'))
const Ecommerce = lazy(() => import('./routes/ecommerce/Ecommerce'))
const Profile = lazy(() => import('./routes/profile/Profile'))
const ToDo = lazy(() => import('./routes/to do/ToDo'))
const UiTests = lazy(() => import('./routes/ui tests/UiTests'))

const Router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
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
						path: '*',
						element: <ErrorPage /> // Path wildcard para atrapar rutas no definidas
					}
				]
			}
		]
	}
])

export default Router
