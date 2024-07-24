import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

const NavbarSearch = () => {
	const [search, setSearch] = useState('')

	return (
		<form className='ml-6 hidden gap-3 sm:flex'>
			<button className='opacity-60 transition duration-300 hover:text-navbar-icons-hover-d hover:opacity-100 dark:text-white dark:hover:text-navbar-icons-hover-d'>
				<MagnifyingGlassIcon className='size-5' />
			</button>
			<input
				className='bg-transparent text-sm opacity-80 focus:outline-none dark:text-white dark:placeholder-white'
				placeholder='Type to search...'
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
		</form>
	)
}

export default NavbarSearch
