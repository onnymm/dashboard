import {
	ArrowLeftStartOnRectangleIcon,
	FaceFrownIcon,
	UserIcon
} from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

// Ïconos predefinidos para solo recibir strings
const ICONS = {
	user: <UserIcon />,
	face_frown: <FaceFrownIcon />,
	log_out: <ArrowLeftStartOnRectangleIcon />
}

const ProfileLink = ({ icon, label, route, setter }) => {
	return (
		<NavLink
			className={({ isActive }) =>
				`${isActive ? 'bg-gray-300' : ''} flex size-full h-8 items-center gap-1 rounded-md text-sm text-black opacity-80 transition duration-300 hover:bg-gray-300 dark:text-white dark:hover:bg-slate-800`
			}
			to={route}
			onClick={() => setter && setter(false)}
		>
			<div className='aspect-square h-full p-1.5'>{ICONS[icon]}</div>
			<span>{label}</span>
		</NavLink>
	)
}

export default ProfileLink
