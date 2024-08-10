import { CHART_TYPES } from "../constants/charts";
import { CHARTS_SETTINGS } from "../constants/settings";
import { chartStyleSetter } from "../utils/settingsSetters";

const getOrCreateLegendList = (chart, id) => {
        // Extracción del elemento contenedor de etiquetas
        const legendContainer = document.getElementById(id);
        // Extracción de la lista de etiquetas
        let labelsContainer = legendContainer.querySelector('ul');
    
        // Validación de existencia de lista de etiquetas
        if (!labelsContainer) {
            // De no haber lista de etiquetas se crea una
            labelsContainer = document.createElement('ul');
            
            // Asignación de estilos al elemento
            const {config} = chart.config._config.options.plugins.htmlLegend;
            labelsContainer = chartStyleSetter(config, labelsContainer, CHARTS_SETTINGS.LABEL_COLUMNS);
    
            // Se añade la lista al contenedor de etiquetas
            legendContainer.appendChild(labelsContainer);
        }
    
    // Retorno del contenedor de etiquetas
    return labelsContainer;
};

const createLabels = (ul, chart) => {
    // Obtención de etiquetas de los conjuntos de datos de la gráfica
    const items = chart.options.plugins.legend.labels.generateLabels(chart);

    // Asignación de estilos de configuración
    const {config} = chart.config._config.options.plugins.htmlLegend;
    
    items.forEach(
        (item) => {
            // Se crea un item de lista
            let li = document.createElement('li');

            // Creación del elemento de la lista
            li = chartStyleSetter(config, li, CHARTS_SETTINGS.LABELS_LIST);

            li.onclick = () => {
                // Se obtiene la declaración del tipo de gráfica
                const {type} = chart.config;

                // Validación del tipo de gráfica
                if (type === CHART_TYPES.PIE || type === CHART_TYPES.DOUGHNUT || type === CHART_TYPES.POLARAREA ) {
                    // Asignación de manipulación de vistas por categoría en el conjunto de datos
                    chart.toggleDataVisibility(item.index);
                } else {
                    // Asignación de manipulación de vistas por conjunto de datos
                    chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
                }
                // Actualización de la gráfica
                chart.update();
            };

            // Caja de color de la etiqueta
            let boxSpan = document.createElement('span');

            // Asignación de estilos provenientes de las propiedades del conjunto de datos
            boxSpan.style.background = item.fillStyle;
            boxSpan.style.borderColor = item.strokeStyle;

            // Asignación de estilos de configuración
            boxSpan = chartStyleSetter(config, boxSpan, CHARTS_SETTINGS.LEGEND_BOX);

            // Texto de la etiqueta
            const textContainer = document.createElement('p');
            // Asignación de estilos provenientes de las propiedades del conjunto de datos
            textContainer.style.textDecoration = item.hidden ? 'line-through' : '';
            textContainer.style.color = chart.options.font.color;

            // Asignación del nombre del conjunto de datos o categoría del conjunto de datos
            const text = document.createTextNode(item.text);
            textContainer.appendChild(text);

            // Se agregan la caja de color y el texto de la etiqueta al elemento de la lista
            li.appendChild(boxSpan);
            li.appendChild(textContainer);

            // Se agrega el elemento de la lista a la lista
            ul.appendChild(li);
        }
    );
}

const updateLabels = (ul, chart) => {
    // Obtención de etiquetas de los conjuntos de datos de la gráfica
    const items = chart.options.plugins.legend.labels.generateLabels(chart);

    // Obtención de elementos en la lista
    const ulElements = ul.children

    items.forEach(
        (item, index) => {
            // Obtención del elemento contenedor del texto
            const p = ulElements[index].querySelector('p')
            // Asignación de estilos provenientes de las propiedades del conjunto de datos
            p.style.textDecoration = item.hidden ? 'line-through' : '';
            p.style.color = chart.options.font.color;
        }
    );
}

// Plug-in de renderización etiquetas en div
const htmlLegend = {
    id: 'htmlLegend',
    afterUpdate(chart, args, options) {
        // Creación u obtención del elemento de lista del contenedor div
        const ul = getOrCreateLegendList(chart, options.containerID);

        // Creación de las etiquetas si la lista está vacía
        if ( !ul.children.length ) {
            createLabels(ul, chart)
        // Actualización de las etiquetas en caso de existir
        } else {
            updateLabels(ul, chart)
        }
    }
};

export default htmlLegend;