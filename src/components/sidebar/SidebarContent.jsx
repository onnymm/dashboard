import {
	ListBulletIcon,
	Squares2X2Icon,
	UserIcon
} from '@heroicons/react/24/outline'
import { SIDEBAR_LINKS } from '../../data/appConfig'
import SidebarDropdown from './SidebarDropdown'
import SidebarSection from './SidebarSection'

const SidebarContent = () => {
	return (
		<div
			className='flex flex-col p-4 gap-1 overflow-y-auto no-scrollbar'
			style={{
				height: 'calc(100% - 5.75rem)'
			}}
		>
			<span className='px-5 py-3 text-white text-sm font-medium opacity-50'>
				MENU
			</span>
			<SidebarDropdown icon={Squares2X2Icon} content={SIDEBAR_LINKS}>
				Dashboard
			</SidebarDropdown>
			<SidebarDropdown icon={ListBulletIcon}>Tasks</SidebarDropdown>
			<SidebarSection icon={UserIcon}>Profile</SidebarSection>
		</div>
	)
}

export default SidebarContent
