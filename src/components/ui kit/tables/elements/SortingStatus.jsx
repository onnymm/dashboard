import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";

const SortingDirection = ({ascending}) => {

    return (
        <div className="h-4 w-4">
            {ascending ? <ChevronDownIcon /> : <ChevronUpIcon />}
        </div>
    )
}

export default SortingDirection;