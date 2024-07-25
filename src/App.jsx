import { useEffect, useState } from 'react'
import Feed from './components/feed/Feed'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import { AppContext } from './contexts/AppContexts'

const App = () => {
	const [sidebarIsLocked, setSidebarIsLocked] = useState(false)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [windowWidth])

	const isWideScreen = windowWidth > 768

	return (
		<div className='relative z-0 flex h-svh flex-col overflow-x-hidden'>
			<AppContext.Provider
				value={{ sidebarIsLocked, setSidebarIsLocked, isWideScreen }}
			>
				<Sidebar />
				<div className='transition-color sticky top-0 flex h-20 w-full select-none flex-row bg-navbar-background shadow duration-300 dark:bg-navbar-background-d'>
					<Navbar />
				</div>
				<div
					className='transition-color -z-9 w-full overflow-y-auto bg-slate-100 duration-300 dark:bg-feed-background-d'
					style={{
						minHeight: 'calc(100% - 5rem)'
					}}
				>
					<Feed />
				</div>
			</AppContext.Provider>
		</div>
	)
}

export default App
