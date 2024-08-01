import { useEffect, useState } from 'react'
import Feed from './components/feed/Feed'
import Navbar from './components/navbar/Navbar'
import { AppContext } from './contexts/AppContexts'

const App = () => {
	const [sidebarIsLocked, setSidebarIsLocked] = useState(false)
	const [screenIsWide, setScreenIsWide] = useState(window.innerWidth > 768)

	// Hook para cambio de estado dependiendo del ancho de la pantalla, si es <= 768, la pantalla es pequeña
	useEffect(() => {
		const handleResize = () => {
			const currentWidth = window.innerWidth
			if (currentWidth > 768 && !screenIsWide) {
				setScreenIsWide(true)
			} else if (currentWidth <= 768 && screenIsWide) {
				setScreenIsWide(false)
			}
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [screenIsWide])

	return (
		<div className='relative z-0 flex h-svh flex-col overflow-x-hidden overflow-y-hidden'>
			<AppContext.Provider
				value={{ sidebarIsLocked, setSidebarIsLocked, screenIsWide }}
			>
				{/* Barra de navegación (contiene también la sidebar para limitar el dominio de render) */}
				<Navbar />
				{/* Contenido de la página (contiene el Outlet para componentes ruteados)*/}
				<Feed />
			</AppContext.Provider>
		</div>
	)
}

export default App
