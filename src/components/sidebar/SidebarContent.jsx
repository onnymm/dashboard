import {
	ListBulletIcon,
	Squares2X2Icon,
	UserIcon
} from '@heroicons/react/24/outline'
import { SIDEBAR_LINKS } from '../../data/appConfig'
import List from '../ui kit/List'
import SidebarDropdown from './SidebarDropdown'
import SidebarSection from './SidebarSection'

const SIDEBAR_DROPDOWNS = [
	{
		icon: Squares2X2Icon,
		label: 'Dashboard',
		content: SIDEBAR_LINKS,
		height: 'h-16'
	},
	{ icon: ListBulletIcon, label: 'Tasks', height: '' }
]

const SidebarContent = () => {
	return (
		<div className='no-scrollbar flex flex-col overflow-y-auto rounded-sm p-4'>
			<span className='px-5 py-3 text-sm font-medium text-white opacity-50'>
				MENU
			</span>
			<List
				Contains={SidebarDropdown}
				data={SIDEBAR_DROPDOWNS}
				name='Dropdowns'
			/>
			<SidebarSection icon={UserIcon}>Profile</SidebarSection>
		</div>
	)
}

export default SidebarContent
