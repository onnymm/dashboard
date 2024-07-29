import { useState } from 'react'
import { useClickOutside } from '../../../custom hooks/useClickOutside'
import Button from '../../ui kit/Button'
import ContentList from './ContentList'

const ActionButton = ({ name, icon, data, contains }) => {
	const [isActive, setIsActive] = useState(false)

	let domNode = useClickOutside(() => setIsActive(false)) // Si se clickea fuera del nodo, dejar de mostrar el contenido del botón

	return (
		<div ref={domNode} className='relative'>
			{/* Botón */}
			<Button icon={icon} state={isActive} setter={setIsActive} />
			{/* Contenido */}
			<div
				className={`${!isActive ? 'pointer-events-none opacity-0' : 'opacity-100'} transition`}
			>
				<ContentList name={name} data={data} contains={contains} />
			</div>
		</div>
	)
}

export default ActionButton
