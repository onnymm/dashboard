import { Bar } from 'react-chartjs-2'

const BarChart = ({ dataContainer = undefined }) => {
	if (dataContainer) {
		return <Bar data={dataContainer.series} options={dataContainer.options} />
	}
}

export default BarChart
