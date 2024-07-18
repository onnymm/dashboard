import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import List from '../ui kit/List'
import ListNavLink from '../ui kit/ListNavLink'

const SidebarDropdown = ({ children, icon: Icon, content, height }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [isOnPath, setIsOnPath] = useState(false)

	const lowercasedPath = useLocation().pathname.toLowerCase().substring(1)

	useEffect(() => {
		if (content) {
			const matchPath = content.some(item => lowercasedPath === item.route)
			setIsOnPath(matchPath)
		}
	}, [content, lowercasedPath])

	useEffect(() => {
		isOnPath ? setIsOpen(true) : setIsOpen(false)
	}, [isOnPath])

	return (
		<>
			<div
				className={`${isOnPath ? 'bg-sidebar-section-hover' : ''} flex cursor-pointer items-center px-5 py-2 text-white transition duration-300 hover:bg-sidebar-section-hover dark:hover:bg-sidebar-section-hover-d`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className='flex gap-2'>
					<Icon className='size-6 opacity-80' />
					<span className='text leading-relaxed opacity-80'>{children}</span>
				</div>
				<ChevronUpIcon
					className={`${isOpen ? 'rotate-0' : 'rotate-180'} ml-auto size-6 opacity-70 transition duration-300`}
				/>
			</div>

			{content && (
				<div
					className={`${isOpen ? height : 'h-0'} overflow-hidden pl-12 transition-height duration-300`}
				>
					<List Contains={ListNavLink} data={content} name='links' />
				</div>
			)}
		</>
	)
}

export default SidebarDropdown
