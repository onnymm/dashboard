import { Bars3Icon } from '@heroicons/react/16/solid'
import { useState } from 'react'

const Bars3Button = ({ handleClick, className }) => {
	const [isAnimating, setIsAnimating] = useState(false)

	const handleTaskAndAnimation = () => {
		setIsAnimating(true)
		handleClick()
	}

	const handleAnimationEnd = () => {
		setIsAnimating(false)
	}

	return (
		<>
			{/* 
			El contenedor relativo del botón es del tamaño de la pantalla.
			*/}
			<button
				onClick={handleTaskAndAnimation}
				className={`duration-dark p-2 transition dark:text-white dark:opacity-80 ${className} ${isAnimating && 'animate-bars3-click sm:animate-bars3-click-sm'}`}
				onAnimationEnd={handleAnimationEnd}
			>
				<Bars3Icon className='size-6' />
			</button>
		</>
	)
}

export default Bars3Button
