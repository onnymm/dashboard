import ActionButtonSwitch from './action buttons/ActionButtonSwitch'
import NavbarDarkMode from './NavbarDarkMode'
import NavbarProfile from './NavbarProfile'

const NavbarRight = () => {
	return (
		<div className='flex gap-4 items-center ml-auto'>
			<ActionButtonSwitch />
			<NavbarDarkMode />
			<NavbarProfile />
		</div>
	)
}

export default NavbarRight
