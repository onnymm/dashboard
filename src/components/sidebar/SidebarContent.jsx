import {
	ListBulletIcon,
	Squares2X2Icon,
	UserIcon
} from '@heroicons/react/24/solid'
import SidebarDropdown from './SidebarDropdown'
import SidebarSection from './SidebarSection'

const DashContent = () => {
	return (
		<div className='flex flex-col h-full mt-5 p-4 select-none border border-red-500'>
			<span className='text-sidebar-section-title text-sm font-medium ml-4 mb-4'>
				MENU
			</span>
			<SidebarDropdown icon={Squares2X2Icon}>Dashboard</SidebarDropdown>
			<SidebarDropdown icon={ListBulletIcon}>Tasks</SidebarDropdown>
			<SidebarSection icon={UserIcon}>Profile</SidebarSection>
		</div>
	)
}

export default DashContent
