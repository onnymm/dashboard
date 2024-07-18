import { NavLink } from 'react-router-dom'

const ListNavLink = ({ label, route }) => {
	return (
		<NavLink
			to={route}
			className={({ isActive }) =>
				`rounded-sm ${isActive ? 'opacity-100' : 'opacity-60'} transition duration-300 hover:opacity-100 text-white py-1`
			}
		>
			{label}
		</NavLink>
	)
}

export default ListNavLink
