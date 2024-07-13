import NavbarChatButton from './NavbarChatButton'
import NavbarDarkMode from './NavbarDarkMode'
import NavbarNotificationsButton from './NavbarNotificationsButton'
import NavbarProfile from './NavbarProfile'
import NavbarSearch from './NavbarSearch'

const Navbar = () => {
	return (
		<header className='flex flex-grow justify-between px-6 py-4'>
			<NavbarSearch />
			<div className='flex gap-4 items-center ml-auto'>
				<NavbarChatButton />
				<NavbarNotificationsButton />
				<NavbarDarkMode />
				<NavbarProfile />
			</div>
		</header>
	)
}

export default Navbar
