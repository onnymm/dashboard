import Feed from './components/feed/Feed'
import Navbar from './components/navbar/Navbar'

const App = () => {
	return (
		<>
			<div className='h-screen overflow-y-auto'>
				<div className='sticky top-0 flex flex-row h-20 select-none shadow bg-navbar-background dark:bg-navbar-background-d transition-color duration-300'>
					<Navbar />
				</div>
				<div
					className='bg-feed-background dark:bg-feed-background-d transition-color duration-300'
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
