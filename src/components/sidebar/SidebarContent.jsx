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
			className='no-scrollbar flex flex-col overflow-y-auto rounded-sm p-4'
			style={{
				height: 'calc(100% - 5.75rem)'
			}}
		>
			<span className='px-5 py-3 text-sm font-medium text-white opacity-50'>
				MENU
			</span>
			<SidebarDropdown
				icon={Squares2X2Icon}
				content={SIDEBAR_LINKS}
				height='h-16'
			>
				Dashboard
			</SidebarDropdown>
			<SidebarDropdown icon={ListBulletIcon} height=''>
				Tasks
			</SidebarDropdown>
			<SidebarSection icon={UserIcon}>Profile</SidebarSection>
		</div>
	)
}

export default SidebarContent
