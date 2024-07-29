import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'

const SearchIcon = ({ handleClick }) => {
	return (
		<button
			className='$ px-2 opacity-60 transition duration-300 hover:text-navbar-icons-hover-d hover:opacity-100 dark:text-white dark:hover:text-navbar-icons-hover-d'
			onClick={e => handleClick(e)}
		>
			<MagnifyingGlassIcon className='size-5' />
		</button>
	)
}

export default SearchIcon
