import createCircle from "../../../core/uiEffects";

const ListItem = ({
    children, // Texto del botón
    activeIcon: ActiveIcon,
    icon: Icon, // Ícono opcional a renderizar
    active, // Indicador de opción activa
    onClick, // Función opcional a ejecutar tras click
}) => {

    // Función de ejecución del botón
    const callback = (event) => {
        // Efecto del botón
        createCircle(event, "bg-gray-500/50".split(" "))
        // Función provista
        onClick(event)
    }

    // Ícono a renderizar
    const RenderedIcon = () => {
        return (
            <div className="h-12 w-8 flex flex-row justify-center items-center">
                <Icon className="size-8" />
            </div>
        )
}

    return (
        <button
            className="h-12 pr-4 gap-2 transition-colors duration-300 whitespace-nowrap w-full flex flex-row items-center rounded-lg relative overflow-hidden text-black/80 hover:text-black hover:bg-gray-400/20 dark:text-white/80 dark:hover:text-white"
            onClick={callback}
        >
            {/* <div className={`${active ? "bg-main-500" : ""} rounded-full m-3 p-1`}></div> */}
            <div className="pl-3">
                <ActiveIcon className={`${active ? "opacity-100" : "opacity-0"} transition-opacity duration-300 size-4 fill-main-500`} />
            </div>
            {Icon && <RenderedIcon />}
            <div>
                {children}
            </div>
        </button>
    )
}

export default ListItem;