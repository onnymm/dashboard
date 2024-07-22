import { Bars3Icon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

const SidebarToggle = ({ sidebarIsOpen, setSidebarOpen }) => {
	return (
		<div className='flex items-center'>
			<div
				className={`${sidebarIsOpen ? 'w-72' : 'w-40'} z-50 transition-width duration-500`}
			>
				<NavLink className='flex items-center'>
					<img
						src='./logo.png'
						draggable='false'
						className='ml-5 mr-1 size-10'
						style={{
							transition: 'transform 0.4s ease',
							transform: sidebarIsOpen ? 'rotate(50deg)' : 'rotate(0deg)'
						}}
					/>
					<span
						className={`${!sidebarIsOpen ? 'text-black' : 'text-white'} text-2xl font-medium opacity-90 transition duration-500 dark:text-white`}
					>
						iaCele
					</span>
				</NavLink>
			</div>
			<button
				className='mx-4 size-8 rounded-sm p-1 transition duration-500 dark:text-white'
				onClick={() => setSidebarOpen(!sidebarIsOpen)}
			>
				<Bars3Icon />
			</button>
		</div>
	)
}

export default SidebarToggle
