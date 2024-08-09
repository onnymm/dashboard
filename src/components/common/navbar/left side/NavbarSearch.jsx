import { useContext, useEffect, useState } from 'react'
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

	console.log(bottomIsDisplayed)

	useEffect(() => {
		if (screenIsWide && bottomIsDisplayed) {
			setBottomIsDisplayed(false)
		} else if (!screenIsWide && search && !bottomIsDisplayed) {
			setBottomIsDisplayed(true)
		}
	}, [screenIsWide, bottomIsDisplayed, search])

	const displayMiniSearch = () => {
		setBottomIsDisplayed(true)
	}

	const hideMiniSearch = () => {
		bottomIsDisplayed && setBottomIsDisplayed(false)
	}

	const handleSubmit = () => {
		setSearch('')
		hideMiniSearch()
	}

	let domNode = useClickOutside(hideMiniSearch)

	return (
		<>
			<div
				className={`${sidebarIsLocked && screenIsWide ? 'w-40' : 'w-14 sm:w-20'} flex transition-width duration-500`}
			/>
			<div
				className={`${!bottomIsDisplayed ? 'opacity-100' : 'pointer-events-none opacity-0'} flex transition duration-100`}
			>
				{!screenIsWide && (
					<SearchButton
						handleClick={e =>
							screenIsWide ? hideMiniSearch(e) : displayMiniSearch(e)
						}
					/>
				)}
			</div>
			<Form className='relative flex' onSubmit={handleSubmit} ref={domNode}>
				{screenIsWide && (
					<div
						className={`${!bottomIsDisplayed ? 'opacity-100' : 'pointer-events-none opacity-0'} flex transition duration-100`}
					>
						<SearchButton />
					</div>
				)}
				<input
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
