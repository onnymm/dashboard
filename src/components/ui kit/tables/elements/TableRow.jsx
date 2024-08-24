import TableCell from "./TableCell";

const TableRow = ({children, visibleColumns, columnsToRender}) => {

    return (
        <tr className="cursor-pointer hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-400/50 group">
            {
                Object.keys(columnsToRender).map(
                    (key, index) => {
                        if ( visibleColumns[index].visible !== false ) {
                            let content;

                            // Columna de datos
                            if ( columnsToRender[key] === 'data' ) {
                                content = children[key]

                            // Columna de componente
                            } else {
                                content = columnsToRender[key].callback(children)
                            }

                            return (
                                <TableCell key={index}>{content}</TableCell>
                            )
                        }
                    }
                )
            }
        </tr>
    )
}

export default TableRow;