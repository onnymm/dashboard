import LogoLink from '../ui kit/LogoLink'
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
						<LogoLink imgSource='./logo.png' extraStyles='dark:text-white'>
							<h1 className='hidden transition duration-300 sm:block'>
								iaCele
							</h1>
						</LogoLink>
						{/* Barra de búsqueda */}
						<NavbarSearch />
					</div>
					{/* Switch de darkmode, botón de mensaje, notificaciones, perfil y detalles */}
					<div className='flex items-center sm:gap-2'>
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
