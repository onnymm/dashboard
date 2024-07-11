import { MoonIcon, SunIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const NavbarDarkMode = () => {
	const [isActive, setIsActive] = useState(false)

	return (
		<button onClick={() => setIsActive(!isActive)}>
			<div className='p-1 w-12 h-7 rounded-full bg-darkmode-switcher-background shadow-darkmode-switcher-background-s'>
				<div
					className={`flex items-center p-1 justify-center size-min ${!isActive ? 'translate-x-5' : ''} transition duration-300 rounded-full bg-darkmode-switcher shadow-darkmode-switcher-s`}
				>
					{!isActive ? (
						<MoonIcon className='size-3' />
					) : (
						<SunIcon className='size-3 transition' />
					)}
				</div>
			</div>
		</button>
	)
}

export default NavbarDarkMode
