import { useEffect, useRef } from "react";
import ListItem from "./ListItem";

const ListBox = ({ options, isOpen=undefined, assignOptions, evaluateActive, activeIcon }) => {
    
    // Nodos de referencia
    const listBoxRef = useRef(null)
    const listBoxContainerRef = useRef(null)

    // Inicialización de clases de transición en caso de pertenecer a un Select
    useEffect(
        () => {
            // Si se recibe un estado, el componente pertenece a un Select
            if ( isOpen !== undefined ) {

                // Se añaden las clases al montarse
                if (
                    !listBoxRef.current.classList.contains("scale-y-0")
                    &&
                    !listBoxRef.current.classList.contains("-translate-y-[calc(50%)]")
                ) {
                    listBoxRef.current.classList.add("scale-y-0", "-translate-y-[calc(50%)]")
                }
            }
        }, [isOpen]
    )

    // Interruptor de visibilidad en caso de pertenecer a un Select
    useEffect(
        () => {
            // Validación de si el componente pertenece a un Select
            if ( isOpen !== undefined ) {

                // Si el estado es true, se cambian las clases para simular expansión
                if ( isOpen ) {
                    listBoxRef.current.classList.add("scale-y-100", "translate-y-0")
                    listBoxRef.current.classList.remove("scale-y-0", "-translate-y-[calc(50%)]")
                    listBoxContainerRef.current.scrollTo(0, 0)
                // Si el estado es false, se cambian las clases para simular colapso
                } else {
                    listBoxRef.current.classList.add("scale-y-0", "-translate-y-[calc(50%)]")
                    listBoxRef.current.classList.remove("scale-y-100", "translate-y-0")
                    
                }
            }
        }, [isOpen]
    )

    return (
        <div ref={listBoxRef} className={`${isOpen !== undefined ? "z-999" : ""} max-h-50 absolute bg-white/50 backdrop-blur-sm dark:bg-gray-800/50 scale-y-0 -translate-y-[calc(50%)] transition duration flex flex-col w-min rounded-xl py-2 px-2 shadow-lg border border-gray-500/50`}
            
        >
            <div ref={listBoxContainerRef} className="vertical-difuminate h-full py-2 overflow-y-scroll scrollbar-hide"
            >
                <div>
                {
                    options.map(
                        (item, index) => (
                            <ListItem
                                key={index}
                                onClick={() => assignOptions(index)}
                                active={evaluateActive(item)}
                                activeIcon={activeIcon}
                            >
                                {item.displayName}
                            </ListItem>
                        )
                    )
                }
                </div>
            </div>
        </div>
    )
}

export default ListBox;
