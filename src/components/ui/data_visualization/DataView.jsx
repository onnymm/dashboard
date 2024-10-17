import { ArrowsUpDownIcon, Bars3CenterLeftIcon, CheckIcon, EyeIcon, FunnelIcon, ListBulletIcon, Squares2X2Icon, TableCellsIcon } from "@heroicons/react/24/solid";
import { useEffect, useMemo, useRef, useState } from "react";
import useSearch from "../../../custom hooks/useSearch";
import { NO_RECORDS_MESSAGE } from "../../../settings/appSettings";
import Fallback from "../../../test/async_table/Fallback";
import Kanban from "../../../test/kanban/Kanban";
import Select from "../../../test/select/Select";
import TablePagination from "../../ui kit/tables/pagination/TablePagination";
import InputSearch from "../inputs/InputSearch";
import NoRecords from "./view_types/common/NoRecords";
import Table from "./view_types/table/Table";

const DataView = ({
    viewConfig,
    filters,
    searchScope,
    queryParams,
    itemsPerPage: itemsShownPerPage = 40,
    showPagination = true,
    hiddenFields,
    apiCallback,
    noRecordsIcon: NoRecordsIcon = ListBulletIcon,
    noRecordsMessage = NO_RECORDS_MESSAGE
}) => {

    // Estado de carga inicial
    const [ initialLoad, setInitialLoad ] = useState(false);
    // Estado temporal de carga
    const [ loading, setLoading ] = useState(true);

    // Estado para el almacenamiento de los datos obtenidos de la solicitud GET al API
    const [ data, setData ] = useState(undefined);
    // Estado para el valor de la página actual
    const [ page, setPage ] = useState(0);
    // Estado para valor de registros por página
    const [ itemsPerPage ] = useState(itemsShownPerPage);

    // ------------------------------------------------------------

    // Referencia de componente de tabla para manipulación directa
    const tableDataRef = useRef(null);

    // ------------------------------------------------------------

    // Dominio de búsqueda
    const { searchText, setSearchText, apiSearch } = useSearch(searchScope);

    // Estados para ordenamiento y dirección de ordenamiento de campos
    const {
        sortingFields,
        sortingDirections,
        sortingFieldKey,
        ascending,
        setTableSortingField,
        setKanbanSortingField,
        setKanbanAscending
    } = useSortingFields(viewConfig);

    // Estados para mostrar u ocultar columnas de la vista de tabla
    const toggleableColumns = viewConfig.filter( (item) => (item.tableVisible !== undefined) )

    // Estados de columas visibles para componente Select
    const [ visibleColumns, setVisibleColumn ] = useMultiOptions(
        toggleableColumns,
        (item) => (item.tableVisible === undefined || item.tableVisible),
        "displayName"
    )

    // Estados para selección de filtros para componente Select
    const [ activeFilters, activeFilterKey , setActiveFilter ] = useOptions(
        filters.available,
        () => (false),
        "displayName"
    )

    // Construcción de parámetros para solicitudes API
    const params = useMemo(
        () => {
            return buildQueryParams({
                viewConfig,
                queryParams,
                page,
                itemsPerPage,
                sortingFieldKey,
                ascending,
                filters,
                apiSearch,
                hiddenFields,
                activeFilterKey,
            })
        }, [
            viewConfig,
            queryParams,
            page,
            itemsPerPage,
            sortingFieldKey,
            ascending,
            filters,
            apiSearch,
            hiddenFields,
            activeFilterKey,
        ]
    )

    // Solicitud al backend
    useEffect(
        () => {
            // Se cambia el estado de carga a verdadero
            setLoading(true)
            // Se realiza la llamada al API
            apiCallback(
                params,
                setData
            )
        }, [itemsShownPerPage, page, params, apiCallback]
    )

    // Si se obtienen los datos del API por primera vez se establece el estado de carga a falso
    useEffect(
        () => {
            if ( data && !initialLoad ) {
                setLoading(false)
                setInitialLoad(true)
            }
        }, [data, initialLoad]
    )

    // Establecer carga a falso después de recibir los datos tras nueva solicitud
    useEffect(
        () =>{
            if ( data ) {
                setLoading(false)
            }
        }, [data]
    )

    // Se regresa a la primera página si el filtro o algún parámetro de solicitud al API cambia
    useEffect(
        () => {
            setPage(0)
        }, [activeFilterKey, apiSearch]
    )

    useEffect(
        () => {
            if (data && initialLoad) {
                // tableDataRef.current.scrollTo(0, 0);
            }
        }, [data, initialLoad, loading]
    )

    // Propiedades de la sección de encabezado de la vista
    const headerProps = {
        searchScope,
        searchText,
        setSearchText,
        activeFilters,
        setActiveFilter,
        visibleColumns,
        setVisibleColumn,
        sortingFields,
        sortingDirections,
        sortingFieldKey,
        setKanbanSortingField,
        setKanbanAscending,
        loading
    };

    return (
        <div className="flex flex-col gap-4 w-full h-max min-h-full">
            {/* Render inicial mientras los datos cargan */}
            {loading && !initialLoad && <Fallback icon={TableCellsIcon} />}
            {initialLoad && data &&
                <ViewHeader { ...headerProps } />
            }

            {/* Paginación de la tabla */}
            {data && initialLoad && showPagination &&
                <TablePagination data={data} disabled={loading} count={data.count} itemsPerPage={itemsShownPerPage} page={page} setPage={setPage} />
            }

            {/* Vista de tabla */}
            {data && initialLoad &&
                <div className={`${data.data.length === 0 ? "w-full" : "w-max"} hidden sm:flex relative flex-col flex-grow border-gray-500/30 bg-white dark:bg-gray-800 shadow-md p-2 border rounded-xl max-w-full transition duration-100 overflow-auto`}>
                    <div className="flex flex-grow rounded-lg w-full h-full overflow-auto">
                        <div className={`${loading ? "flex-grow flex flex-col overflow-hidden": ""} ${data[0] === undefined ? "w-full" : "max-w-max"} relative flex rounded-lg overflow-auto min-h-full`} ref={tableDataRef}>
                            <div className={`${loading ? "flex-grow flex opacity-0 pointer-events-none" : ""} z-10 rounded-lg h-0 pointer-events-none w-max`}>
                                <div className="bottom-10 shadow-md dark:border-none rounded-lg w-full h-10"></div>
                            </div>
                            <div id="users" className={`${loading ? "flex-grow opacity-0 pointer-events-none max-h-0" : ""} flex flex-col rounded-lg size-full max-size-full`}>
                                {initialLoad && data && data.data.length > 0 &&
                                    <Table data={data.data} viewConfig={viewConfig} visibleColumns={visibleColumns} itemsPerPage={itemsPerPage} columnsToRender={viewConfig} async columnsInfo={data.fields} sortingFieldKey={sortingFieldKey} setSortingColumn={setTableSortingField} sortingDirectionKey={ascending} sortingColumnName={() => null} />
                                }
                                {initialLoad && data && data.data.length === 0 &&
                                    <div className="flex-grow size-full">
                                        <NoRecords icon={NoRecordsIcon} message={noRecordsMessage} />
                                    </div>
                                }
                            </div>
                            {/* Estado de carga para transición entre páginas */}
                            {loading &&
                                <div className="absolute size-full">
                                    <Fallback icon={TableCellsIcon} />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            }
            
            {/* Vista de kanban */}
            {data && initialLoad &&
                <div className="flex flex-col flex-grow sm:hidden w-full">
                    {!loading &&
                        <Kanban data={data.data} fields={data.fields} viewConfig={viewConfig} />
                    }
                    {loading &&
                        <div className="flex flex-col flex-grow rounded-lg w-full h-full overflow-hidden">
                            <Fallback icon={Squares2X2Icon} />
                        </div>
                    }
                </div>
            }

            {/* Paginación de la tabla */}
            {data && initialLoad && showPagination &&
                <TablePagination data={data} disabled={loading} count={data.count} itemsPerPage={itemsShownPerPage} page={page} setPage={setPage} />
            }
        </div>
    );
}

export default DataView;

const ViewHeader = ({
    searchScope,
    searchText,
    setSearchText,
    activeFilters,
    setActiveFilter,
    visibleColumns,
    setVisibleColumn,
    sortingFields,
    sortingDirections,
    sortingFieldKey,
    setKanbanSortingField,
    setKanbanAscending,
    loading,
}) => {

    return (
        <div className="flex flex-wrap gap-2 h-min">
            {searchScope &&
                <InputSearch search={searchText} setSearch={setSearchText} loading={loading} />
            }
            <Select listBoxOptions={activeFilters} icon={FunnelIcon} activeIcon={FunnelIcon} setActiveOption={setActiveFilter} type="primary" >
                Filtrar por
            </Select>
            <Select className="sm:flex hidden" listBoxOptions={visibleColumns} icon={TableCellsIcon} activeIcon={EyeIcon} setActiveOption={setVisibleColumn} multiOptional >
                Mostrar columnas
            </Select>
            <Select className="sm:hidden" listBoxOptions={sortingFields} icon={Bars3CenterLeftIcon} activeIcon={CheckIcon} setActiveOption={setKanbanSortingField} >
                Ordenar por
            </Select>
            <Select className="sm:hidden" listBoxOptions={sortingDirections} icon={ArrowsUpDownIcon} activeIcon={CheckIcon} setActiveOption={setKanbanAscending} disabled={sortingFieldKey === undefined} >
                Ordenamiento
            </Select>
        </div>
    )
}

const useMultiOptions = (
    items,
    validateActiveCallback,
    displayNameKey,
    keysToKeep,
) => {

    const initOptions = items.map(
        (item, index) => {

            const key = item.key ? item.key : index;

            // Mapeo de los atributos de funcionamiento para el componente Select
            const option = {
                key: key,
                active: validateActiveCallback(item),
                displayName: item[displayNameKey],
            }

            // Mapeo de los atributos para uso personalizado
            if ( keysToKeep ) {
                keysToKeep.map(
                    (key) => {
                        option[key] = item[key];
                    }
                );
            }

            return option;
        }
    )

    // Mapa de opciones
    const [ options, setOptions ] = useState(initOptions);

    // Función de interruptor de opciones activas
    const toggleActiveOption = (key) => {

        // Se crea una copia del mapa de opciones
        const optionsCopy = [...options];

        // Se busca el item con el nombre que contenga la llave
        const foundItem = optionsCopy.find(
            (item) => (item.key === key)
        );

        // Se cambia el estado del item encontrado
        foundItem.active = !foundItem.active;

        // Se asignan las opciones de la copia del mapa
        setOptions(optionsCopy);
    }

    return [ options, toggleActiveOption ];
}

const useOptions = (
    items,
    validateActiveCallback,
    displayNameKey,
    keysToKeep,
    initialActive = undefined,
    alwaysActive = false,
) => {

    // Mapa inicial de opciones
    const initOptions = items.map(
        (item, index) => {

            const key = item.key !== undefined ? item.key : index;

            // Mapeo de los atributos de funcionamiento para el componente Select
            const option = {
                key: key,
                active: validateActiveCallback(item) || initialActive === key,
                displayName: item[displayNameKey],
            };

            // Mapeo de los atributos para uso personalizado
            if ( keysToKeep ) {
                keysToKeep.map(
                    (key) => {
                        option[key] = item[key];
                    }
                );
            }

            return option;
        }
    )

    // Mapa de opciones
    const [ options, setOptions ] = useState(initOptions);
    // Estado de llave de opción activa
    const [ activeOptionKey, setActiveOptionKey ] = useState(initialActive);

    // Función de establecer opción activa
    const setActiveOption = (key) => {

        // Se crea una copia del mapa de opciones
        const optionsCopy = [...options];

        // Se establecen todas las opciones a inactivas
        optionsCopy.forEach(
            (option) => {
                option.active = false;
            }
        );

        // Se busca el item con el nombre que contenga la llave
        const foundItem = optionsCopy.find(
            (item) => (item.key === key)
        );

        // Se establece el estado del item encontrado a activo
        if ( alwaysActive ) {
            // En caso de haber un siempre disponible, siempre debe haber un item en true
            foundItem.active = true;
        } else {
            // En caso de no haber un siempre disponible, se establece al estado opuesto
            foundItem.active = !foundItem.active;
        }

        // Se asignan las opciones de la copia del mapa
        setOptions(optionsCopy);
        // Se asigna la nueva llave de opción activa
        setActiveOptionKey(key);
    };

    return [options, activeOptionKey, setActiveOption];
}

const useSortingFields = (viewConfig) => {

    const initFields = viewConfig.filter(
        (item) => (item.canSort)
    ).map(
        (item) => {

            const field = {
                key: item.key,
                displayName: item.displayName,
                active: false
            }

            return field;
        }
    );

    const initSortingDirections = [
        {
            key: true,
            displayName: "Ascendente",
            active: true,
        },
        {
            key: false,
            displayName: "Descendente",
            active: false,
        },
    ]

    const [ sortingFields, setSortingFields ] = useState(initFields)
    const [ sortingDirections, setSortingDirections ] = useState(initSortingDirections)
    const [ sortingFieldKey, setSortingFieldKey ] = useState(undefined);
    const [ ascending, setAscending ] = useState(undefined);

    const setTableSortingField = (key) => {

        const sortingFieldsCopy = [ ...sortingFields ]

        sortingFieldsCopy.forEach(
            (field) => {
                field.active = false
            }
        )

        const sortingDirectionsCopy = [ ...sortingDirections ]

        const foundField = sortingFieldsCopy.find(
            (field) => (field.key === key)
        )

        if ( sortingFieldKey !== key ) {

            sortingDirectionsCopy.forEach(
                (item) => {
                    item.active = false
                }
            )

            const foundSortingDirection = sortingDirectionsCopy.find(
                (item) => (item.key === true)
            )

            foundField.active = true
            foundSortingDirection.active = true

            setSortingFields(sortingFieldsCopy)
            setSortingDirections(sortingDirectionsCopy)
            setSortingFieldKey(key);
            setAscending(true);
        } else {

            foundField.active = !foundField.active

            sortingDirectionsCopy.forEach(
                (item) => {
                    item.active = false
                }
            )

            
            const foundSortingDirection = sortingDirectionsCopy.find(
                (item) => (item.key === !ascending)
            )
            console.log(foundSortingDirection)

            foundSortingDirection.active = !foundSortingDirection.active
            setSortingDirections(sortingDirectionsCopy)

            setAscending( (prevState) => (!prevState) );
        }
    };

    const setKanbanSortingField = (key) => {

        const sortingFieldsCopy = [ ...sortingFields ];

        const foundField = sortingFieldsCopy.find(
            (field) => (field.key === key)
        );

        sortingFieldsCopy.forEach(
            (field) => {
                field.active = false
            }
        )

        if ( ascending === undefined ) {

            const sortingDirectionsCopy = [ ...sortingDirections ];

            const foundSortingDirection = sortingDirectionsCopy.find(
                (item) => (item.key === true)
            )

            foundSortingDirection.active = true;

            setSortingDirections(sortingDirectionsCopy);
            setAscending(true)
        }

        foundField.active = true;

        setSortingFields(sortingFieldsCopy);
        setSortingFieldKey(key)
    };

    const setFieldsSortingDirections = (key) => {
        sortingDirections.forEach(
            (item) => {
                console.log(item)
            }
        )

        const sortingDirectionsCopy = [ ...sortingDirections ];

        const foundSortingDirection = sortingDirectionsCopy.find(
            (item) => (item.key === key)
        )

        sortingDirectionsCopy.forEach(
            (item) => {
                item.active = false;
            }
        );

        foundSortingDirection.active = true;

        setSortingDirections(sortingDirectionsCopy);
        setAscending(key)
    };

    return {
        sortingFields,
        sortingDirections,
        sortingFieldKey,
        ascending,
        setTableSortingField,
        setKanbanSortingField,
        setKanbanAscending: setFieldsSortingDirections
    }
}

const buildQueryParams = ({
    viewConfig,
    queryParams,
    page,
    itemsPerPage,
    sortingFieldKey,
    ascending,
    filters,
    apiSearch,
    hiddenFields,
    activeFilterKey,
}) => {

    // Campos a retornar desde el API
    const fieldsForAPI = []
    viewConfig.forEach(
        (item) => {
            if ( !item.skip ) {
                fieldsForAPI.push(item.key);
            }
        }
    )
    if ( hiddenFields ) {
        hiddenFields.forEach(
            (item) => {
                viewConfig.push(item)
            }
        )
    }

    const apiParams = {
        // Filtros
        [queryParams.filters.name]: (
            activeFilterKey !== undefined
                ? filters.available[activeFilterKey].criteria
                : filters.default.criteria
        ),
        // Campos
        [queryParams.fields]: fieldsForAPI,
        // Página
        [queryParams.page]: page,
        // Cantidad de registros por página
        [queryParams.itemsPerPage]: itemsPerPage,
        // Ordenar por
        [queryParams.sortingColumnName]: sortingFieldKey,
        // Ordenamiento ascendente
        [queryParams.ascending]: sortingFieldKey ? ascending : undefined,
        // Búsqueda por coincidencias
        [queryParams.search]: apiSearch,
    }

    if ( queryParams.baseParams ) {
        // Parámetros adicionales
        Object.keys(queryParams.baseParams).forEach(
            (key) => {
                apiParams[key] = queryParams.baseParams[key];
            }
        )
    }

    return apiParams;
}
