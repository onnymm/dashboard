import { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import SidebarToggle from '../sidebar/SidebarToggle'

const SidebarContainer = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
			<SidebarToggle isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	)
}

export default SidebarContainer
