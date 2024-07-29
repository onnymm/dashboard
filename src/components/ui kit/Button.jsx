import { useState } from 'react'

const Button = ({ icon: Icon, state, setter }) => {
	const [isAnimating, setIsAnimating] = useState(false)

	const handleClick = () => {
		setIsAnimating(true)
		setter && setter(!state)
	}

	return (
		<button onClick={() => handleClick()}>
			{/* Este div amplía el hitbox del botón */}
			<div className='flex items-center rounded-full px-1 py-2'>
				<div
					className={`${isAnimating && 'animate-button-click'} mb-0.5 flex size-min rounded-full p-1 shadow-darkmode-switch-s transition dark:bg-navbar-icons-background-d`}
					onAnimationEnd={() => setIsAnimating(false)}
				>
					{Icon && (
						<Icon className='m-auto size-5 opacity-80 transition duration-500 dark:text-white' />
					)}
				</div>
			</div>
		</button>
	)
}

export default Button
