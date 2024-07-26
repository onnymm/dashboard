import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { AppContext } from '../../contexts/AppContexts'

const Feed = () => {
	const { sidebarIsLocked, isWideScreen } = useContext(AppContext)

	return (
		<div className='flex min-h-full'>
			{/* Margen dinámico de contenido para cuando se bloquée la sidebar */}
			<div
				className={`${sidebarIsLocked && isWideScreen ? 'w-72' : 'w-0'} transition-width duration-500`}
			/>
			{/* Contenido de la página */}
			<main className='mx-auto flex max-w-feed-width flex-grow p-6'>
				<Outlet />
			</main>
		</div>
	)
}

export default Feed
