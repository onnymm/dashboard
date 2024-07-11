import Feed from './components/feed/Feed'
import Sidebar from './components/sidebar/Sidebar'

const App = () => {
	return (
		<div className='flex'>
			<Sidebar />
			<Feed />
		</div>
	)
}

export default App
