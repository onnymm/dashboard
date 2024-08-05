import { HomeIcon } from '@heroicons/react/16/solid'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
	const error = useRouteError() // Retrieves the thrown error

	console.error(error)

	return (
		<div className='flex flex-grow flex-col items-center justify-center gap-2 py-10 opacity-90 dark:text-white dark:opacity-80'>
			<h1 className='my-2 text-5xl font-bold'>Oops!</h1>
			<p className='w-7/12 text-center font-medium sm:w-auto'>
				Sorry, an unexpected error has occurred.
			</p>
			<p className='w-1/4 overflow-y-auto text-center opacity-70 dark:text-white'>
				<i>{error instanceof Error ? error.message : 'Not found'}</i>
			</p>
			<Link className='flex gap-2 rounded-md border bg-blue-600 p-2 text-white shadow transition duration-300 hover:-translate-y-1 hover:bg-blue-500'>
				<HomeIcon className='size-5' />
				<span>Take me home</span>
			</Link>
		</div>
	)
}

export default ErrorPage
