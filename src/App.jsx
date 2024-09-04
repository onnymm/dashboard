import { useState } from 'react'
import Feed from './components/common/feed/Feed'
import Navbar from './components/common/navbar/Navbar'
import { AppContext } from './contexts/AppContexts'

const App = () => {
	const [sidebarIsLocked, setSidebarIsLocked] = useState(false)

	return (
		<div className='relative z-0 flex flex-col h-svh'>
			<AppContext.Provider value={{ sidebarIsLocked, setSidebarIsLocked }}>
				{/* Barra de navegación (contiene también la sidebar para limitar el dominio de render) */}
				<Navbar />
				{/* Contenido de la página (contiene el Outlet para componentes ruteados) */}
				<Feed />
			</AppContext.Provider>
		</div>
	)
}

export default App
