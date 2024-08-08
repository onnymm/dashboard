import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { AppContext } from '../../contexts/AppContexts'
import { useScreenWidth } from '../../custom hooks/useScreenWidth'
import { thresholdForWideScreen } from '../../data/appConfig'

const Feed = () => {
	const { sidebarIsLocked } = useContext(AppContext)
	const screenIsWide = useScreenWidth(thresholdForWideScreen)

	return (
		<div
			className='flex w-full overflow-y-auto bg-slate-100 transition duration-300 dark:bg-feed-background-d'
			style={{
				height: 'calc(100% - 5rem)'
				// El cálculo de height es para considerar la altura de la navbar
			}}
		>
			{/* Margen dinámico de contenido para cuando se bloquee la sidebar */}
			<div
				className={`${sidebarIsLocked && screenIsWide ? 'w-72' : 'w-0'} transition-width duration-500`}
			/>
			{/*
			Contenido de la página, el tamaño se ajusta al contenido, si se requiere que las páginas contenidas en
			Outlet ocupen toda la pantalla *siempre*, añadirles flex-grow a su contenedor.
			*/}
			<main className='mx-auto flex h-min min-h-full max-w-feed-width flex-grow p-6'>
				<Outlet />
			</main>
		</div>
	)
}

export default Feed
