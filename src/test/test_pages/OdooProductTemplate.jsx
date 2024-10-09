import { getTableData } from "../../api/get";
import DataView from "../../components/ui/data_visualization/DataView";

const OdooProductTemplates = () => {

    return (
        <DataView
            viewConfig={viewConfig}
            filters={filters}
            searchScope={searchScope}
            queryParams={queryParams}
            apiCallback={getTableData}
        />
    )
}

export default OdooProductTemplates;

const viewConfig = [
    {
        key: "name",
        displayName: "Descripción",
        canSort: true,
        kanbanPosition: "title"
    },
    {
        key: "default_code",
        displayName: "Código",
        kanbanDisplayName: true,
        canSort: true,
        kanbanPosition: "details"
    },
    {
        key: "list_price",
        displayName: "Precio",
        kanbanDisplayName: false,
        tableVisible: true,
        canSort: true,
        type: "monetary",
        kanbanPosition: "details"
    },
    {
        key: "a1",
        displayName: "CSL",
        canSort: false,
        tableVisible: true,
        type: "float",
        skip: true,
        options: {
            danger: (value) => (value <= 0)
        }
    },
    {
        key: "a2",
        displayName: "SCJ",
        canSort: false,
        tableVisible: true,
        type: "float",
        skip: true,
        options: {
            danger: (value) => (value <= 0)
        }
    },
]

const filters = {
    default: {
        criteria: "[]"
    },
    available: [
        {
            id: 1,
            displayName: "Productos disponibles",
            criteria: "[('qty_available', '>', 0)]",
        },
        {
            id: 2,
            displayName: "Cantidad prevista negativa",
            criteria: "[('virtual_available', '<', 0)]",
        },
    ]
}

const searchScope = {
    "name": "re",
    "default_code": "exact"
}

const queryParams = {
    baseParams: {
        "model": "product.template"
    },
    fields: "fields",
    page: "page",
    itemsPerPage: "items_per_page",
    sortingColumnName: "sortby",
    ascending: "ascending",
    search: "search",
    filters: {
        name: "search_criteria",
        default: "[]"
    },
}
