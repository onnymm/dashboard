import NavbarLeft from './navbar left/NavbarLeft'
import NavbarRight from './navbar right/NavbarRight'

const Navbar = () => {
	return (
		<header className='flex flex-grow justify-between pr-4'>
			<NavbarLeft />
			<NavbarRight />
		</header>
	)
}

export default Navbar
