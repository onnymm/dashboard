const TableCell = ({ children }) => {

    return (
        <td
            className="group-hover:*:text-main-500 p-2 max-w-96 h-full font-light text-gray-600 text-start dark:text-white/70 *:transition-colors"
        >
            {children}
        </td>
    )
};

export default TableCell;