import createCircle from "../../core/uiEffects"

const ListOption = ({
    children, // Contenido de la opción,
    onClick, // Función para ejecución por clic
    // icon: Icon = CheckIcon,
    active = false, // Opción activa
    activeIcon: ActiveIcon, 
}) => {

    // Función de ejecución del botón
    const callback = (event) => {
        // Efecto del botón
        createCircle(event, "bg-gray-500/50".split(" "))
        // Función provista
        onClick(event)
    }

    return (
        <button className="relative flex flex-row items-center gap-2 sm:hover:bg-gray-400/20 active:bg-gray-400/20 pr-4 pl-4 rounded-lg w-full h-12 sm:h-10 ui-text-none sm:text-sm sm:dark:hover:text-gray-200 sm:active:text-current sm:hover:text-black active:dark:text-gray-200 active:text-black whitespace-nowrap transition-colors duration-300 overflow-hidden" onClick={callback}>
            <div className="size-4">
                <ActiveIcon className={`${active ? "opacity-100" : "opacity-0" } transition-opacity duration-300 size-full fill-main-500`} />
            </div>
            <div>
                {children}
            </div>
        </button>
    )
}

export default ListOption;