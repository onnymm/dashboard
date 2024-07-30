export const chartElementsStyling = {
    // Configuración para elementos renderizados por plug-ins
    plugins: {
        // Plug-in de etiquetas desacopladas
        htmlLegend: {
            // Tipo de plug-in
            type: "externalElement",
            // Nombre de la llave del ID de mapeo en las opciones de la gráfica
            idKey: "containerID",
            // Elementos del contenedor a estilizar
            elements: [
                {
                    // Elemento de lista desorganizada
                    element: "ul",
                    // Nombres de clase asignados
                    styling: "flex",
                    // Elementos hijos
                    children: [
                        {
                            // Elemento de lista
                            element: "li",
                            // Nombres de clase asignados
                            styling: "flex gap-1",
                            // Elementos hijos
                            children: [
                                {
                                    // Elemento span
                                    element: "span",
                                    // Nombres de clase asignados
                                    styling: "block",
                                },
                                {
                                    // Elemento de párrafo
                                    element: "p",
                                    // Nombres de clase asignados
                                    styling: "font-extralight transition duration-300"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}