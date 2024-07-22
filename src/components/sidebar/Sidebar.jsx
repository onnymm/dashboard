import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../contexts/AppContexts'
import { useClickOutside } from '../../custom hooks/useClickOutside'
import SidebarContent from './SidebarContent'
import SidebarToggle from './SidebarToggle'

const Sidebar = () => {
	const { sidebarIsOpen, setSidebarIsOpen } = useContext(AppContext)
	const [sidebarIsOpenNOverlaps, setSidebarIsOpenNOverlaps] = useState(false)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
			setSidebarIsOpen(false)
			setSidebarIsOpenNOverlaps(false)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [setSidebarIsOpen, setSidebarIsOpenNOverlaps])

	const isWideScreen = windowWidth > 1250
	const isSidebarOpen = isWideScreen ? sidebarIsOpen : sidebarIsOpenNOverlaps
	const setSidebarOpen = isWideScreen
		? setSidebarIsOpen
		: setSidebarIsOpenNOverlaps

	let domNode = useClickOutside(() => setSidebarIsOpenNOverlaps(false))

	return (
		<>
			<div ref={domNode} className='flex'>
				<SidebarToggle
					sidebarIsOpen={isSidebarOpen}
					setSidebarOpen={setSidebarOpen}
				/>
				<aside
					className={`${!isSidebarOpen ? '-translate-x-72' : 'translate-x-0'} fixed z-40 flex h-screen w-72 select-none flex-col bg-sidebar-background transition duration-500 dark:bg-sidebar-background-d`}
				>
					<div className='flex h-20'></div>
					<SidebarContent />
				</aside>
			</div>
		</>
	)
}

export default Sidebar
