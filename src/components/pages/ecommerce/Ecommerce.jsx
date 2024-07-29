import {
	Cog8ToothIcon,
	IdentificationIcon,
	PaintBrushIcon,
	ShoppingBagIcon
} from '@heroicons/react/24/outline'

import GridItem from './GridItem'

const PRICEGRID_DATA = [
	{
		id: 0,
		icon: PaintBrushIcon,
		amount: '66.66MC',
		label: 'Total earned',
		percent: '0.01',
		gain: undefined
	},
	{
		id: 1,
		icon: Cog8ToothIcon,
		amount: '12.30IC',
		label: 'Total spent',
		percent: '280%',
		gain: true
	},
	{
		id: 2,
		icon: ShoppingBagIcon,
		amount: '99G',
		label: 'Actives',
		percent: '3.20%',
		gain: false
	},
	{
		id: 3,
		icon: IdentificationIcon,
		amount: '-200K',
		label: 'Credit score',
		percent: '15%',
		gain: false
	}
]

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
