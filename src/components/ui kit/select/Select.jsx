import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { useRef, useState } from "react";
import IconTextButton from "../buttons/IconTextButton";
import ListBox from "../listbox/ListBox";

const Select = ({ children, icon: Icon, options, activeOptions, setActiveOptions, multiOptional=false, activeIcon=CheckIcon }) => {

    // Estados para mostrar la caja de lista
    const [displayListBox, setDisplayListBox] = useState(false)
    // Estado para cerrar la caja de lista si se detecta un clic fuera del componente
    const listBoxRef = useRef(null)
    // Indicador de escuchador de evento de clic
    const isListenerAdded = useRef(false)

    // Función para cerrar la caja de lista
    const clickOutside = (event) => {

        // Validación si el origen del clic es de este componente
        if ( !listBoxRef.current.contains(event.target) ) {
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

    const ArrowIcon = () => {

        const icons = {
            false: ChevronDownIcon,
            true: ChevronUpIcon
        }

        const StateIcon = icons[displayListBox]

        return (
            <StateIcon className="size-4 ml-2 pointer-events-none" />
        )
    }

    const optionsToggle = {
        true: (key) => {console.log(key); setActiveOptions(key)},
        false: (key) => {
            setActiveOptions(
                (prevKey) => (prevKey !== key ? key : undefined)
            )
            setDisplayListBox(false)
        }
    }

    const evaluateCallback = {
        true: (item) => (item.visible),
        false: (item) => (item.id === activeOptions)
    }

    const assignOptions = optionsToggle[multiOptional]

    const evaluateActive =evaluateCallback[multiOptional]

    return (
        <div className="flex flex-col" ref={listBoxRef}>
            <IconTextButton icon={Icon} ico type="primary" onClick={displayHandle}>
                <div className="flex flex-row items-center">
                    {children}<ArrowIcon />
                </div>
            </IconTextButton>
            <div>
                <ListBox options={options} assignOptions={assignOptions} isOpen={displayListBox} evaluateActive={evaluateActive} activeIcon={activeIcon} />
            </div>
        </div>
    )
}

export default Select;
