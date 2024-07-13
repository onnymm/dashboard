const Message = ({ header, content }) => {
	return (
		<div className='flex-none h-min text-xs dark:text-white overflow-hidden text-left p-4 h-20 dark:bg-darkmode-switch-background-d'>
			{header && <span className='opacity-90 dark:opacity-90'>{header}</span>}

			<p className='line-clamp-1 font-extralight opacity-90 dark:opacity-80'>
				<span>{`${content}`}</span>
			</p>
		</div>
	)
}

export default Message
