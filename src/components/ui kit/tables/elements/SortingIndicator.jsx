import { ChevronUpDownIcon } from "@heroicons/react/16/solid";

const SortingIndicator = ({isHovered}) => {

    const opacity = isHovered ? "opacity-100" : "opacity-0"

    return (
        <div className={`${opacity} h-4 w-4`}>
            <ChevronUpDownIcon />
        </div>
    )
}

export default SortingIndicator;