import { useState } from "react";
import { roundTableHeader } from "../../../../core/tablesFunctionality";
import SortingIndicator from "./SortingIndicator";
import SortingDirection from "./SortingStatus";

const TableColumn = ({ content, columns, column, isSorting, ascending, setSortingColumn }) => {
    // Color de fondo cuando la columna está ordenando la tabla
    const backgroundColor = isSorting ? "bg-blue-200/70" : "bg-gray-200/70"

    // Estado de Hover
    const [isHovered, setIsHovered] = useState(false);

    // Clases CSS para definición de redondeo de esquinas en el contenedor
    const rounded = roundTableHeader(column, columns, "name", "lg")

    // Clases CSS estáticas
    const staticClassNames = "p-2 backdrop-blur-sm font-light text-start align-middle cursor-pointer select-none"

    // Contenido de la columna
    const ColumnContent = () => {
        return (
            <div className="flex flex-row items-center justify-between gap-2">
                {content}

                {/* Ícono del estatus de orden */}
                {isSorting ? <SortingDirection ascending={ascending} /> : <SortingIndicator isHovered={isHovered} />}
            </div>
        )
    }

    // Retorno del elemento de columna de tabla
    return (
        <th
            className={`${rounded} ${backgroundColor} ${staticClassNames}`}
            role="columnheader"
            onClick={() => setSortingColumn(column.name)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {
                <ColumnContent />
            }
        </th>
    )
}

export default TableColumn