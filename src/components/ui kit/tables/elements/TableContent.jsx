import useSortingColumns from "../../../../custom hooks/useSortingColumns";
import TableColumns from "./TableColumns";
import TableData from "./TableData";

const TableContent = ({ data, columns, page, setPage, itemsPerPage, columnsToRender }) => {

    // Obtención de estados y función de cambio de estado para ordenamiento de datos
    const [sortingColumns, setSortingColumn, sortingColumnName] = useSortingColumns(columns);

    // Estructura de la tabla
    return (
        <table role="grid" className="w-[calc(100%)] max-w-full block z-1 table-fixed">
            <thead role="rowgroup" className="">
                <TableColumns
                    columns={columns}
                    sortingColumns={sortingColumns}
                    setSortingColumn={setSortingColumn}
                    setPage={setPage}
                    columnsToRender={columnsToRender}
                />
            </thead>

            <TableData
                data={data}
                visibleColumns={columns}
                sortingColumns={sortingColumns}
                sortingColumnName={sortingColumnName}
                page={page}
                itemsPerPage={itemsPerPage}
                columnsToRender={columnsToRender}
            />

        </table>
    )
}

export default TableContent;
