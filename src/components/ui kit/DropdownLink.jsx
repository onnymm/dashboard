import { NavLink } from 'react-router-dom'

const DropdownLink = ({ label, route, setter }) => {
	return (
		<NavLink
			to={route}
			className={({ isActive }) =>
				`rounded-sm ${isActive ? 'opacity-100' : 'opacity-60'} py-1 pl-6 text-white transition duration-300 hover:opacity-100`
			}
			onClick={() => setter && setter(false)}
		>
			{label}
		</NavLink>
	)
}

export default DropdownLink
