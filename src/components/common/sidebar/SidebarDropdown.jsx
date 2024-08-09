import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DropdownLink from '../../ui kit/DropdownLink'
import List from '../../ui kit/List'

const SidebarDropdown = ({
	icon: Icon,
	label,
	content,
	height,
	handleContentClick
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const [aRouteIsOnPath, setARouteIsOnPath] = useState(false)

	const lowercasedPath = useLocation().pathname.toLowerCase().substring(1)
	// Extrae la ruta actual de la app

	useEffect(() => {
		// Si existe contenido y alguna de las rutas contenidas es idéntica a la ruta en la que se encuentra la app actualmente
		if (content) {
			const matchPath = content.some(item => lowercasedPath === item.route)
			setARouteIsOnPath(matchPath) // Marcar que una ruta en el dropdown está activa
			aRouteIsOnPath ? setIsOpen(true) : setIsOpen(false) // Si una ruta en el dropdown está activa, mantenerlo abierto, si no, cerrarlo
		}
	}, [content, lowercasedPath, aRouteIsOnPath])

	const handleDropdownClick = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			{/* Dropdown */}
			<div
				className={`${aRouteIsOnPath && 'bg-sidebar-section-hover shadow-md'} mb-1 flex cursor-pointer items-center px-5 py-2 text-white transition duration-300 hover:bg-sidebar-section-hover hover:shadow-md dark:hover:bg-sidebar-section-hover-d`}
				onClick={handleDropdownClick}
			>
				<div className='flex gap-2'>
					<Icon className='size-6 opacity-80' />
					<span className='text leading-relaxed opacity-80'>{label}</span>
				</div>
				<ChevronDownIcon
					className={`${isOpen && 'rotate-180'} ml-auto size-6 opacity-70 transition duration-300`}
				/>
			</div>

			{/* Contenido */}
			{content && (
				<div
					style={{ height: isOpen ? `${height}rem` : '0rem' }}
					className={`overflow-hidden pl-6 transition-all duration-300`}
				>
					{/* Lista generadora de componentes */}
					<List
						Contains={DropdownLink}
						data={content}
						name='links'
						handleClick={handleContentClick}
					/>
				</div>
			)}
		</>
	)
}

export default SidebarDropdown
