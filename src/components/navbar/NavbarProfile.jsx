import { ChevronDownIcon } from '@heroicons/react/16/solid'

const NavbarProfile = () => {
	console.log('Rendered profile')

	return (
		<a className='flex items-center gap-2'>
			<div className='hidden lg:block text-right'>
				<span className='block text-sm dark:text-white transition duration-300 opacity-80'>
					Master Yoda
				</span>
				<span className='block text-xs dark:text-white transition duration-300 opacity-60'>
					Force Advisor
				</span>
			</div>
			<img
				src='./profile_test.jpg'
				className='flex-shrink-0 size-12 rounded-full'
			/>
			<ChevronDownIcon className='hidden sm:block size-6 dark:fill-white transition duration-300 opacity-50' />
		</a>
	)
}

export default NavbarProfile
