import { BellIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import Notification from './Notification'

const NOTIFICATIONS = [
	{
		id: 1,
		header: 'Kyber sales cut by 20%',
		content:
			"Hey boss, sorry to bother you on christmas but Master Plo kind of snorted a whole crate of Kyber haha. He's in the ER. How do we proceed?"
	},
	{
		id: 2,
		header: 'There are 6 horny Natuloans near you',
		content:
			'Clikc this link for meet singel ladie!!1 not virus. pelase trust https://tinyurl.com/kyhzfahz'
	},
	{
		id: 3,
		header: 'Notification',
		content:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iusto mollitia vitae consequuntur consectetur, recusandae vero, voluptatibus voluptate dolorem, modi rerum voluptas maxime. Libero velit rerum obcaecati reprehenderit impedit quaerat.'
	},
	{
		id: 4,
		header: 'Notification',
		content:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iusto mollitia vitae consequuntur consectetur, recusandae vero, voluptatibus voluptate dolorem, modi rerum voluptas maxime. Libero velit rerum obcaecati reprehenderit impedit quaerat.'
	},
	{
		id: 5,
		header: 'Notification',
		content:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis iusto mollitia vitae consequuntur consectetur, recusandae vero, voluptatibus voluptate dolorem, modi rerum voluptas maxime. Libero velit rerum obcaecati reprehenderit impedit quaerat.'
	}
]

const NavbarNotificationsButton = () => {
	const [isActive, setIsActive] = useState(false)

	const notificationList = generateNotificationsList(NOTIFICATIONS)

	return (
		<>
			<div className='relative'>
				<button className='relative flex justify-center size-6 dark:bg-navbar-icons-background-d shadow-darkmode-switch-s border-black rounded-full'>
					<BellIcon
						onClick={() => setIsActive(!isActive)}
						className='size-4 m-auto dark:fill-white opacity-80 transition duration-500'
					/>
				</button>
				{isActive && (
					<div className='absolute overflow-y-auto max-h-80 sm:top-10 top-11 -right-20 sm:right-0 flex flex-col w-80 rounded-sm shadow-xl bg-white block'>
						<span className='sticky top-0 text-sm p-2 bg-white border'>
							Content
						</span>
						{notificationList}
					</div>
				)}
			</div>
		</>
	)
}

const generateNotificationsList = notifications => {
	if (!notifications.length) return <p>No hay notificaciones</p>

	return notifications.map(notification => (
		<Notification key={notification.id} {...notification} />
	))
}

export default NavbarNotificationsButton
