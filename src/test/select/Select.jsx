import { ChevronDownIcon, ChevronUpIcon, ListBulletIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import IconTextButton from "../../components/ui kit/buttons/IconTextButton";
import OptionsContainer from "./FloatBox";
import ListOption from "./ListOption";

const Select = ({
    children, // Texto del botón
    className = "",
    disabled = false,
    listBoxOptions,
    setActiveOption,
    icon: Icon = ListBulletIcon, // Ícono del botón
    activeIcon: ActiveIcon,
    type = "secondary",
    multiOptional = false
}) => {

    // Estado para mostrar la caja de lista
    const [listboxOpen, setListboxOpen] = useState(false)
    const selectRef = useRef(null)
    const isListenerAdded = useRef(false)

    const toggleCallback = (prevState) => (!prevState)

    const toggleOptionsContainer = () => {

        // Validación de si no hay escuchador de eventos añadido
        if ( !isListenerAdded.current ) {
            // Se añade el escuchador de eventos de clic fuera del componente
            document.addEventListener(
                'click', clickOutside
            );

            // Se indica que el escuchador de eventos ha sido añadido
            isListenerAdded.current = true;
        }

        // Se cambia el estado de visualización de la caja de lista
        setListboxOpen( toggleCallback )
    };

    const clickOutside = (event) => {

        // Validación si el origen del clic es de este componente
        if ( !selectRef.current.contains(event.target) ) {
            // Se cierra la caja de la lista
            setListboxOpen(false)
        }
    }

    const clickCallback = () => {
        if ( !multiOptional ) {
            setListboxOpen(false)
        }
    }

    const ArrowIcon = ({
        isOpen,
    }) => {
    
        const icons = {
            false: ChevronDownIcon,
            true: ChevronUpIcon,
        }
    
        // Retorno del ícono estilizado
        const StateIcon = icons[isOpen]
    
        return (
            <StateIcon className="ml-2 pointer-events-none size-4" />
        )
    }

    return (
        <div ref={selectRef} className={`${className} flex flex-col w-max h-max`}>
            <IconTextButton icon={Icon} type={type} onClick={toggleOptionsContainer} disabled={disabled}>
                <span>{children}</span><ArrowIcon isOpen={listboxOpen} />
            </IconTextButton>
            <OptionsContainer isOpen={listboxOpen} setIsOpen={setListboxOpen} onClick={clickCallback}>
            {
                listBoxOptions.map(
                    (item) => (
                        <ListOption key={item.key} active={item.active} activeIcon={ActiveIcon} onClick={() => setActiveOption(item.key)}>
                            {item.displayName}
                        </ListOption>
                    )
                )
            }
            </OptionsContainer>
        </div>
    )
}

export default Select;
