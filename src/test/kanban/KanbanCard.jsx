import Check from "../../components/ui kit/checks/Check";
import { char } from "../../widgets/widgetTables";

const KanbanCard = ({
    check,
    fixed,
    title,
    description,
    details,
}) => {

    return (
        <div className="flex flex-row gap-2 border-gray-500/30 bg-white dark:bg-navbar-background-d shadow-md p-4 border rounded w-full h-max">
            {/* Checkbox */}
            {check !== undefined &&
                <div className="size-7">
                    <Check value={check} />
                </div>
            }

            <div className="gap-2 w-full text-start">
                {fixed &&
                    <div className="float-right flex flex-col items-end gap-2">
                        {
                            fixed.map(
                                (item, index) => {

                                    return (
                                        <div key={index}>
                                            {item}
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                }
                {/* Título */}
                {
                    char("value")({ ...title, className: "font-bold" })
                }
                <br />
                {/* Descripción */}
                {description &&
                    char("value")({ ...description })
                }
                {details &&
                    <div className="flex flex-col">
                        {
                            details.map(
                                (item, index) => {
        
                                    return (
                                        <div className="" key={index}>
                                            {item.kanbanDisplayName &&
                                                <span className="mr-1 font-bold ui-text-none">{item.displayName}:</span>
                                            }
                                            <span className="">
                                                {item.type({ ...item })}
                                            </span>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default KanbanCard;
