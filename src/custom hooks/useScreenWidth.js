import { useEffect, useState } from 'react'

const useScreenWidth = (initialWidth = 768) => {
	const [screenIsWide, setScreenIsWide] = useState(
		window.innerWidth > initialWidth
	)

	useEffect(() => {
		const handleResize = () => {
			const currentWidth = window.innerWidth
			if (currentWidth > initialWidth && !screenIsWide) {
				setScreenIsWide(true)
			} else if (currentWidth <= initialWidth && screenIsWide) {
				setScreenIsWide(false)
			}
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [screenIsWide, initialWidth])

	return screenIsWide
}

export default useScreenWidth
