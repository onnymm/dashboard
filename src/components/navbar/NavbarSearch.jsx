import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const NavbarSearch = () => {
	const [search, setSearch] = useState('')
	console.log(search)

	return (
		<div className='flex items-center gap-3 border border-red-500'>
			<button>
				<MagnifyingGlassIcon className='size-5 fill-navbar-icons hover:fill-navbar-icons-hover transition duration-500' />
			</button>
			<input
				className='text-sm focus:outline-none'
				placeholder='Type to search...'
				value={search}
				onChange={e => setSearch(e.target.value)}
			></input>
		</div>
	)
}

export default NavbarSearch
