import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { AppContext } from '../../contexts/AppContexts'

const Feed = () => {
	const { sidebarIsLocked, isWideScreen } = useContext(AppContext)

	return (
		<div
			className='-z-9 flex min-h-full w-full overflow-y-auto bg-slate-100 transition duration-300 dark:bg-feed-background-d'
			style={{
				minHeight: 'calc(100% - 5rem)'
			}}
		>
			{/* Margen dinámico de contenido para cuando se bloquée la sidebar */}
			<div
				className={`${sidebarIsLocked && isWideScreen ? 'w-72' : 'w-0'} transition-width duration-500`}
			/>
			{/* Contenido de la página */}
			<main className='mx-auto flex h-min min-h-full max-w-feed-width flex-grow p-6'>
				<Outlet />
			</main>
		</div>
	)
}

export default Feed
