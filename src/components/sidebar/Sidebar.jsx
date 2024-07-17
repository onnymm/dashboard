import SidebarContent from './SidebarContent'

const Sidebar = ({ isOpen }) => {
	return (
		<aside
			className={`${!isOpen ? '-translate-x-72' : 'translate-x-0'} z-40 fixed transition duration-500 flex flex-col h-screen w-72 select-none bg-sidebar-background dark:bg-sidebar-background-d`}
		>
			<div className='h-20 pl-20 flex items-center'>
				<span
					className={`${!isOpen ? 'opacity-0' : 'opacity-90'} transition-opacity ${!isOpen ? 'duration-50' : 'delay-300 duration-300'} text-white font-medium text-3xl`}
				>
					iacele
				</span>
			</div>
			<SidebarContent />
		</aside>
	)
}

export default Sidebar
