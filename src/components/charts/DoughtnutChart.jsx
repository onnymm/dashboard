import { Doughnut } from 'react-chartjs-2'

const DoughtnutChart = ({ dataContainer = undefined }) => {
	if (dataContainer) {
		return (
			<Doughnut data={dataContainer.series} options={dataContainer.options} />
		)
	}
}

export default DoughtnutChart
