import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const SidebarDropdown = ({ children, icon: Icon }) => {
	const [isOpen, setIsOpen] = useState(false)
	console.log(isOpen)

	return (
		<div
			className='flex items-center px-5 py-2 cursor-pointer hover:bg-sidebar-section-hover transition duration-300 rounded-sm'
			onClick={() => setIsOpen(!isOpen)}
		>
			<div className='flex gap-2'>
				<Icon className='size-6 stroke-sidebar-section' />
				<span className='leading-relaxed text text-sidebar-section'>
					{children}
				</span>
			</div>
			<ChevronUpIcon
				className='size-6 fill-sidebar-section ml-auto'
				style={{
					transition: 'transform 0.3s ease',
					transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
				}}
			/>
		</div>
	)
}

export default SidebarDropdown
