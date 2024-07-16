import { ContentListContext } from '../../../contexts/NavbarActionButtonsContexts'
import Button from './Button'
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
		<>
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
					<ContentList isActive={isActive} />
				</ContentListContext.Provider>
			</div>
		</>
	)
}

export default ActionButton
