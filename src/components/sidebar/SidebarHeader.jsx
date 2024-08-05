import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContexts'
import { SidebarContext } from '../../contexts/SidebarContext'
import LogoLink from '../ui kit/LogoLink'

const SidebarHeader = () => {
	const { isOpen, setIsOpen } = useContext(SidebarContext)
	const { sidebarIsLocked, screenIsWide } = useContext(AppContext)

	const handleLogoClick = () => {
		setIsOpen(false)
	}

	const handleArrowClick = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div
			className={`${isOpen ? 'opacity-100 delay-200 duration-300' : 'opacity-0'} flex h-20 justify-between p-4 text-white transition-opacity`}
		>
			{/* Logotipo/link a la página principal */}
			<LogoLink handleClick={handleLogoClick} imgSource='./logo.webp'>
				<h1>iaCele</h1>
			</LogoLink>
			{/* Botón flecha para cierre de sidebar */}
			<button
				onClick={handleArrowClick}
				className={`${!sidebarIsLocked || !screenIsWide ? 'opacity-100' : 'pointer-events-none opacity-0'} mx-4 ml-auto transition duration-150`}
				/* Si la sidebar no está bloqueada y la ventana es pequeña, mostrar botón */
			>
				<ArrowLeftIcon className='size-6' />
			</button>
		</div>
	)
}

export default SidebarHeader
