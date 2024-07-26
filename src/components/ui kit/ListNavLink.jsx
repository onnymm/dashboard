import { NavLink } from 'react-router-dom'

const ListNavLink = ({ label, route }) => {
	return (
		<NavLink
			to={route}
			className={({ isActive }) =>
				`rounded-sm ${isActive ? 'opacity-100' : 'opacity-60'} py-1 pl-6 text-white transition duration-300 hover:opacity-100`
			}
		>
			{label}
		</NavLink>
	)
}

export default ListNavLink
