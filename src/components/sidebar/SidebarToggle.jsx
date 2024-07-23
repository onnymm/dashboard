import { Bars3Icon } from '@heroicons/react/16/solid'

const SidebarToggle = ({
	isSidebarOpen,
	setSidebarOpen,
	sidebarIsLocked,
	isWideScreen
}) => {
	return (
		<div className='flex items-center'>
			<button
				className={`${sidebarIsLocked && isWideScreen ? 'animate-hide-unmount' : 'animate-mount-unhide'} mx-6 size-8 rounded-sm p-1 opacity-90 transition duration-500 dark:text-white`}
				onClick={() => setSidebarOpen(!isSidebarOpen)}
			>
				<Bars3Icon />
			</button>
		</div>
	)
}

export default SidebarToggle
