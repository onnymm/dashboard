import SortingIndicator from "./SortingIndicator";
import SortingDirection from "./SortingStatus";

const TableColumn = ({ content, column, isSorting, ascending, setSortingColumn, setPage, canSort }) => {
    
    // Color de fondo
    const backgroundColor = {
        true: "bg-blue-300/70 hover:bg-blue-200/70 dark:hover:bg-blue-200/70",
        false: "bg-gray-200/80 hover:bg-gray-300/80 dark:bg-gray-500/80 dark:hover:bg-gray-100/40",
    }

    // Clases CSS estáticas
    const staticClassNames = "first:rounded-l-lg last:rounded-r-lg group backdrop-blur-sm p-2 z-99 font-light text-start align-middle select-none transition-colors duration-500 dark:text-white"

    // Contenido de la columna
    const ColumnContent = () => {
        return (
            <div className="flex flex-row items-center justify-between gap-2">
                {content}

                {/* Ícono del estatus de orden */}
                {
                    canSort ?
                        isSorting ? <SortingDirection ascending={ascending} /> : <SortingIndicator />
                    :
                        undefined
                }
            </div>
        )
    }

    const sortData = () => {
        setSortingColumn(column.name);
        setPage(0)
    }

    // Retorno del elemento de columna de tabla
    return (
        <th
            className={`${backgroundColor[isSorting]} ${staticClassNames}`}
            role="columnheader"
            onClick={canSort ? sortData : null}
        >
            {
                <ColumnContent />
            }
        </th>
    )
}

export default TableColumn
