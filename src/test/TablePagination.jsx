import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

const TablePagination = ({
    data,
    setPage,
    itemsPerPage = 20,
}) => {

    const pagesQty = Math.trunc(data.length / itemsPerPage) + (data % itemsPerPage === 0 ? 0 : 1)
    let pages = []
    for (let i = 0; i < pagesQty; i++) {
        pages.push(i)
    }

    const { selectPosition, setSelectPositionIndex, increaseSelectPosition, decreaseSelectPosition } = useSelectPosition(setPage, pages);

    return (
        <div className="flex">
            <button
                onClick={decreaseSelectPosition}
                className="flex w-12 h-12 justify-center items-center bg-gray-200 shadow-md rounded-xxl"
            >
                <div className="h-8 w-8">
                    <ChevronLeftIcon />
                </div>
            </button>
            <div className="flex">
                <div className="flex">
                    {
                        pages.map(
                            (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectPositionIndex(index)}
                                    className="flex w-12 h-12 justify-center items-center hover:bg-gray-200 transition-colors"
                                >
                                </button>
                            )
                        )
                    }
                </div>
                <div className="absolute h-12 shadow-md rounded-xl w-12 bg-blue-200/80 transition-transform" style={{transform: `translateX( calc(${selectPosition} * 3rem ))`}}></div>
                <div className="flex absolute pointer-events-none">
                    {
                        pages.map(
                            (page, index) => (
                                <div key={index} className="flex w-12 h-12 justify-center items-center">
                                    {page + 1}
                                </div>
                            )
                        )
                    }
                </div>
            </div>
            <button className="flex w-12 h-12 justify-center items-center bg-gray-200 shadow-md rounded-xl">
                <div
                    onClick={increaseSelectPosition}
                    className="h-8 w-8"
                >
                    <ChevronRightIcon />
                </div>
            </button>
        </div>
    )
}

export default TablePagination;

const useSelectPosition = (setPage, pages) => {
    const [selectPosition, setSelectPosition] = useState(0)

    const setSelectPositionIndex = (index) => {
        setSelectPosition(index);
        setPage(index)
    }

    const increaseSelectPosition = () => {
        if (selectPosition + 1 === pages.length) return;
        setSelectPosition(selectPosition + 1)
        setPage(selectPosition + 1)
    }

    const decreaseSelectPosition = () => {
        if (selectPosition - 1 < 0) return;
        setSelectPosition(selectPosition -1)
        setPage(selectPosition -1)
    }

    return {
        selectPosition,
        setSelectPositionIndex,
        increaseSelectPosition,
        decreaseSelectPosition
    }
}
