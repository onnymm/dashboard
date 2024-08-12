import useSortingColumns from "../../../../custom hooks/useSortingColumns";
import TableColumns from "./TableColumns";
import TableData from "./TableData";

const TableContent = ({data, columns}) => {
    const [sortingColumns, setSortingColumn, sortingColumnName] = useSortingColumns(columns);

    return (
        <table role="grid" className="">
            <thead role="rowgroup" className="">
                <TableColumns
                    columns={columns}
                    sortingColumns={sortingColumns}
                    setSortingColumn={setSortingColumn}
                />
            </thead>
            <TableData data={data} sortingColumns={sortingColumns} sortingColumnName={sortingColumnName} />
        </table>
    )
}

export default TableContent;
