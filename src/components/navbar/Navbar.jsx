import { NavLink } from 'react-router-dom'
import NavbarRight from './navbar right/NavbarRight'
import NavbarSearch from './NavbarSearch'
import SidebarContainer from './SidebarContainer'

const Navbar = () => {
	return (
		<>
			{/* Sidebar y su toggle */}
			<SidebarContainer />
			<nav className='transition-color sticky top-0 flex h-20 w-full flex-grow select-none items-center justify-between bg-navbar-background px-4 shadow duration-300 dark:bg-navbar-background-d'>
				<div className='relative flex'>
					{/* Link a la página principal */}
					<NavLink to='' className='flex items-center'>
						<img src='./logo.png' className='size-12' />
						<h1 className='mx-2 hidden text-2xl font-medium transition duration-300 dark:text-white sm:block'>
							iaCele
						</h1>
					</NavLink>
					{/* Barra de búsqueda */}
					<NavbarSearch />
				</div>
				{/* Switch de darkmode, botón de mensaje, notificaciones, perfil y detalles */}
				<NavbarRight />
			</nav>
		</>
	)
}

export default Navbar
