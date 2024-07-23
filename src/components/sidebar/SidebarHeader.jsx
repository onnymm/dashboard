import { NavLink } from 'react-router-dom'

const SidebarHeader = ({ isSidebarOpen, isWideScreen }) => {
	return (
		<NavLink
			className={`${isSidebarOpen && isWideScreen ? 'w-72' : 'w-16 sm:w-36'} z-9999 flex items-center transition-width duration-500`}
		>
			<img
				src='./logo.png'
				draggable='false'
				className={`${isSidebarOpen ? 'rotate-50' : 'rotate-0'} ml-5 mr-1 size-10 transition duration-300`}
			/>
			<span
				className={`${isSidebarOpen ? 'text-white' : 'text-black'} ${!isWideScreen && !isSidebarOpen ? 'animate-hide-unmount' : 'animate-mount-unhide'} text-2xl font-medium opacity-90 transition duration-500 dark:text-white`}
			>
				iaCele
			</span>
		</NavLink>
	)
}

export default SidebarHeader
