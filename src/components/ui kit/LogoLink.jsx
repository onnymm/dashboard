import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const LogoLink = ({ imgSource, handleClick, children, route, extraStyles }) => {
	const [isLoaded, setIsLoaded] = useState(false)

	const handleOnLoad = () => {
		setIsLoaded(true)
	}

	return (
		<NavLink
			to={route}
			className={`flex items-center gap-1 text-2xl font-medium ${extraStyles}`}
			onClick={handleClick}
		>
			<div className='relative size-12 items-center'>
				{!isLoaded && (
					<div className='absolute m-1.5 size-3/4 animate-pulse rounded-md bg-slate-300 dark:bg-slate-500' />
				)}
				<img
					src={imgSource}
					onLoad={handleOnLoad}
					className='aspect-square size-full rotate-50'
				/>
			</div>
			{children}
		</NavLink>
	)
}

export default LogoLink
