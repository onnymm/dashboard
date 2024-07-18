import { ContentListContext } from '../../../../contexts/NavbarActionButtonsContexts'
import Button from '../../../ui kit/Button'
import ContentList from './ContentList'

const ActionButton = ({
	name,
	icon,
	data,
	contains,
	buttonsActive,
	setButtonsActive
}) => {
	return (
		<div className='relative'>
			<div
				onClick={() => {
					setButtonsActive(name)
				}}
			>
				<Button icon={icon} />
			</div>
			<ContentListContext.Provider value={{ name, data, contains }}>
				<div
					className={`${!buttonsActive[name] ? 'pointer-events-none opacity-0' : 'opacity-100'} transition`}
				>
					<ContentList />
				</div>
			</ContentListContext.Provider>
		</div>
	)
}

export default ActionButton
