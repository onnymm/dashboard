const Notification = ({ header, content }) => {
	return (
		<div className='h-min flex-none overflow-hidden p-4 text-left text-xs dark:text-white'>
			<p className='line-clamp-3'>
				{header && (
					<span className='opacity-90 dark:opacity-90'>{`${header} - `}</span>
				)}
				<span className='font-extralight opacity-90 dark:opacity-80'>
					{content}
				</span>
			</p>
		</div>
	)
}

export default Notification
