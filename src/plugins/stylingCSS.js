const classListAssigner = ({
    htmlElement, // Elemento HTML al cual se le asignarán los nombres de clase
    styling, // Cadena de texto de todos los nombres de clase a asignar
}) => {

    // Transformación de la cadena de texto a una matriz de nombres de clase CSS
    const classNames = styling.split(" ")

    // Iteración por cada uno de los nombres de clase CSS
    classNames.forEach(

        // Asignación de cada nombre CSS a la lista de clases del elemento HTML
        (className) => {
            htmlElement.classList.add(className)
        }
    )
}

const recursiveStyleSetter = ({
    parentElement, // Elemento HTML padre
    config, // Objeto de configuración de estilos
}) => {

    // Extracción del tipo de etiqueta HTML
    const elementType = config.element

    // Iteración por cada hijo del elemento HTML
    for (let i = 0; i < parentElement.children.length; i++) {
        // Se extrae el elemento HTML hijo
        let childElement = parentElement.children[i]

        // Ejecución si el tipo de elemento coincide con el tipo de elemento de la configuración a asignar
        if ( childElement.matches(elementType) ) {
            // Asignación de nombres de clases
            classListAssigner({ htmlElement: childElement, styling: config.styling })

            // Validación de si el objeto de configuración de estilos contiene una matriz de elementos hijos a configurar
            if ( config.children ) {

                // Iteración de cada elemento hijo de configuración
                for (let j = 0; j < config.children.length; j++) {
                    // Llamada a función recursiva para iterar por ilimitada cantidad anidaciones
                    recursiveStyleSetter({ parentElement: childElement, config: config.children[j] })
                }
            }
        }
    }
}

export const stylingCSS = {
    // ID del plug-in
    id: 'stylingCSS',
    // Declaración de función a ejecutar tras la actualización de la gráfica
    afterUpdate: (chart) => {

        // Extracción de la lista de plug-ins
        const plugins = chart.config._config.options.plugins
        // Extracción del objeto de estilización declarado previamente
        const styler = chart.config._config.options.plugins.stylingCSS

        // Validación de elementos de plug-ins terceros existentes a estilizar
        if ( styler.plugins ) {
            // Iteración por las declaraciones de cada plug-in
            Object.keys(styler.plugins).forEach(
                // Declaración de la variable por iteración
                (pluginID) => {
                    
                    // Si el tipo de plug-in renderiza elementos externos, se ejecuta esto
                    if ( styler.plugins[pluginID].type === "externalElement" ) {
                        // Extracción del nombre de la llave contenedora a buscar en las opciones del plug-in
                        const elementID = styler.plugins[pluginID].idKey
                        // Extracción del elemento HTML usando la ID contenida en la variable con nombre de la llave, desde las opciones del plug-in
                        const htmlElement = document.getElementById(plugins[pluginID][elementID])
                        
                        // Iteración por cada uno de los objetos de configuración de estilos correspondientes a los hijos del elemento HTML
                        styler.plugins[pluginID].elements.forEach(
                            // Declaración de la variable por iteración
                            (elementConfig) => {
                                
                                // Llamada a función recursiva para iterar por ilimitada cantidad anidaciones
                                recursiveStyleSetter({ parentElement: htmlElement, config: elementConfig })
                            }
                        )
                    }
                }
            )
        }
    }
};