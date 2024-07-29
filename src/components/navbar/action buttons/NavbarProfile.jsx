import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import { useClickOutside } from '../../../custom hooks/useClickOutside'
import { links } from '../../../data/appConfig'
import List from '../../ui kit/List'
import ProfileLink from '../../ui kit/ProfileLink'

const NavbarProfile = () => {
	const [isActive, setIsActive] = useState(false)

	let domNode = useClickOutside(() => setIsActive(false))

	return (
		<div className='relative flex items-center transition duration-300 dark:text-white sm:gap-1'>
			{/* Nombre y ocupación */}
			<div className='hidden text-right lg:block'>
				<span className='block text-sm opacity-80'>Master Yoda</span>
				<span className='block text-xs opacity-60'>Force Advisor</span>
			</div>
			{/* Este div agranda la hitbox */}
			<div ref={domNode} className='flex rounded-full px-1 py-2'>
				{/* Botón dropdown de ávatar */}
				<button
					className='flex items-center gap-1'
					onClick={() => setIsActive(!isActive)}
					ref={domNode}
				>
					<img
						src='./profile_test.jpg'
						className='w-12 rounded-full'
						draggable='false'
					/>
					<ChevronDownIcon className='hidden size-6 opacity-50 sm:block' />
				</button>
				{/* Contenido del dropdown */}
				<div
					className={`${isActive ? 'opacity-100' : 'pointer-events-none opacity-0'} absolute right-0 top-14 z-30 min-h-12 w-48 rounded-xl bg-white p-3 shadow-back transition duration-300 dark:bg-navbar-icons-background-d`}
				>
					<List
						Contains={ProfileLink}
						data={links}
						name='Links'
						setter={setIsActive}
						extraStyles='gap-1'
					/>
					{/* Barra separadora */}
					<hr className='my-2 border border-gray-300' />
					{/* Este link está separado por motivos de diseño */}
					<ProfileLink icon='log_out' label='Log out' route='' />
				</div>
			</div>
		</div>
	)
}

export default NavbarProfile
