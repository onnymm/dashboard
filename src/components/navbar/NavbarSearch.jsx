import { useContext, useState } from 'react'
import { AppContext } from '../../contexts/AppContexts'
import { useClickOutside } from '../../custom hooks/useClickOutside'
import SearchIcon from '../ui kit/SearchIcon'

const NavbarSearch = () => {
	const [search, setSearch] = useState('')
	const [bottomIsDisplayed, setBottomIsDisplayed] = useState(false)
	const { sidebarIsLocked, isWideScreen } = useContext(AppContext)

	const handleDisplayMiniSearch = e => {
		e.preventDefault()
		setBottomIsDisplayed(!bottomIsDisplayed) // Mostrar la barra de búsqueda flotante
	}

	const handleSearch = e => {
		e.preventDefault
	}

	const sharedSearchTail = // Estilos compartidos entre los inputs de búsqueda
		'dark:opacity-80 bg-transparent text-sm opacity-100 focus:outline-none dark:text-white dark:placeholder-white'

	let domNode = useClickOutside(() => {
		// Si se clickea fuera del nodo:
		search && setSearch('')
		bottomIsDisplayed && setBottomIsDisplayed(false)
	})

	if (isWideScreen && bottomIsDisplayed) setBottomIsDisplayed(false) // Si la ventana es grande esconder la barra de búsqueda flotante
	if (!isWideScreen && search && !bottomIsDisplayed) setBottomIsDisplayed(true) // Si la ventana es pequeña y hay contenido en búsqueda, mostrarla

	return (
		<>
			<div
				className={`${sidebarIsLocked && isWideScreen ? 'w-36' : 'w-14 sm:w-20'} flex transition-width duration-500`}
			/>
			<form className='relative flex' ref={domNode}>
				{/* Barra de búsqueda principal (se muestra cuando la ventana es lo suficientemente grande) */}
				{!bottomIsDisplayed && (
					<SearchIcon
						handleClick={isWideScreen ? handleSearch : handleDisplayMiniSearch}
					/>
				)}
				<input
					className={`hidden px-2 md:block ${sharedSearchTail}`}
					placeholder='Type to search...'
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
				{/* Barra de búsqueda flotante (se muestra cuando la ventana no es lo suficientemente grande) */}
				<div
					className={`${!isWideScreen && bottomIsDisplayed ? 'opacity-100' : 'pointer-events-none opacity-0'} absolute -left-14 top-14 flex w-min gap-2 rounded-md bg-white px-4 shadow-back transition dark:bg-darkmode-switch-background-d sm:left-0`}
				>
					<input
						className={`z-9 h-12 ${sharedSearchTail}`}
						placeholder='Type to search...'
						value={search}
						onChange={e => setSearch(e.target.value)}
					/>
					<SearchIcon handleClick={handleSearch} />
				</div>
			</form>
		</>
	)
}

export default NavbarSearch
