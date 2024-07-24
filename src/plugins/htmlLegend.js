import { CHART_TYPES } from "../constants/charts";
import { CHARTS_SETTINGS } from "../constants/settings";
import { chartStyleSetter } from "../utils/settingsSetters";

const getOrCreateLegendList = (chart, id) => {
        // Declaración del elemento contenedor de etiquetas
        const legendContainer = document.getElementById(id);
        // Declaración de la lista de etiquetas
        let labelsContainer = legendContainer.querySelector('ul');
    
        // Validación de existencia de lista de etiquetas
        if (!labelsContainer) {
            // De no haber lista de etiquetas se crea una
            labelsContainer = document.createElement('ul');
            
            // Asignación de estilos al elemento
            const {extension} = chart.config._config.options;
            labelsContainer = chartStyleSetter(extension, labelsContainer, CHARTS_SETTINGS.LABEL_COLUMNS);
    
            // Se añade la lista al contenedor de etiquetas
            legendContainer.appendChild(labelsContainer);
        }
    
        // Retorno del contenedor de etiquetas
        return labelsContainer;
    };
    

// Plug-in de renderización etiquetas en div
const htmlLegendPlugin = {
    id: 'htmlLegend',
    afterUpdate(chart, args, options) {
        const ul = getOrCreateLegendList(chart, options.containerID);

        // Reseteo de vista de conjuntos de datos eliminando el contenedor de etiquetas desactualizado
        while (ul.firstChild) {
            ul.firstChild.remove();
        }

        // Obtención de etiquetas de los conjuntos de datos de la gráfica
        const items = chart.options.plugins.legend.labels.generateLabels(chart);

        items.forEach(
            (item) => {
                // Se crea un item de lista
                let li = document.createElement('li');

                // Asignación de estilos de configuración
                const {extension} = chart.config._config.options;
                li = chartStyleSetter(extension, li, CHARTS_SETTINGS.LABELS_LIST);

                li.onclick = () => {
                    // Se obtiene la declaración del tipo de gráfica
                    const {type} = chart.config;

                    // Validación del tipo de gráfica
                    if (type === CHART_TYPES.PIE || type === CHART_TYPES.DOUGHNUT) {
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
                boxSpan = chartStyleSetter(extension, boxSpan, CHARTS_SETTINGS.LEGEND_BOX);
                
                // Texto de la etiqueta
                const textContainer = document.createElement('p');
                // Asignación de estilos provenientes de las propiedades del conjunto de datos
                textContainer.style.textDecoration = item.hidden ? 'line-through' : '';
                textContainer.style.color = item.fontColor;

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
};

export default htmlLegendPlugin;