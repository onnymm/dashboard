import { useContext, useEffect, useRef, useState } from 'react'
import { Form, useLoaderData } from 'react-router-dom'
import { AppContext } from '../../../../contexts/AppContexts'
import { useClickOutside } from '../../../../custom hooks/useClickOutside'
import { useScreenWidth } from '../../../../custom hooks/useScreenWidth'
import { thresholdForWideScreen } from '../../../../data/appConfig'
import SearchButton from '../../../ui/SearchButton'

const NavbarSearch = () => {
	const { search: initialSearch } = useLoaderData()
	const [search, setSearch] = useState(initialSearch || '')
	const [miniSearchIsDisplayed, setMiniSearchIsDisplayed] = useState(false)
	const { sidebarIsLocked } = useContext(AppContext)
	const screenIsWide = useScreenWidth(thresholdForWideScreen)

	// Para manipular enfoque
	const inputRef = useRef(null)

	// Mostrar/esconder la barra de búsqueda flotante
	const toggleBottomDisplay = show => {
		setMiniSearchIsDisplayed(show)
	}

	useEffect(() => {
		const handleKeyDown = e => {
			// Si se presiona escape, se cierra la barra de búsqueda flotante
			if (e.key === 'Escape') {
				toggleBottomDisplay(false)
			}
		}

		if (miniSearchIsDisplayed) {
			inputRef.current?.focus() // Enfoca el input en cuanto se muestra para poder teclear directamente

			// Se esconde el input en cuanto la pantalla es lo suficientemente grande
			screenIsWide && toggleBottomDisplay(false)

			// Listener
			document.addEventListener('keydown', handleKeyDown)

			// Limpiado de listener
			return () => {
				document.removeEventListener('keydown', handleKeyDown)
			}
		}
		// else if (!screenIsWide && search) {
		// 	toggleBottomDisplay(true)
		// }
	}, [screenIsWide, miniSearchIsDisplayed, search])

	const handleHideMiniSearch = () => {
		toggleBottomDisplay(false)
	}

	const handleDisplayMiniSearch = () => {
		toggleBottomDisplay(true)
	}

	const handleSubmit = e => {
		e.preventDefault() // Prevent the default form submission
		setSearch('')
		toggleBottomDisplay(false)
	}

	let domNode = useClickOutside(handleHideMiniSearch)

	return (
		<>
			{/* Div para hacer espacio para la sidebar cuando se bloquee */}
			<div
				className={`${sidebarIsLocked && screenIsWide ? 'w-40' : 'w-14 sm:w-20'} flex transition-width duration-500`}
			/>
			{/* Ícono de búsqueda */}
			{!screenIsWide && (
				<div
					className={`${!miniSearchIsDisplayed ? 'opacity-100' : 'pointer-events-none opacity-0'} flex transition duration-100`}
				>
					<SearchButton
						handleClick={
							screenIsWide ? handleHideMiniSearch : handleDisplayMiniSearch
						}
					/>
				</div>
			)}
			{/* Barra de búsqueda */}
			<Form className='relative flex' onSubmit={handleSubmit} ref={domNode}>
				{/* Ícono de búsqueda */}
				{screenIsWide && (
					<div
						className={`${!miniSearchIsDisplayed ? 'opacity-100' : 'pointer-events-none opacity-0'} flex transition duration-100`}
					>
						<SearchButton />
					</div>
				)}
				{/*
				Hay duplicado del ícono de búsqueda para separar sus funcionalidades
				sin necesidad de utilizar prevent default (porque complicaría mandar
				datos al loader). Uno muestra y esconde la barra de búsqueda flotante,
				otro hace submit del Form al loader.
				*/}
				<input
					ref={inputRef} // Nos permite manipular focus
					name='query'
					type='search'
					value={search}
					autoComplete='off'
					onChange={e => setSearch(e.target.value)}
					placeholder='Buscar...'
					className={`${miniSearchIsDisplayed ? 'absolute -left-10 top-12 rounded-md bg-white p-4 shadow-back dark:bg-navbar-icons-background-d' : 'hidden bg-transparent px-2 dark:opacity-80 md:block'} text-sm focus:outline-none dark:text-white dark:placeholder-white dark:placeholder-opacity-80`}
				/>
			</Form>
		</>
	)
}

export default NavbarSearch
