import TableColumn from "../../../../../ui kit/tables/elements/TableColumn";

const TableColumns = ({ viewConfig, visibleColumns, sortingFieldKey, sortingDirectionKey, setSortingColumn }) => {

    return (
        <thead role="rowgroup" className="">
            <tr role="row" className="top-0 z-99 sticky rounded-lg w-auto h-10 whitespace-nowrap overflow-hidden">
                {
                    viewConfig.map(
                        (column) => {

                            const foundColumn = visibleColumns.find(
                                (item) => (item.key === column.key)
                            )

                            const isActive = foundColumn ? foundColumn.active : false

                            if ( column.tableVisible === undefined || isActive ) {

                                return (
                                    <TableColumn
                                        key={column.key}
                                        column={column.key}
                                        content={column.displayName}
                                        isSorting={column.key === sortingFieldKey}
                                        ascending={sortingDirectionKey}
                                        setSortingColumn={setSortingColumn}
                                        canSort={column === 'data' ? true : column.canSort}
                                    />
                                )
                            }
                        }
                    )
                }
            </tr>
        </thead>
    )
}

export default TableColumns;
