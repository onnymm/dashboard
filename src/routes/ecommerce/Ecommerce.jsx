import { PRICEGRID_DATA } from '../../data/appConfig'
import GridItem from './GridItem'

const Ecommerce = () => {
	return (
		<div className='grid h-min w-full auto-cols-min auto-rows-auto grid-cols-12 gap-4'>
			{PRICEGRID_DATA.map(item => (
				<GridItem key={item.id} {...item} />
			))}
		</div>
	)
}

export default Ecommerce
