import { sortTableData } from "../../../../core/tablesFunctionality";
import TableRow from "./TableRow";

const TableData = ({ data, sortingColumns, sortingColumnName }) => {
    
    return (
        <tbody role="" display="block" className="m-t-10 overflow-y-scroll h-full">
            {
                sortTableData(data, sortingColumns, sortingColumnName, "users").map(
                    (item, index) => (
                        <TableRow key={index}>
                            {item}
                        </TableRow>
                    )
                )
            }
        </tbody>
    )
}

export default TableData;