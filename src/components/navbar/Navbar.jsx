import ActionButtonSwitch from './action-buttons/ActionButtonSwitch'
import NavbarDarkMode from './NavbarDarkMode'
import NavbarProfile from './NavbarProfile'
import NavbarSearch from './NavbarSearch'

const Navbar = () => {
	return (
		<header className='flex flex-grow justify-between px-6 py-4'>
			<NavbarSearch />
			<div className='flex gap-4 items-center ml-auto'>
				<ActionButtonSwitch />
				<NavbarDarkMode />
				<NavbarProfile />
			</div>
		</header>
	)
}

export default Navbar
