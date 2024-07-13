import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/20/solid'

const NavbarChatButton = () => {
	return (
		<button className='flex size-6 dark:bg-navbar-icons-background-d shadow-darkmode-switch-s border-black rounded-full'>
			<ChatBubbleOvalLeftEllipsisIcon className='size-4 m-auto dark:fill-white opacity-80 transition duration-500' />
		</button>
	)
}

export default NavbarChatButton
