import { useState } from 'react'
import { ContentListContext } from '../../../../contexts/NavbarActionButtonsContexts'
import { useClickOutside } from '../../../../custom hooks/useClickOutside'
import Button from '../../../ui kit/Button'
import ContentList from './ContentList'

const ActionButton = ({ name, icon, data, contains }) => {
	const [isActive, setIsActive] = useState(false)

	let domNode = useClickOutside(() => setIsActive(false))

	return (
		<div ref={domNode} className='relative'>
			<Button icon={icon} isActive={isActive} setIsActive={setIsActive} />
			<ContentListContext.Provider value={{ name, data, contains }}>
				<div
					className={`${!isActive ? 'pointer-events-none opacity-0' : 'opacity-100'} transition`}
				>
					<ContentList />
				</div>
			</ContentListContext.Provider>
		</div>
	)
}

export default ActionButton
