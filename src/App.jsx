import { useState } from 'react'
import Feed from './components/feed/Feed'
import Navbar from './components/navbar/Navbar'
import { AppContext } from './contexts/AppContexts'
import useScreenWidth from './custom hooks/useScreenWidth'

const App = () => {
	const [sidebarIsLocked, setSidebarIsLocked] = useState(false)
	const screenIsWide = useScreenWidth(768) // Hook para cambio de estado dependiendo del ancho de la pantalla

	return (
		<div className='relative z-0 flex h-svh flex-col overflow-x-hidden overflow-y-hidden'>
			<AppContext.Provider
				value={{ sidebarIsLocked, setSidebarIsLocked, screenIsWide }}
			>
				{/* Barra de navegación (contiene también la sidebar para limitar el dominio de render) */}
				<Navbar />
				{/* Contenido de la página (contiene el Outlet para componentes ruteados) */}
				<Feed />
			</AppContext.Provider>
		</div>
	)
}

export default App
