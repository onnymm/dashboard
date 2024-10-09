import { getTableData } from "../../api/get";
import DataView from "../../components/ui/data_visualization/DataView";

const OdooSaleOrders = () => {

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

export default OdooSaleOrders;

const viewConfig = [
    {
        key: "name",
        displayName: "Folio",
        kanbanDisplayName: true,
        canSort: true,
        type: "char",
        kanbanPosition: "title",
    },
    {
        key: "create_date",
        displayName: "Fecha de creación",
        kanbanDisplayName: false,
        tableVisible: false,
        canSort: true,
        kanbanPosition: "title",
    },
    {
        key: "partner_id",
        displayName: "Cliente",
        kanbanDisplayName: false,
        tableVisible: true,
        canSort: true,
        kanbanPosition: "details",
    },
    {
        key: "user_id",
        displayName: "Vendedora",
        kanbanDisplayName: true,
        tableVisible: true,
        canSort: true,
        kanbanPosition: "details",
    },
    {
        key: "x_customer_purchase_order",
        displayName: "OC del cliente",
        kanbanDisplayName: false,
        tableVisible: false,
        canSort: false,
    },
    {
        key: "amount_untaxed",
        displayName: "Subtotal",
        kanbanDisplayName: true,
        tableVisible: true,
        canSort: true,
        kanbanPosition: "details",
    },
    {
        key: "amount_tax",
        displayName: "IVA",
        kanbanDisplayName: true,
        tableVisible: true,
        canSort: true,
    },
    {
        key: "amount_total",
        displayName: "Total",
        kanbanDisplayName: true,
        tableVisible: false,
        canSort: true,
    },
    {
        key: "state",
        displayName: "Estado",
        kanbanDisplayName: false,
        canSort: true,
        kanbanPosition: "fixed",
        options: {
            success: (value) => (value === "sale"),
            danger: (value) => (value === 'cancel')
        }
    },
]

const filters = {
    default: {
        criteria: "[]"
    },
    available: [
        {
            id: 0,
            displayName: "Mis órdenes",
            criteria: "[('user_id', '=', 212)]",
        },
        {
            id: 1,
            displayName: "Cotizaciones",
            criteria: "[('state', '=', 'draft')]",
        },
        {
            id: 2,
            displayName: "Ventas",
            criteria: "[('state', '=', 'sale')]",
        },
    ]
}

const searchScope = {
    "name": "contains",
    "partner_id": "re",
    "user_id": "re",
}

const queryParams = {
    baseParams: {
        "model": "sale.order"
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
