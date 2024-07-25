import { useContext, useState } from 'react'
import { AppContext } from '../../contexts/AppContexts'
import { useClickOutside } from '../../custom hooks/useClickOutside'
import SearchIcon from '../ui kit/SearchIcon'

const NavbarSearch = () => {
	const [search, setSearch] = useState('')
	const [bottomIsDisplayed, setBottomIsDisplayed] = useState(false)
	const { sidebarIsLocked, isWideScreen } = useContext(AppContext)

	const handleMainSearchClick = e => {
		e.preventDefault()
		setBottomIsDisplayed(!bottomIsDisplayed)
	}

	const handleSearchClick = e => {
		e.preventDefault
	}

	const sharedSearchTail =
		'bg-transparent text-sm opacity-80 focus:outline-none dark:text-white dark:placeholder-white'

	let domNode = useClickOutside(() => {
		search && setSearch('')
		setBottomIsDisplayed(false)
	})

	if (isWideScreen && bottomIsDisplayed) setBottomIsDisplayed(false)
	if (!isWideScreen && search && !bottomIsDisplayed) setBottomIsDisplayed(true)

	return (
		<>
			<div
				className={`${sidebarIsLocked && isWideScreen ? 'w-36' : 'w-14 sm:w-20'} flex transition-width duration-500`}
			/>
			<form className='relative flex' ref={domNode}>
				<SearchIcon
					handleClick={isWideScreen ? handleSearchClick : handleMainSearchClick}
				/>
				<input
					className={`hidden px-2 md:block ${sharedSearchTail}`}
					placeholder='Type to search...'
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
				<div
					className={`${!isWideScreen && bottomIsDisplayed ? 'opacity-100' : 'pointer-events-none opacity-0'} absolute -left-14 top-14 flex w-min gap-2 rounded-md bg-white px-4 shadow-back transition sm:left-0`}
				>
					<input
						className={`z-9 h-12 ${sharedSearchTail}`}
						placeholder='Type to search...'
						value={search}
						onChange={e => setSearch(e.target.value)}
					/>
					<SearchIcon handleClick={handleSearchClick} />
				</div>
			</form>
		</>
	)
}

export default NavbarSearch
