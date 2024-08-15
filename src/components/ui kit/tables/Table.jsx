import { useEffect, useState } from "react";
import { getUsers } from "../../../api/get";
import ActionButtons from "../../../test/ActionButtons";
import TableContent from "./elements/TableContent";
import TablePagination from "./pagination/TablePagination";

const Table = ({
    itemsPerPage = 10
}) => {

    // Carga de los datos
    const [loadData, setLoadData] = useState();

    // Datos y columnas de la tabla
    const [data, setData] = useState();
    const [columns, setColumns] = useState();

    // Página visible de la tabla
    const [page, setPage] = useState(0);

    // Obtención de los datos desde el API
    useEffect(
        () => {
            getUsers(setLoadData);
        }, []
    )

    // División de los datos por contenido y encabezado
    useEffect(
        () => {
            if (!loadData) return;

            setData(loadData.data);
            setColumns(getColumns(loadData.fields))

        }, [loadData, itemsPerPage]
    );

    const columnsToRender = {
        id: 'data',
        name: 'data',
        field_description: 'data',
        ttype: 'data',
        relation: 'data',
        actionButtons: {name: "actionButtons", field_description: "Acciones", canSort: false, callback: TableActionButtons}
    }

    if ( data ) {

        const newColumns = Object.keys(columnsToRender).map(
            (key) => {
                if ( columnsToRender[key] === 'data' ) {
                    return columns.find((column) => column.name === key)
                } else {
                    return columnsToRender[key]
                }
            }
        )
        
        return (
            <div className="flex flex-col w-full p-4 gap-4">
                <div className="w-auto flex flex-col p-2 shadow-md border rounded-xl h-64 bg-white">
                    <div className="rounded-lg h-0 z-10 pointer-events-none">
                        <div className="w-full h-10 border border-gray-300 bottom-10 rounded-lg shadow-md"></div>
                    </div>
                    <div id="users" className="w-full h-full flex flex-col rounded-lg scrollbar-hide overflow-y-scroll">
                        <TableContent data={data} columns={newColumns} page={page} setPage={setPage} itemsPerPage={itemsPerPage} columnsToRender={columnsToRender} />
                    </div>
                </div>
                <TablePagination data={data} itemsPerPage={itemsPerPage} page={page} setPage={setPage} />
            </div>
        )
    }
};


const getColumns = (obj) => {
    let columns = []
    obj.forEach(
        (item) => {
            columns.push(
                {
                    name: item.name,
                    field_description: item.field_description
                }
            )
        }
    )
    return columns
}

export default Table;

// const TableBadge = ({ relation }) => {

//     return (
//         <Badge
//             color={relation !== "Sin relación" ? "green": "yellow"}
//         >
//             {relation}
//         </Badge>
//     )
// }

const TableActionButtons = () => {
    return (
        <ActionButtons />
    )
}
