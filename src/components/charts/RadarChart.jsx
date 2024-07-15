import { Radar } from 'react-chartjs-2';

const RadarChart = ({ dataContainer = undefined }) => {

    if ( dataContainer ) {
        return (
            <Radar
                data={dataContainer.series}
                options={dataContainer.options}
            />
        )
    }
}

export default RadarChart;