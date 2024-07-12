import SidebarContent from './SidebarContent'

const Sidebar = ({ isOpen }) => {
	return (
		<aside
			className={`${!isOpen ? '-translate-x-72' : ''} z-10 fixed transition duration-500 flex flex-col h-screen w-72 select-none bg-sidebar-background`}
		>
			<div className='h-20 pl-20 flex items-center'>
				<span
					className={`${!isOpen ? 'opacity-0' : 'opacity-100'} transition-opacity ${!isOpen ? 'duration-50' : 'delay-300 duration-300'} text-sidebar-title font-medium text-3xl`}
				>
					iacele
				</span>
			</div>
			<SidebarContent />
		</aside>
	)
}

export default Sidebar
