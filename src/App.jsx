import { useState } from 'react';

const App = () => {
	const [data, setData] = useData();

	return (
		<div>
			{Object.keys(data).map(
				(key, index) => (
					<div key={index}>
						{`${key} - ${data[key]}`}
						<button onClick={() => setData(key)}>Cambiar</button>
					</div>
				)
			)}
		</div>
	)


}

const useData = () => {
	const [showData, setShowData] = useState({
		uno: true,
		dos: true,
		tres: true,
		cuatro: true,
	})

	const setData = (key) => {
		const newShowData = {}

		Object.keys(showData).forEach(
			(dataKey) => {
				console.log(key, showData[key])
				if ( dataKey === key ) {
					newShowData[dataKey] = !showData[dataKey]
				} else {
					newShowData[dataKey] = showData[dataKey]
				}
			}
		)
		
		setShowData(newShowData)
	}

	return [showData, setData]
}

export default App
