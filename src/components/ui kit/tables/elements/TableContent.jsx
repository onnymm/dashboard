import useSortingColumns from "../../../../custom hooks/useSortingColumns";
import TableColumns from "./TableColumns";
import TableData from "./TableData";

const TableContent = ({data, columns, page, setPage, itemsPerPage}) => {
    // Obtención de estados y función de cambio de estado para ordenamiento de datos
    const [sortingColumns, setSortingColumn, sortingColumnName] = useSortingColumns(columns);

    // Estructura de la tabla
    return (
        <table role="grid" className="">
            <thead role="rowgroup" className="">
                <TableColumns
                    columns={columns}
                    sortingColumns={sortingColumns}
                    setSortingColumn={setSortingColumn}
                    setPage={setPage}
                />
            </thead>

            <TableData
                data={data}
                sortingColumns={sortingColumns}
                sortingColumnName={sortingColumnName}
                page={page}
                itemsPerPage={itemsPerPage}
            />

        </table>
    )
}

export default TableContent;
