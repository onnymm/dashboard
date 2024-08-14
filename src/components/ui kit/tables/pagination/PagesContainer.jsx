import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";
import PageButton from "./PageButton";

const PagesContainer = ({
    pagesToShow,
    page,
    setSelectPositionIndex
}) => {

    return (
        <div className="flex">
            <div className="flex">
                {
                    pagesToShow.map(
                        (pageNum) => (
                            <PageButton key={pageNum} value={pageNum} callback={() => setSelectPositionIndex(pageNum)} />
                        )
                    )
                }
            </div>
            <div className="absolute h-12 shadow-md rounded-xl w-12 bg-blue-200/80 duration-300 transition-transform" style={{transform: `translateX( calc(${pagesToShow.indexOf(page)} * 3rem ))`}}></div>
            <div className="flex absolute pointer-events-none">
                {
                    pagesToShow.map(
                        (page, index) => (
                            <div key={index} className="flex w-12 h-12 justify-center items-center">
                                {typeof page === "number" ? page + 1 : <EllipsisHorizontalIcon className="size-4" />}
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default PagesContainer;