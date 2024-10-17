import { useEffect, useRef } from "react";

const OptionsContainer = ({
    className = "",
    children, // Elementos contenidos
    isOpen,
    headers,
}) => {

    const wrapperRef = useRef(null)
    const optionsRef = useRef(null)

    // Inicialización de clases de transición
    useEffect(
        () => {
            // Se añaden las clases al montarse
            // Si no está cerrado
            if (
                !wrapperRef.current.classList.contains("scale-y-0")
                    &&
                !wrapperRef.current.classList.contains("scale-x-[95%]")
                    &&
                !wrapperRef.current.classList.contains("-translate-y-[calc(50%)]")
            ) {
                wrapperRef.current.classList.add("scale-y-0", "-translate-y-[calc(50%)]")
            }
        }, [isOpen]
    )

    useEffect(
        () => {
            if ( isOpen ) {
                wrapperRef.current.classList.add("scale-y-100", "scale-x-100", "translate-y-0")
                wrapperRef.current.classList.remove("scale-y-0", "scale-x-[95%]", "-translate-y-[calc(50%)]")
            } else {
                wrapperRef.current.classList.add("scale-y-0", "scale-x-[95%]", "-translate-y-[calc(50%)]")
                wrapperRef.current.classList.remove("scale-y-100", "scale-x-100", "translate-y-0")
            }
        }, [isOpen]
    )

    useEffect(
        () => {
            optionsRef.current.scrollTo(0, 0)
        }, [isOpen]
    )

    return (
        <div className="absolute pr-4 w-full sm:max-w-72 pointer-events-none">
            <div className="h-12 sm:h-10">

            </div>
            <div className="relative pointer-events-auto">
                <div ref={wrapperRef} className={`${className} pointer-events-auto gap-2 max-w-full transition text-black dark:text-white shadow-lg border border-gray-500/50 flex flex-col rounded-lg dark:bg-gray-800/70 bg-slate-200/50 absolute max-h-96 sm:max-h-52 z-999 backdrop-blur-sm p-2`}>
                    {headers}
                    <div className="overflow-auto mob-vertical-difuminate sm:dsk-vertical-difuminate scrollbar-hide">
                        <div ref={optionsRef} className="py-2 w-min overflow-x-scroll overflow-y-scroll pointer-events-auto scrollbar-hide">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default OptionsContainer;