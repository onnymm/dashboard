import { useEffect, useState } from "react"

const useWindowWidth = () => {
    // Estado de valor de ancho de ventana en tiempo real
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    useEffect(
        () => {
            const updateWindowWidth = () => {
                // Cambio de estado al nuevo valor del ancho de la ventana
                setWindowWidth(window.innerWidth)
            }
        
            // Se añade un escuchador de redimensionamiento en la ventana
            window.addEventListener(
                "resize",
                updateWindowWidth
            )
            
            // Se remueve el escuchador de redimensionamiento en el desmontaje
            return (
                () => window.removeEventListener(
                    "resize",
                    updateWindowWidth
                )
            )
        }, []
    )

    // Retorno del estado para su uso
    return windowWidth
}

export default useWindowWidth;