import {
	BellIcon,
	ChatBubbleOvalLeftEllipsisIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'
import { MESSAGES, NOTIFICATIONS } from '../../../../data/appConfig'
import Message from '../../../ui kit/Message'
import Notification from '../../../ui kit/Notification'
import ActionButton from './ActionButton'
import NavbarProfile from './NavbarProfile'

const ActionButtonSwitch = () => {
	const [buttonsActive, setButtonsActive] = useState({
		messages: false,
		notifications: false,
		profile: false
	})

	const setSwitch = button =>
		setButtonsActive(prevState => {
			const newState = { ...prevState }
			Object.keys(newState).forEach(key => {
				key === button
					? (newState[key] = !newState[key])
					: (newState[key] = false)
			})
			return newState
		})

	return (
		<>
			<ActionButton
				name='messages'
				icon={ChatBubbleOvalLeftEllipsisIcon}
				data={MESSAGES}
				contains={Message}
				buttonsActive={buttonsActive}
				setButtonsActive={setSwitch}
			/>
			<ActionButton
				name='notifications'
				icon={BellIcon}
				data={NOTIFICATIONS}
				contains={Notification}
				buttonsActive={buttonsActive}
				setButtonsActive={setSwitch}
			/>
			<NavbarProfile
				name='profile'
				buttonsActive={buttonsActive}
				setButtonsActive={setSwitch}
			/>
		</>
	)
}

export default ActionButtonSwitch
