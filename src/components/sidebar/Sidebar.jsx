import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContexts'
import { useClickOutside } from '../../custom hooks/useClickOutside'
import SidebarContent from './SidebarContent'
import SidebarToggle from './SidebarToggle'

const Sidebar = () => {
	const { sidebarIsOpen, setSidebarIsOpen } = useContext(AppContext)

	let domNode = useClickOutside(() => setSidebarIsOpen(false))

	return (
		<>
			<div ref={domNode} className='flex'>
				<SidebarToggle />
				<aside
					className={`${!sidebarIsOpen ? '-translate-x-72' : 'translate-x-0'} fixed z-40 flex h-screen w-72 select-none flex-col bg-sidebar-background transition duration-500 dark:bg-sidebar-background-d`}
				>
					<div className='flex h-20 items-center pl-20'>
						<span
							className={`${!sidebarIsOpen ? 'opacity-0' : 'opacity-90'} transition-opacity ${!sidebarIsOpen ? 'duration-50' : 'delay-300 duration-300'} text-3xl font-medium text-white`}
						>
							iacele
						</span>
					</div>
					<SidebarContent />
				</aside>
			</div>
		</>
	)
}

export default Sidebar
