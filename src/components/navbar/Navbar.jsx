import { NavLink } from 'react-router-dom'
import NavbarDarkMode from './NavbarDarkMode'
import NavbarSearch from './NavbarSearch'
import SidebarContainer from './SidebarContainer'
import ButtonController from './action buttons/ButtonController'

const Navbar = () => {
	return (
		<>
			<div className='relative'>
				{/* Sidebar y su toggle */}
				<SidebarContainer />
				<nav className='transition-color sticky top-0 flex h-20 w-full flex-grow select-none items-center justify-between bg-navbar-background px-4 shadow duration-300 dark:bg-navbar-background-d'>
					<div className='relative flex'>
						{/* Logotipo/link a la página principal */}
						<NavLink to='' className='flex items-center'>
							<img src='./logo.png' className='size-12 rotate-50' />
							<h1 className='mx-2 hidden text-2xl font-medium transition duration-300 dark:text-white sm:block'>
								iaCele
							</h1>
						</NavLink>
						{/* Barra de búsqueda */}
						<NavbarSearch />
					</div>
					{/* Switch de darkmode, botón de mensaje, notificaciones, perfil y detalles */}
					<div className='flex items-center gap-0 sm:gap-2'>
						{/* Switch de darkmode */}
						<NavbarDarkMode />
						{/* Manejador de botones (mensajes, notificaciones, perfil) */}
						<ButtonController />
					</div>
				</nav>
			</div>
		</>
	)
}

export default Navbar
