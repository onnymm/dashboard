import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../contexts/AppContexts'
import { useClickOutside } from '../../custom hooks/useClickOutside'
import SidebarContent from './SidebarContent'
import SidebarHeader from './SidebarHeader'
import SidebarToggle from './SidebarToggle'

const Sidebar = () => {
	const { sidebarIsOpen, setSidebarIsOpen } = useContext(AppContext)
	const [sidebarIsOpenNOverlaps, setSidebarIsOpenNOverlaps] = useState(false)
	const [sidebarIsLocked, setSidebarIsLocked] = useState(false)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
			setSidebarIsOpenNOverlaps(false)
			if (sidebarIsLocked && windowWidth < 1250) {
				setSidebarIsOpen(true)
			} else {
				setSidebarIsOpen(false)
			}
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [
		setSidebarIsOpen,
		setSidebarIsOpenNOverlaps,
		sidebarIsLocked,
		windowWidth
	])

	const isWideScreen = windowWidth > 768
	const isSidebarOpen = isWideScreen ? sidebarIsOpen : sidebarIsOpenNOverlaps
	const setSidebarOpen = isWideScreen
		? setSidebarIsOpen
		: setSidebarIsOpenNOverlaps

	let domNode = useClickOutside(() => {
		isWideScreen
			? sidebarIsLocked
				? ''
				: setSidebarIsOpen(false)
			: setSidebarIsOpenNOverlaps(false)
	})

	return (
		<>
			<aside ref={domNode} className='relative flex'>
				<SidebarHeader
					isSidebarOpen={isSidebarOpen}
					isWideScreen={isWideScreen}
				/>
				<button
					className={` ${!isSidebarOpen ? 'pointer-events-none opacity-0' : 'opacity-90 delay-300'} ${sidebarIsLocked ? 'animate-hide-unmount' : ''} absolute left-52 top-3 z-99999 ml-auto px-4 py-4 text-white transition-opacity`}
					onClick={() => setSidebarOpen(false)}
				>
					<ArrowLeftIcon className='size-6' />
				</button>
				<SidebarToggle
					isSidebarOpen={isSidebarOpen}
					setSidebarOpen={setSidebarOpen}
					sidebarIsLocked={sidebarIsLocked}
					isWideScreen={isWideScreen}
				/>
				<div
					className={`${!isSidebarOpen ? '-translate-x-72' : 'translate-x-0'} fixed z-999 flex h-screen w-72 select-none flex-col bg-sidebar-background px-4 pb-4 transition duration-500 dark:bg-sidebar-background-d`}
				>
					<div className='h-20 flex-none' />
					<SidebarContent
						sidebarIsLocked={sidebarIsLocked}
						setSidebarIsLocked={setSidebarIsLocked}
					/>
				</div>
			</aside>

			{/* Filter */}
			<div
				className={`${sidebarIsOpenNOverlaps ? 'opacity-20' : 'opacity-0'} pointer-events-none fixed z-9 h-screen w-screen bg-black transition-opacity duration-500`}
			/>
		</>
	)
}

export default Sidebar
