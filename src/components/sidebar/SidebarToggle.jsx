import { Bars3Icon } from '@heroicons/react/16/solid'

const SidebarToggle = ({ isOpen, setIsOpen }) => {
	return (
		<>
			<button
				className='fixed left-[4.5rem] top-5 z-9 p-2 transition duration-300 dark:text-white sm:left-44'
				onClick={() => {
					setIsOpen(!isOpen)
				}}
			>
				<Bars3Icon className='size-6' />
			</button>
		</>
	)
}

export default SidebarToggle
