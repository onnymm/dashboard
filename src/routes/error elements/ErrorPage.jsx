import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
	const error = useRouteError() // Devuelve el error arrojado

	console.error(error)

	return (
		<div className='flex flex-grow flex-col items-center justify-center opacity-90'>
			<h1 className='my-5 text-5xl font-bold'>Oops!</h1>
			<p className='font-medium'>Sorry, an unexpected error has ocurred.</p>
			<p>
				<i>{error || 'Not found'}</i>
			</p>
		</div>
	)
}

export default ErrorPage
