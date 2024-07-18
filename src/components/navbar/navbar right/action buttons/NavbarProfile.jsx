import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { links } from '../../../../data/appConfig'
import List from '../../../ui kit/List'
import ListLink from '../../../ui kit/ListLink'

const NavbarProfile = ({ name, buttonsActive, setButtonsActive }) => {
	return (
		<div className='flex items-center gap-2 dark:text-white transition duration-300 relative'>
			<div className='hidden lg:block text-right'>
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
				<ChevronDownIcon className='hidden sm:block size-6 opacity-50' />
			</button>
			<div className=''>
				<div
					className={`${buttonsActive[name] ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition duration-300 absolute w-48 min-h-12 right-0 p-3 top-14 shadow-back bg-white dark:bg-navbar-icons-background-d rounded-xl z-30 `}
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
