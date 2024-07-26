import ButtonController from './action buttons/ButtonController'
import NavbarDarkMode from './NavbarDarkMode'

const NavbarRight = () => {
	return (
		<div className='flex items-center gap-0 sm:gap-2'>
			{/* Switch de darkmode */}
			<NavbarDarkMode />
			{/* Manejador de botones (mensajes, notificaciones, perfil) */}
			<ButtonController />
		</div>
	)
}

export default NavbarRight
