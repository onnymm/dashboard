import TableColumn from "./TableColumn";

const TableColumns = ({ columns, sortingColumns, setSortingColumn }) => {
    
    // Inicialización de mapa de columnas
    const initColumnsMap = {}
    columns.forEach(
        (column) => {
            initColumnsMap[column.name] = {
                isSorting: false,
                ascending: true
            };
        }
    )

    return (
        <tr role="row" className="rounded-lg overflow-hidden sticky h-10 top-0 w-auto">
            {
                columns.map(
                    (column) => (
                        <TableColumn
                            key={column.name}
                            columns={columns}
                            column={column}
                            content={column.field_description}
                            isSorting={sortingColumns[column.name].isSorting}
                            ascending={sortingColumns[column.name].ascending}
                            setSortingColumn={setSortingColumn}
                        />
                    )
                )
            }
        </tr>
    )
}

export default TableColumns;