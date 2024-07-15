const Notification = ({ header, content }) => {
	return (
		<div className='flex-none h-min text-xs dark:text-white overflow-hidden text-left p-4 h-20 dark:bg-darkmode-switch-background-d'>
			<p className='line-clamp-3'>
				{header && <span className='opacity-90 dark:opacity-90'>{header}</span>}
				<span className='font-extralight opacity-90 dark:opacity-80'>{` - ${content}`}</span>
			</p>
		</div>
	)
}

export default Notification
