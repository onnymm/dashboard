const PageButton = ({ value, callback, disabled }) => {
    if ( typeof value === "number" ) {
        return (
            <button
                onClick={callback}
                className={`${!disabled ? "hover:bg-gray-500/20" : ""} flex justify-center items-center rounded-xl size-12 sm:size-10 transition-colors duration-300`}
                disabled={disabled}
            >
            </button>
        )
    } else {
        return (
            <div
                className="flex justify-center items-center size-12 sm:size-10 transition-colors"
            >
            </div>
        )
    }
}

export default PageButton;