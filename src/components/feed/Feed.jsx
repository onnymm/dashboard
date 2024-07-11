import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

const Feed = () => {
	return (
		<div className='flex-1 flex-col h-screen overflow-y-auto'>
			<Navbar />
			<main className='bg-content-background'>
				<Outlet />
			</main>
		</div>
	)
}

export default Feed
