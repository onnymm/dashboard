import { useContext, useState } from 'react'
import { AppContext } from '../../contexts/AppContexts'
import { SidebarContext } from '../../contexts/SidebarContext'
import { useClickOutside } from '../../custom hooks/useClickOutside'
import Sidebar from '../sidebar/Sidebar'
import SidebarToggle from '../sidebar/SidebarToggle'

const SidebarContainer = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { sidebarIsLocked, screenIsWide } = useContext(AppContext)

	let domNode = useClickOutside(() => {
		// Si se clickea fuera del nodo:
		if (!sidebarIsLocked || !screenIsWide) setIsOpen(false)
		// Cerrar la sidebar siempre y cuando la sidebar no esté bloqueada o la ventana sea pequeña
	})

	return (
		<div ref={domNode}>
			<SidebarContext.Provider value={{ isOpen, setIsOpen }}>
				<Sidebar />
				<SidebarToggle />
			</SidebarContext.Provider>
		</div>
	)
}

export default SidebarContainer
