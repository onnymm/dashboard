import { MoonIcon, SunIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'

const NavbarDarkMode = () => {
	const [isActive, setIsActive] = useState(false)
	const [theme, setTheme] = useState('light')

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [theme])

	const handleSwitch = () => {
		setIsActive(!isActive)
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
		<button onClick={() => handleSwitch()}>
			<div className='p-1 w-12 rounded-full bg-darkmode-switch-background dark:bg-darkmode-switch-background-d transition shadow-darkmode-switch-background-s'>
				<div
					className={`p-1 size-min ${!isActive ? '' : 'translate-x-5'} transition duration-300 rounded-full bg-navbar-background dark:bg-navbar-background-d shadow-darkmode-switch-s`}
				>
					{!isActive ? (
						<SunIcon className='size-3 dark:text-white opacity-80' />
					) : (
						<MoonIcon className='size-3 dark:text-white opacity-80' />
					)}
				</div>
			</div>
		</button>
	)
}

export default NavbarDarkMode
