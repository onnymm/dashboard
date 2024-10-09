import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    RadialLinearScale,
    Title,
    Tooltip
} from 'chart.js'
import darkMode from '../plugins/darkMode'
import htmlLegend from '../plugins/htmlLegend'
import { stylingCSS } from '../plugins/stylingCSS'

import { CurrencyDollarIcon, DocumentPlusIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { getStats } from '../api/get'
import ChartCard from '../components/data visualizers/ChartCard'
import DataCard from '../components/data visualizers/DataCard'
import { CHART_TYPES } from '../constants/charts'
import { CHARTS_SETTINGS, LABELS_FORMATS_SETTINGS } from '../constants/settings'
import { COLOR_THEME } from '../settings/appSettings'
// import Events from '../test/test_pages/Events'
// import MyTasks from '../test/test_pages/Tasks'
import { toMXN } from '../utils/utils'

ChartJS.register(
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    RadialLinearScale,
    Filler,
    Legend,
    Title,
    Tooltip,
    htmlLegend,
    darkMode,
    stylingCSS
)

const Homepage = () => {
    const chartsSettings = {
        0: {
            [CHARTS_SETTINGS.CHART_TYPE]: CHART_TYPES.BAR,
            [CHARTS_SETTINGS.NAME]: "Top 5 mejores clientes",
            [CHARTS_SETTINGS.DATASETS_NAMES]: ["amount_untaxed"],
            [CHARTS_SETTINGS.BACKGROUND_COLORS]: [
                COLOR_THEME[500],
                COLOR_THEME[400],
                COLOR_THEME[300],
                COLOR_THEME[200],
                COLOR_THEME[100],
            ],
            [CHARTS_SETTINGS.LABELS_NAME]: "partner_name",
            [CHARTS_SETTINGS.LABELS]: ["Clientes"],
            [CHARTS_SETTINGS.Y_AXIS_FORMAT]: LABELS_FORMATS_SETTINGS.MONETARY,
            [CHARTS_SETTINGS.X_AXIS_FORMAT]: LABELS_FORMATS_SETTINGS.SHORT,
        },
        1: {
            [CHARTS_SETTINGS.CHART_TYPE]: CHART_TYPES.PIE,
            [CHARTS_SETTINGS.NAME]: "Top 5 productos más vendidos",
            [CHARTS_SETTINGS.DATASETS_NAMES]: ["price_subtotal"],
            [CHARTS_SETTINGS.BACKGROUND_COLORS]: [
                COLOR_THEME[500],
                COLOR_THEME[400],
                COLOR_THEME[300],
                COLOR_THEME[200],
                COLOR_THEME[100],
            ],
            [CHARTS_SETTINGS.LABELS_NAME]: "product_name",
            [CHARTS_SETTINGS.LABELS]: ["Productos"],
            [CHARTS_SETTINGS.Y_AXIS_FORMAT]: LABELS_FORMATS_SETTINGS.MONETARY,
            [CHARTS_SETTINGS.X_AXIS_FORMAT]: LABELS_FORMATS_SETTINGS.SHORT,
            [CHARTS_SETTINGS.TRANSPOSED]: true
        },
        2: {
            [CHARTS_SETTINGS.CHART_TYPE]: CHART_TYPES.LINE,
            [CHARTS_SETTINGS.NAME]: "Estadística de ventas actual vs el mes anterior",
            [CHARTS_SETTINGS.DATASETS_NAMES]: ["amount_untaxed"],
            [CHARTS_SETTINGS.CATEGORY_STRATIFICATION_BY]: "month",
            [CHARTS_SETTINGS.BACKGROUND_COLORS]: [
                COLOR_THEME[700],
                COLOR_THEME[400],
            ],
            [CHARTS_SETTINGS.BORDER_COLORS]: [
                COLOR_THEME[700],
                COLOR_THEME[400],
            ],
            [CHARTS_SETTINGS.BACKGROUND_OPACITY]: 25,
            // [CHARTS_SETTINGS.BORDER_OPACITY]: 50,
            [CHARTS_SETTINGS.LABELS_NAME]: "date",
            [CHARTS_SETTINGS.LABELS]: [1, 2, 3, 4, 5],
            [CHARTS_SETTINGS.Y_AXIS_FORMAT]: LABELS_FORMATS_SETTINGS.MONETARY,
        },
        3: {
            [CHARTS_SETTINGS.CHART_TYPE]: CHART_TYPES.BAR,
            [CHARTS_SETTINGS.NAME]: "Total en Cabo San Lucas",
            [CHARTS_SETTINGS.DATASETS_NAMES]: ["amount_untaxed"],
            [CHARTS_SETTINGS.BACKGROUND_COLORS]: [
                COLOR_THEME[600],
                COLOR_THEME[500],
                COLOR_THEME[400],
                COLOR_THEME[300],
                COLOR_THEME[200],
                COLOR_THEME[100],
            ],
            [CHARTS_SETTINGS.LABELS_NAME]: "user_name",
            [CHARTS_SETTINGS.LABELS]: ["Ventas en el mes"],
            [CHARTS_SETTINGS.Y_AXIS_FORMAT]: LABELS_FORMATS_SETTINGS.MONETARY,
            [CHARTS_SETTINGS.X_AXIS_FORMAT]: LABELS_FORMATS_SETTINGS.SHORT,
            [CHARTS_SETTINGS.TRANSPOSED]: true
        },
    }

    const cardIcons = {
        total_amount: CurrencyDollarIcon,
        customers_attended: UserIcon,
        sold_qty: ShoppingBagIcon,
        sales: DocumentPlusIcon,
    }

    const labels = {
        total_amount: "Total vendido",
        customers_attended: "Clientes atendidos",
        sold_qty: "Cantidad vendida",
        sales: "Ventas",
    }

    const cardValueTypes = {
        total_amount: toMXN,
        customers_attended: (value) => (value),
        sold_qty: (value) => (value),
        sales: (value) => (value),
    }

    const [loadData, setLoadData] = useState();
    const [data, setData] = useState();

    useEffect(
        () => {
            getStats(setLoadData)
        }, []
    )

    useEffect(
        () => {
            if ( !loadData ) return;

            setData(loadData)
        }, [loadData]
    )

    if ( !data ) return null;


    return (
        <div className='flex flex-col gap-4 h-min w-full'>
            <div className='custom-gridrow'>
                {
                    data.stats_cards.map(
                        (item) => {
                            const icon = cardIcons[item.name]
                            const formattedValue = cardValueTypes[item.name](item.value)
                            const label = labels[item.name]
                            const gain = item.reference > 0 ? true : false
                            return <DataCard
                                key={item.id}
                                icon={icon}
                                amount={formattedValue}
                                label={label}
                                percent={item.reference}
                                gain={gain}
                            />
                        }
                    )
                }
            </div>
            {/* Grid de tarjetas de datos */}
            <div className='gap-4 grid grid-cols-1 md:grid-cols-2'>
                <ChartCard className='' chartData={data.best_customers} chartSettings={chartsSettings[0]} />
                <ChartCard className=''chartData={data.best_products} chartSettings={chartsSettings[1]} />
                <ChartCard className='' chartData={data.comparison} chartSettings={chartsSettings[2]} />
                <ChartCard className=''chartData={data.warehouse_stats} chartSettings={chartsSettings[3]} />
                {/* <MyTasks /> */}
                {/* <Events /> */}
            </div>
        </div>
    )
}

export default Homepage
