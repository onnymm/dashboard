const Message = ({ avatar, header, content }) => {
	return (
		<div className='transition-color flex h-min items-center gap-3 overflow-hidden p-4 text-left text-xs duration-300 dark:text-white'>
			<div className='w-12 flex-none'>
				<img
					src={avatar ? avatar : './default_profile.webp'}
					className='rounded-full'
				/>
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
