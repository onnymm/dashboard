import { Scatter } from 'react-chartjs-2';

const ScatterChart = ({ dataContainer = undefined }) => {

    if ( dataContainer ) {
        return (
            <Scatter
                data={dataContainer.series}
                options={dataContainer.options}
            />
        )
    }
}

export default ScatterChart;