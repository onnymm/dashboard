import { ChevronDownIcon } from '@heroicons/react/16/solid'

const NavbarProfile = () => {
	return (
		<a className='flex items-center gap-2 dark:text-white transition duration-300'>
			<div className='hidden lg:block text-right'>
				<span className='block text-sm opacity-80'>Master Yoda</span>
				<span className='block text-xs opacity-60'>Force Advisor</span>
			</div>
			<img
				src='./profile_test.jpg'
				className='w-12 rounded-full'
				draggable='false'
			/>
			<ChevronDownIcon className='hidden sm:block size-6 opacity-50' />
		</a>
	)
}

export default NavbarProfile
