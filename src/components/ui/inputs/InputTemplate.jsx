import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const InputTemplate = ({
    value,
    setValue,
    placeholder = "",
    visiblePlaceholder = "",
    icon: Icon = undefined,
    onChange = undefined,
    loading = undefined,
    onEnter = undefined,
    inputRef,
}) => {

    // Estado de indicador de foco
    const [ focus, setFocus ] = useState(false);

    // Función de ejecución al haber un cambio en el valor del input
    const onChangeCallback = (e) => {
        // Si se provió una función de ejecución en cambio
        if ( onChange ) {
            // Se ejecuta la función provista
            onChange(e)
        }
        // Se establece el valor en el estado
        setValue(e.target.value)
    }

    // Función de ejecución a haber una tecla presionada
    const keyDownCallback = (e) => {
        // Ejecución en tecla enter
        if ( e.key === "Enter" ) {
            onEnter(e)
        }
    }

    // ----------------------------------------

    // Clases para posicionamiento de placeholder visible
    const positionateVisiblePlaceholder = (
        focus || value
            ? "translate-y-[-25%] scale-75 -translate-x-[calc(12.5%)]"
            : ""
    )

    // Clases para resaltar el placeholder visible
    const colorVisiblePlaceholder = (
        focus
            ? "text-main-500"
            : ""
    )

    // Clases de padding si el componente tiene ícono o no
    const hasIcon = (
        Icon
            ? "pl-12 sm:pl-10"
            : "pl-2"
    )

    const isLoading = (
        loading !== undefined
            ? "pr-10"
            : "pr-2"
    )

    const hasVisiblePlaceholder = (
        visiblePlaceholder
        ? "pt-4 sm:pt-3"
        : ""
    )

    return (
        <div className="relative flex flex-row" onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}>

            {/* Sección de indicadores visuales del campo */}
            <div className="absolute flex flex-row pointer-events-none size-full">
                {/* Ícono */}
                {Icon &&
                    <div className="size-12 sm:size-10 z-10 flex justify-center items-center">
                        <Icon className={`${colorVisiblePlaceholder} text-gray-500 size-[50%]`} />
                    </div>
                }
                {/* Placeholder */}
                <div className="z-10 flex-grow h-full">
                    <div className={`${positionateVisiblePlaceholder} ${colorVisiblePlaceholder} text-gray-500 transition left flex flex-row items-center size-full`}>{visiblePlaceholder}</div>
                </div>
                {/* Estado de carga (Para componente de campo de búsqueda) */}
                {loading !== undefined &&
                    <div className={`${loading ? "opacity-1" : "opacity-0"} size-12 sm:size-10 z-10 flex justify-center items-center`}>
                        <ArrowPathIcon className={`text-main-500 animate-loading-spin size-[50%]`} />
                    </div>
                }
            </div>

            {/* Campo */}
            <input
                className={`${hasIcon} ${isLoading} ${hasVisiblePlaceholder} w-full relative border-gray-500/50 focus:border-main-500 bg-white dark:bg-gray-800 pb-0 border rounded-lg h-12 sm:h-10 sm:text-sm transition overflow-visible outline-none`}
                type="text"
                value={value}
                onKeyDown={keyDownCallback}
                onChange={onChangeCallback}
                placeholder={placeholder}
                ref={inputRef}
                spellCheck={false}
            />
        </div>
    );
}

export default InputTemplate;
