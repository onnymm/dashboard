import { PolarArea } from 'react-chartjs-2'

const PolarChart = ({ dataContainer = undefined }) => {
	if (dataContainer) {
		return (
			<PolarArea data={dataContainer.series} options={dataContainer.options} />
		)
	}
}

export default PolarChart
