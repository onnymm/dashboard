import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

const Avatar = ({ imgSource, animateOnClick, extraStyles }) => {
	const [isAnimating, setIsAnimating] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)

	const handleAnimateOnClick = () => {
		setIsAnimating(true)
	}

	const handleAnimationEnd = () => {
		setIsAnimating(false)
	}

	const handleLoad = () => {
		setIsLoaded(true)
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
				<div className='relative size-full'>
					{!isLoaded && (
						<div className='absolute size-full animate-pulse bg-slate-300 dark:bg-slate-500' />
					)}
					<img
						src={imgSource}
						className='size-full object-cover'
						draggable='false'
						onLoad={handleLoad}
					/>
				</div>
			</div>
			<ChevronDownIcon className='hidden size-6 opacity-50 sm:block' />
		</div>
	)
}

export default Avatar
