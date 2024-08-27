import { sortTableData } from "../../../../core/tablesFunctionality";
import TableRow from "./TableRow";

const TableData = ({ data, visibleColumns, sortingColumns, sortingColumnName, page, itemsPerPage, columnsToRender }) => {
    // Ordenamiento de tabla
    data = sortTableData(data, sortingColumns, sortingColumnName, "users")
    // Paginación de la tabla
    data = PaginateData(data, page, itemsPerPage)

    return (
        <tbody role="" display="block" className="m-t-10 overflow-y-scroll h-full">
            {
                data.map(
                    (item, index) => (
                        <TableRow key={index} visibleColumns={visibleColumns} columnsToRender={columnsToRender}>
                            {item}
                        </TableRow>
                    )
                )
            }
        </tbody>
    )
}

export default TableData;

const PaginateData = (data, page, itemsPerPage) => {

    // Inicio de índice de paginación
    const indexStart = page * itemsPerPage;

    // Fin de índice de paginación
    let indexEnd =  ( page + 1 ) * itemsPerPage;

    // Prevención de índice fuera de rango
    if ( indexEnd > data.length ) {
        indexEnd = data.length
    }

    return data.slice(indexStart, indexEnd);
}
