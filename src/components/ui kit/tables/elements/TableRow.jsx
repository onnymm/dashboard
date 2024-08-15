import TableCell from "./TableCell";

const TableRow = ({children, columnsToRender}) => {

    return (
        <tr>
            {
                Object.keys(columnsToRender).map(
                    (key, index) => {

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
                )
            }
        </tr>
    )
}

export default TableRow;