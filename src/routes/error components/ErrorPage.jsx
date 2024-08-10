import { HomeIcon } from '@heroicons/react/16/solid'
import { Link, useLocation, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
	const error = useRouteError() // Recibe el error arrojado
	const lowercasedPath = useLocation().pathname.toLowerCase().substring(1) // Extrae path sin slash (/)

	console.error(error)

	return (
		<div className='flex h-full flex-grow flex-col items-center justify-center gap-2 bg-slate-100 py-10 transition duration-300 dark:bg-feed-background-d dark:text-white'>
			<h1 className='my-2 text-5xl font-bold dark:opacity-90'>Oops!</h1>
			<p className='w-7/12 text-center font-medium dark:opacity-70 sm:w-auto'>
				Sorry, an unexpected error has occurred.
			</p>
			<p className='w-1/4 overflow-x-auto text-center opacity-70 dark:text-white dark:opacity-60'>
				<i>{error instanceof Error ? error.message : 'Not found'}</i>
			</p>
			{!lowercasedPath == '' && (
				// Si el path no está vacío (no estamos en el home)...
				<Link className='flex gap-2 rounded-md bg-blue-600 px-4 py-2 text-white shadow transition duration-300 hover:-translate-y-1 hover:bg-blue-500'>
					<HomeIcon className='size-5' />
					<span>Take me home</span>
				</Link>
			)}
		</div>
	)
}

export default ErrorPage
