import LogoLink from '../../ui/LogoLink'
import NavbarSearch from './left side/NavbarSearch'
import SidebarContainer from './left side/SidebarContainer'
import ButtonController from './right side/ButtonController'
import NavbarDarkMode from './right side/NavbarDarkMode'

const Navbar = () => {
	return (
		<>
			<div className='relative z-99999'>
				{/* Sidebar y su toggle */}
				<SidebarContainer />
				<nav className='top-0 sticky flex flex-grow justify-between items-center bg-navbar-background dark:bg-navbar-background-d shadow px-4 w-full h-20 transition-color duration-dark select-none'>
					<div className='relative flex'>
						{/* Logotipo/link a la página principal */}
						<LogoLink imgSource='./logo.webp' extraStyles='dark:text-white'>
							<h1 className='sm:block hidden transition-colors duration-dark'>
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
