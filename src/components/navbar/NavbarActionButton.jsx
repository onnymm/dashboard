import { useState } from 'react'
import ContentList from './ContentList'
import NavbarButton from './NavbarButton'
import Notification from './Notification'

const NavbarActionButton = ({ name, icon, data, contains }) => {
	// console.log('Rendered: Notifications')

	const [isActive, setIsActive] = useState(false)

	return (
		<>
			<div className='relative'>
				<NavbarButton
					icon={icon}
					isActive={isActive}
					setIsActive={setIsActive}
				/>
				<ContentList
					name={name}
					content={data}
					contains={<Notification />}
					isActive={isActive}
				/>
			</div>
		</>
	)
}

export default NavbarActionButton
