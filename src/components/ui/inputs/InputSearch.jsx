import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import IconButton from "../../ui kit/buttons/IconButton";
import InputTemplate from "./InputTemplate";

/* eslint-disable no-unused-vars */
// import DataView from "../data_visualization/DataView";

/**
 *  ## Componente de campo de búsqueda
 *  Este componente se renderiza para ser un campo de búsqueda, el cual incluye
 *  un botón de borrar el contenido para fácil usabilidad por parte del usuario.
 *  El componente recibe tres propiedades las cuales se describen a continuación:
 *  - `search`: Estado de texto de búsqueda.
 *  - `setSearch`: Función de cambio de estado de texto de búsqueda.
 *  - `loading`: Estado de carga.
 *  
 *  ----
 *  
 *  ### Uso
 *  Para poder utilizar este componente correctamente se debe declarar un estado
 *  de texto de búsqueda:
 *  ```jsx
 *  const [ search, setSearch ] = useState("");
 *  ```
 *  
 *  También se debe declarar un estado de carga, el cual se debería utilizar en el
 *  componente contenedor de `InputSearch`:
 *  ```jsx
 *  const [ loading, setLoading ] = useState(false);
 *  ```
 *  
 *  Una vez hecho esto, se puede utilizar el componente de campo de búsqueda usando
 *  los estados y función de cambio de estado requeridos:
 *  ```jsx
 *  <InputSearch search={search} setSearch={setSearch} loading={loading} />
 *  ```
 *  
 *  ----
 *  
 *  ### Funcionalidad
 *  El componente cuenta con cierta funcionalidad para su uso en búsquedas como
 *  para indicar visualmente si la búsqueda se está realizando.
 *  - Está programado para realizar un cambio de estado del texto de búsqueda
 *  cuando está enfocado y se presiona la tecla `'Enter'`.
 *  - Al iniciar el cambio de estado un ícono de carga aparece en la interfaz
 *  para indicar al usuario que la búsqueda se está realizando. Este ícono
 *  desaparece cuando el estado de carga `loading` se establece a `false`.
 *  - Este componente **NO** cambia el estado `loading` y es por eso que sólo
 *  recibe su estado, no su función de asignación.
 *  
 *  @param {object} config - Propiedades del componente
 *  @param {string} config.search - Estado de texto de búsqueda
 *  @param {function} config.setSearch - Función de cambio de estado de texto de búsqueda
 *  @param {loading} config.loading - Estado de carga del componente {@link DataView}
 *  @returns {React.JSX.Element}
 */ 
const InputSearch = ({
    search,
    setSearch,
    loading,
}) => {

    // Estado para el texto de búsqueda
    const [ value, setValue ] = useState(search);
    // Estado para el ícono de carga
    const [ searchLoading, setSearchLoading ] = useState(false);
    // Referencia del componente input
    const inputRef = useRef(null);

    // Función de activación con tecla Enter
    const onEnterCallback = () => {

        // Se desencadena el cambio de estado de texto de búsqueda y estado de carga sólo si el
        //      contenido del campo es distinto al estado
        if ( search !== value ) {
            // Se establece el texto del campo como estado
            setSearch(value)

            // Se establece el estado de carga a verdadero
            setSearchLoading(true)
        }

        // Se desenfoca el campo
        inputRef.current.blur()
    }

    // Restauración del estado de carga de ícono a falso cuando el estado de carga de la vista también es falso
    useEffect(
        () => {
            if ( !loading ) {
                setSearchLoading(false)
            }
        }, [loading]
    )

    // Función para limpiar el campo de búsqueda
    const clearSearchInput = () => {
        setValue("");
        setSearch("");
    }

    return (
        <div className="flex flex-row gap-2">
            <InputTemplate value={value} setValue={setValue} onEnter={onEnterCallback} visiblePlaceholder={"Buscar"} icon={MagnifyingGlassIcon} loading={searchLoading} inputRef={inputRef} />
            <IconButton icon={XMarkIcon} onClick={clearSearchInput} disabled={!value || loading} size="lg" type={"primary"} />
        </div>
    )
}

export default InputSearch;
