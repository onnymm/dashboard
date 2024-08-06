import { useState } from 'react'

const Message = ({ avatar, header, content }) => {
	const [isLoaded, setIsLoaded] = useState(false)

	const handleLoad = () => {
		setIsLoaded(true)
	}

	return (
		<div className='transition-color flex h-min items-center gap-3 overflow-hidden p-4 text-left text-xs duration-300 dark:text-white'>
			<div className='w-12 flex-none'>
				<div className='relative size-12'>
					{!isLoaded && (
						<div className='absolute size-full animate-pulse rounded-full bg-slate-300 dark:bg-slate-500' />
					)}
					<img
						src={avatar ? avatar : './default_profile.webp'}
						className='size-full rounded-full'
						onLoad={handleLoad}
					/>
				</div>
			</div>
			<div>
				<span className='opacity-90 dark:opacity-90'>
					{header ? header : 'Unknown'}
				</span>
				<p className='line-clamp-3 font-extralight opacity-90 dark:opacity-80'>
					<span>{`${content}`}</span>
				</p>
			</div>
		</div>
	)
}

export default Message
