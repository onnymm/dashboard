import { v4 as uuidv4 } from 'uuid'
import ChartTemplate from './ChartTemplate'

const ChartCard = ({ chartSettings, extraStyle }) => {
	return (
		<>
			{/* Map through the charts and adjust the span */}
			<div
				className={`${extraStyle} flex h-96 rounded-sm bg-white p-5 shadow-md transition-colors duration-dark dark:bg-navbar-background-d`}
			>
				<ChartTemplate
					chartSettings={chartSettings}
					labelsContainerID={`label-container-${uuidv4()}`}
				/>
			</div>
		</>
	)
}

export default ChartCard
