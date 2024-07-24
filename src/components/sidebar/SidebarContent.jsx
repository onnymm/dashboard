import {
	ListBulletIcon,
	LockClosedIcon,
	LockOpenIcon,
	Squares2X2Icon,
	UserIcon
} from '@heroicons/react/24/outline'
import { SIDEBAR_LINKS } from '../../data/appConfig'
import List from '../ui kit/List'
import SidebarDropdown from './SidebarDropdown'
import SidebarSection from './SidebarSection'

const SIDEBAR_DROPDOWNS = [
	{
		id: 1,
		icon: Squares2X2Icon,
		label: 'Dashboard',
		content: SIDEBAR_LINKS,
		height: 'h-16'
	},
	{
		id: 2,
		icon: ListBulletIcon,
		label: 'Tasks',
		height: ''
	}
]

const SidebarContent = ({ isLocked, setIsLocked }) => {
	return (
		<>
			<div className='no-scrollbar flex flex-col overflow-y-auto rounded-sm p-2'>
				<span className='px-5 py-3 text-sm font-medium text-white opacity-50'>
					MENU
				</span>
				<List
					Contains={SidebarDropdown}
					data={SIDEBAR_DROPDOWNS}
					name='Dropdowns'
				/>
				<SidebarSection icon={UserIcon} label='Profile' route='profile' />
			</div>
			<button
				className={`${isLocked ? 'bg-slate-900 shadow-md dark:bg-sidebar-background' : ''} ml-auto mt-auto hidden rounded-md p-2 text-white transition duration-500 hover:bg-slate-900 hover:shadow-md hover:dark:bg-sidebar-background md:block`}
				onClick={() => setIsLocked(!isLocked)}
			>
				{isLocked ? (
					<LockClosedIcon className='size-5' />
				) : (
					<LockOpenIcon className='size-5' />
				)}
			</button>
		</>
	)
}

export default SidebarContent
