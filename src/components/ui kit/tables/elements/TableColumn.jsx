import { roundTableHeader } from "../../../../core/tablesFunctionality";
import SortingIndicator from "./SortingIndicator";
import SortingDirection from "./SortingStatus";

const TableColumn = ({ content, columns, column, isSorting, ascending, setSortingColumn, setPage }) => {
    // Color de fondo cuando la columna está ordenando la tabla
    const backgroundColor = isSorting ? "bg-blue" : "bg-gray"

    // Clases CSS para definición de redondeo de esquinas en el contenedor
    const rounded = roundTableHeader(column, columns, "name", "lg")

    // Clases CSS estáticas
    const staticClassNames = "p-2 backdrop-blur-sm font-light text-start align-middle cursor-pointer select-none transition-background duration-300"

    // Contenido de la columna
    const ColumnContent = () => {
        return (
            <div className="flex flex-row items-center justify-between gap-2 group">
                {content}

                {/* Ícono del estatus de orden */}
                {isSorting ? <SortingDirection ascending={ascending} /> : <SortingIndicator />}
            </div>
        )
    }

    const sortData = () => {
        setSortingColumn(column.name);
        setPage(0)
    }

    // Retorno del elemento de columna de tabla
    return (
        <th
            className={`${rounded} ${backgroundColor}-200/70 ${staticClassNames} hover:${backgroundColor}-300/70`}
            role="columnheader"
            onClick={sortData}
        >
            {
                <ColumnContent />
            }
        </th>
    )
}

export default TableColumn