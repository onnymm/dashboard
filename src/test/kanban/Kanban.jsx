import { renderDataViewItem } from "../../core/tablesFunctionality";
import { convertToKanbanStructure } from "../../utils/convertToKanbanStructure";
import { badge, char, date, datetime, float, many2one, monetary, percentage, time } from "../../widgets/widgetTables";
import KanbanCard from "./KanbanCard";

const Kanban = ({
    data,
    fields,
    viewConfig,
}) => {

    const kanbanStructure = convertToKanbanStructure(viewConfig)

    const renderType = {
        char: char,
        selection: badge,
        monetary: monetary,
        datetime: datetime,
        date: date,
        time: time,
        many2one: many2one,
        float: float,
        percentage: percentage
    };

    const typeIndex = {}

    fields.forEach(
        (item) => {
            typeIndex[item.name] = item.ttype
        }
    )

    const getCheck = ( item ) => {

        if ( kanbanStructure.check ) {
            const key = kanbanStructure.check.key
            return item[key]
        } else {
            return undefined
        }
    }

    const getFixed = ( item ) => {

        if ( kanbanStructure.fixed ) {
            const content = kanbanStructure.fixed.map(
                (params) => {
                    const key = params.key

                    const renderedContent = renderDataViewItem(params, item, typeIndex[key])

                    return renderedContent
                }
            )
            return content
        } else {
            return undefined
        }
    }

    const getTitle = ( item ) => {
        const key = kanbanStructure.title.key
        const value = item[key]

        return {key, value}
    }

    const getDescription = ( item ) => {
        if ( kanbanStructure.description ) {
            const key = kanbanStructure.description.key
            const value = item[key]

            return {key, value}
        } else {
            return undefined
        }
    }

    const getDetails = ( item ) => {

        if ( kanbanStructure.details ) {
            const content = kanbanStructure.details.map(
                (param) => {

                    const key = param.key
                    const value = item[key]
                    const type = (
                        typeof param.type === 'function'
                            ? param.type("value", param.options)
                            : typeof param.type === 'string'
                                ? renderType[param.type]("value", param.options)
                                : renderType[typeIndex[key]]("value", param.options)
                    )
                    const displayName = param.displayName
                    const kanbanDisplayName = param.kanbanDisplayName
                    return {value, type, displayName, kanbanDisplayName}
                }
            )
            return content
        } else {
            return undefined
        }
    }


    return (
        <div className="flex flex-col gap-2 w-full">
            {
                data.map(
                    (item, index) => {

                        return (
                            <KanbanCard
                                key={index}
                                check={getCheck(item)}
                                fixed={getFixed(item)}
                                title={getTitle(item)}
                                description={getDescription(item)}
                                details={getDetails(item)}
                            />
                        )
                    }
                )
            }
        </div>
    )
}

export default Kanban;
