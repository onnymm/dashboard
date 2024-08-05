import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

const Avatar = ({ imgSource, animateOnClick, extraStyles }) => {
	const [isAnimating, setIsAnimating] = useState(false)

	const handleAnimateOnClick = () => {
		setIsAnimating(true)
	}

	const handleAnimationEnd = () => {
		setIsAnimating(false)
	}

	return (
		<div
			className='flex items-center'
			onClick={animateOnClick && handleAnimateOnClick}
		>
			<div
				className={`size-12 overflow-hidden rounded-full ${extraStyles} ${isAnimating && 'animate-avatar-click'}`}
				onAnimationEnd={handleAnimationEnd}
			>
				<img
					src={imgSource}
					className='size-full object-cover'
					draggable='false'
					loading='lazy'
				/>
			</div>
			<ChevronDownIcon className='hidden size-6 opacity-50 sm:block' />
		</div>
	)
}

export default Avatar
