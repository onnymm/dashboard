import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../contexts/AppContexts'
import { useClickOutside } from '../../custom hooks/useClickOutside'
import SearchIcon from '../ui kit/SearchIcon'

const NavbarSearch = () => {
	const [search, setSearch] = useState('')
	const [bottomIsDisplayed, setBottomIsDisplayed] = useState(false)
	const [hasBeenClicked, setHasBeenClicked] = useState(false)
	/*
	El estado hasBeenClicked está para prevenir la animación de fade out hasta que se use por
	primera vez el botón, si no se usa este estado, la animación de fade out se ejecutará cada
	carga de página
	*/

	const { sidebarIsLocked, screenIsWide } = useContext(AppContext)

	useEffect(() => {
		if (screenIsWide && bottomIsDisplayed) {
			setBottomIsDisplayed(false) // Si la ventana es grande esconder la barra de búsqueda flotante
		} else if (!screenIsWide && search && !bottomIsDisplayed) {
			setBottomIsDisplayed(true) // Si la ventana es pequeña y hay contenido en búsqueda, mostrarla
		}
	}, [screenIsWide, bottomIsDisplayed, search])

	const displayMiniSearch = e => {
		e.preventDefault() // Se previene la recarga de página bajo submit del botón
		setHasBeenClicked(true)
		setBottomIsDisplayed(!bottomIsDisplayed) // Mostrar la barra de búsqueda flotante
	}

	const handleSearch = e => {
		e.preventDefault()
		bottomIsDisplayed && setBottomIsDisplayed(false)
		search && setSearch('')
	}

	const sharedSearchTail = // Estilos compartidos entre los inputs de búsqueda
		'dark:opacity-80 bg-transparent text-sm opacity-100 focus:outline-none dark:text-white dark:placeholder-white'

	let domNode = useClickOutside(() => {
		// Si se clickea fuera del nodo:
		search && setSearch('')
		bottomIsDisplayed && setBottomIsDisplayed(false)
	})

	return (
		<>
			{/* Este div desplaza el search cuando se bloquea la pantalla (solo si la pantalla es grande) */}
			<div
				className={`${sidebarIsLocked && screenIsWide ? 'w-40' : 'w-14 sm:w-20'} flex transition-width duration-500`}
			/>
			<form className='relative flex' ref={domNode}>
				{/* Barra de búsqueda principal (se muestra cuando la ventana es lo suficientemente grande) */}
				<div
					className={`${!bottomIsDisplayed ? 'opacity-100' : 'pointer-events-none opacity-0'} flex transition duration-100`}
				>
					<SearchIcon
						handleClick={screenIsWide ? handleSearch : displayMiniSearch}
					/>
				</div>
				<input
					className={`hidden px-2 md:block ${sharedSearchTail}`}
					placeholder='Type to search...'
					value={search}
					onChange={e => setSearch(e.target.value)}
					onKeyDown={e => e.key === 'Enter' && handleSearch(e)}
				/>
				{/* Barra de búsqueda flotante (se muestra cuando la ventana no es lo suficientemente grande) */}
				<div
					className={`${!screenIsWide && bottomIsDisplayed ? 'animate-fade-grow-in' : hasBeenClicked ? 'pointer-events-none animate-fade-shrink-out' : 'pointer-events-none opacity-0'} absolute -left-14 top-14 flex w-min gap-2 rounded-md bg-white px-4 shadow-back transition dark:bg-darkmode-switch-background-d sm:left-0`}
				>
					<input
						className={`z-9 h-12 ${sharedSearchTail}`}
						placeholder='Type to search...'
						value={search}
						onChange={e => setSearch(e.target.value)}
						onKeyDown={e => e.key === 'Enter' && handleSearch(e)}
					/>
					<SearchIcon handleClick={handleSearch} />
				</div>
			</form>
		</>
	)
}

export default NavbarSearch
