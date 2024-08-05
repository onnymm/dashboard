import { useEffect, useState } from 'react'

export const useScreenWidth = threshold => {
	const [isOverThreshold, setIsOverThreshold] = useState(
		// Si el ancho de la pantalla es mayor al límite, es verdadero
		window.innerWidth > threshold
	)

	useEffect(() => {
		const handleResize = () => {
			const currentWidth = window.innerWidth
			// Si el ancho de la pantalla es mayor al límite, es verdadero
			currentWidth > threshold
				? setIsOverThreshold(true)
				: setIsOverThreshold(false)
		}

		window.addEventListener('resize', handleResize) // Genera listener para resize

		return () => {
			// Borra el hook en caso de que el componente se desmonte
			window.removeEventListener('resize', handleResize)
		}
	}, [isOverThreshold, threshold])

	return isOverThreshold
}
