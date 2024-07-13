import { useState } from 'react'

const NavbarButton = ({ icon: Icon, isActive, setIsActive }) => {
	const [isAnimating, setIsAnimating] = useState(false)

	console.log('Rendered button')

	const handleClick = () => {
		setIsActive(!isActive)
		setIsAnimating(true)
	}

	return (
		<button
			className={`${isAnimating && 'animate-button-click'} flex justify-center size-7 dark:bg-navbar-icons-background-d shadow-darkmode-switch-s border-black transition rounded-full`}
			onAnimationEnd={() => setIsAnimating(false)}
			onClick={() => handleClick()}
		>
			<Icon className='size-5 m-auto dark:text-white opacity-80 transition duration-500' />
		</button>
	)
}

export default NavbarButton
