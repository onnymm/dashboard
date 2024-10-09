import { comisiones } from "../api/get";
import DataView from "../components/ui/data_visualization/DataView";

const Comisiones = () => {

    return (
        <section className="flex flex-col flex-grow items-center w-full min-h-full text-center">
            <DataView
                viewConfig={viewConfig}
                filters={filters}
                searchScope={searchScope}
                queryParams={queryParams}
                apiCallback={comisiones}
            />
        </section>
    )
}

export default Comisiones;

const viewConfig = [
    {
        key: "fact_line_id",
        displayName: "ID de línea",
        kanbanDisplayName: false,
        canSort: true,
        tableVisible: true,
    },
    {
        key: "fact_doc_id",
        displayName: "ID de documento",
        canSort: true,
    },
    {
        key: "name",
        displayName: "Folio",
        kanbanDisplayName: false,
        canSort: true,
        kanbanPosition: 'title'
    },
    {
        key: "invoice_date",
        displayName: "Fecha de factura",
        kanbanDisplayName: true,
        canSort: true,
        kanbanPosition: 'details'
    },
    {
        key: "prod_codigo",
        displayName: "Código",
        kanbanDisplayName: true,
        canSort: true,
        kanbanPosition: 'details',
        tableVisible: true,
    },
    {
        key: "product_name_y",
        displayName: "Producto",
        kanbanDisplayName: true,
        canSort: true,
        kanbanPosition: 'details',
        tableVisible: true,
    },
    {
        key: "quantity",
        displayName: "Cantidad",
        kanbanDisplayName: true,
        canSort: true,
        kanbanPosition: 'details',
        tableVisible: false,
    },
    {
        key: "price_unit",
        displayName: "Precio",
        kanbanDisplayName: true,
        canSort: true,
        kanbanPosition: 'details',
        tableVisible: false,
    },
    {
        key: "discount",
        displayName: "Descuento",
        kanbanDisplayName: true,
        canSort: true,
        type: 'percentage',
        kanbanPosition: 'details',
        tableVisible: false,
    },
    {
        key: "price_subtotal",
        displayName: "Subtotal",
        kanbanDisplayName: false,
        canSort: true,
        kanbanPosition: 'details',
        tableVisible: false,
    },
    {
        key: "partner_name_x",
        displayName: "Cliente",
        kanbanDisplayName: true,
        canSort: true,
        kanbanPosition: 'details',
        tableVisible: true,
    },
    {
        key: "utilidad_partida",
        displayName: "Utilidad",
        kanbanDisplayName: false,
        canSort: true,
        kanbanPosition: 'fixed',
        tableVisible: true,
    },
    {
        key: "state",
        displayName: "Estado",
        kanbanDisplayName: false,
        canSort: true,
        kanbanPosition: 'fixed',
        options: {
            success: (value) => (value === 'posted')
        },
        tableVisible: true,
    },
]

const filters = {
    default: {
        criteria: ""
    },
    available: [
        {
            id: 0,
            displayName: "Descuentos",
            criteria: "discount > 0",
        },
    ]
}

const searchScope = {
    "name": "exact",
    "partner_name_x": "re",
    "product_name_y": "re",
}

const queryParams = {
    page: "page",
    itemsPerPage: "items_per_page",
    sortingColumnName: "sortby",
    ascending: "ascending",
    search: "search",
    filters: {
        name: "search_criteria",
        default: ""
    },
}

