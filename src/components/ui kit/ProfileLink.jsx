import {
	ArrowLeftStartOnRectangleIcon,
	FaceFrownIcon,
	UserIcon
} from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

// Íconos predefinidos para solo recibir strings
const ICONS = {
	user: <UserIcon />,
	face_frown: <FaceFrownIcon />,
	log_out: <ArrowLeftStartOnRectangleIcon />
}

const ProfileLink = ({ icon, label, route, handleClick }) => {
	return (
		<NavLink
			className={({ isActive }) =>
				`${isActive ? 'bg-gray-300 dark:bg-sidebar-background-d' : ''} flex size-full h-8 items-center gap-1 rounded-sm text-sm text-black opacity-80 transition duration-300 hover:bg-gray-300 dark:text-white dark:hover:bg-sidebar-background-d`
			}
			to={route}
			onClick={handleClick}
		>
			<div className='aspect-square h-full p-1.5'>{ICONS[icon]}</div>
			<span>{label}</span>
		</NavLink>
	)
}

export default ProfileLink
