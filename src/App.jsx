import { useState } from 'react'
import Feed from './components/feed/Feed'
import Navbar from './components/navbar/Navbar'
import { AppContext } from './contexts/AppContexts'

const App = () => {
	const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

	return (
		<div className='relative h-screen overflow-y-auto overflow-x-hidden'>
			<AppContext.Provider value={{ sidebarIsOpen, setSidebarIsOpen }}>
				<div className='transition-color sticky top-0 flex h-20 select-none flex-row bg-navbar-background shadow duration-300 dark:bg-navbar-background-d'>
					<Navbar />
				</div>
				<div
					className='transition-color absolute -z-9 w-full bg-slate-100 duration-300 dark:bg-feed-background-d'
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
