import NavbarLeft from './navbar left/NavbarLeft'
import NavbarRight from './navbar right/NavbarRight'

const Navbar = () => {
	return (
		<nav className='flex flex-grow justify-between pr-4'>
			<NavbarLeft />
			<NavbarRight />
		</nav>
	)
}

export default Navbar
