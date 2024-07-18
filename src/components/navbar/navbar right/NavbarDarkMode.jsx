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
			<div className='w-12 rounded-full bg-darkmode-switch-background p-1 shadow-darkmode-switch-background-s transition dark:bg-darkmode-switch-background-d'>
				<div
					className={`size-min p-1 ${!isActive ? '' : 'translate-x-5'} rounded-full bg-navbar-background shadow-darkmode-switch-s transition duration-300 dark:bg-navbar-background-d`}
				>
					{!isActive ? (
						<SunIcon className='size-3 opacity-80 dark:text-white' />
					) : (
						<MoonIcon className='size-3 opacity-80 dark:text-white' />
					)}
				</div>
			</div>
		</button>
	)
}

export default NavbarDarkMode
