import TableRow from "./TableRow";

const TableBody = ({ data, viewConfig, visibleColumns, columnsInfo }) => {

    return (
        <tbody role="" display="block" className="m-t-10 overflow-y-scroll size-full">
            {
                data.map(
                    (item, index) => (
                        <TableRow key={index} visibleColumns={visibleColumns} viewConfig={viewConfig} columnsInfo={columnsInfo}>
                            {item}
                        </TableRow>
                    )
                )
            }
        </tbody>
    )
}

export default TableBody;
