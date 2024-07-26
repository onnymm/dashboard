import { useState } from 'react'
import { ContentListContext } from '../../../../contexts/NavbarActionButtonsContexts'
import { useClickOutside } from '../../../../custom hooks/useClickOutside'
import Button from '../../../ui kit/Button'
import ContentList from './ContentList'

const ActionButton = ({ name, icon, data, contains }) => {
	const [isActive, setIsActive] = useState(false)

	let domNode = useClickOutside(() => setIsActive(false)) // Si se clickea fuera del nodo, dejar de mostrar el contenido del botón

	return (
		<div ref={domNode} className='relative'>
			{/* Botón */}
			<Button icon={icon} isActive={isActive} setIsActive={setIsActive} />
			{/* Contenido */}
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
