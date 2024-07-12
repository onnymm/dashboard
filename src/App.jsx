import { useState } from 'react'
import Feed from './components/feed/Feed'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import SidebarToggle from './components/sidebar/SidebarToggle'

const App = () => {
	const [openSidebar, setOpenSidebar] = useState(false)

	return (
		<>
			<div className='h-screen overflow-y-auto'>
				<div className='sticky top-0 flex flex-row h-20 select-none shadow bg-navbar-background'>
					<Sidebar isOpen={openSidebar} />
					<SidebarToggle
						openSidebar={openSidebar}
						setOpenSidebar={setOpenSidebar}
					/>
					<Navbar />
				</div>
				<div className='bg-red-500'>
					<Feed />
				</div>
			</div>
		</>
	)
}

export default App
