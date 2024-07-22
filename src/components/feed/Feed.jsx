import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { AppContext } from '../../contexts/AppContexts'

const Feed = () => {
	const { sidebarIsOpen } = useContext(AppContext)

	return (
		<div className='flex'>
			<div
				className={`${sidebarIsOpen ? 'w-72' : 'w-0'} transition-width duration-500`}
			/>
			<main className='mx-auto flex max-w-feed-width flex-grow p-6'>
				<Outlet />
			</main>
		</div>
	)
}

export default Feed
