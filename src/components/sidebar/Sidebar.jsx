import SidebarContent from './SidebarContent'
import SidebarTitle from './SidebarTitle'

const Sidebar = () => (
	<aside className='overflow-y-auto no-scrollbar flex flex-col gap-3 h-screen w-265 select-none bg-sidebar-background'>
		<SidebarTitle>iacele</SidebarTitle>
		<SidebarContent />
	</aside>
)

export default Sidebar
