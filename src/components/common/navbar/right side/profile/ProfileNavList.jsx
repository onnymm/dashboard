import { PROFILE_LINKS } from '../../../../../data/appConfig'
import List from '../../../../ui/List'
import ProfileLink from '../../../../ui/ProfileLink'

const ProfileNavList = handleContentClick => {
	return (
		<div className='min-h-12 w-48 rounded-md bg-white p-3 shadow-back dark:bg-navbar-icons-background-d'>
			<List
				Contains={ProfileLink}
				data={PROFILE_LINKS}
				name='Links'
				extraStyles='gap-1'
				handleClick={handleContentClick}
			/>
			{/* Línea divisora */}
			<hr className='my-2 border border-gray-300' />
			{/* Link de logout (se separó por motivos de diseño) */}
			<ProfileLink icon='log_out' label='Log out' route='' />
		</div>
	)
}

export default ProfileNavList
