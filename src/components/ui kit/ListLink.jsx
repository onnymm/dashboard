import { FaceFrownIcon, UserIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

const ICONS = {
	user: <UserIcon />,
	face_frown: <FaceFrownIcon />
}

const ListLink = ({ icon, label, route }) => {
	return (
		<NavLink
			className='flex gap-2 text-sm hover:bg-gray-300 transition duration-300 dark:text-white opacity-80 p-2 rounded-md'
			to={route}
		>
			<div className='size-5'>{ICONS[icon]}</div>
			{label}
		</NavLink>
	)
}

export default ListLink
