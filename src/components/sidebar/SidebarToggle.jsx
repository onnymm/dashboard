import { Bars3Icon } from '@heroicons/react/16/solid'
import { useContext } from 'react'
import { SidebarContext } from '../../contexts/SidebarContext'

const SidebarToggle = () => {
	const { isOpen, setIsOpen } = useContext(SidebarContext)

	return (
		<>
			<button
				className='absolute bottom-1/4 left-[4.5rem] z-9 p-2 transition duration-300 dark:text-white dark:opacity-80 sm:left-44'
				onClick={() => {
					!isOpen && setIsOpen(true)
				}}
			>
				<Bars3Icon className='size-6' />
			</button>
		</>
	)
}

export default SidebarToggle
