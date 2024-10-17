import { renderDataViewItem } from "../../../../../../core/tablesFunctionality";
import TableCell from "./TableCell";

const TableRow = ({ children, viewConfig,visibleColumns, columnsInfo }) => {
    const newColumnsInfo = {}

    columnsInfo.forEach(
        (item) => {
            newColumnsInfo[item.name] = item.ttype;
        }
    );

    return (
        <tr className="border-gray-400/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 border-b last:border-none transition-colors cursor-pointer group">
            {
                viewConfig.map(
                    (item, index) => {
                        const foundColumn = visibleColumns.find(
                            (column) => (column.key === item.key)
                        )

                        const isActive = foundColumn ? foundColumn.active : false

                        if ( item.tableVisible === undefined || isActive ) {

                            const content = renderDataViewItem(item, children, newColumnsInfo[item.key])

                            return (
                                <TableCell key={index}>{content}</TableCell>
                            );
                        }
                    }
                )
            }
        </tr>
    );
}

export default TableRow;
