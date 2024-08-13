import { useEffect, useState } from "react";
import { getUsers } from "../../../api/get";
import TablePagination from "../../../test/TablePagination";
import TableContent from "./elements/TableContent";

const Table = ({
    itemsPerPage = 20
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

    if (data) {
        
        return (
            <div className="flex flex-col w-full p-4 gap-4">
                <div className="w-auto flex flex-col p-2 shadow-md border rounded-xl h-64 bg-white">
                    <div className="rounded-lg h-0 z-10 pointer-events-none">
                        <div className="w-full h-10 border border-gray-300 bottom-10 rounded-lg shadow-lg"></div>
                    </div>
                    <div id="users" className="w-full h-full flex flex-col rounded-lg scrollbar-hide overflow-y-scroll">
                        <TableContent data={data} columns={columns} page={page} itemsPerPage={itemsPerPage} />
                    </div>
                </div>
                <TablePagination data={data} itemsPerPage={itemsPerPage} setPage={setPage} />
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