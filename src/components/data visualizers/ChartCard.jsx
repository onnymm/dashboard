import { useRef, } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ChartTemplate from './ChartTemplate';

const ChartCard = ({ chartData, chartSettings, className }) => {
	// Uso de useRef para evitar cambios en el ID tras renderizaciones
	const id = useRef(uuidv4()).current;

	return (
		<div
			className={`${className} flex h-96 rounded-sm bg-white p-5 shadow-md transition-colors duration-dark dark:bg-navbar-background-d`}
		>
			<ChartTemplate
				chartData={chartData}
				chartSettings={chartSettings}
				labelsContainerID={`label-container-${id}`}
			/>
		</div>
	);
};

export default ChartCard;
