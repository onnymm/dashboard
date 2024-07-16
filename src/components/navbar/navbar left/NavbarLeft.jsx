import { useState } from 'react'
import Sidebar from '../../sidebar/Sidebar'
import SidebarToggle from '../../sidebar/SidebarToggle'
import NavbarSearch from './NavbarSearch'

const NavbarLeft = () => {
	const [openSidebar, setOpenSidebar] = useState(true)

	return (
		<>
			<Sidebar isOpen={openSidebar} />
			<SidebarToggle
				openSidebar={openSidebar}
				setOpenSidebar={setOpenSidebar}
			/>
			<NavbarSearch />
		</>
	)
}

export default NavbarLeft
