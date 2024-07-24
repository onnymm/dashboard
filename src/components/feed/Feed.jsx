import { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { AppContext } from '../../contexts/AppContexts'

const Feed = () => {
	const { sidebarIsLocked } = useContext(AppContext)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [windowWidth])

	const isWideScreen = windowWidth > 1250

	return (
		<div className='flex'>
			<div
				className={`${sidebarIsLocked && isWideScreen ? 'w-72' : 'w-0'} transition-width duration-500`}
			/>
			<main className='mx-auto flex max-w-feed-width flex-grow p-6'>
				<Outlet />
			</main>
		</div>
	)
}

export default Feed
