import { ContentListContext } from '../../../../contexts/NavbarActionButtonsContexts'
import Button from '../../../ui kit/Button'
import ContentList from './ContentList'

const ActionButton = ({
	name,
	icon,
	data,
	contains,
	isActive,
	setIsActive,
	setOther
}) => {
	return (
		<div className='relative'>
			<div
				onClick={() => {
					setIsActive(!isActive)
					setOther(false)
				}}
			>
				<Button icon={icon} />
			</div>
			<ContentListContext.Provider value={{ name, data, contains }}>
				<div
					className={`${!isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition`}
				>
					<ContentList />
				</div>
			</ContentListContext.Provider>
		</div>
	)
}

export default ActionButton
