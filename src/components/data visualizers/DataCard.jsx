import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/16/solid'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContexts'

const DataCard = ({ icon: Icon, amount, label, percent, gain }) => {
	const { sidebarIsLocked } = useContext(AppContext)
	const arrowStyle = 'size-3'

	// Ícono dependiendo si hay ganancia definida
	const arrowIcon =
		gain === true ? (
			<ArrowUpIcon className={arrowStyle} />
		) : gain === false ? (
			<ArrowDownIcon className={arrowStyle} />
		) : (
			''
		)

	// Color dependiendo si hay ganancia definida
	const textColor =
		gain === true
			? 'text-green-500'
			: gain === false
				? 'text-red-500'
				: 'dark:text-white opacity-70 transition-all duration-dark'

	return (
		<div
			className={`${sidebarIsLocked ? 'xl:col-span-3' : 'lg:col-span-3'} col-span-12 h-full w-full rounded bg-white px-7 py-6 shadow-md transition-colors duration-dark dark:bg-navbar-background-d sm:col-span-6`}
		>
			{/* Ícono */}
			{Icon && (
				<div className='flex mb-3'>
					<div className='bg-slate-100 dark:bg-navbar-icons-background-d opacity-80 p-3 rounded-full transition-all duration-dark'>
						<Icon className='text-main-500 size-8' />
					</div>
				</div>
			)}
			<div className='flex justify-between'>
				{/* Cantidad y subtítulo */}
				<div className='flex flex-col gap-1'>
					<h1 className='font-bold text-xl dark:text-white transition-all duration-dark'>
						{amount}
					</h1>
					<p className='text-current/60 text-sm dark:text-white/60 transition-all duration-dark'>
						{label}
					</p>
				</div>
				{/* Porcentaje y flecha */}
				<div
					className={`text-gray flex items-center gap-1 self-end font-medium ${textColor}`}
				>
					{arrowIcon}
					<p className='opacity-100 text-sm'>{percent.toFixed(2)}%</p>
				</div>
			</div>
		</div>
	)
}

export default DataCard
