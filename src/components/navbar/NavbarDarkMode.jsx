import { MoonIcon, SunIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const NavbarDarkMode = () => {
	const [isActive, setIsActive] = useState(false)
	console.log('Rendered darkmode')

	return (
		<button onClick={() => setIsActive(!isActive)}>
			<div className='p-1 w-12 rounded-full bg-darkmode-switcher-background shadow-darkmode-switcher-background-s'>
				<div
					className={`p-1 size-min ${!isActive ? 'translate-x-5' : ''} transition duration-300 rounded-full bg-darkmode-switcher shadow-darkmode-switcher-s`}
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
