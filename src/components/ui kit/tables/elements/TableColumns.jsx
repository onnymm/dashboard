import TableColumn from "./TableColumn";

const TableColumns = ({ columns, sortingColumns, setSortingColumn, setPage, columnsToRender }) => {

    return (
        <tr role="row" className="whitespace-nowrap z-99 rounded-lg overflow-hidden sticky h-10 top-0 w-auto">
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