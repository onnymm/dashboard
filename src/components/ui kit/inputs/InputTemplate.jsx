import { useState } from "react";

const InputTemplate = ({
    type="text", // Tipo del campo
    defaultValue, // Valor inicial
    icon: Icon = undefined, // Ícono del campo
    placeholder, // Placeholder del campo
    onBlur, // Función a ejecutar cuando se abandona el foco del botón
    min, // Valor numérico mínimo permitido en el campo
    max, // Valor numérico máximo permitido en el campo 
    keyDownCallbacks, // Funciones a ejecutar en base a tecla presionada
    centerText, // Indicador de centrado de contenido
}) => {

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

    const inputType = {
        text: "text",
        number: "number",
        search: "text"
    }

    const movePlaceholder = isFocused || textContent ? "scale-75 -translate-y-[calc(50%_*_0.75_-_8px)] -translate-x-[calc(100%_*_0.125)]" : ""
    const colorPlaceholder = isFocused ? "text-main-500" : "text-gray-500/50"
    const hasPlaceholder = placeholder ? "pt-5 pb-1" : "py-3"
    const hasIcon = Icon ? "pl-12 pr-4" : "px-4"
    const centerClassName = centerText ? "text-center" : ""
    const paddingClassName = !Icon ? "pl-4" : ""

    const SearchButton = () => {

        if ( type === "search" ) {
            return (
                <button className="w-min h-min cursor-pointer pointer-events-auto *:hover:text-main-500">
                    <RenderedIcon colorPlaceholder={colorPlaceholder} Icon={Icon} />
                </button>
            )
        }

        return (
            <RenderedIcon colorPlaceholder={colorPlaceholder} Icon={Icon} />
        )
    }

    return (
        <div
            className="flex flex-col"
        >
            <div className="flex flex-row justify-start relative">
                
                <div
                    className={`${colorPlaceholder} ${paddingClassName} pointer-events-none h-12 flex flex-row items-center absolute transition whitespace-nowrap`}
                >
                    <SearchButton />
                    <div className={`${movePlaceholder} transition h-full flex flex-row items-center`}>
                        {placeholder}
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-full">
                <input
                    className={`${hasIcon} ${hasPlaceholder} ${centerClassName} h-12 dark:bg-gray-800 dark:text-white transition border border-gray-500/50 dark:border-gray-500/50 dark:focus:border-main-500 focus:border-main-500 rounded-lg outline-none`}
                    key={defaultValue}
                    defaultValue={defaultValue}
                    type={inputType[type]}
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
            <div className={`${colorPlaceholder} pl-4 pr-2 py-3`}>
                <Icon className="fill-current size-6 transition" />
            </div>
        )
    }
}