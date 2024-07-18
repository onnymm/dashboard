import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { links } from '../../../../data/appConfig'
import List from '../../../ui kit/List'
import ListLink from '../../../ui kit/ListLink'

const NavbarProfile = ({ name, buttonsActive, setButtonsActive }) => {
	return (
		<div className='relative flex items-center gap-2 transition duration-300 dark:text-white'>
			<div className='hidden text-right lg:block'>
				<span className='block text-sm opacity-80'>Master Yoda</span>
				<span className='block text-xs opacity-60'>Force Advisor</span>
			</div>

			<button
				className='flex items-center gap-1'
				onClick={() => setButtonsActive(name)}
			>
				<img
					src='./profile_test.jpg'
					className='w-12 rounded-full'
					draggable='false'
				/>
				<ChevronDownIcon className='hidden size-6 opacity-50 sm:block' />
			</button>
			<div className=''>
				<div
					className={`${buttonsActive[name] ? 'opacity-100' : 'pointer-events-none opacity-0'} absolute right-0 top-14 z-30 min-h-12 w-48 rounded-xl bg-white p-3 shadow-back transition duration-300 dark:bg-navbar-icons-background-d`}
				>
					<List Contains={ListLink} data={links} name='Links' />
					<hr className='my-2 border border-gray-300' />
					<ListLink icon='log_out' label='Log out' route='' />
				</div>
			</div>
		</div>
	)
}

export default NavbarProfile
