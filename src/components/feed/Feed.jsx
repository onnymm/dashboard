import { useContext } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { AppContext } from '../../contexts/AppContexts'

const Feed = () => {
	const { sidebarIsLocked, screenIsWide } = useContext(AppContext)
	const navigationState = useNavigation().state // (idle | loading | submitting)

	console.log(navigationState)

	return (
		<div
			className='-z-9 flex min-h-full w-full overflow-y-auto bg-slate-100 transition duration-300 dark:bg-feed-background-d'
			style={{
				minHeight: 'calc(100% - 5rem)'
				// El cálculo de minHeight es para considerar la altura de la navbar
			}}
		>
			{/* Margen dinámico de contenido para cuando se bloquee la sidebar */}
			<div
				className={`${navigationState === 'loading' ? 'opacity-50' : ''} ${sidebarIsLocked && screenIsWide ? 'w-72' : 'w-0'} transition-width duration-500`}
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
