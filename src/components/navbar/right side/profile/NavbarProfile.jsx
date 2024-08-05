import { lazy, Suspense, useState } from 'react'
import { useClickOutside } from '../../../../custom hooks/useClickOutside'
import Avatar from '../../../ui kit/Avatar'
import { FallbackProfileNavList } from './FallbackProfileNavList'
const ProfileNavList = lazy(() => import('./ProfileNavList'))

const NavbarProfile = ({ name, occupation, avatarSource }) => {
	const [isActive, setIsActive] = useState(false)

	const handleProfileClick = () => {
		setIsActive(!isActive)
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
					<Avatar imgSource={avatarSource} animateOnClick={true} />
				</button>
				<div className='absolute right-0 top-16 z-30 sm:right-2'>
					{isActive && (
						// Contenido del dropdown
						<Suspense fallback={<FallbackProfileNavList />}>
							<ProfileNavList handleContentClick={handleProfileContentClick} />
						</Suspense>
					)}
				</div>
			</div>
		</div>
	)
}

export default NavbarProfile
