import TableColumn from "./TableColumn";

const TableColumns = ({ columns, sortingColumns, setSortingColumn, setPage, columnsToRender }) => {

    return (
        <tr role="row" className="top-0 z-99 sticky rounded-lg w-auto h-10 whitespace-nowrap overflow-hidden">
            {
                columns.map(
                    (column) => {
                        if (column.visible !== false) {
                            return (
                                <TableColumn
                                    key={column.name}
                                    column={column}
                                    content={column.displayName}
                                    isSorting={sortingColumns[column.name].isSorting}
                                    ascending={sortingColumns[column.name].ascending}
                                    setSortingColumn={setSortingColumn}
                                    setPage={setPage}
                                    canSort={columnsToRender[column.name] === 'data' ? true : columnsToRender[column.name].canSort}
                                />
                            )
                        }
                    }
                )
            }
        </tr>
    )
}

export default TableColumns;