import { badge, char, date, datetime, float, many2one, monetary, percentage, time } from "../../../../../../widgets/widgetTables";
import TableCell from "./TableCell";

const TableRow = ({ children, viewConfig,visibleColumns, columnsInfo }) => {
    const newColumnsInfo = {}

    columnsInfo.forEach(
        (item) => {
            newColumnsInfo[item.name] = item.ttype;
        }
    );

    const renderType = {
        char: char,
        selection: badge,
        monetary: monetary,
        datetime: datetime,
        date: date,
        time: time,
        many2one: many2one,
        float: float,
        percentage: percentage,
    };

    return (
        <tr className="border-gray-400/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 border-b last:border-none transition-colors cursor-pointer group">
            {
                viewConfig.map(
                    (column, index) => {
                        const foundColumn = visibleColumns.find(
                            (item) => (item.key === column.key)
                        )

                        const isActive = foundColumn ? foundColumn.active : false

                        if ( column.tableVisible === undefined || isActive ) {
                            let content;

                            // Columna de datos
                            if ( viewConfig[column] === 'data' ) {
                                content = children[column];

                            // Columna de componente especificado
                            } else if (typeof column.type === 'string' ) {
                                const widget = column.type
                                content = (
                                    renderType[widget](
                                        column.key,
                                        column.options
                                    )(children)
                                );

                            } else if (typeof column.type === 'function' ) {
                                const widget = column.type
                                content = widget(children)

                            // Columna de componente en base al backend
                            } else {
                                // Tipo de dato a renderizar
                                const typeToRender = newColumnsInfo[column.key];
                                content = (
                                    renderType[typeToRender](
                                        column.key,
                                        column.options
                                    )(children)
                                );
                            }

                            return (
                                <TableCell key={index}>{content}</TableCell>
                            );
                        }
                    }
                )
            }
        </tr>
    );
}

export default TableRow;
