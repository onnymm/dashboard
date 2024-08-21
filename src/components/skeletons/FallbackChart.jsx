import { ChartBarSquareIcon } from '@heroicons/react/24/outline'

const FallbackChart = () => {
	return (
		<div className='transition-dark relative flex flex-grow animate-pulse items-center justify-center bg-slate-200 dark:bg-slate-600'>
			{/* Background Icon with Pulsing Effect */}
			<ChartBarSquareIcon className='transition-dark size-16 opacity-50 dark:text-white dark:opacity-60' />
			{/* Foreground Icon */}
			<ChartBarSquareIcon className='transition-dark absolute size-12 animate-ping opacity-60 dark:text-white' />
		</div>
	)
}

export default FallbackChart
