import { Pie } from 'react-chartjs-2'

const PieChart = ({ dataContainer = undefined }) => {
	if (dataContainer) {
		return <Pie data={dataContainer.series} options={dataContainer.options} />
	}
}

export default PieChart
