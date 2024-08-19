import { useState } from "react";

const InputTemplate = ({ type="text", defaultValue, placeholder, icon: Icon = undefined, onBlur, min, max, keyDownCallbacks, centerText }) => {

    const [isFocused, setIsFocused] = useState(false)
    const [textContent, setTextContent] = useState(defaultValue)

    const blurCallback = (e) => {

        setIsFocused(false)

        if ( onBlur ) {
            onBlur(e)
        }
    }

    const keyDownCallback = (e) => {
        const callback = keyDownCallbacks[e.key]

        if ( callback ) {
            callback(e)
        }
    }

    const movePlaceholder = isFocused || textContent ? "scale-75 -translate-y-[calc(50%_*_0.75_-_8px)] -translate-x-[calc(100%_*_0.125)]" : ""
    const colorPlaceholder = isFocused ? "text-blue-500" : "text-gray-500/50"
    const hasPlaceholder = placeholder ? "pt-5 pb-1" : "py-3"
    const hasIcon = Icon ? "pl-10 pr-4" : "px-3"
    const centerClassName = centerText ? "text-center" : ""

    

    return (
        <div
            className="flex flex-col w-full"
        >
            <div className="flex flex-row justify-start items-center pointer-events-none absolute">
                
                <div
                    className={`${movePlaceholder} ${colorPlaceholder} ml-10 flex flex-row items-center relative py-3 transition whitespace-nowrap`}
                >
                    {placeholder}
                </div>
            </div>
            <div className="flex flex-row w-full">
                <RenderedIcon colorPlaceholder={colorPlaceholder} Icon={Icon} />
                <input
                    className={`${hasIcon} ${hasPlaceholder} ${centerClassName} transition border focus:border-blue-500 rounded-lg outline-none peer`}
                    key={defaultValue}
                    defaultValue={defaultValue}
                    type={type}
                    onFocus={() => setIsFocused(true)}
                    onBlur={blurCallback}
                    onChange={(e) => setTextContent(e.target.value)}
                    onKeyDown={(e) => keyDownCallback(e)}
                    min={min}
                    max={max}
                />
            </div>
        </div>
    )
}

export default InputTemplate;

const RenderedIcon = ({colorPlaceholder, Icon}) => {

    if ( Icon ) {
        return (
            <div className={`${colorPlaceholder} absolute m-2 my-3`}>
                <Icon className="fill-current size-6 transition" />
            </div>
        )
    }
}