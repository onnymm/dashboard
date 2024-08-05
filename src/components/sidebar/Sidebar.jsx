import { useContext, useEffect } from 'react'
import { AppContext } from '../../contexts/AppContexts'
import { SidebarContext } from '../../contexts/SidebarContext'
import { useScreenWidth } from '../../custom hooks/useScreenWidth'
import { thresholdForWideScreen } from '../../data/appConfig'
import SidebarContent from './SidebarContent'
import SidebarHeader from './SidebarHeader'

const Sidebar = () => {
	const { isOpen, setIsOpen } = useContext(SidebarContext)
	const { sidebarIsLocked: isLocked } = useContext(AppContext)
	const screenIsWide = useScreenWidth(thresholdForWideScreen)

	useEffect(() => {
		if (isLocked && screenIsWide && !isOpen) {
			!isOpen && setIsOpen(true)
		}
	}, [isLocked, screenIsWide, isOpen, setIsOpen])
	// Si la sidebar no está bloqueada, y el tamaño de ventana es grande, y la sidebar no está abierta, se manda a abrir

	return (
		<div className='fixed z-9999 select-none'>
			{/* Sidebar */}
			<aside
				className={`${isOpen ? 'translate-x-0' : '-translate-x-72'} fixed z-999 flex h-screen w-72 flex-col overflow-x-hidden bg-sidebar-background px-2 pb-2 transition duration-500`}
			>
				<SidebarHeader />
				<SidebarContent />
			</aside>

			{/* Filtro oscuro */}
			<div
				className={`${isOpen && (!isLocked || !screenIsWide) ? 'opacity-20' : 'opacity-0'} pointer-events-none fixed z-99 h-screen w-screen bg-black transition duration-300`}
			/>
			{/* 
			- Si la sidebar está abierta y está desbloqueada o la ventana es pequeña: opacidad-20
			- Si está cerrada, bloqueada, o en pantalla completa: opacidad-0
			}*/}
		</div>
	)
}

export default Sidebar
