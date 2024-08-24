import { ChevronUpDownIcon } from "@heroicons/react/16/solid";

const SortingIndicator = () => {

    return (
        <div className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-4 w-4`}>
            <ChevronUpDownIcon />
        </div>
    )
}

export default SortingIndicator;