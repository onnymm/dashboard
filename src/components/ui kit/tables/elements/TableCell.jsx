const TableCell = ({ children }) => {

    return (
        <td
            className="p-2 font-light text-start text-gray-600 dark:text-white/70"
        >
            {children}
        </td>
    )
};

export default TableCell;