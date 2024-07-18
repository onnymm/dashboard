import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const NavbarSearch = () => {
	const [search, setSearch] = useState('')

	return (
		<form className='ml-5 hidden gap-3 sm:flex'>
			<button className=''>
				<MagnifyingGlassIcon className='size-5 opacity-60 transition duration-300 hover:fill-navbar-icons-hover-d hover:opacity-100 dark:text-white dark:hover:fill-navbar-icons-hover-d dark:hover:opacity-100' />
			</button>
			<input
				className='bg-transparent text-sm opacity-80 focus:outline-none dark:text-white dark:placeholder-white'
				placeholder='Type to search...'
				value={search}
				onChange={e => setSearch(e.target.value)}
			></input>
		</form>
	)
}

export default NavbarSearch
