import {
	BellIcon,
	ChatBubbleOvalLeftEllipsisIcon
} from '@heroicons/react/24/outline'
import { MESSAGES, NOTIFICATIONS } from '../../../data/appConfig'
import Message from '../../ui kit/Message'
import Notification from '../../ui kit/Notification'
import ActionButton from './ActionButton'
import NavbarProfile from './NavbarProfile'

const ActionButtonSwitch = () => {
	return (
		<>
			<div className='flex sm:gap-2'>
				{/* Botón de despliegue de mensajes */}
				<ActionButton
					name='messages'
					icon={ChatBubbleOvalLeftEllipsisIcon}
					data={MESSAGES}
					contains={Message}
				/>
				{/* Botón de despliegue de notificaciones */}
				<ActionButton
					name='notifications'
					icon={BellIcon}
					data={NOTIFICATIONS}
					contains={Notification}
				/>
			</div>
			{/* Perfil con despliegue de links */}
			<NavbarProfile
				name='Amelia Earhart'
				occupation='Tech Lead'
				avatarSource='./avatar.jpg'
			/>
		</>
	)
}

export default ActionButtonSwitch
