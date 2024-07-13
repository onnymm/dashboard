import {
	BellIcon,
	ChatBubbleOvalLeftEllipsisIcon
} from '@heroicons/react/24/outline'
import NavbarActionButton from './NavbarActionButton'
import NavbarButton from './NavbarButton'
import NavbarDarkMode from './NavbarDarkMode'
import NavbarProfile from './NavbarProfile'
import NavbarSearch from './NavbarSearch'

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

const Navbar = () => {
	return (
		<header className='flex flex-grow justify-between px-6 py-4'>
			<NavbarSearch />
			<div className='flex gap-4 items-center ml-auto'>
				<NavbarButton icon={ChatBubbleOvalLeftEllipsisIcon} />
				<NavbarActionButton
					name='Notifications'
					icon={BellIcon}
					data={NOTIFICATIONS}
					contains='notification'
				/>
				<NavbarDarkMode />
				<NavbarProfile />
			</div>
		</header>
	)
}

export default Navbar
