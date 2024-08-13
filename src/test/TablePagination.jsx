import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

const TablePagination = ({
    data,
    page, 
    setPage,
    itemsPerPage,
}) => {

    // Número de paginas disponibles
    const pagesQty = Math.trunc(data.length / itemsPerPage) + (data.length % itemsPerPage === 0 ? 0 : 1)
    // Inicialización de matriz numérica
    let pages = []
    for (let i = 0; i < pagesQty; i++) {
        pages.push(i)
    }

    // Obtención de estado de página y funciones de cambio de página
    const { setSelectPositionIndex, increaseSelectPosition, decreaseSelectPosition } = useSelectPosition(page, setPage, pages);

    // Páginas a mostrar
    const pagesToShow = getSmartPageSelector(pages, page)

    // Componentes a revisar
    const NavigationButton = ({onClick, icon: Icon}) => {

        return (
            <button
                onClick={onClick}
                className="flex w-12 h-12 justify-center items-center bg-gray-200 shadow-md rounded-xl"
            >
                <div className="h-8 w-8">
                    <Icon />
                </div>
            </button>
        )
    }

    const PageButton = ({ value }) => {
        if ( typeof value === "number" ) {
            return (
                <button
                    onClick={() => setSelectPositionIndex(value)}
                    className="flex w-12 h-12 justify-center items-center hover:bg-gray-200 transition-colors"
                >
                </button>
            )
        } else {
            return (
                <div
                    className="flex w-12 h-12 justify-center items-center transition-colors"
                >
                </div>
            )
        }
    }


    return (
        <div className="flex">

            <NavigationButton onClick={decreaseSelectPosition} icon={ChevronLeftIcon} />
            <div className="flex">
                <div className="flex">
                    {
                        pagesToShow.map(
                            (pageNum) => (
                                <PageButton key={pageNum} value={pageNum} />
                            )
                        )
                    }
                </div>
                <div className="absolute h-12 shadow-md rounded-xl w-12 bg-blue-200/80 transition-transform" style={{transform: `translateX( calc(${pagesToShow.indexOf(page)} * 3rem ))`}}></div>
                <div className="flex absolute pointer-events-none">
                    {
                        pagesToShow.map(
                            (page, index) => (
                                <div key={index} className="flex w-12 h-12 justify-center items-center">
                                    {typeof page === "number" ? page + 1 : "..."}
                                </div>
                            )
                        )
                    }
                </div>
            </div>
            <NavigationButton onClick={increaseSelectPosition} icon={ChevronRightIcon} />
        </div>
    )
}

export default TablePagination;

const useSelectPosition = (page, setPage, pages) => {

    const setSelectPositionIndex = (index) => {
        setPage(pages.indexOf(index))
    }

    const increaseSelectPosition = () => {
        if (page + 1 === pages.length) return;
        setPage(page + 1)
    }

    const decreaseSelectPosition = () => {
        if (page - 1 < 0) return;
        setPage(page -1)
    }

    return {
        setSelectPositionIndex,
        increaseSelectPosition,
        decreaseSelectPosition
    }
}

const getSmartPageSelector = (pages, currentPosition) => {
    // Se retorna la matriz original si su tamaño es muy pequeño
    if ( pages.length <= 7 ) return pages;

    // Matriz a retornar
    const pagesToShow = []

    // Validación de si la posición actual es superior o igual a 4
    const isSuperior = pages.slice(0, currentPosition).length >= 4;
    // Validación de si la posición actual es inferior a los 4 últimos índices
    const isInferior = pages.slice(currentPosition + 1, pages.length).length >= 4;

    if ( isSuperior && isInferior ) {
        pagesToShow.push(0, "<", currentPosition - 1, currentPosition, currentPosition + 1, ">", pages.length -1 );
    } else if ( isSuperior ) {
        pagesToShow.push(0, "<", pages.length - 5, pages.length - 4, pages.length - 3, pages.length - 2, pages.length -1 );
    } else {
        pagesToShow.push(0, 1, 2, 3, 4, ">", pages.length - 1);
    }

    return pagesToShow;
}
