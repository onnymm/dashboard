import Sidebar from '../../components/sidebar/Sidebar'
import NavbarSearch from './navbar left/NavbarSearch'
import NavbarRight from './navbar right/NavbarRight'

const Navbar = () => {
	return (
		<nav className='flex flex-grow items-center justify-between pr-4'>
			<div className='flex h-full'>
				<Sidebar />
				<NavbarSearch />
			</div>
			<NavbarRight />
		</nav>
	)
}

export default Navbar
