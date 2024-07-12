import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const NavbarSearch = () => {
	const [search, setSearch] = useState('')
	console.log(search)

	return (
		<form className='hidden sm:flex gap-3'>
			<button className=''>
				<MagnifyingGlassIcon className='size-5 fill-navbar-icons hover:fill-navbar-icons-hover transition duration-500' />
			</button>
			<input
				className='text-sm focus:outline-none bg-navbar-background'
				placeholder='Type to search...'
				value={search}
				onChange={e => setSearch(e.target.value)}
			></input>
		</form>
	)
}

export default NavbarSearch
