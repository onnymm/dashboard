import Feed from './components/feed/Feed'
import Navbar from './components/navbar/Navbar'

const App = () => {
	return (
		<>
			<div className='h-screen overflow-y-auto'>
				<div className='transition-color sticky top-0 flex h-20 select-none flex-row bg-navbar-background shadow duration-300 dark:bg-navbar-background-d'>
					<Navbar />
				</div>
				<div
					className='transition-color bg-feed-background duration-300 dark:bg-feed-background-d'
					style={{
						minHeight: 'calc(100% - 5rem)'
					}}
				>
					<Feed />
				</div>
			</div>
		</>
	)
}

export default App
