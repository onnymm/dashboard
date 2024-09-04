import { EyeIcon, FunnelIcon, TableCellsIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { useEffect, useRef, useState } from "react";
import { filterData } from "../../../core/tablesFunctionality";
import { useColumns } from "../../../custom hooks/useColumns";
import IconTextButton from "../buttons/IconTextButton";
import NumericInput from "../inputs/NumericInput";
import SearchInput from "../inputs/SearchInput";
import Select from "../select/Select";
import TableContent from "./elements/TableContent";
import TablePagination from "./pagination/TablePagination";

const Table = ({
    data,
    columns,
    columnsToRender,
    filters,
    searchScope,
    itemsPerPage = 50,
    showPagination = true,
}) => {

    // Referencia de componente de tabla para manipulación directa
    const tableDataRef = useRef(null);

    // Estado para búsqueda
    const [search, setSearch] = useState({ criteria: () => true })
    // Estado para filtros
    const [activeFilter, setActiveFilter] = useState(undefined);

    // Filtrado de datos de la tabla por búsqueda
    data = filterData(data, search);
    // Filtrado de datos de la tabla por filtros
    if ( filters ) {
        data = filterData(data, filters[activeFilter]);
    }

    // Función para limpiar filtros
    const cleanFilters = () => {
        setActiveFilter(undefined)
    };

    // Objeto de mapa de columnas de tabla
    const { availableColumns, activeColumns, toggleColumn } = useColumns(columns, columnsToRender);
    // Estado para paginación
    const [page, setPage] = useState(0);

    // Reseteo de deslizamiento vertical en la tabla en base a un cambio en los datos o la página
    useEffect(
        () => {
            tableDataRef.current.scrollTo(0, 0)
        }, [data, page]
    );

    // Reseteo a la página 1 en cambios de filtro o búsqueda
    useEffect(
        () => {
            setPage(0)
        }, [activeFilter, search]
    );

    return (
        <div className="flex flex-col gap-4 w-max max-w-full">
            {
                searchScope || filters || availableColumns.length ?
                    <div className="flex flex-wrap gap-2 w-full">

                        {/* Campo de búsqueda */}
                        {searchScope && <SearchInput setSearch={setSearch} searchScope={searchScope} />}

                        {/* Sección de filtros */}
                        {
                            filters &&
                            <Select icon={FunnelIcon} options={filters} activeOptions={activeFilter} setActiveOptions={setActiveFilter} activeIcon={FunnelIcon}>
                                Filtrar por
                            </Select>
                        }
                        {
                            filters &&
                            <IconTextButton icon={XMarkIcon} onClick={cleanFilters} disabled={activeFilter === undefined}>
                                Limpiar filtros
                            </IconTextButton>
                        }

                        {/* Filtro de columnas */}
                        {
                            availableColumns.length &&
                            <Select icon={TableCellsIcon} options={availableColumns} activeOptions={activeColumns} setActiveOptions={toggleColumn} activeIcon={EyeIcon} multiOptional>
                                Ver columnas
                            </Select>
                        }
                    </div>
                : null
            }
            {searchScope && filters && availableColumns.length &&
            <div className="flex flex-row gap-4">
                {/* Paginación superior de página */}
                {showPagination && <TablePagination data={data} itemsPerPage={itemsPerPage} page={page} setPage={setPage} />}
                {/* Selector de página */}
                {showPagination && <NumericInput defaultValue={page + 1} valueHandle={(value) => setPage(value - 1)} min={1} max={Math.trunc(data.length / itemsPerPage) + (data.length % itemsPerPage === 0 ? 0 : 1)} instantUpdate />}
            </div>}
            {/* Contenido y diseño de la tabla */}
            <div className="flex flex-col border-gray-500/30 bg-white dark:bg-gray-800 shadow-md p-2 border rounded-xl w-full h-max transition duration-100">
                <div className="z-10 rounded-lg h-0 pointer-events-none">
                    <div className="bottom-10 shadow-md dark:border-none rounded-lg w-full h-10"></div>
                </div>
                <div ref={tableDataRef} id="users" className="flex flex-col rounded-lg w-full h-full overflow-x-auto overflow-y-hidden">
                    <TableContent data={data} columns={activeColumns} page={page} setPage={setPage} itemsPerPage={itemsPerPage} columnsToRender={columnsToRender} tableDataRef={tableDataRef} />
                </div>
            </div>
            <div className="flex flex-row gap-4">
                {/* Paginación superior de página */}
                {showPagination && <TablePagination data={data} itemsPerPage={itemsPerPage} page={page} setPage={setPage} />}
                {/* Selector de página */}
                {showPagination && <NumericInput defaultValue={page + 1} valueHandle={(value) => setPage(value - 1)} min={1} max={Math.trunc(data.length / itemsPerPage) + (data.length % itemsPerPage === 0 ? 0 : 1)} instantUpdate />}
            </div>
        </div>
    )
}

export default Table;
