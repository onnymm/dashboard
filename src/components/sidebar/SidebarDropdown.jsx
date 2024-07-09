import { ChevronUpIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const SidebarDropdown = ({ children, icon: Icon }) => {
	const [isOpen, setIsOpen] = useState(false)
	console.log(isOpen)

	return (
		<div
			className='hover:bg-sidebar-section-hover transition duration-300 flex flex-row w-full items-center gap-2 px-5 py-2 rounded-sm'
			onClick={() => setIsOpen(!isOpen)}
		>
			<Icon className='size-6 fill-sidebar-section' />
			<span className='text-sidebar-section font-medium'>{children}</span>
			<ChevronUpIcon
				className='size-5 fill-sidebar-section ml-auto'
				style={{
					transition: 'transform 0.3s ease',
					transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
				}}
			/>
		</div>
	)
}

export default SidebarDropdown
