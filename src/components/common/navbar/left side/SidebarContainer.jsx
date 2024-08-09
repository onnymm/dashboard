import { useContext, useState } from 'react'
import { AppContext } from '../../../../contexts/AppContexts'
import { SidebarContext } from '../../../../contexts/SidebarContext'
import { useClickOutside } from '../../../../custom hooks/useClickOutside'
import { useScreenWidth } from '../../../../custom hooks/useScreenWidth'
import { thresholdForWideScreen } from '../../../../data/appConfig'
import Bars3Button from '../../../ui kit/Bars3Button'
import Sidebar from '../../sidebar/Sidebar'

/*
El componente se contiene dentro de la navbar
para limitar el dominio de render.
*/
const SidebarContainer = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { sidebarIsLocked } = useContext(AppContext)
	const screenIsWide = useScreenWidth(thresholdForWideScreen)

	let domNode = useClickOutside(() => {
		// Si se clickea fuera del nodo:
		if (!sidebarIsLocked || !screenIsWide) setIsOpen(false)
		// Cerrar la sidebar siempre y cuando la sidebar no esté bloqueada o la ventana sea pequeña
	})

	const handleToggleClick = () => {
		!isOpen && setIsOpen(true)
	}

	return (
		<div ref={domNode}>
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
