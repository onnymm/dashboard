import { useState } from 'react'
import { useClickOutside } from '../../../custom hooks/useClickOutside'
import { links } from '../../../data/appConfig'
import Avatar from '../../ui kit/Avatar'
import List from '../../ui kit/List'
import ProfileLink from '../../ui kit/ProfileLink'

const NavbarProfile = ({ name, occupation, avatarSource }) => {
	const [isActive, setIsActive] = useState(false)
	const [hasBeenClicked, setHasBeenClicked] = useState(false)
	/*
	El estado hasBeenClicked está para prevenir la animación de fade out hasta que se use por
	primera vez el botón, si no se usa este estado, la animación de fade out se ejecutará cada
	carga de página
	*/

	const handleProfileClick = () => {
		setIsActive(!isActive)
		setHasBeenClicked(true)
	}

	const handleProfileContentClick = () => {
		setIsActive(false)
	}

	let domNode = useClickOutside(() => setIsActive(false))

	return (
		<div className='relative flex items-center transition duration-300 dark:text-white sm:gap-1'>
			{/* Nombre y ocupación */}
			<div className='hidden px-1 text-right lg:block'>
				<span className='block text-sm opacity-80'>{name}</span>
				<span className='block text-xs opacity-60'>{occupation}</span>
			</div>
			{/* Este div agranda la hitbox */}
			<div ref={domNode} className='flex rounded-full px-1 py-2'>
				{/* Botón dropdown de ávatar */}
				<button
					className='flex items-center gap-1'
					onClick={handleProfileClick}
				>
					<Avatar
						imgSource={avatarSource}
						animateOnClick={true}
						// extraStyles={`outline-none hover:outline-black ${isActive && 'outline-black'} transition-color duration-300`}
					/>
				</button>
				{/* Contenido del dropdown */}
				<div
					className={`${isActive ? 'animate-fade-grow-in' : hasBeenClicked ? 'pointer-events-none animate-fade-shrink-out' : 'pointer-events-none opacity-0'} absolute right-0 top-16 z-30 min-h-12 w-48 rounded-md bg-white p-3 shadow-back dark:bg-navbar-icons-background-d`}
				>
					<List
						Contains={ProfileLink}
						data={links}
						name='Links'
						extraStyles='gap-1'
						handleClick={handleProfileContentClick}
					/>
					{/* Barra separadora */}
					<hr className='my-2 border border-gray-300' />
					{/* Logout (este link está separado por motivos de diseño) */}
					<ProfileLink icon='log_out' label='Log out' route='' />
				</div>
			</div>
		</div>
	)
}

export default NavbarProfile
