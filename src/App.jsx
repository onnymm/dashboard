import { useEffect } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import getBarData from './samples/localAPI'

const App = () => {
	useEffect(() => {
		getBarData()
	}, [])

	return <Sidebar />
}

export default App
