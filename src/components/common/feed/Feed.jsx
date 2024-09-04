import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { AppContext } from '../../../contexts/AppContexts'
import { useScreenWidth } from '../../../custom hooks/useScreenWidth'
import { thresholdForWideScreen } from '../../../data/appConfig'

const Feed = () => {
	const { sidebarIsLocked } = useContext(AppContext)
	const screenIsWide = useScreenWidth(thresholdForWideScreen)

	return (
		<div
			// El cálculo de height es para considerar la altura de la navbar
			className='flex bg-slate-100 dark:bg-feed-background-d w-full h-[calc(100%_-_5rem)] transition duration-dark overflow-y-auto'
		>
			<div
				// Margen dinámico de contenido para cuando se bloquee la sidebar
				className={`${sidebarIsLocked && screenIsWide ? "w-72" : "w-0"} transition-width duration-500`}
			/>
			<main
				// Contenido de la página, el tamaño se ajusta al contenido, si se requiere que las páginas contenidas en
				// Outlet ocupen toda la pantalla *siempre*, añadirles flex-grow a su contenedor.
				className={`${sidebarIsLocked && screenIsWide ? "w-[calc(100%_-_18rem)]" : "w-full"} transition-width duration-500 flex mx-0-red-500 p-2 sm:p-6 max-w-feed-width h-min min-h-full`}
			>
				<Outlet />
			</main>
		</div>
	)
}

export default Feed
