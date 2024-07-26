import { useEffect, useState } from 'react'
import Feed from './components/feed/Feed'
import Navbar from './components/navbar/Navbar'
import { AppContext } from './contexts/AppContexts'

const App = () => {
	const [sidebarIsLocked, setSidebarIsLocked] = useState(false)
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

	const isWideScreen = windowWidth > 768

	return (
		<div className='relative z-0 flex h-svh flex-col overflow-x-hidden'>
			<AppContext.Provider
				value={{ sidebarIsLocked, setSidebarIsLocked, isWideScreen }}
			>
				<div className='relative'>
					{/* Barra de navegación */}
					<Navbar />
					{/* Contiene también la sidebar para limitar el dominio de render. */}
				</div>
				<div
					className='transition-color -z-9 w-full overflow-y-auto bg-slate-100 duration-300 dark:bg-feed-background-d'
					style={{
						minHeight: 'calc(100% - 5rem)'
					}}
				>
					{/* Contenido de la página */}
					<Feed />
					{/* Contiene el outlet para componentes ruteados (se encuentran en el folder "pages") */}
				</div>
			</AppContext.Provider>
		</div>
	)
}

export default App
