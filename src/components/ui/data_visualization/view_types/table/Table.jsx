import TableBody from "./components/TableBody";
import TableColumns from "./components/TableColumns";


const Table = ({
    data,
    viewConfig,
    visibleColumns,
    sortingFieldKey,
    sortingDirectionKey,
    setSortingColumn,
    columnsInfo,
}) => {

    // Estructura de la tabla
    return (
        <table role="grid" className="block z-1 table-fixed w-[calc(100%)] max-w-full">
            <TableColumns
                viewConfig={viewConfig}
                visibleColumns={visibleColumns}
                sortingFieldKey={sortingFieldKey}
                sortingDirectionKey={sortingDirectionKey}
                setSortingColumn={setSortingColumn}
            />

            <TableBody
                data={data}
                viewConfig={viewConfig}
                visibleColumns={visibleColumns}
                columnsInfo={columnsInfo}
            />

        </table>
    )
}

export default Table;
