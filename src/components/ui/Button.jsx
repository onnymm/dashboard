import { useState } from 'react'

const Button = ({ icon: Icon, handleClick }) => {
	const [isAnimating, setIsAnimating] = useState(false)

	const handleStuff = () => {
		setIsAnimating(true)
		handleClick()
	}

	const handleAnimationEnd = () => {
		setIsAnimating(false)
	}

	return (
		<button onClick={handleStuff}>
			{/* Este div amplía el hitbox del botón */}
			<div className='flex items-center rounded-full px-1 py-2'>
				<div
					className={`${isAnimating && 'animate-button-click'} duration-dark mb-0.5 flex size-min rounded-full p-1 shadow-darkmode-switch-s transition-colors dark:bg-navbar-icons-background-d`}
					onAnimationEnd={handleAnimationEnd}
				>
					{Icon && (
						<Icon className='duration-dark m-auto size-5 opacity-80 transition-all dark:text-white' />
					)}
				</div>
			</div>
		</button>
	)
}

export default Button
