import { Bars3Icon } from '@heroicons/react/16/solid'

const SidebarToggle = ({ isOpen, setIsOpen }) => {
	return (
		<>
			<button
				className='fixed left-20 top-7 z-9 transition duration-300 dark:text-white sm:left-44'
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
