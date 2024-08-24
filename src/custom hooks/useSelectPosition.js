import { useCallback } from "react"

const useSelectPosition = (setPage, pages) => {

    // Función de selección de página
    const setSelectPositionIndex = useCallback(
        (index) => {
            setPage( pages.indexOf(index) )
        }, [pages, setPage]
    )

    // Función de incremento de página
    const increaseSelectPosition = useCallback(
        () => {
            setPage( (page) => (page + 1 === pages.length ? page : page + 1) )
        }, [setPage, pages.length]
    )

    // Función de decremento de página
    const decreaseSelectPosition = useCallback(
        () => {
            setPage(page => page === 0 ? page: page - 1)
        }, [setPage]
    )

    return {
        setSelectPositionIndex,
        increaseSelectPosition,
        decreaseSelectPosition
    }
}

export default useSelectPosition;