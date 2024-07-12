import { Outlet } from 'react-router-dom'

const Feed = () => {
	return (
		<main className='bg-content-background'>
			<Outlet />
		</main>
	)
}

export default Feed
