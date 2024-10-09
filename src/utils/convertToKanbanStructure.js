export const convertToKanbanStructure = (viewConfig) => {

    // Creación de la colección de datos a retornar
    const kanbanStructure = {}

    // Posiciones de un solo valor
    const uniqueValuePositions = [
        'check',
        // 'image',
        'title',
        'description',
    ]

    // Posiciones que admiten más de un valor
    const multiValuePositions = [
        'fixed',
        'details',
    ]

    // Obtención de parámetros para renderización de un sólo valor
    uniqueValuePositions.forEach(
        // Iteración por cada valor de posición univalor
        (pos) => {

            // Búsqueda por el primer objeto que contenga la posición
            const found = viewConfig.find(
                (item) => (item.kanbanPosition === pos)
            )

            // Si es encontrado se extraen los atributos necesarios y se asigna el objeto a una llave
            if ( found ) {
                const { key, displayName, type, options, kanbanDisplayName } = found;
                kanbanStructure[pos] = { key, displayName, type, options, kanbanDisplayName }
            }
        }
    )

    // Obtención de parámetros para renderizaicón de múltiples valores
    multiValuePositions.forEach(
        // Iteración  por cada valor de posición multivalor
        (pos) => {

            // Búsqueda por todos los objetos que contengan la posición
            const filter = viewConfig.filter(
                (item) => (item.kanbanPosition === pos)
            )

            // Si hay objetos encontrados se crea una matriz vacía en la llave con el nombre de la posición
            if ( filter.length > 0 ) {
                kanbanStructure[pos] = []

                // Iteración por cada uno de estos objetos encontrados
                filter.forEach(
                    (field) => {

                        // Se extraen los atributos necesarios y se añaden a la matriz creada
                        const { key, displayName, type, options, kanbanDisplayName } = field;
                        kanbanStructure[pos].push({ key, displayName, type, options, kanbanDisplayName })
                    }
                )
            }
        }
    )

    // Retorno de la estructura de kanban
    return kanbanStructure
}