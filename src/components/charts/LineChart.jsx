import { Line } from 'react-chartjs-2'

const LineChart = ({ dataContainer = undefined }) => {
	if (dataContainer) {
		return <Line data={dataContainer.series} options={dataContainer.options} />
	}
}

export default LineChart
