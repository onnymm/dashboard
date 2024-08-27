import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { useMemo } from "react";
import { getSmartPageSelector } from "../../../../core/tablesFunctionality";
import useSelectPosition from "../../../../custom hooks/useSelectPosition";
import IconButton from "../../buttons/IconButton";
import PagesContainer from "./PagesContainer";

const TablePagination = ({
    data,
    page, 
    setPage,
    itemsPerPage,
}) => {

    // Matriz de paginas disponibles
    const pages = useMemo(
        () => {
            const pagesQty = Math.trunc(data.length / itemsPerPage) + (data.length % itemsPerPage === 0 ? 0 : 1);

            return Array.from(
                { length: pagesQty },
                (_, i) => i
            );
        }, [data.length, itemsPerPage]
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
        <div className="flex gap-2">
            <IconButton type={"primary"} size="lg" onClick={decreaseSelectPosition} icon={ChevronLeftIcon} disabled={page === 0 || pages.length === 0} />
            <PagesContainer pagesToShow={pagesToShow} page={page} setSelectPositionIndex={setSelectPositionIndex} />
            <IconButton type={"primary"} size="lg" onClick={increaseSelectPosition} icon={ChevronRightIcon} disabled={page === pages.length - 1 || pages.length === 0} />
        </div>
    )
}

export default TablePagination;
