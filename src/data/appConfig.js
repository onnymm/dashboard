import { redPalette } from "../constants/colors";
import { dataFormatters } from "../utils/utils";

// Dominios locales para obtener la información
export const defaultDomain = "localDomain";

// Configuración de las gráficas
export const dashboardData = {
    charts: [
        {
            endpoint: "quotation_amounts",
            chartType: "bar",
            name: "Cotizaciones por vendedora",
            labelsName: "user_name",
            datasetNames: ["amount_untaxed"],
            labels: ["Cotizaciones"],
            backgroundColors: redPalette,
            xLabelsFormatter: dataFormatters.onlyName,
            yLabelsFormatter: dataFormatters.toThousandsMXN,
        },
        {
            endpoint: "quotation_amounts",
            chartType: "line",
            name: "Cotizaciones por vendedora",
            labelsName: "user_name",
            datasetNames: ["amount_untaxed"],
            labels: ["Cotizaciones"],
            backgroundColors: redPalette[3],
            backgroundOpacity: 50,
            borderColors: redPalette[3],
            xLabelsFormatter: dataFormatters.onlyName,
            yLabelsFormatter: dataFormatters.toMillionsMXN,
        },
        {
            endpoint: "quotation_amounts",
            chartType: "pie",
            name: "Cotizaciones por vendedora",
            labelsName: "user_name",
            datasetNames: ["amount_untaxed"],
            labels: ["Cotizaciones"],
            backgroundColors: redPalette,
        },
        {
            endpoint: "quotation_amounts",
            chartType: "doughnut",
            name: "Cotizaciones por vendedora",
            labelsName: "user_name",
            datasetNames: ["amount_untaxed"],
            labels: ["Cotizaciones"],
            backgroundColors: redPalette,
        },
        {
            endpoint: "quotation_amounts",
            chartType: "polar area",
            name: "Cotizaciones por vendedora",
            labelsName: "user_name",
            datasetNames: ["amount_untaxed"],
            labels: ["Cotizaciones"],
            backgroundColors: redPalette,
        },
        {
            endpoint: "quotation_amounts",
            chartType: "radar",
            name: "Cotizaciones por vendedora",
            labelsName: "user_name",
            datasetNames: ["amount_untaxed"],
            labels: ["Cotizaciones"],
            backgroundColors: redPalette[3],
            backgroundOpacity: 75,
            borderColors: redPalette[3],
            xLabelsFormatter: dataFormatters.onlyName,
        },
        {
            chartType: "bar",
            endpoint: "monthly_total_amounts",
            name: "No hace nada",
            labelsName: "month",
            datasetNames: ["total_amount"],
            labels: ["Cotizaciones"],
            borderColors: ["#FF0000", "#0000FF"],
            backgroundColors: ["#FF0000", "#0000FF"],
            backgroundOpacity: 75,
            yLabelsFormatter: dataFormatters.toMillionsMXN,
            strat: "warehouse"
        },
        {
            chartType: "line",
            endpoint: "monthly_total_amounts",
            name: "No hace nada",
            labelsName: "month",
            datasetNames: ["total_amount"],
            labels: ["Cotizaciones"],
            borderColors: ["#FF0000", "#0000FF"],
            backgroundColors: ["#FF0000", "#0000FF"],
            backgroundOpacity: 25,
            yLabelsFormatter: dataFormatters.toMillionsMXN,
            strat: "warehouse"
        },
        {
            chartType: "radar",
            endpoint: "monthly_total_amounts",
            name: "No hace nada",
            labelsName: "month",
            datasetNames: ["total_amount"],
            labels: ["Cotizaciones"],
            borderColors: ["#FF0000", "#0000FF"],
            backgroundColors: ["#FF0000", "#0000FF"],
            backgroundOpacity: 50,
            yLabelsFormatter: dataFormatters.toMillionsMXN,
            strat: "warehouse"
        },
    ]
}