import { ArrowLeftIcon, Bars3Icon } from '@heroicons/react/16/solid'
import { NavLink } from 'react-router-dom'

const SidebarToggle = ({ sidebarIsOpen, setSidebarOpen }) => {
	return (
		<div className='flex items-center'>
			<div
				className={`${sidebarIsOpen ? 'w-72' : 'w-40'} flex transition-width duration-500`}
			>
				<NavLink className='flex items-center'>
					<img
						src='./logo.png'
						draggable='false'
						className={`${sidebarIsOpen ? 'rotate-50' : 'rotate-0'} ml-5 mr-1 size-10 transition duration-300`}
					/>
					<span
						className={`${!sidebarIsOpen ? 'text-black' : 'text-white'} text-2xl font-medium opacity-90 transition duration-500 dark:text-white`}
					>
						iaCele
					</span>
				</NavLink>
				<button
					className={`${!sidebarIsOpen ? 'opacity-0' : 'opacity-90'} ml-auto mr-8 text-white transition-opacity ${!sidebarIsOpen ? 'duration-50' : 'delay-300 duration-300'}`}
					onClick={() => setSidebarOpen(false)}
				>
					<ArrowLeftIcon className='size-6' />
				</button>
			</div>

			<button
				className='mx-4 size-8 rounded-sm p-1 opacity-90 transition duration-500 dark:text-white'
				onClick={() => setSidebarOpen(!sidebarIsOpen)}
			>
				<Bars3Icon />
			</button>
		</div>
	)
}

export default SidebarToggle
