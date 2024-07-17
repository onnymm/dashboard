const Message = ({ avatar, header, content }) => {
	return (
		<div className='flex gap-3 h-min items-center text-xs dark:text-white overflow-hidden text-left p-4 h-20'>
			<div className='w-12 flex-none'>
				<img
					src={avatar ? avatar : './default_profile.jpg'}
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
