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
                    // Lista de etiquetas de conjuntos de datos de gráficas
                    element: "ul",
                    // Nombres de clase asignados
                    styling: "flex",
                    // Elementos hijos
                    children: [
                        {
                            // Etiquetas de conjuntos de datos de gráficas
                            element: "li",
                            // Nombres de clase asignados
                            styling: "flex gap-1 rounded-md relative overflow-hidden whitespace-nowrap px-2 select-none",
                            // Elementos hijos
                            children: [
                                {
                                    // Cajas de colores de etiquetas de conjuntos de datos de gráficas
                                    element: "span",
                                    // Nombres de clase asignados
                                    styling: "block",
                                },
                                {
                                    // Título de conjunto de datos en etiquetas de conjuntos de datos de gráficas
                                    element: "p",
                                    // Nombres de clase asignados
                                    styling: "font-extralight text-sm transition duration-300"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}