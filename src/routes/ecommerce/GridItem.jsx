import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/16/solid'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContexts'

const GridItem = ({ icon: Icon, amount, label, percent, gain }) => {
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
			? 'text-green-600'
			: gain === false
				? 'text-red-600'
				: 'dark:text-white opacity-70'

	return (
		<div
			className={`${sidebarIsLocked ? 'xl:col-span-3' : 'lg:col-span-3'} col-span-12 h-40 w-full rounded bg-white px-7 py-6 shadow-md transition duration-300 dark:bg-navbar-background-d sm:col-span-6`}
		>
			{/* Ícono */}
			{Icon && (
				<div className='mb-3 flex'>
					<div className='dark: rounded-full bg-slate-100 p-3 opacity-80 transition dark:bg-navbar-icons-background-d'>
						<Icon className='size-8 text-blue-500' />
					</div>
				</div>
			)}
			<div className='flex justify-between'>
				{/* Cantidad y subtítulo */}
				<div className='flex flex-col gap-1'>
					<h1 className='text-xl font-bold transition duration-300 dark:text-white'>
						{amount}
					</h1>
					<p className='text-sm opacity-60 transition duration-300 dark:text-white'>
						{label}
					</p>
				</div>
				{/* Porcentaje y flecha */}
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

export default GridItem
