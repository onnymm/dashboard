import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../contexts/AppContexts'
import { useClickOutside } from '../../custom hooks/useClickOutside'
import SidebarContent from './SidebarContent'
import SidebarToggle from './SidebarToggle'

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { sidebarIsLocked: isLocked, setSidebarIsLocked: setIsLocked } =
		useContext(AppContext)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
			if (isLocked && windowWidth > 768) {
				setIsOpen(true)
			}
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [setIsOpen, isLocked, windowWidth])

	const isWideScreen = windowWidth > 768

	const handleClick = () => {
		isLocked && isWideScreen && setIsLocked(false)
		setIsOpen(!isOpen)
	}

	let domNode = useClickOutside(() => {
		if (!isLocked || !isWideScreen) setIsOpen(false)
	})

	return (
		<div className='relative'>
			<div ref={domNode} className='flex'>
				<SidebarToggle isOpen={isOpen} setIsOpen={setIsOpen} />
				<aside
					className={`${isOpen ? 'translate-x-0' : '-translate-x-72'} fixed z-999 flex h-screen w-72 flex-col overflow-x-hidden bg-sidebar-background px-2 pb-2 transition duration-500`}
				>
					<div
						className={`${isOpen ? 'opacity-100 delay-300' : 'opacity-0'} flex h-20 justify-between p-4 text-white transition`}
					>
						<NavLink to='' className='flex items-center'>
							<img src='./logo.png' className='size-12' />
							<h1 className={`mx-2 text-2xl font-medium`}>iaCele</h1>
						</NavLink>
						<button onClick={() => handleClick()} className='ml-auto'>
							<ArrowLeftIcon className='mx-4 size-6' />
						</button>
					</div>
					<SidebarContent isLocked={isLocked} setIsLocked={setIsLocked} />
				</aside>

				{/*
					FILTRO 
					- Si la sidebar está abierta:
						- Si está desbloqueada o la ventana es pequeña: opacidad-20
					- Si está cerrada, bloqueada, o en pantalla completa: opacidad-0
				*/}
				<div
					className={`${isOpen && (!isLocked || !isWideScreen) ? 'opacity-20' : 'opacity-0'} pointer-events-none absolute z-99 h-screen w-screen bg-black transition duration-300`}
				/>
			</div>
		</div>
	)
}

export default Sidebar
