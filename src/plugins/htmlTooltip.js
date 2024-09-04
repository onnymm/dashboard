import { htmlTooltipClassNames } from "../settings/classNames";

const htmlTooltip = (context) => {

    // Datos para tooltip
    const tooltipData = context.tooltip;

    // Elemento del tooltip
    let tooltipEl = document.getElementById('html-tooltip');

    // Creación del elemento en la primera renderización
    if ( !tooltipEl ) {
        // Se crea un elemento div
        tooltipEl = document.createElement('div');
        // Se asigna la ID
        tooltipEl.id = 'html-tooltip';
        // Se crea un elemento de tabla
        const tableElement = document.createElement("table");
        // Se añade la tabla al tooltip
        tooltipEl.appendChild(tableElement);
        // Comienzo de opacidad en 0
        tooltipEl.style.opacity = 0;
        // Se añade el tooltip al documento
        document.body.appendChild(tooltipEl);

        // Estilización del tooltip
        addClassNames(
            tooltipEl,
            htmlTooltipClassNames.tooltip
        );
    }

    // Elemento de tabla del tooltip
    const tableRoot = tooltipEl.querySelector("table");
    // Índice del dato que está siendo visualizado
    const index = tooltipData.dataPoints[0].dataIndex;
    // Obtención del nombre completo del dato
    const title = context.chart.config._config.options.rawData[index];

    // Función para obtener las líneas de los datos
    const getBodyLines = (bodyItem) => {
        return (
            bodyItem.lines
        );
    }

    // Función para la creación de columnas de la tabla de tooltip
    const createTableColumns = (column) => {
        // Creación de elemento tr
        const trElement = document.createElement("tr")
        // Creación de elemento th
        const thElement = document.createElement("th")
        // Se añade el texto del nombre del dato
        thElement.innerHTML = column
        // Se añaden los elementos a la tabla
        trElement.appendChild(thElement)
        tableRoot.appendChild(trElement)

        // Estilización de la columna
        addClassNames(
            thElement,
            htmlTooltipClassNames.th
        )
    }

    // Función para la creación de filas de la tabla del tooltip
    const createTableRows = (item, index) => {
        // Creación del elemento tr
        const trElement = document.createElement("tr")
        // Creación del elemento td
        const tdElement = document.createElement("td")
        // Creación de la caja de color
        const colorBoxElement = document.createElement("span")
        // Creación del contenedor del texto
        const textElement = document.createElement("span")
        // Se añade el texto del valor del dato
        textElement.innerHTML = item

        // Se añaden los elementos a la tabla
        tdElement.appendChild(colorBoxElement)
        tdElement.appendChild(textElement)
        trElement.appendChild(tdElement)
        tableRoot.appendChild(trElement)
        
        // Se le da color a la caja de color, con respecto al color del dato
        const bgColor = tooltipData.labelColors[index].backgroundColor.slice(0, 7);
        colorBoxElement.style.backgroundColor = bgColor

        // Se estiliza el td
        addClassNames(
            tdElement,
            htmlTooltipClassNames.td
        )

        // Se estiliza la caja de color
        addClassNames(
            colorBoxElement,
            htmlTooltipClassNames.colorBox
        )

        // Se estiliza el contenedor del texto
        addClassNames(
            textElement,
            htmlTooltipClassNames.span
        )
    }

    // Remover elementos desactualizados de la tabla
    const removeChildNodes = () => {
        // Se crea una matriz con todos los elementos de la tabla
        const childNodes = Array.from(tableRoot.children)
        // Si hay elementos, se ejecuta lo siguiente
        if ( childNodes.length ) {
            // Se elimina cada uno de los elementos de la matriz
            childNodes.forEach(
                (child) => {
                    tableRoot.removeChild(child)
                }
            )
        }
    }

    // Función para el seguimiento del tooltip a las coordenadas del mouse
    const trackTooltip = (event) => {
        // Obtención del ancho de la ventana
        const documentWidth = document.body.offsetWidth

        // Control horizontal de la visualización del tooltip
        if ( event.clientX + tooltipEl.offsetWidth < documentWidth ) {
            // Posición normal del tooltip
            tooltipEl.style.transform = "translateX(0px)"
        } else {
            // Posición invertida si se desborda fuera de la ventana
            tooltipEl.style.transform = `translateX(-${tooltipEl.offsetWidth}px)`
            // tooltipEl.style.left = event.clientX - tooltipEl.offsetWidth + "px"
        }
        
        tooltipEl.style.left = event.clientX + "px"
        // Seguimiento vertical
        tooltipEl.style.top = event.clientY - tooltipEl.offsetHeight + "px"
        
        // Obtención de la posición del elemento canvas
        const position = context.chart.canvas.getBoundingClientRect();
        // Obtención de la posición del área de la gráfica en el canvas
        const chartArea = context.chart.chartArea

        // Simplificación de variables para su evaluación
        const chartStartX = chartArea.left + position.left
        const chartEndX = chartArea.right + position.left
        const chartStartY = chartArea.top + position.top
        const chartEndY = chartArea.bottom + position.top

        // Control de aparición y desaparición del tooltip
        if (
            context.tooltip.opacity
            && event.clientX < chartEndX
            && event.clientX > chartStartX
            && event.clientY < chartEndY
            && event.clientY > chartStartY
        ) {
            tooltipEl.style.opacity = 1
        } else {
            tooltipEl.style.opacity = 0
        }
    }

    // Set Text
    if (tooltipData.body) {
        // Se remueven los elementos desactualizados de la tabla en caso de existir
        removeChildNodes()
        // Lista de nombres
        const titleLines = [title];
        // Obtención de los datos
        const bodyLines = tooltipData.body.map(getBodyLines);
        // Creación de las columnas de la tabla del tooltip
        titleLines.forEach(createTableColumns)
        // Creación de las filas de la tabla del tooltip
        bodyLines.forEach(createTableRows)
    }

    // Remoción del escuchador de eventos de movimiento de mouse, en caso de existir
    if ( tooltipEl.getAttribute("hasMouseListener") ) {
        document.body.removeEventListener(
            "mousemove",
            trackTooltip
        )
    }
    // Adición del escuchador de eventos de movimiento de mouse
    document.body.addEventListener(
        "mousemove",
        trackTooltip
    )
    // Indicador de adición del escuchador de eventos
    tooltipEl.setAttribute("hasMouseListener", true)
}

export default htmlTooltip

// Función para estilización de elementos
const addClassNames = (htmlElement, classNames) => {
    classNames.forEach(
        (className) => {
            htmlElement.classList.add(className)
        }
    )
}