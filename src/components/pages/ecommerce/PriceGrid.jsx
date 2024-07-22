import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/16/solid'

const GridStuff = ({ icon: Icon, amount, label, percent, gain }) => {
	const arrowTail = 'size-3'

	const arrowIcon =
		gain === true ? (
			<ArrowUpIcon className={arrowTail} />
		) : gain === false ? (
			<ArrowDownIcon className={arrowTail} />
		) : (
			''
		)

	const textColor =
		gain === true
			? 'text-green-600'
			: gain === false
				? 'text-red-600'
				: 'dark:text-white opacity-70'

	return (
		<div className='col-span-12 h-40 w-full rounded bg-white px-7 py-6 shadow-md transition duration-300 dark:bg-slate-950 sm:col-span-6 lg:col-span-3'>
			{Icon && (
				<div className='mb-3 flex'>
					<div className='rounded-full bg-slate-100 p-3 transition duration-300 dark:bg-slate-900'>
						<Icon className='size-8 text-blue-500' />
					</div>
				</div>
			)}
			<div className='flex justify-between'>
				<div className='flex flex-col gap-1'>
					<h1 className='text-xl font-bold transition duration-300 dark:text-white'>
						{amount}
					</h1>
					<p className='text-sm opacity-60 transition duration-300 dark:text-white'>
						{label}
					</p>
				</div>
				<div
					className={`text-gray flex items-center gap-1 self-end font-medium ${textColor}`}
				>
					{arrowIcon}
					<p className='text-sm opacity-100'>{percent}</p>
				</div>
			</div>
		</div>
	)
}

export default GridStuff
