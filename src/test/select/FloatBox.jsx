import { useEffect, useRef } from "react";

const OptionsContainer = ({
    className = "",
    children, // Elementos contenidos
    isOpen,
    onClick,
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
        <div className="relative w-full">
            <div onClick={onClick} ref={wrapperRef} className={`${className} min-w-full max-w-max transition text-black dark:text-white shadow-lg border border-gray-500/50 flex flex-col rounded-lg dark:bg-gray-800/50 bg-slate-200/50 absolute max-h-50 sm:max-h-52 z-999 backdrop-blur-sm p-2`}>
                <div ref={optionsRef} className="py-2 h-full overflow-y-scroll scrollbar-hide vertical-difuminate">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default OptionsContainer;