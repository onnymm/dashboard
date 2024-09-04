import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { useEffect, useRef, useState } from "react";
import useWindowWidth from "../../../custom hooks/useWindowWidth";
import IconTextButton from "../buttons/IconTextButton";
import ListBox from "../listbox/ListBox";

const Select = ({
    children, // Texto del botón
    icon: Icon, // Ícono del botón
    options, // Opciones a mostrar en la lista
    activeOptions, // Estado de opciones activas
    setActiveOptions, // Función de cambio de estado de opciones activas
    multiOptional = false, // Indicador de modo de selección de opciones
    activeIcon = CheckIcon // Ícono indicador de opción activa
}) => {

    // Estados para mostrar la caja de lista
    const [displayListBox, setDisplayListBox] = useState(false)
    // Estado para cerrar la caja de lista si se detecta un clic fuera del componente
    const selectRef = useRef(null)
    // Referencia del listbox
    const listBoxRef = useRef(null)
    // Indicador de escuchador de evento de clic
    const isListenerAdded = useRef(false)

    // Obtención del ancho del elemento body
    const windowWidth = useWindowWidth()

    // Función para cerrar la caja de lista
    const clickOutside = (event) => {

        // Validación si el origen del clic es de este componente
        if ( !selectRef.current.contains(event.target) ) {
            // Se cierra la caja de lista
            setDisplayListBox(false)
            // Se elimina el escuchador de eventos para esta función
            document.removeEventListener(
                'click', clickOutside
            )
            // Se indica que el escuchador de eventos se removió
            isListenerAdded.current = false;
        }
    }

    const displayHandle = () => {

        // Validación de si no hay escuchador de eventos añadido
        if ( !isListenerAdded.current ) {

            // Se añade el escuchador de eventos de clic fuera del componente
            document.addEventListener(
                'click', clickOutside
            )

            // Se indica que el escuchador de eventos ha sido añadido
            isListenerAdded.current = true
        }

        // Se cambia el estado de visualización de la caja de lista
        setDisplayListBox(!displayListBox)
    }

    // Ícono para expansión o colapso de la lista de opciones
    const ArrowIcon = () => {

        // Íconos de estado
        const icons = {
            false: ChevronDownIcon,
            true: ChevronUpIcon
        }

        // Obtención del ícono en base al valor del estado
        const StateIcon = icons[displayListBox]

        // Retorno del ícono estilizado
        return (
            <StateIcon className="ml-2 pointer-events-none size-4" />
        )
    }

    // Tipos de selección de opciones (Múltiple o individual)
    const optionsToggle = {
        // Multiopcional
        true: (key) => setActiveOptions(key),
        // Uniopcional
        false: (key) => {
            setActiveOptions(
                (prevKey) => (prevKey !== key ? key : undefined)
            )
            setDisplayListBox(false)
        }
    }

    // Función de evaluación de items activos en base a selección individual o múltiple
    const evaluateCallback = {
        true: (item) => (item.visible),
        false: (item) => (item.id === activeOptions)
    }

    // Obtención de funciones en base a selección individual o múltiple
    const assignOptions = optionsToggle[multiOptional]
    const evaluateActive = evaluateCallback[multiOptional]

    // Función para reubicación de la lista de opciones en caso de desbordarse del lado derecho del documento
    useEffect(
        () => {
            // Obtención de la posición X del botón
            const listBoxPosX = selectRef.current.getBoundingClientRect().x
            // Obtención de la posición X del borde derecho de la lista de opciones
            const listBoxRightEdge = listBoxPosX + listBoxRef.current.offsetWidth

            // Evaluación de si el borde derecho sobrepasa el ancho del elemento body
            //      (Se da un pixelaje extra para evitar que colisionen el borde de la pantalla
            //      y el borde derecho de la lista de opciones)
            if ( listBoxRightEdge + 16 > windowWidth ) {
                // Se asigna un left negativo restando a la longitud del select la longitud de la lista
                //      de opciones para lograr una alineación vertical de ambos por la derecha
                listBoxRef.current.style.left = selectRef.current.offsetWidth - listBoxRef.current.offsetWidth + "px"
            } else {
                // En caso de no sobrepasar el ancho del documento, el left se mantiene en 0px
                listBoxRef.current.style.left = "0px"
            }

        }, [windowWidth]
    )

    return (
        <div className="flex flex-col" ref={selectRef}>

            <IconTextButton icon={Icon} ico type="primary" onClick={displayHandle}>
                <div className="flex flex-row items-center">
                    {children}<ArrowIcon />
                </div>
            </IconTextButton>

            <div className="relative">
                <ListBox
                    reference={listBoxRef}
                    options={options}
                    assignOptions={assignOptions}
                    isOpen={displayListBox}
                    evaluateActive={evaluateActive}
                    activeIcon={activeIcon}
                />
            </div>

        </div>
    )
}

export default Select;
