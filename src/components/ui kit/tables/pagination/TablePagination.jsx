import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { useMemo } from "react";
import { getSmartPageSelector } from "../../../../core/tablesFunctionality";
import useSelectPosition from "../../../../custom hooks/useSelectPosition";
import IconButton from "../../buttons/IconButton";
import NumericInput from "../../inputs/NumericInput";
import PagesContainer from "./PagesContainer";

const TablePagination = ({
    data,
    disabled,
    count,
    page, 
    setPage,
    itemsPerPage,
}) => {

    let counts
    let pages
    if ( count ) {
        counts = count
    } else {
        counts = count
    }

    // Matriz de paginas disponibles
    pages = useMemo(
        () => {
            const pagesQty = Math.trunc(counts / itemsPerPage) + (counts % itemsPerPage === 0 ? 0 : 1);

            return Array.from(
                { length: pagesQty },
                (_, i) => i
            );
        }, [counts, itemsPerPage]
    );

    // Funciones de selección de página
    const { setSelectPositionIndex, increaseSelectPosition, decreaseSelectPosition } = useSelectPosition(setPage, pages)

    // Páginas a mostrar
    const pagesToShow = useMemo(
        () => (
            getSmartPageSelector(pages, page)
        ), [pages, page]
    );

    return (
        <div className="flex flex-row items-center gap-2">
            <IconButton type={"primary"} size="lg" onClick={decreaseSelectPosition} icon={ChevronLeftIcon} disabled={page === 0 || pages.length === 0 || disabled} />
            <PagesContainer pagesToShow={pagesToShow} page={page} setSelectPositionIndex={setSelectPositionIndex} disabled={disabled} />
            <NumericInput defaultValue={page + 1} valueHandle={(value) => setPage(value - 1)} min={1} max={Math.trunc(data.count / itemsPerPage) + (data.count % itemsPerPage === 0 ? 0 : 1)} instantUpdate />
            <span className="sm:hidden px-2 text-xl ui-text-none"> / {pagesToShow[pagesToShow.length-1] ? pagesToShow[pagesToShow.length-1] : "1"}</span>
            <IconButton type={"primary"} size="lg" onClick={increaseSelectPosition} icon={ChevronRightIcon} disabled={page === pages.length - 1 || pages.length === 0 || disabled} />
        </div>
    )
}

export default TablePagination;
