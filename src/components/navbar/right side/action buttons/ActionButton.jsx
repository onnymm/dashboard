import { lazy, Suspense, useState } from 'react'
import { useClickOutside } from '../../../../custom hooks/useClickOutside'
import Button from '../../../ui kit/Button'
import { FallbackContentList } from './FallbackContentList'
const ContentList = lazy(() => import('./ContentList'))

const ActionButton = ({ name, icon, data }) => {
	const [isActive, setIsActive] = useState(false)
	const numberOfElements = data.length // Cantidad de objetos contenidos en data
	/* Denotará el número de placeholders que se generarán en el esqueleto */

	const handleButtonClick = () => {
		setIsActive(!isActive)
	}

	let domNode = useClickOutside(() => setIsActive(false)) // Si se clickea fuera del nodo, dejar de mostrar el contenido del botón

	return (
		<div ref={domNode} className='relative'>
			{/* Botón */}
			<Button icon={icon} state={isActive} handleClick={handleButtonClick} />
			{/* Contenido */}
			<div className='absolute -right-0 w-54 sm:w-80'>
				<Suspense
					fallback={
						<FallbackContentList numberOfElements={numberOfElements - 1} />
					}
					/* 
					Dentro del skeleton se suma el numberOfElements a 1, porque siempre tiene que mostrar
					por lo menos un placeholder, por eso se le resta 1 aquí, para mantener el valor original siempre
					y cuando haya más de un elemento. 
					*/
				>
					{isActive && <ContentList name={name} data={data} />}
				</Suspense>
			</div>
		</div>
	)
}

export default ActionButton
