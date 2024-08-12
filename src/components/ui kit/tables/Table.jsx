import { useEffect, useState } from "react";
import { getUsers } from "../../../api/get";
import TableContent from "./elements/TableContent";

const Table = () => {
    const [data, setData] = useState();
    const [users, setUsers] = useState();
    const [columns, setColumns] = useState();

    useEffect(
        () => {
            getUsers(setData);
        }, []
    )

    useEffect(
        () => {
            if (!data) return;
            setUsers(data.data);
            setColumns(getColumns(data.fields))
        }, [data]
    );

    if (users) {
        return (
            <div className="w-auto flex flex-col p-2 shadow-md border rounded-xl m-4 h-64">
                <div className="rounded-lg h-0 z-10" style={{pointerEvents: "none"}}>
                    <div className="w-full h-10 border border-gray-300 bottom-10 rounded-lg shadow-lg"></div>
                </div>
                <div id="users" className="w-full h-full flex flex-col rounded-lg scrollbar-hide overflow-y-scroll">
                    <TableContent data={users} columns={columns} />
                </div>
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