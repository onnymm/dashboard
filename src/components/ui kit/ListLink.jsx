import {
	ArrowLeftStartOnRectangleIcon,
	FaceFrownIcon,
	UserIcon
} from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

const ICONS = {
	user: <UserIcon />,
	face_frown: <FaceFrownIcon />,
	log_out: <ArrowLeftStartOnRectangleIcon />
}

const ListLink = ({ icon, label, route }) => {
	return (
		<NavLink
			className='flex gap-2 rounded-md p-2 text-sm text-black opacity-80 transition duration-300 hover:bg-gray-300 dark:text-white dark:hover:bg-slate-800'
			to={route}
		>
			<div className='size-5'>{ICONS[icon]}</div>
			<span>{label}</span>
		</NavLink>
	)
}

export default ListLink
