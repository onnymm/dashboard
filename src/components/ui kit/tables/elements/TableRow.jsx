import TableCell from "./TableCell";

const TableRow = ({children}) => {

    return (
        <tr>
            {
                Object.keys(children).map(
                    (key, index) => (
                        <TableCell key={index}>{children[key]}</TableCell>
                    )
                )
            }
        </tr>
    )
}

export default TableRow;