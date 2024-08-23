import TableColumn from "./TableColumn";

const TableColumns = ({ columns, sortingColumns, setSortingColumn, setPage, columnsToRender }) => {

    return (
        <tr role="row" className="z-99 rounded-lg overflow-hidden sticky h-10 top-0 w-auto">
            {
                columns.map(
                    (column) => (
                        <TableColumn
                            key={column.name}
                            column={column}
                            content={column.field_description}
                            isSorting={sortingColumns[column.name].isSorting}
                            ascending={sortingColumns[column.name].ascending}
                            setSortingColumn={setSortingColumn}
                            setPage={setPage}
                            canSort={columnsToRender[column.name] === 'data' ? true : columnsToRender[column.name].canSort}
                        />
                    )
                )
            }
        </tr>
    )
}

export default TableColumns;