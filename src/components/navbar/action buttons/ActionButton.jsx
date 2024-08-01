import { useState } from 'react'
import { useClickOutside } from '../../../custom hooks/useClickOutside'
import Button from '../../ui kit/Button'
import ContentList from './ContentList'

const ActionButton = ({ name, icon, data, contains }) => {
	const [isActive, setIsActive] = useState(false)
	const [hasBeenClicked, setHasBeenClicked] = useState(false)
	/*
	El estado hasBeenClicked está para prevenir la animación de fade out hasta que se use por
	primera vez el botón, si no se usa este estado, la animación de fade out se ejecutará cada
	carga de página
	*/

	const handleButtonClick = () => {
		setIsActive(!isActive)
		setHasBeenClicked(true)
	}

	let domNode = useClickOutside(() => setIsActive(false)) // Si se clickea fuera del nodo, dejar de mostrar el contenido del botón

	return (
		<div ref={domNode} className='relative'>
			{/* Botón */}
			<Button icon={icon} state={isActive} handleClick={handleButtonClick} />
			{/* Contenido */}
			<div
				className={`${isActive ? 'animate-fade-grow-in' : hasBeenClicked ? 'pointer-events-none animate-fade-shrink-out' : 'pointer-events-none opacity-0'}`}
			>
				<ContentList name={name} data={data} contains={contains} />
			</div>
		</div>
	)
}

export default ActionButton
