const Notification = ({ header, content }) => {
	return (
		<div className='flex-none text-xs overflow-hidden text-left p-4 h-20 border-2 rounded-sm'>
			<p className='line-clamp-3'>
				{header && <span className='font-semibold'>{header}</span>}
				{` - ${content}`}
			</p>
		</div>
	)
}

export default Notification
