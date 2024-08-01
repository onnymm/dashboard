import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

const SearchIcon = ({ handleClick }) => {
	const [isAnimating, setIsAnimating] = useState(false)

	const handleTaskAndAnimation = e => {
		setIsAnimating(true)
		handleClick(e)
	}

	const handleAnimationEnd = () => {
		setIsAnimating(false)
	}

	return (
		<button
			className={`${isAnimating && 'sm:animate-bars3-click-sm'} px-2 opacity-60 transition duration-300 hover:text-navbar-icons-hover-d hover:opacity-100 dark:text-white dark:hover:text-navbar-icons-hover-d`}
			onClick={e => handleTaskAndAnimation(e)}
			onAnimationEnd={handleAnimationEnd}
		>
			<MagnifyingGlassIcon className='size-5' />
		</button>
	)
}

export default SearchIcon
