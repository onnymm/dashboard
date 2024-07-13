import Notification from './Notification'

const ContentList = ({ name, content, contains, isActive }) => {
	// console.log('Rendered: Content List')

	// Contains is the component that will be contained within the list

	const notificationList = generateNotificationsList(content)

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

const generateNotificationsList = notifications => {
	if (!notifications.length) return <p>No hay notificaciones</p>

	return notifications.map(notification => (
		<Notification key={notification.id} {...notification} />
	))
}

export default ContentList
