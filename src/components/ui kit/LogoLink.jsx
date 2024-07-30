import { NavLink } from 'react-router-dom'

const LogoLink = ({ imgSource, handleClick, children, route, extraStyles }) => {
	return (
		<NavLink
			to={route}
			className={`flex items-center gap-1 text-2xl font-medium ${extraStyles}`}
			onClick={handleClick}
		>
			<img src={imgSource} className='size-12 rotate-50' />
			{children}
		</NavLink>
	)
}

export default LogoLink
