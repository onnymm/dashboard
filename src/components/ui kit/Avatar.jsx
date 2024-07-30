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
			onClick={animateOnClick && handleAnimateOnClick}
			onAnimationEnd={handleAnimationEnd}
			className={`size-12 overflow-hidden rounded-full ${extraStyles} ${isAnimating ? 'animate-shrink-grow' : ''}`}
		>
			<img src={imgSource} className='h-full w-full object-cover' />
		</div>
	)
}

export default Avatar
