import {
	BellIcon,
	ChatBubbleOvalLeftEllipsisIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'
import { MESSAGES, NOTIFICATIONS } from '../../../../data/appConfig'
import Message from '../../../ui kit/Message'
import Notification from '../../../ui kit/Notification'
import ActionButton from './ActionButton'

const ActionButtonSwitch = () => {
	const [notificationIsActive, setNotifIsActive] = useState(false)
	const [messageIsActive, setMessageIsActive] = useState(false)

	return (
		<>
			<ActionButton
				name='Messages'
				icon={ChatBubbleOvalLeftEllipsisIcon}
				data={MESSAGES}
				contains={Message}
				isActive={messageIsActive}
				setIsActive={setMessageIsActive}
				setOther={setNotifIsActive}
			/>
			<ActionButton
				name='Notifications'
				icon={BellIcon}
				data={NOTIFICATIONS}
				contains={Notification}
				isActive={notificationIsActive}
				setIsActive={setNotifIsActive}
				setOther={setMessageIsActive}
			/>
		</>
	)
}

export default ActionButtonSwitch
