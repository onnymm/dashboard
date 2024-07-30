import { NavLink } from 'react-router-dom'

const LogoLink = ({ imgSource, handleClick, children }) => {
	return (
		<NavLink
			to=''
			className='flex items-center gap-1 text-2xl font-medium'
			onClick={handleClick}
		>
			<img src={imgSource} className='size-12 rotate-50' />
			<h1 className=''>{children}</h1>
		</NavLink>
	)
}

export default LogoLink
