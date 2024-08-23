import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";
import PageButton from "./PageButton";

const PagesContainer = ({
    pagesToShow,
    page,
    setSelectPositionIndex
}) => {

    return (
        <div className="flex relative">
            <div className="flex">
                {
                    pagesToShow.map(
                        (pageNum) => (
                            <PageButton key={pageNum} value={pageNum} callback={() => setSelectPositionIndex(pageNum)} />
                        )
                    )
                }
            </div>
            <div className="absolute h-12 shadow-md rounded-xl w-12 bg-main-500 duration-300 transition-transform" style={{transform: `translateX( calc(${pagesToShow.indexOf(page)} * 3rem ))`}}></div>
            <div className="flex absolute pointer-events-none">
                {
                    pagesToShow.map(
                        (pageToShow, index) => (
                            <div key={index} className={`${pageToShow === page ? "text-white" : ""} transition duration-200 flex w-12 h-12 justify-center items-center dark:text-white`}>
                                {typeof pageToShow === "number" ? pageToShow + 1 : <EllipsisHorizontalIcon className="size-4" />}
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default PagesContainer;