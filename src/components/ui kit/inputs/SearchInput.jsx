import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import InputTemplate from "./InputTemplate";

const SearchInput = () => {

    return (
        <InputTemplate type="search" icon={MagnifyingGlassIcon} placeholder={"Buscar"} />
    )
}

export default SearchInput;