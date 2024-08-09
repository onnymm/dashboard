import { ChartBarSquareIcon } from '@heroicons/react/24/outline'

const FallbackChart = () => {
	return (
		<div className='relative flex flex-grow animate-pulse items-center justify-center dark:bg-slate-600'>
			{/* Background Icon with Pulsing Effect */}
			<ChartBarSquareIcon className='size-16 dark:text-white dark:opacity-60' />
			{/* Foreground Icon */}
			<ChartBarSquareIcon className='absolute size-12 animate-ping dark:text-white' />
		</div>
	)
}

export default FallbackChart
