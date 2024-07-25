import { NavLink } from 'react-router-dom'
import NavbarSearch from './NavbarSearch'
import NavbarRight from './navbar right/NavbarRight'

const Navbar = () => {
	return (
		<nav className='transition-color sticky top-0 flex h-20 w-full flex-grow select-none items-center justify-between bg-navbar-background px-4 shadow duration-300 dark:bg-navbar-background-d'>
			<div className='flex'>
				<NavLink to='' className='flex items-center'>
					<img src='./logo.png' className='size-12' />
					<h1 className='mx-2 hidden text-2xl font-medium transition duration-300 dark:text-white sm:block'>
						iaCele
					</h1>
				</NavLink>
				<NavbarSearch />
			</div>
			<NavbarRight />
		</nav>
	)
}

export default Navbar
