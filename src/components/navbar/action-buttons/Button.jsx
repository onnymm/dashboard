import { useState } from 'react'

const Button = ({ icon: Icon }) => {
	const [isAnimating, setIsAnimating] = useState(false)

	const handleClick = () => {
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

export default Button
