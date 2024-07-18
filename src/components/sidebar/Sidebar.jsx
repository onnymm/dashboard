import SidebarContent from './SidebarContent'

const Sidebar = ({ isOpen }) => {
	return (
		<aside
			className={`${!isOpen ? '-translate-x-72' : 'translate-x-0'} fixed z-40 flex h-screen w-72 select-none flex-col bg-sidebar-background transition duration-500 dark:bg-sidebar-background-d`}
		>
			<div className='flex h-20 items-center pl-20'>
				<span
					className={`${!isOpen ? 'opacity-0' : 'opacity-90'} transition-opacity ${!isOpen ? 'duration-50' : 'delay-300 duration-300'} text-3xl font-medium text-white`}
				>
					iacele
				</span>
			</div>
			<SidebarContent />
		</aside>
	)
}

export default Sidebar
