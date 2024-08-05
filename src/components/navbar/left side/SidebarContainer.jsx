import { useContext, useState } from 'react'
import { AppContext } from '../../../contexts/AppContexts'
import { SidebarContext } from '../../../contexts/SidebarContext'
import { useClickOutside } from '../../../custom hooks/useClickOutside'
import Sidebar from '../../sidebar/Sidebar'
import Bars3Button from '../../ui kit/Bars3Button'

/*
El componente se contiene dentro de la navbar
para limitar el dominio de render.
*/
const SidebarContainer = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { sidebarIsLocked, screenIsWide } = useContext(AppContext)

	let domNode = useClickOutside(() => {
		// Si se clickea fuera del nodo:
		if (!sidebarIsLocked || !screenIsWide) setIsOpen(false)
		// Cerrar la sidebar siempre y cuando la sidebar no esté bloqueada o la ventana sea pequeña
	})

	const handleToggleClick = () => {
		!isOpen && setIsOpen(true)
	}

	return (
		<div ref={domNode} className='border-black'>
			<SidebarContext.Provider value={{ isOpen, setIsOpen }}>
				<Sidebar />
			</SidebarContext.Provider>
			<Bars3Button
				handleClick={handleToggleClick}
				extraStyles='absolute bottom-1/4 left-[4.5rem] z-9 sm:left-[10.5rem]'
			/>
		</div>
	)
}

export default SidebarContainer
