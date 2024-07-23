import { labelsValueFormats } from "./utils";

export const chartWithAxesFormat = (yValueType) => {
    // Generación de función con el tipo de valor a formatear
    return (context) => {
        // Se inicializa el contenedor de la etiqueta
        let label = context.dataset.label || "";

        // Si la etiqueta no está vacía, se concatena un ': '
        if (label) {
            label += ": "
        }

        // Formateo del valor de la etiqueta en función del tipo de valor del conjunto de datos
        label += labelsValueFormats[yValueType].raw(context.parsed.y)

        return label
    }
}