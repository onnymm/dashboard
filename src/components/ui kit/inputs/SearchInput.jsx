import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { buildSearchCriteria } from "../../../core/buildSearchCriteria";
import InputTemplate from "./InputTemplate";

const SearchInput = ({ setSearch, searchScope }) => {
    // Función para filtro de datos
    const filterData = (e) => {

        // Generación del criterio de búsqueda
        const criteria = buildSearchCriteria(e, searchScope)

        // Asignación del estado con la función
        setSearch({ criteria })
    }

    // Teclas de ejecución de búsqueda
    const keyDownCallbacks = {
        "Enter": filterData,
    }

    return (
        <InputTemplate type="search" icon={MagnifyingGlassIcon} placeholder={"Buscar"} keyDownCallbacks={keyDownCallbacks} />
    )
}

export default SearchInput;
