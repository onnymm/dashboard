import ButtonController from './action buttons/ButtonController'
import NavbarDarkMode from './NavbarDarkMode'

const NavbarRight = () => {
	return (
		<div className='flex gap-4 items-center ml-auto'>
			<NavbarDarkMode />
			<ButtonController />
		</div>
	)
}

export default NavbarRight
