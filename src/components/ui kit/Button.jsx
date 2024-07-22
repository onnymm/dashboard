import { useState } from 'react'

const Button = ({ icon: Icon, isActive, setIsActive }) => {
	const [isAnimating, setIsAnimating] = useState(false)

	const handleClick = () => {
		setIsAnimating(true)
		setIsActive(!isActive)
	}

	return (
		<button
			className={`${isAnimating && 'animate-button-click'} mb-0.5 flex size-7 justify-center rounded-full border-black shadow-darkmode-switch-s transition dark:bg-navbar-icons-background-d`}
			onAnimationEnd={() => setIsAnimating(false)}
			onClick={() => handleClick()}
		>
			{Icon && (
				<Icon className='m-auto size-5 opacity-80 transition duration-500 dark:text-white' />
			)}
		</button>
	)
}

export default Button
