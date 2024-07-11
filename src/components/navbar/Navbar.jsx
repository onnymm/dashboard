import NavbarDarkMode from './NavbarDarkMode'
import NavbarSearch from './NavbarSearch'

const Navbar = () => {
	return (
		<header className='sticky top-0 flex h-20 w-full px-6 py-4 shadow bg-navbar-background'>
			<NavbarSearch />
			<NavbarDarkMode />
		</header>
	)
}

export default Navbar
