import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import { links } from '../../../data/appConfig'
import List from '../../ui kit/List'
import ListLink from '../../ui kit/ListLink'

const NavbarProfile = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='flex items-center gap-2 dark:text-white transition duration-300'>
			<div className='hidden lg:block text-right'>
				<span className='block text-sm opacity-80'>Master Yoda</span>
				<span className='block text-xs opacity-60'>Force Advisor</span>
			</div>

			<button className='flex items-center' onClick={() => setIsOpen(!isOpen)}>
				<img
					src='./profile_test.jpg'
					className='w-12 rounded-full'
					draggable='false'
				/>
				<ChevronDownIcon className='hidden sm:block size-6 opacity-50' />
			</button>
			<div className='relative'>
				<div
					className={`${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition duration-150 absolute w-48 min-h-12 right-0 p-3 top-12 shadow-back bg-white rounded-xl z-30`}
				>
					<List Contains={ListLink} data={links} name='Links' />
				</div>
			</div>
		</div>
	)
}

export default NavbarProfile
