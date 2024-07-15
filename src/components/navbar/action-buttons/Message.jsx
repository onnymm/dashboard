const Message = ({ avatar, header, content }) => {
	return (
		<div className='flex gap-3 h-min text-xs dark:text-white overflow-hidden text-left p-4 h-20 dark:bg-darkmode-switch-background-d'>
			<div>
				<img src={avatar} className='w-18 rounded-full' />
			</div>
			<div>
				{header && <span className='opacity-90 dark:opacity-90'>{header}</span>}
				<p className='line-clamp-3 font-extralight opacity-90 dark:opacity-80'>
					<span>{`${content}`}</span>
				</p>
			</div>
		</div>
	)
}

export default Message
