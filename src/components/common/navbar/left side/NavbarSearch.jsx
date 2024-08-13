import { useContext, useEffect, useRef, useState } from 'react'
import { Form, useLoaderData } from 'react-router-dom'
import { AppContext } from '../../../../contexts/AppContexts'
import { useClickOutside } from '../../../../custom hooks/useClickOutside'
import { useScreenWidth } from '../../../../custom hooks/useScreenWidth'
import { thresholdForWideScreen } from '../../../../data/appConfig'
import SearchButton from '../../../ui kit/SearchButton'

const NavbarSearch = () => {
	const { search: initialSearch } = useLoaderData()
	const [search, setSearch] = useState(initialSearch || '')
	const [bottomIsDisplayed, setBottomIsDisplayed] = useState(false)
	const { sidebarIsLocked } = useContext(AppContext)
	const screenIsWide = useScreenWidth(thresholdForWideScreen)

	const inputRef = useRef(null)

	useEffect(() => {
		const handleKeyDown = e => {
			// Si se presiona escape, se cierra la barra de búsqueda flotante
			if (e.key === 'Escape') {
				bottomIsDisplayed && setBottomIsDisplayed(false)
			}
		}

		if (bottomIsDisplayed) {
			inputRef.current?.focus() // Enfoca el input en cuanto se muestra para poder teclear directamente

			// Se "esconde" el input en cuanto la pantalla es lo suficientemente grande
			screenIsWide && setBottomIsDisplayed(false)

			// Listener
			document.addEventListener('keydown', handleKeyDown)

			// Limpiado de listener
			return () => {
				document.removeEventListener('keydown', handleKeyDown)
			}
		} else if (!screenIsWide && search) {
			setBottomIsDisplayed(true)
		}
	}, [screenIsWide, bottomIsDisplayed, search])

	const hideMiniSearch = () => {
		bottomIsDisplayed && setBottomIsDisplayed(false)
	}

	const displayMiniSearch = () => {
		setBottomIsDisplayed(true)
	}

	const handleSubmit = () => {
		setSearch('')
		hideMiniSearch()
	}

	let domNode = useClickOutside(hideMiniSearch)

	return (
		<>
			{/* Div para hacer espacio para la sidebar cuando se bloquee */}
			<div
				className={`${sidebarIsLocked && screenIsWide ? 'w-40' : 'w-14 sm:w-20'} flex transition-width duration-500`}
			/>
			{/* Ícono de búsqueda */}
			{!screenIsWide && (
				<div
					className={`${!bottomIsDisplayed ? 'opacity-100' : 'pointer-events-none opacity-0'} flex transition duration-100`}
				>
					<SearchButton
						handleClick={e =>
							screenIsWide ? hideMiniSearch(e) : displayMiniSearch(e)
						}
					/>
				</div>
			)}
			{/* Barra de búsqueda */}
			<Form className='relative flex' onSubmit={handleSubmit} ref={domNode}>
				{screenIsWide && (
					<div
						className={`${!bottomIsDisplayed ? 'opacity-100' : 'pointer-events-none opacity-0'} flex transition duration-100`}
					>
						<SearchButton />
					</div>
				)}
				<input
					ref={inputRef}
					name='query'
					type='search'
					value={search}
					autoComplete='off'
					onChange={e => setSearch(e.target.value)}
					placeholder='Type to search...'
					className={`${bottomIsDisplayed ? 'absolute -left-10 top-12 rounded-md bg-white p-4 shadow-back dark:bg-navbar-icons-background-d' : 'hidden bg-transparent px-2 dark:opacity-80 md:block'} text-sm focus:outline-none dark:text-white dark:placeholder-white dark:placeholder-opacity-80`}
				/>
			</Form>
		</>
	)
}

export default NavbarSearch
