import {
	BellIcon,
	ChatBubbleOvalLeftEllipsisIcon
} from '@heroicons/react/24/outline'
import { MESSAGES, NOTIFICATIONS } from '../../../data/appConfig'
import ActionButton from './action buttons/ActionButton'
import NavbarProfile from './profile/NavbarProfile'

/*
COMPONENTES CONFIGURADOS PARA CONTENIDO DE LOS BOTONES DE ACCIÓN
	messages: Messages
	notifications: Notifications
*/

const ActionButtonSwitch = () => {
	return (
		<>
			{/* Botón de despliegue de mensajes */}
			<ActionButton
				name='messages'
				icon={ChatBubbleOvalLeftEllipsisIcon}
				data={MESSAGES}
			/>
			{/* Botón de despliegue de notificaciones */}
			<ActionButton name='notifications' icon={BellIcon} data={NOTIFICATIONS} />
			{/* Perfil con despliegue de links */}
			<NavbarProfile
				name='Amelia Earhart'
				occupation='Tech Lead'
				avatarSource='./avatar.webp'
			/>
		</>
	)
}

export default ActionButtonSwitch
