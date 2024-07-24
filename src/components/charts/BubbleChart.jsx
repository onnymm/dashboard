import { Bubble } from 'react-chartjs-2';

const BubbleChart = ({ dataContainer = undefined }) => {

    if ( dataContainer ) {
        return (
            <Bubble
                data={dataContainer.series}
                options={dataContainer.options}
            />
        )
    }
}

export default BubbleChart;