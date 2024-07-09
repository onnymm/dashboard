import { useEffect } from 'react'
import getBarData from './samples/localAPI'

const App = () => {
	useEffect(() => {
		getBarData()
	}, [])

	return <h1 className='text-red-500'>Hello world!</h1>
}

export default App
