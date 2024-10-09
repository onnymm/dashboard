import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";
import PageButton from "./PageButton";

const PagesContainer = ({
    pagesToShow,
    page,
    setSelectPositionIndex,
    disabled,
}) => {

    return (
        <div className="relative sm:flex hidden">
            {/* Botón de página */}
            <div className="flex">
                {
                    pagesToShow.length !== 0
                    ? pagesToShow.map(
                        (pageNum) => (
                            <PageButton key={pageNum} value={pageNum} callback={() => setSelectPositionIndex(pageNum)} disabled={disabled} />
                        )
                    )
                    : <PageButton value={0} callback={() => null} disabled={disabled} />
                }
            </div>
            {/* Indicador de página */}
            <div className="absolute bg-main-500 shadow-md rounded-xl size-12 sm:size-10 transition-transform duration-300" style={{transform: `translateX( calc(${pagesToShow.indexOf(page) !== -1 ? pagesToShow.indexOf(page) : 0} * 2.5rem ))`}}></div>
            {/* Contenedores de números */}
            <div className="absolute flex pointer-events-none">
                {
                    pagesToShow.length !== 0
                    ? pagesToShow.map(
                        (pageToShow, index) => (
                            <div key={index} className={`${pageToShow === page ? "text-white" : ""} ${disabled ? "text-gray-500/50 dark:text-gray-300/50" : ""} transition duration-200 flex sm:text-sm size-12 sm:size-10 justify-center items-center dark:text-white`}>
                                {typeof pageToShow === "number" ? pageToShow + 1 : <EllipsisHorizontalIcon className="size-4" />}
                            </div>
                        )
                    )
                    : <div className={"text-white transition duration-200 flex size-12 sm:size-10 sm:text-sm justify-center items-center dark:text-white"}>
                    1
                    </div>
                }
            </div>
        </div>
    )
}

export default PagesContainer;
