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
			className='flex gap-2 text-sm dark:hover:bg-slate-800 hover:bg-gray-300 opacity-80 p-2 rounded-md text-black dark:text-white transition duration-300'
			to={route}
		>
			<div className='size-5'>{ICONS[icon]}</div>
			<span>{label}</span>
		</NavLink>
	)
}

export default ListLink
