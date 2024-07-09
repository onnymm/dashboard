import SidebarContent from './SidebarContent'
import SidebarTitle from './SidebarTitle'

const Sidebar = () => (
	<div className='flex flex-col w-72 h-screen bg-sidebar-background'>
		<SidebarTitle>iacele</SidebarTitle>
		<SidebarContent />
	</div>
)

export default Sidebar
