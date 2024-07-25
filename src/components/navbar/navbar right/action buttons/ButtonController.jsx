import {
	BellIcon,
	ChatBubbleOvalLeftEllipsisIcon
} from '@heroicons/react/24/outline'
import { MESSAGES, NOTIFICATIONS } from '../../../../data/appConfig'
import Message from '../../../ui kit/Message'
import Notification from '../../../ui kit/Notification'
import ActionButton from './ActionButton'
import NavbarProfile from './NavbarProfile'

const ActionButtonSwitch = () => {
	return (
		<>
			<div className='flex sm:gap-2'>
				<ActionButton
					name='messages'
					icon={ChatBubbleOvalLeftEllipsisIcon}
					data={MESSAGES}
					contains={Message}
				/>
				<ActionButton
					name='notifications'
					icon={BellIcon}
					data={NOTIFICATIONS}
					contains={Notification}
				/>
			</div>
			<NavbarProfile />
		</>
	)
}

export default ActionButtonSwitch
