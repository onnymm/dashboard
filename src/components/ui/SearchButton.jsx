import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

const SearchButton = ({ handleClick }) => {
	const [isAnimating, setIsAnimating] = useState(false)

	const handleTaskAndAnimation = () => {
		setIsAnimating(true)
		handleClick && handleClick()
	}

	const handleAnimationEnd = () => {
		setIsAnimating(false)
	}

	return (
		<button
			className={`${isAnimating && 'sm:animate-bars3-click-sm'} px-2 opacity-60 transition-all duration-dark hover:text-navbar-icons-hover hover:opacity-100 dark:text-white dark:hover:text-navbar-icons-hover-d`}
			onClick={handleTaskAndAnimation}
			onAnimationEnd={handleAnimationEnd}
		>
			<MagnifyingGlassIcon className='size-5' />
		</button>
	)
}

export default SearchButton
