import {
	BellIcon,
	ChatBubbleOvalLeftEllipsisIcon
} from '@heroicons/react/24/outline'
import ActionButton from './ActionButton'
import Message from './Message'
import Notification from './Notification'

const NOTIFICATIONS = [
	{
		id: 1,
		header: 'Kyber sales cut by 20%',
		content:
			"Hey boss, sorry to bother you on christmas but Master Plo kind of snorted a whole crate of Kyber haha. He's in the ER right now. How do we proceed?"
	},
	{
		id: 2,
		header: 'There are 6 horny Natuloans near you',
		content:
			'This link for meet singel ladie!!1 not virus. pelase trust... https://tinyurl.com/kyhzfahz'
	},
	{
		id: 3,
		header: 'Grindr',
		content: 'HXRNY EXHIBTNIST: sent a picture. Press for more'
	},
	{
		id: 4,
		header: 'Grindr',
		content: 'HXRNY EXHIBTNIST: sent a picture. Press for more'
	},
	{
		id: 5,
		header: 'Grindr',
		content: 'HXRNY EXHIBTNIST: sent a picture. Press for more'
	}
]

const MESSAGES = [
	{
		id: 1,
		avatar: './Jabba.jpg',
		header: 'xXJabbaDaHuttXx',
		content: 'hei dud you down for som minecraft? i just bought a realm'
	},
	{
		id: 2,
		avatar: './Jabba.jpg',
		header: 'xXJabbaDaHuttXx',
		content: 'hei dud you down for som minecraft? i just bought a realm'
	},
	{
		id: 3,
		avatar: './Jabba.jpg',
		header: 'xXJabbaDaHuttXx',
		content: 'hei dud you down for som minecraft? i just bought a realm'
	},
	{
		id: 4,
		avatar: './Jabba.jpg',
		header: 'xXJabbaDaHuttXx',
		content: 'hei dud you down for som minecraft? i just bought a realm'
	},
	{
		id: 5,
		avatar: './Jabba.jpg',
		header: 'xXJabbaDaHuttXx',
		content: 'hei dud you down for som minecraft? i just bought a realm'
	}
]

const ActionButtonSwitch = () => {
	const whoIsDisplayed = { Messages: false, Notifications: false }

	const names = ['Messages', 'Notifications']

	const handleClick = name => {
		Object.keys(whoIsDisplayed).forEach(key => {
			if (key !== name) whoIsDisplayed[key] = false
		})

		whoIsDisplayed[name] = !whoIsDisplayed[name]
		console.log(whoIsDisplayed)
	}

	return (
		<>
			<div onClick={() => handleClick(names[0])}>
				<ActionButton
					name={names[0]}
					icon={ChatBubbleOvalLeftEllipsisIcon}
					data={MESSAGES}
					contains={Message}
					whoIsDisplayed={whoIsDisplayed[names[0]]}
				/>
			</div>
			<div onClick={() => handleClick(names[1])}>
				<ActionButton
					name={names[1]}
					icon={BellIcon}
					data={NOTIFICATIONS}
					contains={Notification}
					whoIsDisplayed={whoIsDisplayed[names[1]]}
					onClick={() => handleClick(names[1])}
				/>
			</div>
		</>
	)
}

export default ActionButtonSwitch
