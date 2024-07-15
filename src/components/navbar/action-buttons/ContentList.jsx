import { useContext } from 'react'
import { NavbarActionButtonContext } from '../../../contexts/NavbarActionButtonContext'

const ContentList = ({ isActive }) => {
	const {
		name,
		data: notifications,
		contains: Contains
	} = useContext(NavbarActionButtonContext)

	const notificationList = generateNotificationsList(
		Contains,
		notifications,
		name
	)

	return (
		<div
			className={`${!isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition absolute max-h-80 sm:top-10 top-11 -right-32 flex flex-col sm:w-80 w-75 shadow-xl block`}
		>
			<div className='sticky top-0 text-sm p-3 bg-white dark:bg-navbar-icons-background-d z-10'>
				<span className='opacity-80 dark:text-white'>{name}</span>
			</div>
			<div className='overflow-y-auto divide-y-2 divide-white dark:divide-navbar-icons-background-d'>
				{notificationList}
			</div>
		</div>
	)
}

const generateNotificationsList = (Contains, notifications, name) => {
	if (!notifications.length) return <p>There are no {name.toLowerCase()}.</p>

	return notifications.map(notification => (
		<Contains key={notification.id} {...notification} />
	))
}

export default ContentList
