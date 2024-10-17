const Fallback = ({ icon: Icon }) => {
	return (
		<div className='relative flex flex-grow justify-center items-center bg-slate-200 dark:bg-slate-600 rounded-lg min-h-full transition-dark animate-pulse'>
			{/* Background Icon with Pulsing Effect */}
			<Icon className='opacity-50 dark:opacity-60 dark:text-white transition-dark size-16' />
			{/* Foreground Icon */}
			<Icon className='absolute opacity-60 dark:text-white transition-dark animate-ping size-12' />
		</div>
	)
}

export default Fallback
