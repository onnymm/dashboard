import {
	ListBulletIcon,
	Squares2X2Icon,
	UserIcon
} from '@heroicons/react/24/outline'
import SidebarDropdown from './SidebarDropdown'
import SidebarSection from './SidebarSection'

const SidebarContent = () => {
	return (
		<div className='flex flex-col p-4 gap-1'>
			<span className='px-5 py-3 text-sidebar-section-title text-sm font-medium'>
				MENU
			</span>
			<SidebarDropdown icon={Squares2X2Icon}>Dashboard</SidebarDropdown>
			<SidebarDropdown icon={ListBulletIcon}>Tasks</SidebarDropdown>
			<SidebarSection icon={UserIcon}>Profile</SidebarSection>
		</div>
	)
}

export default SidebarContent
