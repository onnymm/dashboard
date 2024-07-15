import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const SidebarDropdown = ({ children, icon: Icon }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div
			className='flex items-center px-5 py-2 text-white cursor-pointer hover:bg-sidebar-section-hover dark:hover:bg-sidebar-section-hover-d transition duration-300 rounded-sm'
			onClick={() => setIsOpen(!isOpen)}
		>
			<div className='flex gap-2'>
				<Icon className='size-6 opacity-80' />
				<span className='leading-relaxed text opacity-80'>{children}</span>
			</div>
			<ChevronUpIcon
				className='size-6 ml-auto opacity-70'
				style={{
					transition: 'transform 0.3s ease',
					transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
				}}
			/>
		</div>
	)
}

export default SidebarDropdown
