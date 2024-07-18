import ButtonController from './action buttons/ButtonController'
import NavbarDarkMode from './NavbarDarkMode'

const NavbarRight = () => {
	return (
		<div className='ml-auto flex items-center gap-4'>
			<NavbarDarkMode />
			<ButtonController />
		</div>
	)
}

export default NavbarRight
