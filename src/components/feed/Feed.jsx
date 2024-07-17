import { Outlet } from 'react-router-dom'

const Feed = () => {
	console.log('Rendered feed')

	return (
		<main>
			<Outlet />
		</main>
	)
}

export default Feed
