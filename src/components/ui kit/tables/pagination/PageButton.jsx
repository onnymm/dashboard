const PageButton = ({ value, callback }) => {
    if ( typeof value === "number" ) {
        return (
            <button
                onClick={callback}
                className="flex w-12 h-12 rounded-xl justify-center items-center hover:bg-gray-200 transition-colors duration-300"
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

export default PageButton;