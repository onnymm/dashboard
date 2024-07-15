import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const NavbarSearch = () => {
	const [search, setSearch] = useState('')

	return (
		<form className='hidden sm:flex gap-3'>
			<button className=''>
				<MagnifyingGlassIcon className='size-5 dark:text-white hover:fill-navbar-icons-hover-d dark:hover:fill-navbar-icons-hover-d transition duration-300 opacity-60 hover:opacity-100 dark:hover:opacity-100' />
			</button>
			<input
				className='text-sm dark:placeholder-white dark:text-white focus:outline-none bg-transparent opacity-80'
				placeholder='Type to search...'
				value={search}
				onChange={e => setSearch(e.target.value)}
			></input>
		</form>
	)
}

export default NavbarSearch
