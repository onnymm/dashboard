import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../contexts/AppContexts'
import NavbarSearch from './navbar left/NavbarSearch'
import NavbarRight from './navbar right/NavbarRight'

const Navbar = () => {
	const { sidebarIsLocked } = useContext(AppContext)

	return (
		<nav className='flex flex-grow items-center justify-between px-4'>
			<div className='flex'>
				<NavLink to='' className='flex items-center'>
					<img src='./logo.png' className='size-12' />
					<h1 className='mx-2 hidden text-2xl font-medium transition duration-300 dark:text-white sm:block'>
						iaCele
					</h1>
				</NavLink>
				<div
					className={`${sidebarIsLocked ? 'w-32' : 'w-12'} flex transition-width duration-500`}
				/>
				<NavbarSearch />
			</div>
			<NavbarRight />
		</nav>
	)
}

export default Navbar
