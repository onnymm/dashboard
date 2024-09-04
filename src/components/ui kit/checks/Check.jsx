import { CheckIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

const Check = ({ value }) => {
    const [checked, setChecked] = useState(value);

    const borderClassName = checked ? "border-main-500" : "border-gray-500";
    const fillClassName = checked ? "scale-100" : "scale-0";
    const iconClassName = checked ? "opacity-100 delay-200" : "opacity-0 delay-0";

    return (
        <div className={`${borderClassName} hover:border-main-500 relative flex justify-center items-center transition-colors duration-200 border-2 rounded-md size-6 cursor-pointer overflow-hidden`} onClick={() => setChecked((prevState) => !prevState)}>
            <span className={`${fillClassName} bg-main-500 rounded-sm size-full duration-300`}/>
            <CheckIcon className={`${iconClassName} transition duration-200 absolute size-6 fill-white pointer-events-none`} />
        </div>
    );
};

export default Check;