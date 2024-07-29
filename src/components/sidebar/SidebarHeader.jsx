import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../contexts/AppContexts'
import { SidebarContext } from '../../contexts/SidebarContext'

const SidebarHeader = () => {
	const { isOpen, setIsOpen } = useContext(SidebarContext)
	const { sidebarIsLocked, screenIsWide } = useContext(AppContext)

	return (
		<div
			className={`${isOpen ? 'opacity-100 delay-200 duration-300' : 'opacity-0'} flex h-20 justify-between p-4 text-white transition-opacity`}
		>
			{/* Logotipo/link a la página principal */}
			<NavLink
				to=''
				className='flex items-center gap-1'
				onClick={() => setIsOpen(false)}
			>
				<img src='./logo.png' className='size-12 rotate-50' />
				<h1 className='text-2xl font-medium'>iaCele</h1>
			</NavLink>
			{/* Botón flecha para cierre de sidebar */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={`${!sidebarIsLocked || !screenIsWide ? 'opacity-100' : 'pointer-events-none opacity-0'} ml-auto transition duration-150`}
				/* Si la sidebar no está bloqueada y la ventana es pequeña, mostrar botón */
			>
				<ArrowLeftIcon className='mx-4 size-6' />
			</button>
		</div>
	)
}

export default SidebarHeader
