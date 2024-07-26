import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../contexts/AppContexts'
import { useClickOutside } from '../../custom hooks/useClickOutside'
import SidebarContent from './SidebarContent'

const Sidebar = ({ isOpen, setIsOpen }) => {
	const {
		sidebarIsLocked: isLocked,
		setSidebarIsLocked: setIsLocked,
		isWideScreen
	} = useContext(AppContext)

	isLocked && isWideScreen && !isOpen && setIsOpen(true)
	// Si la sidebar no está bloqueada, y el tamaño de ventana es grande, y la sidebar no está abierta, se manda a abrir

	const handleArrowClick = () => {
		// isLocked && isWideScreen && setIsLocked(false) // Si la sidebar está bloqueada y la ventana es grande, entonces desbloquéala bajo click
		setIsOpen(!isOpen) // Cierra la sidebar
	}

	let domNode = useClickOutside(() => {
		// Si se clickea fuera del nodo:
		if (!isLocked || !isWideScreen) setIsOpen(false)
		// Cerrar la sidebar siempre y cuando la sidebar no esté bloqueada o la ventana sea pequeña
	})

	return (
		<div className='fixed z-9999'>
			<div ref={domNode} className='flex'>
				<aside
					className={`${isOpen ? 'translate-x-0' : '-translate-x-72'} fixed z-999 flex h-screen w-72 flex-col overflow-x-hidden bg-sidebar-background px-2 pb-2 transition duration-500`}
				>
					<div
						className={`${isOpen ? 'opacity-100 delay-200 duration-300' : 'opacity-0'} flex h-20 justify-between p-4 text-white transition-opacity`}
					>
						<NavLink to='' className='flex items-center'>
							<img src='./logo.png' className='size-12' />
							<h1 className='mx-2 text-2xl font-medium'>iaCele</h1>
						</NavLink>
						{/* Si la sidebar no está bloqueada y la ventana es pequeña, mostrar flecha de cierre */}
						{(!isLocked || !isWideScreen) && (
							<button onClick={() => handleArrowClick()} className='ml-auto'>
								<ArrowLeftIcon className='mx-4 size-6' />
							</button>
						)}
					</div>
					<SidebarContent
						setIsOpen={setIsOpen}
						isLocked={isLocked}
						setIsLocked={setIsLocked}
					/>
				</aside>

				{/* Filtro oscuro */}
				<div
					className={`${isOpen && (!isLocked || !isWideScreen) ? 'opacity-20' : 'opacity-0'} pointer-events-none fixed z-99 h-screen w-screen bg-black transition duration-300`}
				/>
				{/* 
					Si la sidebar está abierta y está desbloqueada o la ventana es pequeña: opacidad-20
					Si está cerrada, bloqueada, o en pantalla completa: opacidad-0
				*/}
			</div>
		</div>
	)
}

export default Sidebar
