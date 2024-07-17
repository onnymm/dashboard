import { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const ListNavLink = ({ label, route, setter }) => {
	const location = useLocation()
	const lowercasedPath = location.pathname.toLowerCase()
	const isActive = lowercasedPath == `/${route}`

	useEffect(() => {
		if (isActive) {
			setter(true)
		} else {
			setter(false)
		}
	}, [isActive, setter])

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
