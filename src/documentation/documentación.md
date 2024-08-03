# Documentación de la aplicación

En este archivo se documenta todo lo necesario para conocimiento del desarrollador que se integra al proyecto o el desarrollador que desee realizar un mantenimiento y requiera una guía para entender o recordar el funcionamiento de la aplicación.

## Elementos

Los parámetros listados que contengan un `*` son requeridos

```js
/// Esto es un fragmento de código para explicación de funcionamiento
const estoEsUnaVariable = 5
```

>   Esto es un contenedor de texto que indica el funcionamiento de un fragmento código que se encuentre previo a este mismo contenedor.

----

# Índice

## Arquitectura de la aplicación

### Introducción

**[￭ Librerías de terceros](#librerías-de-terceros)**
- [Librerías utilizadas en el proyecto](#librerías-utilizadas-en-el-proyecto)

**[￭ Estructura del proyecto](#estructura-del-proyecto)**
- [Descripción general de la estructura del proyecto](#descripción-general-de-la-estructura-del-proyecto)
- [Uso de constantes](#uso-de-constantes)
- [Destructuración y propiedades computadas](#destructuración-y-propiedades-computadas)
- [Mapas de funciones](#mapas-de-funciones)
- [Funciones recursivas](#funciones-recursivas)
- [Datos de la aplicación](#datos-de-la-aplicación)
- [Ajustes predefinidos](#ajustes-predefinidos)
- [Funciones de utilidades](#funciones-de-utilidades)

**[￭ Constantes para la aplicación](#constantes-para-la-aplicación)**
- [Colores](#colores)
- [Tipos de gráficas](#tipos-de-gráficas)
- [Nombres de ajustes de gráficas](#nombres-de-ajustes-de-gráficas)
- [Nombres de ajustes de series de los conjuntos de datos](#nombres-de-ajustes-de-series-de-los-conjuntos-de-datos)

**[￭ Configuraciones globales](#configuraciones-globales)**
- [Ajustes predefinidos](#ajustes-predefinidos)

### Configuración de la aplicación

**[￭ Configuración del Dashboard](#configuración-del-dashboard)**
- [Gráficas](#gráficas)

**[￭ Manejadores de solicitudes a APIs (Métodos GET)](#manejadores-de-solicitudes-a-apis-métodos-get)**
- [Obtener datos para las gráficas](#obtener-datos-para-las-gráficas)

## Arquitectura de los componentes de gráficas

### Elementos principales de gráficas

**[￭ Componentes de gráficas](#componentes-de-gráficas)**
- [Componente principal de gráfica](#componente-principal-de-gráfica)

### Funcionamiento interno

**[￭ Funciones principales para gráficas](#funciones-principales-para-gráficas)**
- [Construcción principal de objeto de datos y opciones para componente de gráfica](#construcción-principal-de-objeto-de-datos-y-opciones-para-componente-de-gráfica)

**[￭ Funciones para componentes de gráficas](#funciones-para-componentes-de-gráficas)**
- [Estratificación de conjunto de datos por variable categórica](#estratificación-de-conjunto-de-datos-por-variable-categórica)
- [Obtención de un único conjunto de datos](#obtención-de-un-único-conjunto-de-datos)
- [Obtención de etiquetas de un conjunto de datos](#obtención-de-etiquetas-de-un-conjunto-de-datos)

**[￭ Construcción de estructuras de datos para gráficas](#construcción-de-estructuras-de-datos-para-gráficas)**
- [Construcción de estructura de datos para gráficas de burbuja](#construcción-de-estructura-de-datos-para-gráficas-de-burbuja)
- [Construcción de estructura de datos para gráficas de dispersión](#construcción-de-estructura-de-datos-para-gráficas-de-dispersión)
- [Construcción de estructura de datos para gráficas cartesianas y radiales](#construcción-de-estructura-de-datos-para-gráficas-cartesianas-y-radiales)

**[￭ Construcción de estructuras de configuración para gráficas](#construcción-de-estructuras-de-configuración-para-gráficas)**
- [Construcción de objeto de opciones para gráfica de burbujas](#construcción-de-objeto-de-opciones-para-gráfica-de-burbujas)
- [Construcción de objeto de opciones para gráficas cartesianas](#construcción-de-objeto-de-opciones-para-gráficas-cartesianas)
- [Construcción de objeto de opciones para gráficas radiales](#construcción-de-objeto-de-opciones-para-gráficas-radiales)
- [Construcción de objeto de opciones para gráficas de radar](#construcción-de-objeto-de-opciones-para-gráficas-de-radar)

**[￭ Estilización de etiquetas de gráficas](#estilización-de-etiquetas-de-gráficas)**
- [Estilización de etiquetas HTML de gráficas](#estilización-de-etiquetas-html-de-gráficas)

**[￭ Formateo de etiquetas en los ejes de gráficas](#formateo-de-etiquetas-en-los-ejes-de-gráficas)**
- [Funciones de formateo numérico y de texto](#funciones-de-formateo-numérico-y-de-texto)
- [Asignación de formateo numérico](#asignación-de-formateo-numérico)
- [Asignación de formateo de etiquetas](#asignación-de-formateo-de-etiquetas)
- [Formateo de etiquetas en ejes de gráfica de dispersión y burbujas](#formateo-de-etiquetas-en-ejes-de-gráfica-de-dispersión-y-burbujas)
- [Formateo de etiquetas en ejes de gráficas cartesianas](#formateo-de-etiquetas-en-ejes-de-gráficas-cartesianas)
- [Formateo de etiquetas en ejes de gráficas radiales](#formateo-de-etiquetas-en-ejes-de-gráficas-radiales)

**[￭ Plug-ins de Charts.js](#plug-ins-de-chartsjs)**
- [htmlLegend: Desacoplamiento de etiquetas de conjuntos de datos](#htmllegend-desacoplamiento-de-etiquetas-de-conjuntos-de-datos)
- [darkMode: Integración de modo oscuro](#darkmode-integración-de-modo-oscuro)
- [stylingCSS: Asignación de clases CSS a elementos HTML generados por gráficas](#stylingcss-asignación-de-clases-css-a-elementos-html-generados-por-gráficas)

**[￭ Mapeo de colores en gráficas](#mapeo-de-colores-en-gráficas)**
- [Mapeo de opacidades en formato hexadecimal](#mapeo-de-opacidades-en-formato-hexadecimal)
- [Mapeo de colores a conjuntos de datos](#mapeo-de-colores-a-conjuntos-de-datos)
- [Mapeo de opacidades y tipos de colores en los conjuntos de datos](#mapeo-de-opacidades-y-tipos-de-colores-en-los-conjuntos-de-datos)
- [Mapeo de colores en conjuntos de datos](#mapeo-de-colores-en-conjuntos-de-datos)

----

# Librerías de terceros

## Librerías utilizadas en el proyecto

Este proyecto utiliza varias librerías para su funcionamiento, listadas a continuación:

- **React Router**: Es una biblioteca estándar para enrutamiento en aplicaciones React. Proporciona una manera declarativa para gestionar la navegación y el enrutamiento en aplicaciones de una sola página .Permite definir rutas de manera declarativa, lo que permite especificar qué componentes deben renderizarse para diferentes rutas además de soportar rutas anidadas. Para saber más, consultar su [documentación](https://reactrouter.com/en/main).

- **Charts.js**
Es una biblioteca de código abierto que permite crear gráficas y visualizaciones de datos de manera sencilla y atractiva. Es altamente personalizable y fácil de usar y  soporta varios tipos de gráficas interactivos, lo que permite al usuario interactuar con el gráfico para ver información adicional. Para saber más, consultar su [documentación](https://www.chartjs.org/docs/latest/).

----

# Estructura del proyecto

## Descripción general de la estructura del proyecto

En esta sección se describe la estructura general del proyecto, lo que ayudará al desarrollador a recordar el funcionamiento de la aplicación a nivel general o ayudará al nuevo desarrollador a familiarizarse con la estructura de ésta.

## Uso de constantes

Este proyecto utiliza un directorio en el que se almacenan valores constantes, generalmente valores de tipo `string` nombres de atributos de funciones y nombres de ajustes predefinidos. Estos archivos se encuentran en la ubicación `src/constants/` y están comentados para entender a qué pertenecen. A continuación se muestra un ejemplo con constantes de colores:
```js
// Valores numéricos
export const RED_HUE = 353

// Colores en formato hexadecimal sin opacidad
export const SATURED_RED = "#FF001E"
```

Las constantes son una implementación en la aplicación que ayudan a reducir *typos* en el código al usar valores de tipo `string` eficientando el flujo de trabajo en el desarrollo. Las constantes también son una forma de escalar el proyecto y homogeneizar valores en la aplicación ya que sólo requieren un cambio que se propaga por ésta y no muchos cambios en varios archivos.

## Destructuración y propiedades computadas

La declaración de funciones en este proyecto utiliza propiedades computadas a partir de constantes declaradas en la ubicación `src/constants/`. Las propiedades computadas permiten definir propiedades de objetos usando expresiones dinámicas que se evalúan en tiempo de ejecución además de que centralizan las claves en un solo objeto, lo que facilita la actualización de las constantes y hace explícito qué propiedades del objeto de entrada se están utilizando y asignando a variables específicas.

>   Para saber más sobre el uso de constantes, consultar la sección [Uso de constates](#uso-de-constantes).

### Ejemplo de uso

En el archivo `settings.js` que se encuentra en la ubicación antes mencionada, se cuenta con una constante llamada `CHARTS_SETTINGS` utilizada para definir los atributos configurables de componentes de gráficas. La constante está declarada de la siguiente forma:
```js
export const CHARTS_SETTINGS = {
    // Tipo de gráfica
    CHART_TYPE: "chartType",
    // Nombre del grupo de etiquetas
    LABELS_NAME: "labelsName",
    // Nombres de las variables contenedoras de los conjuntos de datos
    DATASETS_NAMES: "datasetNames",
    ...
}
```

>   Para más información sobre estos ajustes, leer la sección [Gráficas](#gráficas).

En la función `buildData` que se encuentra en `src/utils/utils.js` se utilizan estas constantes como declaración de los atributos de entrada de la función, destructurando los valores dentro de `[]` y definiendo cómo se llamará el atributo dentro de la función de la siguiente forma:
```js
export const buildData = ({
    ...
    [CHARTS_SETTINGS.CHART_TYPE]: chartType, // Tipo de gráfica
    [CHARTS_SETTINGS.LABELS_NAME]: labelsName, // Variable de etiquetas de la gráfica de barras
    [CHARTS_SETTINGS.DATASETS_NAMES]: datasetNames, // Conjuntos de datos en el objeto
    ...
}) => {
    ...
}
```

Esto sería lo mismo a declarar la función de esta forma:
```js
export const buildData = ({
    ...
    chartType: chartType,
    labelsName: labelsName,
    datasetNames: datasetNames,
    ...
}) => {
    ...
}
```

Nótese que los nombres antes de los `:` son computados a partir de los nombres de las constantes. Imaginemos que cambiamos los nombres de las constantes a lo siguiente:

```js
export const CHARTS_SETTINGS = {
    CHART_TYPE: "type",
    LABELS_NAME: "labels",
    DATASETS_NAMES: "datasets",
    ...
}
```

Los nombres computados en la función automáticamente cambiarían a lo siguiente:
```js
export const buildData = ({
    ...
    type: chartType,
    labels: labelsName,
    datasets: datasetNames,
    ...
}) => {
    ...
}
```

Es decir que la función recibe, por ejemplo, el atributo `type` y lo rebautiza como `chartType` para usarlo así dentro de sí misma. De esta manera podemos declarar las gráficas a utilizar de la siguiente forma y la aplicación seguirá funcionando correctamente aunque las constantes se rebauticen una y otra vez:
```js
export const dashboardData = {
    charts: [
        {
            ...
            [CHARTS_SETTINGS.CHART_TYPE]: 'bar',
            [CHARTS_SETTINGS.LABELS_NAME]: 'user_name',
            [CHARTS_SETTINGS.DATASETS_NAMES]: ['amount_untaxed'],
            ...
        },
        ...
    ]
}
```

De esta forma se pueden rebautizar los nombres de los atributos de entrada de una función y los argumentos que ésta recibe sin romper el código o generar errores por cambios en nombres no realizados correctamente.

## Mapas de funciones

Los mapas de funciones son patrones utlizados en la ejecución de diferentes funciones basadas en algún valor dinámico y evitan el uso de múltiples estructuras de control `if-else` o `switch-case`. Por ejemplo lo siguiente:
```js
// Funciones
const funcSuma = (a, b) => (a + b)
const funcResta = (a, b) => (a - b)
const funcMult = (a, b) => (a * b)
const funcDiv = (a, b) => (a / b)

// Mapa de funciones de operaciones matemáticas
const opMat = {
    suma: funcSuma,
    resta: funcResta,
    mult: funcMult,
    div: funcDiv
}

// Ejecuciones
opMat['suma'](a, b) // Esto retornará la suma de a y b
opMat['resta'](a, b) // Esto retornará la resta de a y b
opMat['mult'](a, b) // Esto retornará la multiplicación de a y b
opMat['div'](a, b) // Esto retornará la división de a y b
```

Esto es útil para ejecutar una función cuando se desconoce el tipo de valor:
```js
const unaFuncion = (modo) => {
    ...
    res = opMat[modo](a, b) // Ejecución dinámica
    ...

    return ...
}
```

## Funciones recursivas

Este proyecto utiliza funciones recursivas. La recursividad es una técnica de programación donde una función se llama a sí misma para resolver un problema. Es una herramienta poderosa que se utiliza para simplificar soluciones a problemas complejos al descomponerlos en subproblemas más pequeños y manejables. Una función recursiva siempre debe tener dos componentes principales:
- Caso base: La condición que detiene las llamadas recursivas. Es el punto en el que la función deja de llamarse a sí misma y empieza a regresar.
- Caso recursivo: La parte de la función que reduce el problema en tamaño o complejidad y hace la llamada recursiva.

Un ejemplo de recursividad puede ser la función para calcular el factorial de un número. El factorial de un número $n$ (denotado como $𝑛!$) se define como el producto de todos los números enteros positivos desde 1 hasta $𝑛$. Por ejemplo, $5!$ es igual a $1×2×3×4×5$ lo que es igual a $120$.

En el siguiente fragmento de código se observa una función recursiva básica:

```js
const factorial = (n) => {
    // Caso base: si n es 0 o 1, el factorial es 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Caso recursivo: n * factorial(n-1)
    return n * factorial(n - 1);
}
```

- Si `n` es igual a 0 ó a 1 la función retorna `1` como resultado.
- Si `n` es mayor a 1 la función retorna el valor de `n` multiplicado por la llamada de sí misma proporcionando como argumento el valor de `n - 1`, de esta manera las siguientes llamadas de la función se harán con números más pequeños en donde se terminará ejecutando con un `1` como valor y las llamadas recursivas se detendrán.

Por ejemplo, si tenemos la llamada de la siguiente manera, con un `5`, la función hará lo siguiente. Se recomienda leer tantas veces como sea necesario para entender el funcionamiento esta función:
- Retorno de `5 × factorial(4)`:
    - Retorno de `4 × factorial(3)`:
        - Retorno de `3 × factorial(2)`:
            - Retorno de `2 × factorial(1)`:
                - Retorno de `1`. Aquí se detiene la recursividad ya que la condición ya no ejecuta la función de sí misma.
            - Retorno de `2 × 1` que es igual a `2`.
        - Retorno de `3 × 2` que es igual a `6`.
    - Retorno de `4 × 6` que es igual a `24`.
- Retorno de `5 × 24` que es igual a `120`.

La recursividad es una herramienta poderosa en la programación, especialmente cuando se trata de estructuras de datos anidadas o jerárquicas. Puede ser más adecuada que los ciclos en ciertos casos, como la iteración de estructuras anidadas ya que permite expresar soluciones complejas de manera más simple y clara. En el caso de estructuras anidadas, como árboles, gráficos, o JSON anidados, la recursividad puede recorrer estas estructuras de forma natural. En el uso de ciclos se tendría que manejar manualmente una pila o una lista de estructuras pendientes de procesar, lo que puede complicar el código y hacerlo menos legible.

## Datos de la aplicación

Este proyecto también estructura los datos de la aplicación en una ubicación específica para facilitar cambios y actualizaciones sin tener que realizar cambios en muchos archivos lo que también reduce los errores humanos evitando que algunos valores que tenían que cambiarse pasen desapercibidos.

```js
// Dominios locales para obtener la información
export const defaultDomain = 'localdomain'

// Configuración de las gráficas
export const dashboardData = {
    charts: [
        {
            [CHARTS_SETTINGS.ENDPOINT]: 'quotation_amounts',
            [CHARTS_SETTINGS.CHART_TYPE]: 'bar',
            [CHARTS_SETTINGS.NAME]: 'Cotizaciones por vendedora',
            ...
        },
        ...
    ]
    ...
}

// Menús
export const links = [
    {
        id: 1,
        icon: 'user',
        label: 'Profile',
        route: 'profile'
    },
    ...
]
```

Generalmente estos valores se declaran en colecciones de objetos y se mapean usando el método nativo de los *arrays* `map` en los componentes a renderizar.

>   La declaración de estos objetos utiliza propiedades computadas. Para saber más, consultar la sección [Destructuración y propiedades computadas](#destructuración-y-propiedades-computadas).

## Ajustes predefinidos

Este proyecto también utiliza un directorio en donde se declaran ajustes predefinidos de la aplicación, lo que facilita omitir algunas declaraciones de atributos en componentes y también estandarizar la apariencia y funcionalidad de éstos. Estos ajustes predefinidos se encuentran en el directorio `src/settings/` y están comentados para entender a qué pertenecen:

```js
export const chartSettings = {
    // Colores predefinidos
    [CHARTS_SETTINGS.BACKGROUND_COLORS]: RED_PALETTE,
    // Disposición de etiquetas
    [CHARTS_SETTINGS.LABEL_COLUMNS]: 1,
    // Alineación de elementos dentro de las etiquetas
    [CHARTS_SETTINGS.LABELS_LIST]: 'default',
    ...
}
```

>   La declaración de estos ajustes predefinidos utiliza propiedades computadas. Para saber más, consultar la sección [Destructuración y propiedades computadas](#destructuración-y-propiedades-computadas).

## Funciones de utilidades

Este proyecto cuenta con un directorio de funciones de utilidades en donde se reúnen todas las funciones que se utilizan en la aplicación. Esto ayuda a modularizar los componentes de una mejor manera y extraer sus funciones a archivos separados para facilitar la legibilidad y la escalabilidad. Las funciones se encuentran en el directorio `src/utils/` y están contenidas en diversos archivos.

```js
export const buildData = ({
    data,
    labelsContainerID, 
    [CHARTS_SETTINGS.CHART_TYPE]: chartType,
    ...
}) => {

    let series = buildInitSeries[chartType]({ data, strat, datasetNames, labelsName, labels });
    // Resto de la función
}
```

>   La declaración de la mayor parte del nombre de los argumentos de entrada utiliza propiedades computadas. Para saber más, consultar la sección [Destructuración y propiedades computadas](#destructuración-y-propiedades-computadas).

----

# Constantes para la aplicación

## Colores
- **Ubicación:** `src/constants/colors.js`

En este archivo se encuentran los valores de colores y otros parámetros utilizados por la aplicación completa, desde la paleta de colores, colores preestablecidos en formato hexadecimal hasta valores de opacidad en formato hexadecimal. Los colores preestablecidos en formato hexadecimal se pueden concatenar con los valores de opacidad en los casos en los que los componentes lo requieran como en el caso de los componentes de graficación:
```js
export const SATURED_RED = "#FF001E"

export const OPACITIES = {
    0: "00",
    5: "0B",
    ...
}

export const RED_PALETTE = [
    "#8C0413",
    "#B70217",
    ...
]
```

Uso:
```js
setData(
    buildBarData(
        // ...argumentos
        `${saturedRed}${opacity[75]}`,
        // ...más argumentos
    )
)
```

>   En este caso, el color a utilizar sería un rojo saturado con opacidad de 75%, lo que resultaría en el valor `#FF001EBF` en formato hexadecimal. Nótese que estas constantes se utilizan en funciones internas y el ejemplo sólo es ilustrativo y pertenece a una versión antigua de la declaración de las gráficas.

## Tipos de gráficas
- **Archivo:** `src/constants/charts.js`
- **Constante:** `CHART_TYPES`

Esta constante contiene los nombres de los tipos de gráficas disponibles para ser mostradas en el dashboard de la aplicación:

```js
{
    BAR: 'bar', // Gráfica de barras
    LINE: 'line', // Gráfica de líneas
    PIE: 'pie', // Gráfica de pastel
    DOUGHNUT: 'doughnut', // Gráfica de dona
    POLARAREA: 'polar area', // Gráfica de área polar
    RADAR: 'radar' // Gráfica de radar
}
```

Uso:
```js
const dasboardData = {
    charts = [
        {
            chartType: CHART_TYPES.BAR // Se define una gráfica de tipo barras
            ...
        }
        ...
    ]
}
```

## Nombres de ajustes de gráficas
- **Ubicación:** `src/constants/settings.js`
- **Constante:** `CHARTS_SETINGS`

Este objeto contiene los nombres de ajustes de las gráficas a renderizar, utilizados principalmente para la construcción de la estructura de datos y opciones de cada una de las gráficas.

```js
export const CHARTS_SETTINGS = {
    // Endpoint de URL de donde se solicitará la información
    ENDPOINT: 'endpoint',
    // Tipo de gráfica
    CHART_TYPE: 'chartType',
    // Nombre de la gráfica
    NAME: 'name',
    ...
}
```

Uso:
```js
export const dashboardData = {
    charts: [
        {
            [CHARTS_SETTINGS.ENDPOINT]: 'quotation_amounts',
            [CHARTS_SETTINGS.CHART_TYPE]: 'bar',
            [CHARTS_SETTINGS.NAME]: 'Cotizaciones por vendedora',
            ... // Resto de parámetros
        }
    ]
}
```

>   Estas constantes se utilizan mayormente para la configuración del Dashboard y declaración de los nombres de los parámetros de funciones de utilidad. Para más información sobre los parámetros disponibles, leer la sección [Gráficas](#gráficas).

## Nombres de ajustes de series de los conjuntos de datos
- **Ubicación:** `src/constants/settings.js`
- **Constante:** `CHARTS_SERIES_SETTINGS`

Este objeto contiene los nombres de ajustes de los conjuntos de datos individuales para uso en funciones internas.
```js
{
    // Color de fondo
    BACKGROUND_COLOR: "backgroundColor",
    // Color de borde
    BORDER_COLOR: "borderColor",
    // Color de relleno
    FILL: 'fill',
}
```

----

# Configuraciones globales

## Ajustes predefinidos

En esta sección se encuentra un índice de todos los ajustes predefinidos:

| Tipo | Nombre | Entidad | Descripción | Ubicación | Valor predefinido |
|------|--------|---------|-------------|-----------|-------------------|
| Ajustes de gráficas | Colores de borde en gráficas circulares | `chartSettings...` | Colores de borde en gráficas circulares (pastel y dona) | `dashboardSettings.js` | `"#FFFFFF"` |
| Ajustes de gráficas | Colores de fondo | `chartSettings.BACKGROUND_COLORS` | Colores de fondo de categorías/conjuntos de datos | `dashboardSettings.js` | `["#8C0413", "#B70217", "#DC001A", "#EC112B", "#FE3249", "#FE5165", "#FC7080"]` |
| Ajustes de gráficas | Columnas de etiquetas | `chartSettings.LABEL_COLUMNS` | Número de columnas en `display: grid` en las que se distribuirán las etiquetas categóricas/de conjuntos de datos de las gráficas por default | `dashboardSettings.js` | `1` |
| Ajustes de gráficas | Forma del indicador de etiqueta | `chartSettings.LEGEND_BOX` | Forma del indicador de color de etiqueta de la gráfica | `dashboardSettings.js` | `'rounded'` |
| Ajustes de gráficas | Opacidad de borde en gráfica de área polar | `chartSettings...` | Opacidad de los colores de borde en las gráficas de de área polar | `dashboardSettings.js` | `100` |
| Ajustes de gráficas | Opacidad de fondo en gráfica de área polar | `chartSettings...` | Opacidad de los colores de fondo en las gráficas de de área polar | `dashboardSettings.js` | `75` |
| Ajustes de gráficas | Orientación de elementos dentro de las etiquetas | `chartSettings.LABELS_LIST` | Orientación de los elementos HTML dentro de las etiquetas | `dashboardSettings.js` | `'default'` |
| Ajustes de gráficas | Relación de aspecto | `chartSettings.ASPECT_RATIO` | Relación de aspecto de la gráfica | `dashboardSettings.js` | `1.5` |
| Ajustes de gráficas | Tamaño máximo de elementos de burbuja | `chartSettings.MAX_BUBBLE_SIZE` | Tamaño máximo en pixeles de los elementos de burbuja en gráficas de burbuja | `dashboardSettings.js` | `16` |
| Ajustes de gráficas | Tamaño mínimo de elementos de burbuja | `chartSettings.MIN_BUBBLE_SIZE` | Tamaño mínimo en pixeles de los elementos de burbuja en gráficas de burbuja | `dashboardSettings.js` | `2` |
| Ajustes de gráficas | Tipo de relleno en gráficas rellenables | `chartSettings...` | Tipo de relleno en gráficas rellenables (líneas y barras) | `dashboardSettings.js` | `"origin"` |
| Apariencia | Cajas de colores de etiquetas de conjuntos de datos de gráficas | `chartElementsStyling...` | Estilización de elementos `<span>` (cajas de color de conjunto de datos) de componente de gráfica | `chartElementsStyling.js` | `"block"` |
| Apariencia | Etiquetas de conjuntos de datos de gráficas | `chartElementsStyling...` | Estilización de elementos `<li>` de lista de contenedor de etiquetas de componente de gráfica | `chartElementsStyling.js` | `"flex gap-1"` |
| Apariencia | Lista de etiquetas de conjuntos de datos de gráficas | `chartElementsStyling...` | Estilización de elemento `<ul>` de contenedor de etiquetas de componente de gráfica | `chartElementsStyling.js` | `"flex"` |
| Apariencia | Título de conjunto de datos en etiquetas de conjuntos de datos de gráficas | `chartElementsStyling...` | Estilización de elemento `<p>` (nombre de la categoría o conjunto de datos) de contenedor de etiquetas de componente de gráfica | `chartElementsStyling.js` | `"font-extralight transition duration-300"` |
| Conexión a APIs | Dominio Backend default | `DOMAINS.DEFAULT_DOMAIN` | Dominio Backend default para conexión con API | `backendDomains.js` | `localhost` |


----

# Configuración del Dashboard

La información mostrada en el Dashboard es configurada en el archivo `appConfig.js` específicamente en la colección de datos `dashboardData`. Este archivo está destinado a ser un punto de partida para poder realizar la configuración de la aplicación completa cambiando valores y configurando componentes usando simplemente colecciones de datos que automáticamente se mapean en la aplicación.

## Gráficas
**índice**: `[charts]`

En este índice se encuentra la configuración de las gráficas a mostrar en el Dashboard. Esta colección de datos debe ser una matriz y se debe declarar un objeto dentro de ésta por cada gráfica. Para acceder a la lista de atributos disponibles se importa la constante `CHARTS_SETTINGS` proveniente de la ubicación relativa `../constants/settings`. Para declarar el atributo se utiliza la destructuración de la siguiente forma:

```js
const dashboardData = {
    charts: [
        // Declaración de la gráfica
        {
            [CHART_SETTINGS.CHARTTYPE]: 'bar' // Declaración de una gráfica de barras
            ... // Resto de las propiedades de la gráfica
        }
    ]
}
```

Los argumentos de entrada disponibles para cada objeto de la matriz, estructurados en la forma `[CHART_SETTINGS.<argumento>]` (como se describe en el bloque de código anterior) son los siguientes:

| Atributo | Tipo | Valor por defecto | Descripción |
|----------|------|-------------------|-------------|
| `ENDPOINT` | `string` | *Requerido | Endpoint de la URL de donde se solicitará la información. Por ejemplo, si la URL completa es `https://www.estoesunsitio.com/esto_es_el_endpoint`, en este campo se debe ingresar el fragmento `esto_es_el_endpoint`. |
| `CHART_TYPE` | `(opción)` <br><br> • `'bar'`: Gráfica de barras <br> • `'line'`: Gráfica de líneas <br> • `'pie'`: Gráfica de pastel <br> • `'doughnut'`: Gráfica de dona <br> • `'polar area'`: Gráfica de área polar <br> • `'radar'`: Gráfica de radar <br> • `'scatter'`: Gráfica de dispersión <br> • `'bubble'`: Gráfica de burbujas  | *Requerido | Tipo de gráfica a renderizar. |
| `NAME` | `string` | *Requerido | Nombre de la gráfica a renderizar .|
| `DATASET_NAMES` | `array [string]` | *Requerido | Nombre de la variable del JSON del endpoint de la cual se obtendrán los valores del o los conjuntos de datos a renderizar en los elementos de la gráfica. |
| `LABELS` | `string` | *Requerido | Nombre de la variable del JSON del endpoint de la cual se obtendrá la variable categórica que funcionará para segmentar el o los conjuntos de datos. |
| `LABELS_NAME` | `string` | *Requerido | Nombre descriptivo del grupo de etiquetas que se renderizará en la gráfica. |
| `BACKGROUND_COLORS` | `Color` - `array [color]` | `RED_PALETTE` | Colores de fondo para los elementos de la gráfica. El formato de cada color debe ser hexadecimal, por ejemplo `#FFFFFF`. Los colores deben tener ser RGB en formato hexadecimal y contener el símbolo `#` antes de éstos. |
| `BACKGROUND_OPACITY` | `number` | `100` | Opacidad de los colores de fondo de los elementos de la gráfica. Debe ser un número del `0` al `100` en donde el `0` representa la transparencia total y el `100` un color totalmente sólido sin transparencia. |
| `BORDER_COLORS` | `Color` - `array[Color]` | `RED_PALETTE` | Colores de borde para los elementos de la gráfica. El formato de cada color debe ser hexadecimal, por ejemplo `#FFFFFF`. Los colores deben tener ser RGB en formato hexadecimal y contener el símbolo `#` antes de éstos. |
| `BORDER_OPACITY` | `number` | `100` | Opacidad de los colores de borde de los elementos de la gráfica. Debe ser un número del `0` al `100` en donde el `0` representa la transparencia total y el `100` un color totalmente sólido sin transparencia. |
| `ASPECT_RATIO` | `number` - `(División)` | `1.5` | Relación de aspecto de la gráfica. Puede ser un número, como por ejemplo `1.5` o una división como `3/2` en donde el primer número o numerador representa la proporción horizontal y el segundo número o denominador representa la proporción vertical. Por ejemplo, `3/2` significa que, por cada 3 pixeles de ancho, la gráfica tendrá 2 pixeles de alto. |
| `Y_VALUE_TYPE` | `(Opción)` <br> <br> • `'numeric'`: Numérico <br> • `'monetary'`: Moneda nacional <br> • `'only name'` | `undefined` | Tipo de valor numérico que se representará en las etiquetas numéricas y el tooltip. |
| `X_VALUE_TYPE` | `(Opción)` <br> <br> • `'numeric'`: Numérico <br> • `'monetary'`: Moneda nacional <br> • `'only name'` | `undefined` | Tipo de valor numérico que se representará en las etiquetas numéricas y el tooltip. |
| `CATEGORY_STRATIFICATION_BY` | `string` | `undefined` | Variable categórica de estratificación para segmentar un conjunto de datos en varios conjuntos de datos para renderizarse en la gráfica. |
| `LABEL_COLUMNS` | `(Opción)` <br> <br> • `1`: Organización en forma de lista <br> • `2`: Organización en lista de 2 columnas <br> • `3`: Organización en lista de 3 columnas <br> • `4`: Organización en lista de 4 columnas <br> • `6`: Organización en lista de 6 columnas | `1` | Orientación y alineación de las etiquetas. |
| `LABELS_LIST` | `(Opción)` <br> <br> • `'default'`: Disposición por defecto | `'default'` | Orientación y alineación de cada contenedor de etiqueta. |
| `LEGEND_BOX` | `(Opción)` <br> <br> • `'circle'`: Cajas circulares <br> • `'rounded'`: Cajas cuadradas con bordes redondeados <br> • `'square'`: Cajas cuadradas | `'square'` | Apariencia de la caja de color de las etiquetas. |
| `MIN_BUBBLE_SIZE` | `number` | `2` | Tamaño mínimo de elementos de burbuja en gráfica de burbuja. |
| `MAX_BUBBLE_SIZE` | `number` | `16` | Tamaño máximo de elementos de burbuja en gráfica de burbuja. |
| `TRANSPOSED` | `boolean` | `false` | Transponer gráfica. Si se activa este parámetro, los datos de los ejes $X$ y $Y$ se invertirán. Esto sólo es válido para gráficas de barras, de dispersión y de burbuja. |

Los objetos declarados en la matriz se renderizarán, cada uno, en un componente de gráfica.

----

# Manejadores de solicitudes a APIs (Métodos GET)

## Obtener datos para las gráficas
- **Archivo:** `get.js`
- **Función:** `getChartData`

Esta función permite obtener los datos necesarios para renderizar un componente de gráfica. Los parámetros disponibles para utilizar con la función son los siguientes:

**Parámetros de entrada:**

| Atributo | Tipo | Valor por defecto | Descripción |
|----------|------|-------------------|-------------|
| `stateSetter` | `function` | *Requerido | Función de cambio de estado para ingresar la información a un estado de React.js. |
| `endpoint` | `string` | *Requerido | Endpoint de la URL de donde se solicitará la información. Por ejemplo, si la URL completa es `https://www.estoesunsitio.com/esto_es_el_endpoint`, en este campo se debe ingresar el fragmento `esto_es_el_endpoint`. |
| `domain` | `string` | (Dominio por defecto preconfigurado en el archivo `appConfig.js`). Leer la sección [Configuraciones globales](#configuraciones-globales) para más información | Dominio que sólo se usa en casos en los que se quiera especficar un dominio diferente al configurado por defecto en el archivo `src/data/appConfig.js`, por ejemplo, `https://www.estoesunsitio.com/` (Nota: el dominio debe contener el `/` al final). |

Para utilizar la función de solicitud al API se requiere una función de cambio de estado y un endpoint a utilizar, por ejemplo:
```js
getChartData(setLoadData, "endpoint_example")
```

>   Esta función realizaría una solicitud a la URL `http://www.defaultdomain.com/endpoint_example`.

También existe la posibilidad en exceptuar al API configurado en el archivo `appConfig.js` proporcionando un dominio específico:

```js
getChartData(setLoadData, "endpoint_example", "https://www.midominioespecifico.com/")
```

>   Esta función realizaría una solicitud a la URL `https://www.midominioespecifico.com/endpoint_example`.

----

# Componentes de gráficas

## Componente principal de gráfica
- Ubicación: `src/components/charts`
- Nombre: `ChartTemplate.jsx`

Este es el componente central de la librería Charts.js en donde se concentra gran parte de las funciones, estructura y configuraciones en esta documentación.

El componente de gráfica concentra los componentes de Chart.js de gráficas y renderiza el que se le indique por medio de los argumentos. Esto facilita el cambio entre un tipo de gráfica u otro sin tener que importar diferentes componentes, lo que lo hace más limpio y mutable al momento de configurar el dashboard.

Este es el flujo que sigue el componente de gráfica para facilitar su renderización:
```js
import { useEffect, useState } from "react";
import { Bar, Bubble, Doughnut, Line, Pie, PolarArea, Radar, Scatter } from 'react-chartjs-2';
import { getChartData } from "../../api/get";
import { CHART_TYPES } from "../../constants/charts";
import { buildData } from "../../utils/utils";

const ChartTemplate = ({ chartData, labelsContainerID }) => {
    // Estado para carga inicial de los datos
    const [loadData, setLoadData] = useState();
    // Estado para transformación de datos
    const [data, setData] = useState();

    // Carga inicial de los datos
    useEffect(
        () => {
            getChartData(setLoadData, chartData.endpoint)
        }, [chartData.endpoint]
    )

    // Transformación de los datos
    useEffect(
        () => {
            if (loadData) {
                setData(
                    buildData(
                        {
                            data: loadData,
                            ...chartData,
                            labelsContainerID
                        }
                    )
                )
            }
        }, [loadData, chartData, labelsContainerID]
    );

    // Renderización de la gráfica
    const RenderedChart = ({ dataContainer }) => {
        const chartIndex = {
            // Gráfica de barras
            [CHART_TYPES.BAR]: <Bar data={dataContainer.series} options={dataContainer.options} />,
            // Gráfica de líneas
            [CHART_TYPES.LINE]: <Line data={dataContainer.series} options={dataContainer.options} />,
            // Gráfica de pastel
            [CHART_TYPES.PIE]: <Pie data={dataContainer.series} options={dataContainer.options} />,
            // Gráfica de área polar
            [CHART_TYPES.POLARAREA]: <PolarArea data={dataContainer.series} options={dataContainer.options} />,
            // Gráfica de dona
            [CHART_TYPES.DOUGHNUT]: <Doughnut data={dataContainer.series} options={dataContainer.options} />,
            // Gráfica de radar
            [CHART_TYPES.RADAR]: <Radar data={dataContainer.series} options={dataContainer.options} />,
            // Gráfica de dispersión
            [CHART_TYPES.SCATTER]: <Scatter data={dataContainer.series} options={dataContainer.options} />,
            // Gráfica de burbuja:
            [CHART_TYPES.BUBBLE]: <Bubble data={dataContainer.series} options={dataContainer.options} />,
        };

        return chartIndex[chartData.chartType]
    }

    // Renderización de la gráfica indicada
    if ( data ) {
        return (
            <div>
                <div id={`${labelsContainerID}`}></div>
                <RenderedChart
                    dataContainer={data}
                />
            </div>
        );
    // Indicación de carga inicial en caso de no haber cargado datos aún
    } else {
        return (
            <div>
                Cargando...
            </div>
        );
    }
}

export default ChartTemplate
```

Los argumentos de entrada disponibles son los siguientes:

| Atributo | Tipo | Valor por defecto | Descripción |
|----------|------|-------------------|-------------|
| `chartData` | `object` | *Requerido | Objeto de datos de renderización y endpoint de donde se tomará la información al conectarse con el API. Para más información sobre cómo declarar este objeto, leer la sección de configuración de [gráficas](#gráficas). |
| `labelsContainerID` | `string` | *Requerido | ID del contenedor HTML `<div>` en donde se renderizarán las etiquetas del conjunto de datos. |

>   A continuación se describe el funcionamiento paso a paso:
>   
>   Primeramente se importan todos los componentes, hooks, constantes y funciones requeridos para el funcionamiento de este componente:
>   ```jsx
>   import { useEffect, useState } from "react";
>   import { Bar, Bubble, Doughnut, Line, Pie, PolarArea, Radar, Scatter } from 'react-chartjs-2';
>   import { getChartData } from "../../api/get";
>   import { CHART_TYPES } from "../../constants/charts";
>   import { buildData } from "../../utils/utils";
>   ```
>   
>   Declaración del componente:
>   ```jsx
>   const ChartTemplate = ({ chartData, labelsContainerID }) => {
>       ...
>   }
>   ```
>   
>   Declaración de los estados para el componente:
>   ```jsx
>   // Estado para carga inicial de los datos
>   const [loadData, setLoadData] = useState();
>   // Estado para transformación de datos
>   const [data, setData] = useState();
>   ```
>   
>   >   - El estado `loadData` se utiliza para la solicitud de datos al API.
>   >   - El estado `data` se obtiene de la transformación de `loadData` por medio de funciones de transformación y formateo de datos para ingresarse como argumento al componente a renderizar.
>   
>   Se ejecuta la llamada al API para obtención de los datos de la gráfica usando un hook `useEffect`:
>   ```jsx
>   // Carga inicial de los datos
>   useEffect(
>       () => {
>           getChartData(setLoadData, chartData.endpoint)
>       }, [chartData.endpoint]
>   )
>   ```
>   
>   >   - Se utiliza la función `getChartData` y se le provee la función de cambio del estado `loadData` así como el atributo `endpoint` que es a donde se realizará la solicitud GET de la información para la gráfica.
>   
>   Para más información sobre el funcionamiento de la función `getChartData` consultar la sección [Obtener datos para las gráficas](#obtener-datos-para-las-gráficas).

>   Tras la obtención de los datos de la gráfica se ejecuta el siguiente hook `useEffect`:
>   ```jsx
>   // Transformación de los datos
>   useEffect(
>       () => {
>           if (loadData) {
>               ...
>           }
>       }, [loadData, chartData, labelsContainerID]
>   );
>   ```
>   
>   >   Se realiza el cambio del estado `data` con el valor del resultado de la ejecución de la función `buildData`:
>   >   ```jsx
>   >   setData(
>   >       buildData(
>   >           {
>   >               data: loadData,
>   >               ...chartData,
>   >               labelsContainerID
>   >           }
>   >       )
>   >   )
>   >   ```
>   >   
>   >   -  Se proveen los siguientes atributos a la función `buildData`:
>   >       - `data`: `loadData`, la información obtenida de la solicitud al API.
>   >       - La deconstrucción del objeto `chartData`
>   >       - El ID del contenedor HTML `<div>` en donde se renderizarán las etiquetas del conjunto de datos.
>   
>   Se declara el componente a renderizar:
>   ```jsx
>   // Renderización de la gráfica
>   const RenderedChart = ({ dataContainer }) => {
>       const chartIndex = {
>           // Gráfica de barras
>           [CHART_TYPES.BAR]: <Bar data={dataContainer.series} options={dataContainer.options} />,
>           // Gráfica de líneas
>           [CHART_TYPES.LINE]: <Line data={dataContainer.series} options={dataContainer.options} />,
>           // Gráfica de pastel
>           [CHART_TYPES.PIE]: <Pie data={dataContainer.series} options={dataContainer.options} />,
>           // Gráfica de área polar
>           [CHART_TYPES.POLARAREA]: <PolarArea data={dataContainer.series} options={dataContainer.options} />,
>           // Gráfica de dona
>           [CHART_TYPES.DOUGHNUT]: <Doughnut data={dataContainer.series} options={dataContainer.options} />,
>           // Gráfica de radar
>           [CHART_TYPES.RADAR]: <Radar data={dataContainer.series} options={dataContainer.options} />,
>           // Gráfica de dispersión
>           [CHART_TYPES.SCATTER]: <Scatter data={dataContainer.series} options={dataContainer.options} />,
>           // Gráfica de burbuja:
>           [CHART_TYPES.BUBBLE]: <Bubble data={dataContainer.series} options={dataContainer.options} />,
>       };
>   
>       return chartIndex[chartData.chartType]
>   }
>   ```
>   
>   >   - El componente recibe las propiedades `data` y `options` entontradas en los atributos `series` y `options` del objeto `dataContainer` respectivamente, los cuales usará para renderizar la gráfica correspondiente con sus datos y configuraciones correspondientes.
>   >   - Dentro de este componente se declara un mapa de componentes con el tipo de gráfico como índice y el componente a renderizar como valor.
>   >   - El retorno de este componente es el valor del mapa de componentes con índice en el tipo de gráfica.
>   
>   El mapa de componentes sigue la misma estructura que los mapas de funciones. Para saber más sobre los mapas de funciones y su funcionamiento, consultar la sección [Mapas de funciones](#mapas-de-funciones).
>   
>   La declaración de los índices utiliza propiedades computadas. Para saber más sobre el uso de propiedades computadas, consultar la sección [Destructuración y propiedades computadas](#destructuración-y-propiedades-computadas).
>   
>   Se realiza el retorno condicional:
>   ```jsx
>   // Renderización de la gráfica indicada
>   if ( data ) {
>       return (
>           ...
>       );
>   // Indicación de carga inicial en caso de no haber cargado datos aún
>   } else {
>       return (
>           ...
>       );
>   }
>   ```
>   
>   >   - El elemento JSX a retornoar dependerá de si el estado `data` ya contiene datos o aún no.
>   
>   Si el estado `data` ya contiene información se retorna el siguiente elemento JSX:
>   ```jsx
>   <div>
>       <div id={`${labelsContainerID}`}></div>
>       <RenderedChart
>           dataContainer={data}
>       />
>   </div>
>   ```
>   
>   >   - Se retorna un contenedor `<div>`.
>   >   - Dentro de éste se crea un `<div>` al que se le asigna el nombre de ID provisto al componente, que es el que usará para renderizar las etiquetas de la gráfica.
>   >   - También se retona dentro el componente resultado de la llamada al mapa de componentes `RenderedChart` y se le provee el estado de `data` al argumento `dataContainer`.

----

# Funciones principales para gráficas

## Construcción principal de objeto de datos y opciones para componente de gráfica
- Ubicación: `src/utils/utils.js`
- Nombre: `buildData`

La función `buildData` recibe los parámetros de declaración de gráfica, opciones de configuración y otros argumentos para construir un objeto de datos y opciones formateados para ingresar al [componente principal de gráfica](#componente-principal-de-gráfica).

Los argumentos de entrada disponibles son:

| Atributo | Tipo | Valor por defecto | Descripción |
|----------|------|-------------------|-------------|
| `data` | `object` | *Requerido | Objeto de datos recibido por medio de la solicitud GET al API. Para saber más, consulta la sección [Obtener datos para las gráficas](#obtener-datos-para-las-gráficas) |
| `labelsContainerID` | `string` | *Requerido | ID del contenedor HTML `<div>` en donde se renderizarán las etiquetas del conjunto de datos. |
| `[CHART_SETTINGS.CHART_TYPE ]` | `(opción)` <br><br> • `'bar'`: Gráfica de barras <br> • `'line'`: Gráfica de líneas <br> • `'pie'`: Gráfica de pastel <br> • `'doughnut'`: Gráfica de dona <br> • `'polar area'`: Gráfica de área polar <br> • `'radar'`: Gráfica de radar <br> • `'scatter'`: Gráfica de dispersión <br> • `'bubble'`: Gráfica de burbujas  | *Requerido | Tipo de gráfica a renderizar. |
| `[CHART_SETTINGS.NAME ]` | `string` | *Requerido | Nombre de la gráfica a renderizar .|
| `[CHART_SETTINGS.DATASET_NAMES ]` | `array [string]` | *Requerido | Nombre de la variable del JSON del endpoint de la cual se obtendrán los valores del o los conjuntos de datos a renderizar en los elementos de la gráfica. |
| `[CHART_SETTINGS.LABELS ]` | `string` | *Requerido | Nombre de la variable del JSON del endpoint de la cual se obtendrá la variable categórica que funcionará para segmentar el o los conjuntos de datos. |
| `[CHART_SETTINGS.LABELS_NAME ]` | `string` | *Requerido | Nombre descriptivo del grupo de etiquetas que se renderizará en la gráfica. |
| `[CHART_SETTINGS.BACKGROUND_COLORS ]` | `Color` - `array [color]` | `[CHART_SETTINGS.RED_PALETTE ]` | Colores de fondo para los elementos de la gráfica. El formato de cada color debe ser hexadecimal, por ejemplo `#FFFFFF`. Los colores deben tener ser RGB en formato hexadecimal y contener el símbolo `#` antes de éstos. |
| `[CHART_SETTINGS.BACKGROUND_OPACITY ]` | `number` | `100` | Opacidad de los colores de fondo de los elementos de la gráfica. Debe ser un número del `0` al `100` en donde el `0` representa la transparencia total y el `100` un color totalmente sólido sin transparencia. |
| `[CHART_SETTINGS.BORDER_COLORS ]` | `Color` - `array[Color]` | `[CHART_SETTINGS.RED_PALETTE ]` | Colores de borde para los elementos de la gráfica. El formato de cada color debe ser hexadecimal, por ejemplo `#FFFFFF`. Los colores deben tener ser RGB en formato hexadecimal y contener el símbolo `#` antes de éstos. |
| `[CHART_SETTINGS.BORDER_OPACITY ]` | `number` | `100` | Opacidad de los colores de borde de los elementos de la gráfica. Debe ser un número del `0` al `100` en donde el `0` representa la transparencia total y el `100` un color totalmente sólido sin transparencia. |
| `[CHART_SETTINGS.ASPECT_RATIO ]` | `number` - `(División)` | `1.5` | Relación de aspecto de la gráfica. Puede ser un número, como por ejemplo `1.5` o una división como `3/2` en donde el primer número o numerador representa la proporción horizontal y el segundo número o denominador representa la proporción vertical. Por ejemplo, `3/2` significa que, por cada 3 pixeles de ancho, la gráfica tendrá 2 pixeles de alto. |
| `[CHART_SETTINGS.Y_VALUE_TYPE ]` | `(Opción)` <br> <br> • `'numeric'`: Numérico <br> • `'monetary'`: Moneda nacional <br> • `'only name'` | `undefined` | Tipo de valor numérico que se representará en las etiquetas numéricas y el tooltip. |
| `[CHART_SETTINGS.X_VALUE_TYPE ]` | `(Opción)` <br> <br> • `'numeric'`: Numérico <br> • `'monetary'`: Moneda nacional <br> • `'only name'` | `undefined` | Tipo de valor numérico que se representará en las etiquetas numéricas y el tooltip. |
| `[CHART_SETTINGS.CATEGORY_STRATIFICATION_BY ]` | `string` | `undefined` | Variable categórica de estratificación para segmentar un conjunto de datos en varios conjuntos de datos para renderizarse en la gráfica. |
| `[CHART_SETTINGS.LABEL_COLUMNS ]` | `(Opción)` <br> <br> • `1`: Organización en forma de lista <br> • `2`: Organización en lista de 2 columnas <br> • `3`: Organización en lista de 3 columnas <br> • `4`: Organización en lista de 4 columnas <br> • `6`: Organización en lista de 6 columnas | `1` | Orientación y alineación de las etiquetas. |
| `[CHART_SETTINGS.LABELS_LIST ]` | `(Opción)` <br> <br> • `'default'`: Disposición por defecto | `'default'` | Orientación y alineación de cada contenedor de etiqueta. |
| `[CHART_SETTINGS.LEGEND_BOX ]` | `(Opción)` <br> <br> • `'circle'`: Cajas circulares <br> • `'rounded'`: Cajas cuadradas con bordes redondeados <br> • `'square'`: Cajas cuadradas | `'square'` | Apariencia de la caja de color de las etiquetas. |
| `[CHART_SETTINGS.MIN_BUBBLE_SIZE ]` | `number` | `2` | Tamaño mínimo de elementos de burbuja en gráfica de burbuja. |
| `[CHART_SETTINGS.MAX_BUBBLE_SIZE ]` | `number` | `16` | Tamaño máximo de elementos de burbuja en gráfica de burbuja. |
| `[CHART_SETTINGS.TRANSPOSED ]` | `boolean` | `false` | Transponer gráfica. Si se activa este parámetro, los datos de los ejes $X$ y $Y$ se invertirán. Esto sólo es válido para gráficas de barras, de dispersión y de burbuja. |

> La declaración de estos argumentos utiliza propiedades computadas y constantes. Para saber más, consultar las secciones [Destructuración y propiedades computadas](#destructuración-y-propiedades-computadas) y [Uso de constantes](#uso-de-constantes).

La función luce así:
```js
export const buildData = ({
    // Objeto de datos retornado del API
    data,
    // ID del contenedor de etiquetas
    labelsContainerID,
    // Tipo de gráfica
    [CHARTS_SETTINGS.CHART_TYPE]: chartType,
    // Variable de etiquetas de la gráfica de barras
    [CHARTS_SETTINGS.LABELS_NAME]: labelsName,
    // Variable de cada uno de los conjuntos de datos en el objeto
    [CHARTS_SETTINGS.DATASETS_NAMES]: datasetNames,
    // Nombres visibles en la gráfica para cada conjunto de datos
    [CHARTS_SETTINGS.LABELS]: labels,

    // Argumentos opcionales
    // Colores de fondo de los conjuntos de datos
    [CHARTS_SETTINGS.BACKGROUND_COLORS]: backgroundColors = chartSettings[ [CHARTS_SETTINGS.BACKGROUND_COLORS] ],
    // Opacidad de los colores de fondo
    [CHARTS_SETTINGS.BACKGROUND_OPACITY]: backgroundOpacity = chartSettings[ [CHARTS_SETTINGS.BACKGROUND_OPACITY] ],
    // Colores de borde de los conjuntos de datos
    [CHARTS_SETTINGS.BORDER_COLORS]: borderColors = chartSettings[ [CHARTS_SETTINGS.BORDER_COLORS] ],
    // Opacidad de los colores de borde
    [CHARTS_SETTINGS.BORDER_OPACITY]: borderOpacity = chartSettings[ [CHARTS_SETTINGS.BORDER_OPACITY] ],
    // Relación de aspecto de la gráfica
    [CHARTS_SETTINGS.ASPECT_RATIO]: aspectRatio = chartSettings[ [CHARTS_SETTINGS.ASPECT_RATIO] ],
    // Formateo en las etiquetas del eje X
    [CHARTS_SETTINGS.X_AXIS_FORMAT]: xAxisFormat = chartSettings[ [CHARTS_SETTINGS.X_AXIS_FORMAT] ],
    // Formateo en las etiquetas del eje Y
    [CHARTS_SETTINGS.Y_AXIS_FORMAT]: yAxisFormat = chartSettings[ [CHARTS_SETTINGS.Y_AXIS_FORMAT] ],
    // Variable de estratificación
    [CHARTS_SETTINGS.CATEGORY_STRATIFICATION_BY]: strat = chartSettings[ [CHARTS_SETTINGS.CATEGORY_STRATIFICATION_BY] ],
    // Estilo de contenedor de etiquetas
    [CHARTS_SETTINGS.LABEL_COLUMNS]: labelsDisplay = chartSettings[ [CHARTS_SETTINGS.LABEL_COLUMNS] ],
    // Estilo de lista de etiquetas
    [CHARTS_SETTINGS.LABELS_LIST]: labelsList = chartSettings[ [CHARTS_SETTINGS.LABELS_LIST] ],
    // Estilo de cajas de color de etiquetas
    [CHARTS_SETTINGS.LEGEND_BOX]: legendBox = chartSettings[ [CHARTS_SETTINGS.LEGEND_BOX] ],
    // Indicador de transposición de ejes en la gráfica
    [CHARTS_SETTINGS.TRANSPOSED]: transposed = chartSettings[ [CHARTS_SETTINGS.TRANSPOSED ]]
}) => {

    // Inicialización del contenedor de datos con formato dinámico
    let series = buildInitSeries[chartType]({ data, strat, datasetNames, labelsName, labels, transposed });

    // Mapeo de colores y opacidades preestablecidos a los conjuntos de datos
    series = mapColorsOnSeries({ series, chartType, backgroundColors, backgroundOpacity, borderColors, borderOpacity });

    // Inicialización del contenedor de opciones
    let options = buildInitOptions[chartType]({ series, chartType, labelsContainerID, aspectRatio, labelsDisplay, labelsList, legendBox, transposed });

    // Asignación de nombres de clase a elementos HTML internos de la gráfica
    options = assignCSSStyles({ options });

    // Formateo de etiquetas en la gráfica
    [ series, options ] = formatLabels[chartType]({ chartType, series, options, xAxisFormat, yAxisFormat, transposed });
    options = formatTooltip({ chartType, options, xAxisFormat, yAxisFormat })

    // Formateo de escalas en ejes
    options = scaleAxes({ chartType, series, options });

    // Retorno del objeto a ingresar al componente de graficación
    return { series, options };
}
```

>   A continuación se describe el funcionamiento paso a paso:
>   
>   ```js
>   // Inicialización del contenedor de datos con formato dinámico
>   let series = buildInitSeries[chartType]({ data, strat, datasetNames, labelsName, labels, transposed });
>   ```
>   
>   >   - Se inicializa el objeto de datos usando las funciones de construcción de datos. Dependiendo del tipo de gráfica, las posibles ejecuciones son:
>   >       - [Construcción de estructura de datos para gráficas de burbuja](#construcción-de-estructura-de-datos-para-gráficas-de-burbuja)
>   >       - [Construcción de estructura de datos para gráficas de dispersión](#construcción-de-estructura-de-datos-para-gráficas-de-dispersión)
>   >       - [Construcción de estructura de datos para gráficas cartesianas y radiales](#construcción-de-estructura-de-datos-para-gráficas-cartesianas-y-radiales)
>   
>   Se realiza el mapeo de los colores de fondo y borde además de algunas configuraciones adicionales por medio de la función de mapeo de colores en series:
>   ```js
>   // Mapeo de colores y opacidades preestablecidos a los conjuntos de datos
>   series = mapColorsOnSeries({ series, chartType, backgroundColors, backgroundOpacity, borderColors, borderOpacity });
>   ```
>   
>   >   Para saber más sobre el funcionamiento de la función `mapColorsOnSeries`, consultar la sección [Mapeo de colores en conjuntos de datos](#mapeo-de-colores-en-conjuntos-de-datos).
>   
>   Se crea el objeto base de opciones en base al tipo de gráfica:
>   ```js
>   // Inicialización del contenedor de opciones
>   let options = buildInitOptions[chartType]({ series, chartType, labelsContainerID, aspectRatio, labelsDisplay, labelsList, legendBox, transposed });
>   ```
>   
>   - Se inicializa el objeto de opciones usando las funciones de construcción de opciones. Dependiendo del tipo de gráfica, las posibles ejecuciones son:
>       - [Construcción de objeto de opciones para gráfica de burbujas](#construcción-de-objeto-de-opciones-para-gráfica-de-burbujas)
>       - [Construcción de objeto de opciones para gráficas cartesianas](#construcción-de-objeto-de-opciones-para-gráficas-cartesianas)
>       - [Construcción de objeto de opciones para gráficas radiales](#construcción-de-objeto-de-opciones-para-gráficas-radiales)
>       - [Construcción de objeto de opciones para gráficas de radar](#construcción-de-objeto-de-opciones-para-gráficas-de-radar)
>   
>   Se realiza la asignación de clases CSS para uso del plug-in `htmlLegend`:
>   ```js
>   // Asignación de nombres de clase a elementos HTML internos de la gráfica
>   options = assignCSSStyles({ options })
>   ```
>   
>   Se realiza el formateo de las etiquetas y el tooltip:
>   ```js
>   // Formateo de etiquetas en la gráfica
>   [ series, options ] = formatLabels[chartType]({ chartType, series, options, xAxisFormat, yAxisFormat, transposed });
>   options = formatTooltip({ chartType, options, xAxisFormat, yAxisFormat })
>   ```
>   
>   Se realiza la configuración en los ejes para evitar cortes en los ejes de forma indeseada:
>   ```js
>   // Formateo de escalas en ejes
>   options = scaleAxes({ chartType, series, options });
>   ```
>   
>   Se retornan los objetos `series` y `options` para su uso en el componente principal de gráfica.
>   ```js
>   // Retorno del objeto a ingresar al componente de graficación
>   return { series, options };
>   ```
>   
>   >   Para saber más sobre el componente princpal de gráfica, consultar la sección [Componente principal de gráfica](#componente-principal-de-gráfica)

----

# Funciones para componentes de gráficas

## Estratificación de conjunto de datos por variable categórica
- **Ubicación:** `dataFormatting.js`
- **Función:** `stratificateData`

Esta función recibe un conjunto de datos de entrada, un nombre de variable categórica, nombres de variables del conjunto de datos y un nombre de variable para grupo de etiquetas.

### Ejemplo de uso:
```js
// Conjunto de datos
let data = [
    {
        ammount: 7538.25,
        warehouse: "A1",
        month: "Enero",
    },
    {
        ammount: 6825.32,
        warehouse: "A2",
        month: "Enero",
    },
    {
        ammount: 6578.46,
        warehouse: "A1",
        month: "Febrero",
    },
    {
        ammount: 7750.82,
        warehouse: "A2",
        month: "Febrero",
    },
]
```

Su retorno es una lista de conjuntos de datos formateados para mapeo en un componente de gráfica.

```js
[datasets, labels] = stratificateData(
    data, // Conjunto de datos
    "warehouse", // Nombre de variable categórica
    ["amount"], // Nombres de variables del conjunto de datos en matriz
    "month", // Nombre de variable para grupo de etiquetas
)

// Salida 1 [datasets]
[
    {
        label: "A1",
        data: [7538.25, 6825.32]
    },
    {
        label: "A2",
        data: [6578.46, 7750.82]
    },
]
// Salida 2 [labels]
[
    "A1",
    "A2"
]
// Formato de retorno
[datasets, labels]
```

## Obtención de un único conjunto de datos
- **Ubicación:** `dataFormatting.js`
- **Función:** `getSingleDataset`

Esta función recibe una matriz de datos de entrada, un nombre de etiqueta única y un nombre de variable (Contenido en la matriz de datos de entrada) contenedora de los valores a graficar y formatea la información de entrada para mapearse como un único conjunto de datos en un componente de graficación.

Ejemplo de uso:
```js
const data = [
    {
        name: 'name 1',
        amount: 7654.28
    },
    {
        name: 'name 2',
        amount: 4683.72
    },
    {
        name: 'name 3',
        amount: 6729.85
    },
]

const datasets = getSingleDataset(
    data, // Objeto de datos
    "Ventas", // Nombre de etiqueta
    "amount" // Nombre de variable contenedora de valores a graficar
)
```

Esto retorna un conjunto de datos formateado para poder mapearse en un componente de graficación.

```js
//Salida
{
    label: "Ventas",
    data: [7654.28, 4683.72, 6729.85]
}
```

## Obtención de etiquetas de un conjunto de datos
- **Ubicación:** `dataFormatting.js`
- **Función:** `getLabels`

Esta función recibe un objeto de datos y un nombre de variable contenedora de valores categóricos que se utilizarán como etiquetas y retorna una matriz de etiquetas.

Ejemplo de uso:
```js
const data = [
    {
        name: 'name 1',
        amount: 7654.28
    },
    {
        name: 'name 2',
        amount: 4683.72
    },
    {
        name: 'name 3',
        amount: 6729.85
    },
]

const labels = getLabels(
    data, // Objeto de datos
    "name" // Nombre de variable categórica
)
```

Retorno de la función:
```js
['name 1', 'name 2', 'name 3']
```

----

# Construcción de estructuras de datos para gráficas

## Construcción de estructura de datos para gráficas de burbuja

Uso declarando el gráfico de burbujas en un `string`:
```js
const series = buildInitSeries['bubble']({ data, labelsName, transposed })
```

Uso declarando el gráfico de burbujas usando constante (recomendado):
```js
const series = buildInitSeries[CHART_TYPES.BUBBLE]({ data, labelsName, transposed })
```

>   Para saber más sobre el uso de constantes, leer las secciones [Uso de constantes](#uso-de-constantes) y [Tipos de gráficas](#tipos-de-gráficas)

La construcción de estructura de datos para gráficas de burbuja recibe los siguientes parámetros:

| Atributo | Tipo | Valor por defecto | Descripción |
|----------|------|-------------------|-------------|
| `data` | `object` | *Requerido | Objeto de datos a transformar y formatear. |
| `labelsName` | `string` | *Requerido | Nombre de la variable categórica a mostrar en las etiquetas. |
| `transposed` | `boolean` | `false` | Indicador de transposición de los ejes $X$ y $Y$ de la gráfica. |

**`data`: Estructura de datos entrante**

La estructura de datos entrante debe contener 3 variables numéricas distribuidas en una matriz, contenida dentro del valor categórico, que a su vez es el nombre de la llave del objeto de datos. La estructura debe ser de la siguiente forma:
```js
{
    producto1: [50.15, 37.68, 44.65],
    producto2: [10.14, 64.88, 80.16],
    producto3: [97.05, 46.56, 32.12],
}
```

**`labelsName`: Nombre de la variable categórica**

Este nombre representará las variables categóricas del conjunto de datos:
```js
const labelsName: "Productos"
```

**`transposed`: Transposición de la gráfica**

Este valor le indica al componente de la gráfica que muestre el eje $X$ en el eje $Y$ y el eje $Y$ en el eje $X$.

### Objeto resultante

La estructura de salida, en base a los valores de ejemplo, sería la siguiente:
```js
{
    datasets: [
        {
            data: [
                    {x: 50.15, y: 37.68, _custom: 44.65},
                    {x: 10.14, y: 64.88, _custom: 80.16},
                    {x: 97.05, y: 46.56, _custom: 32.12},
            ],
            label: "Productos"
        }
    ],
    labels: [
        "producto1",
        "producto2",
        "producto3",
    ]
}
```

Este objeto puede ser ingresado al argumento `series` del componente de gráfica de burbujas.

## Construcción de estructura de datos para gráficas de dispersión

Uso declarando el gráfico de burbujas en un `string`:
```js
const series = buildInitSeries['scatter']({ data, labelsName, transposed })
```

Uso declarando el gráfico de burbujas usando constante (recomendado):
```js
const series = buildInitSeries[CHART_TYPES.SCATTER]({ data, labelsName, transposed })
```

>   Para saber más sobre el uso de constantes, leer las secciones [Uso de constantes](#uso-de-constantes) y [Tipos de gráficas](#tipos-de-gráficas)

La construcción de estructura de datos para gráficas de burbuja recibe los siguientes parámetros:

| Atributo | Tipo | Valor por defecto | Descripción |
|----------|------|-------------------|-------------|
| `data` | `object` | *Requerido | Objeto de datos a transformar y formatear. |
| `labelsName` | `string` | *Requerido | Nombre de la variable categórica a mostrar en las etiquetas. |
| `transposed` | `boolean` | `false` | Indicador de transposición de los ejes $X$ y $Y$ de la gráfica. |

**`data`: Estructura de datos entrante**

La estructura de datos entrante debe contener 2 variables numéricas distribuidas en una matriz, contenida dentro del valor categórico, que a su vez es el nombre de la llave del objeto de datos. La estructura debe ser de la siguiente forma:
```js
{
    producto1: [50.15, 37.68],
    producto2: [10.14, 64.88],
    producto3: [97.05, 46.56],
}
```

**`labelsName`: Nombre de la variable categórica**

Este nombre representará las variables categóricas del conjunto de datos:
```js
const labelsName: "Productos"
```

**`transposed`: Transposición de la gráfica**

Este valor le indica al componente de la gráfica que muestre el eje $X$ en el eje $Y$ y el eje $Y$ en el eje $X$.

### Objeto resultante

La estructura de salida, en base a los valores de ejemplo, sería la siguiente:
```js
{
    datasets: [
        {
            data: [
                    {x: 50.15, y: 37.68},
                    {x: 10.14, y: 64.88},
                    {x: 97.05, y: 46.56},
            ],
            label: "Productos"
        }
    ],
    labels: [
        "producto1",
        "producto2",
        "producto3",
    ]
}
```

Este objeto puede ser ingresado al argumento `series` del componente de gráfica de dispersión.

## Construcción de estructura de datos para gráficas cartesianas y radiales

Uso declarando el gráfico de burbujas en un `string`:
```js
const series = buildInitSeries['bar']({ data, strat, datasetNames, labelsName, labels })
const series = buildInitSeries['line']({ data, strat, datasetNames, labelsName, labels })
const series = buildInitSeries['pie']({ data, strat, datasetNames, labelsName, labels })
const series = buildInitSeries['doughnut']({ data, strat, datasetNames, labelsName, labels })
const series = buildInitSeries['polarArea']({ data, strat, datasetNames, labelsName, labels })
const series = buildInitSeries['radar']({ data, strat, datasetNames, labelsName, labels })
```

Uso declarando el gráfico de burbujas usando constante (recomendado):
```js
const series = buildInitSeries[CHART_TYPES.BAR]({ data, strat, datasetNames, labelsName, labels })
const series = buildInitSeries[CHART_TYPES.LINE]({ data, strat, datasetNames, labelsName, labels })
const series = buildInitSeries[CHART_TYPES.PIE]({ data, strat, datasetNames, labelsName, labels })
const series = buildInitSeries[CHART_TYPES.DOUGHTNUT]({ data, strat, datasetNames, labelsName, labels })
const series = buildInitSeries[CHART_TYPES.POLAR_AREA]({ data, strat, datasetNames, labelsName, labels })
const series = buildInitSeries[CHART_TYPES.RADAR]({ data, strat, datasetNames, labelsName, labels })
```

>   Para saber más sobre el uso de constantes, leer las secciones [Uso de constantes](#uso-de-constantes) y [Tipos de gráficas](#tipos-de-gráficas)

La construcción de estructura de datos para gráficas de burbuja recibe los siguientes parámetros:

| Atributo | Tipo | Valor por defecto | Descripción |
|----------|------|-------------------|-------------|
| `data` | `object` | *Requerido | Objeto de datos a transformar y formatear. |
| `strat` | `string` | `undefined` | Variable categórica para estratificar un conjunto de datos en varios conjuntos de datos. |
| `datasetNames` | `array [string]` | *Requerido | Nombres de variables numéricas por las cuales se estratificará un conjunto de datos en varios conjuntos de datos. |
| `labelsName` | `string` | *Requerido | Nombre de la variable categórica a mostrar en las etiquetas. |

**`data`: Estructura de datos entrante**

La estructura de datos entrante debe ser un objeto de objetos, cada uno con las variables numéricas y categóricas disponibles para renderizar en el componente de gráfica. La estructura debe ser de la siguiente forma:
```js
{
    0: {
        warehouse: "Cabo San Lucas",
        month: "Enero",
        total_amount: 3448797.99
    },
    1: {
        warehouse: "Cabo San Lucas",
        month: "Febrero",
        total_amount: 3163207.88
    },
    2: {
        warehouse: "San José Del Cabo",
        month: "Enero",
        total_amount: 3738516.74
    },
    3: {
        warehouse: "San José Del Cabo",
        month: "Febrero",
        total_amount: 3223205.3
    }
}
```

**`strat`: Variable categórica para estratificar un conjunto de datos**

Este valor divide el conjunto de datos en subconjunto de datos, agrupándolos por su valor categórico en esta variable:
```js
const strat = "warehouse"
```

**`datasetNames`: Nombres de variables numéricas para estratificar un conjunto de datos**

Este valor divide el conjunto de datos en subconjunto de datos, agrupándolos por sus llaves de variables numéricas. No hay un ejemplo ilustrativo para este caso:
```js
const datasetNames: ["total_amount"]
```

**`labelsName`: Nombre de la variable categórica**

Este nombre representará las variables categóricas del conjunto de datos:
```js
const labelsName: "month"
```

### Objeto resultante

La estructura de salida, en base a los valores de ejemplo, sería la siguiente:
```js
{
    datasets: [
        {
            data: [
                    3448797.99,
                    3163207.88,
            ],
            label: "Cabo San Lucas"
        },
        {
            data: [
                    3738516.74,
                    3223205.3,
            ],
            label: "San José Del Cabo"
        },
    ],
    labels: [
        "Enero",
        "Febrero",
    ]
}
```

Este objeto puede ser ingresado al argumento `series` del componente de gráfica de dispersión.

----

# Construcción de estructuras de configuración para gráficas

## Construcción de objeto de opciones para gráfica de burbujas

Esta función construye el objeto de opciones para el componente de gráfica de burbujas.

Uso declarando la gráfica de burbujas en un `string`:
```js
// Declaración de los parámetros en un objeto para mejorar visualización
const params = {
    series,
    labelsContainerID,
    aspectRatio,
    labelsDisplay,
    labelsList,
    legendBox,
    transposed
}

const series = buildInitOptions['bubble']( params )
```

Uso declarando la gráfica de burbujas usando constante (recomendado):
```js
// Declaración de los parámetros en un objeto para mejorar visualización de este ejemplo
const params = {
    series,
    labelsContainerID,
    aspectRatio,
    labelsDisplay,
    labelsList,
    legendBox,
    transposed
}

const series = buildInitOptions[CHART_TYPES.BUBBLE]( params )
```

>   Para saber más sobre el uso de constantes, leer las secciones [Uso de constantes](#uso-de-constantes) y [Tipos de gráficas](#tipos-de-gráficas)

La construcción del objeto de opciones para gráficas de burbuja recibe los siguientes parámetros:

| Atributo | Tipo | Valor por defecto | Descripción |
|----------|------|-------------------|-------------|
| `series` | `object` | *Requerido | Objeto de datos transformado por la función de [construcción de estructura de datos para gráficas de burbuja](#construcción-de-estructura-de-datos-para-gráficas-de-burbuja) |
| `labelsContainerID` | `id` | *Requerido | ID del contenedor HTML `<div>` en donde se renderizarán las etiquetas del conjunto de datos. |
| `aspectRatio` | `number - (División)` | *Declarado en los ajustes predeterminados* | Relación de aspecto de la gráfica |
| `labelsDisplay` | `(Opción)` <br> <br> • `1`: Una columna <br> • `2`: 2 columnas <br> • `3`: 3 columnas <br> • `4`: 4 columnas <br> • `6`: 6 columnas | `1` | Número de columnas a ocupar por la lista de etiquetas. |
| `labelsList` | `(Opción)` <br> <br> • `'default'`: Orientación por default (Fila) | `'default'` | Orientación de los elementos dentro de la etiqueta |
| `legendBox` | `(Opción)` <br> <br> • `'circle'`: Cajas en forma de círculo <br> • `'rounded'`: Cajas cuadradas con bordes redondeados <br> • `'square'`: Cajas cuadradas | `'square'` | Forma de las cajas de color de las etiquetas. |
| `transposed` | `boolean` | `false` | Indicador de transposición de los ejes $X$ y $Y$ de la gráfica. |

**`series`: Objeto de datos transformado**

Este objeto de datos se obtiene de la función de [construcción de estructura de datos para gráficas de burbuja](#construcción-de-estructura-de-datos-para-gráficas-de-burbuja) y tiene la siguiente estructura:
```js
const series = {
    datasets: [
        {
            data: [
                    {x: 50.15, y: 37.68, _custom: 44.65},
                    {x: 10.14, y: 64.88, _custom: 80.16},
                    {x: 97.05, y: 46.56, _custom: 32.12},
            ],
            label: "Productos"
        }
    ],
    labels: [
        "producto1",
        "producto2",
        "producto3",
    ]
}
```

**`labelsContainerID`: ID del elemento HTML contenedor de etiquetas**

Este valor se obtiene de la ID asignada a un elemento HTML:
```jsx
const ChartComponent = ({...}) => {
    ...
    return (
        <div>
            {/* Elemento donde se renderizarán las gráficas */}
            <div id="labels-container"></div>
            {/* Componente de gráfica de ejemplo */}
            <Bar {...}>
        </div>
    )
}
```

En este caso, el ID sería `labels-container`:
```js
const labelsContainerID = "labels-container"
```

Retorno de la función:
```js
// Objeto de opciones preestablecidas para el componente de gráfica
{
    aspectRatio: ...,
    font: {
        color: ...
    },
    indexAxis: "x",
    plugins: {...},
    tooltip: {},
    radius: [...],
    scales: {
        x: {
            ticks: {...}
        },
        y: {
            ticks: {...}
        },
    }
}
```

Este objeto de opciones ya puede ingresarse como propiedad predefinida de `options` al componente de gráfica de burbujas.

## Construcción de objeto de opciones para gráficas cartesianas

Esta función construye el objeto de opciones para el componente de gráfica cartesiana.

Uso declarando la gráfica cartesiana en un `string`:
```js
// Declaración de los parámetros en un objeto para mejorar visualización
const params = {
    labelsContainerID,
    aspectRatio,
    labelsDisplay,
    labelsList,
    legendBox,
    transposed
}

const series = buildInitOptions['scatter']( params )
const series = buildInitOptions['bar']( params )
const series = buildInitOptions['line']( params )
```

Uso declarando la gráfica cartesiana usando constante (recomendado):
```js
// Declaración de los parámetros en un objeto para mejorar visualización de este ejemplo
const params = {
    labelsContainerID,
    aspectRatio,
    labelsDisplay,
    labelsList,
    legendBox,
    transposed
}

let series = buildInitOptions[CHART_TYPES.SCATTER]( params )
let series = buildInitOptions[CHART_TYPES.BAR]( params )
let series = buildInitOptions[CHART_TYPES.LINE]( params )
```

>   Para saber más sobre el uso de constantes, leer las secciones [Uso de constantes](#uso-de-constantes) y [Tipos de gráficas](#tipos-de-gráficas)

La construcción del objeto de opciones para gráficas cartesianas recibe los siguientes parámetros:

| Atributo | Tipo | Valor por defecto | Descripción |
|----------|------|-------------------|-------------|
| `labelsContainerID` | `id` | *Requerido | ID del contenedor HTML `<div>` en donde se renderizarán las etiquetas del conjunto de datos. |
| `aspectRatio` | `number - (División)` | *Declarado en los ajustes predeterminados* | Relación de aspecto de la gráfica |
| `labelsDisplay` | `(Opción)` <br> <br> • `1`: Una columna <br> • `2`: 2 columnas <br> • `3`: 3 columnas <br> • `4`: 4 columnas <br> • `6`: 6 columnas | `1` | Número de columnas a ocupar por la lista de etiquetas. |
| `labelsList` | `(Opción)` <br> <br> • `'default'`: Orientación por default (Fila) | `'default'` | Orientación de los elementos dentro de la etiqueta |
| `legendBox` | `(Opción)` <br> <br> • `'circle'`: Cajas en forma de círculo <br> • `'rounded'`: Cajas cuadradas con bordes redondeados <br> • `'square'`: Cajas cuadradas | `'square'` | Forma de las cajas de color de las etiquetas. |
| `transposed` | `boolean` | `false` | Indicador de transposición de los ejes $X$ y $Y$ de la gráfica. |

**`labelsContainerID`: ID del elemento HTML contenedor de etiquetas**

Este valor se obtiene de la ID asignada a un elemento HTML:
```jsx
const ChartComponent = ({...}) => {
    ...
    return (
        <div>
            {/* Elemento donde se renderizarán las gráficas */}
            <div id="labels-container"></div>
            {/* Componente de gráfica de ejemplo */}
            <Bar {...}>
        </div>
    )
}
```

En este caso, el ID sería `labels-container`:
```js
const labelsContainerID = "labels-container"
```

Retorno de la función:
```js
{
    aspectRatio: ...,
    font: {
        color: ...
    },
    indexAxis: "x",
    plugins: {...},
    scales: {
        x: {
            ticks: {...}
        },
        y: {
            ticks: {...}
        },
    }
}
```

Este objeto de opciones ya puede ingresarse como propiedad predefinida de `options` al componente de gráfica cartesiana.

## Construcción de objeto de opciones para gráficas radiales

Esta función construye el objeto de opciones para el componente de gráfica radial.

Uso declarando la gráfica radial en un `string`:
```js
// Declaración de los parámetros en un objeto para mejorar visualización
const params = {
    labelsContainerID,
    aspectRatio,
    labelsDisplay,
    labelsList,
    legendBox,
}

const series = buildInitOptions['pie']( params )
const series = buildInitOptions['doughnut']( params )
const series = buildInitOptions['polarArea']( params )
```

Uso declarando la gráfica radial usando constante (recomendado):
```js
// Declaración de los parámetros en un objeto para mejorar visualización de este ejemplo
const params = {
    labelsContainerID,
    aspectRatio,
    labelsDisplay,
    labelsList,
    legendBox,
}

let series = buildInitOptions[CHART_TYPES.PIE]( params )
let series = buildInitOptions[CHART_TYPES.DOUGHNUT]( params )
let series = buildInitOptions[CHART_TYPES.POLAR_AREA]( params )
```

>   Para saber más sobre el uso de constantes, leer las secciones [Uso de constantes](#uso-de-constantes) y [Tipos de gráficas](#tipos-de-gráficas)

La construcción del objeto de opciones para gráficas radiales recibe los siguientes parámetros:

| Atributo | Tipo | Valor por defecto | Descripción |
|----------|------|-------------------|-------------|
| `labelsContainerID` | `id` | *Requerido | ID del contenedor HTML `<div>` en donde se renderizarán las etiquetas del conjunto de datos. |
| `labelsDisplay` | `(Opción)` <br> <br> • `1`: Una columna <br> • `2`: 2 columnas <br> • `3`: 3 columnas <br> • `4`: 4 columnas <br> • `6`: 6 columnas | `1` | Número de columnas a ocupar por la lista de etiquetas. |
| `labelsList` | `(Opción)` <br> <br> • `'default'`: Orientación por default (Fila) | `'default'` | Orientación de los elementos dentro de la etiqueta |
| `legendBox` | `(Opción)` <br> <br> • `'circle'`: Cajas en forma de círculo <br> • `'rounded'`: Cajas cuadradas con bordes redondeados <br> • `'square'`: Cajas cuadradas | `'square'` | Forma de las cajas de color de las etiquetas. |
| `transposed` | `boolean` | `false` | Indicador de transposición de los ejes $X$ y $Y$ de la gráfica. |

**`labelsContainerID`: ID del elemento HTML contenedor de etiquetas**

Este valor se obtiene de la ID asignada a un elemento HTML:
```jsx
const ChartComponent = ({...}) => {
    ...
    return (
        <div>
            {/* Elemento donde se renderizarán las gráficas */}
            <div id="labels-container"></div>
            {/* Componente de gráfica de ejemplo */}
            <Bar {...}>
        </div>
    )
}
```

En este caso, el ID sería `labels-container`:
```js
const labelsContainerID = "labels-container"
```

Retorno de la función:
```js
{
    aspectRatio: ...,
    font: {
        color: ...
    },
    plugins: {...},
    scales: {
        r: {
            angleLines: {
                display: false
            },
            display: false,
            pointLabels: {},
            ticks: {...}
        }
    }
}
```

Este objeto de opciones ya puede ingresarse como propiedad predefinida de `options` al componente de gráfica radial.

## Construcción de objeto de opciones para gráficas de radar

Esta función construye el objeto de opciones para el componente de gráfica de radar.

Uso declarando la gráfica de radar en un `string`:
```js
// Declaración de los parámetros en un objeto para mejorar visualización
const params = {
    labelsContainerID,
    aspectRatio,
    labelsDisplay,
    labelsList,
    legendBox,
}

const series = buildInitOptions['radar']( params )
```

Uso declarando la gráfica de radar usando constante (recomendado):
```js
// Declaración de los parámetros en un objeto para mejorar visualización de este ejemplo
const params = {
    labelsContainerID,
    aspectRatio,
    labelsDisplay,
    labelsList,
    legendBox,
}

const series = buildInitOptions[CHART_TYPES.RADAR]( params )
```

>   Para saber más sobre el uso de constantes, leer las secciones [Uso de constantes](#uso-de-constantes) y [Tipos de gráficas](#tipos-de-gráficas)

La construcción del objeto de opciones para gráficas de burbuja recibe los siguientes parámetros:

| Atributo | Tipo | Valor por defecto | Descripción |
|----------|------|-------------------|-------------|
| `labelsContainerID` | `id` | *Requerido | ID del contenedor HTML `<div>` en donde se renderizarán las etiquetas del conjunto de datos. |
| `aspectRatio` | `number - (División)` | *Declarado en los ajustes predeterminados* | Relación de aspecto de la gráfica |
| `labelsDisplay` | `(Opción)` <br> <br> • `1`: Una columna <br> • `2`: 2 columnas <br> • `3`: 3 columnas <br> • `4`: 4 columnas <br> • `6`: 6 columnas | `1` | Número de columnas a ocupar por la lista de etiquetas. |
| `labelsList` | `(Opción)` <br> <br> • `'default'`: Orientación por default (Fila) | `'default'` | Orientación de los elementos dentro de la etiqueta |
| `legendBox` | `(Opción)` <br> <br> • `'circle'`: Cajas en forma de círculo <br> • `'rounded'`: Cajas cuadradas con bordes redondeados <br> • `'square'`: Cajas cuadradas | `'square'` | Forma de las cajas de color de las etiquetas. |

**`labelsContainerID`: ID del elemento HTML contenedor de etiquetas**

Este valor se obtiene de la ID asignada a un elemento HTML:
```jsx
const ChartComponent = ({...}) => {
    ...
    return (
        <div>
            {/* Elemento donde se renderizarán las gráficas */}
            <div id="labels-container"></div>
            {/* Componente de gráfica de ejemplo */}
            <Bar {...}>
        </div>
    )
}
```

En este caso, el ID sería `labels-container`:
```js
const labelsContainerID = "labels-container"
```

Retorno de la función:
```js
// Objeto de opciones preestablecidas para el componente de gráfica

{
    aspectRatio: ...,
    font: {
        color: ...
    },
    plugins: {...},
    scales: {
        r: {
            angleLines: {
                display: true
            },
            display: true,
            grid: {
                color: ...
            },
            pointLabels: {},
            ticks: {
                backdropColor: ...,
                callback: ...
            }
        }
    }
}
```

Este objeto de opciones ya puede ingresarse como propiedad predefinida de `options` al componente de gráfica de radar.

----

# Estilización de etiquetas de gráficas

## Estilización de etiquetas HTML de gráficas

Esta función recibe el objeto de opciones `options` y le asigna el objeto de estilización `chartElementsStyling` de etiquetas para uso del plug-in `htmlLegend`.

```js
export const assignCSSStyles = ({ options }) => {
    // Asignación de los estilos previamente configurados
    options.plugins.stylingCSS = chartElementsStyling

    // Retorno del nuevo objeto de opciones
    return options
}
```

>   - El objeto de estilización de etiquetas se añade como valor del plug-in `stylingCSS` que a su vez se encuentra como atributo del objeto `plugins` del objeto de opciones.

>   Para saber más sobre el plug-in `htmlLegend`, consultar la sección [htmlLegend: Desacoplamiento de etiquetas de conjuntos de datos](#htmllegend-desacoplamiento-de-etiquetas-de-conjuntos-de-datos)

----

# Formateo de etiquetas en los ejes de gráficas

## Funciones de formateo numérico y de texto

Este mapa de funciones contiene funciones de formateo clasificadas en su tipo de formateo y tipo de abreviación para números grandes respectivamente:
```js
export const labelsFormats = {

    // Formato numérico
    [LABELS_FORMATS_SETTINGS.NUMERIC]: {
        raw: (num) => (num),
        toThousands: (num) => (`${num / 1000} K`),
        toMillions: (num) => (`${num / 1000000} M`),
        type: Number,
    },

    // Formato en moneda nacional
    [LABELS_FORMATS_SETTINGS.MONETARY]: {
        raw: (num) => (num.toLocaleString('es-MX', {style: 'currency', currency: 'MXN'})),
        toThousands: (num) => (`$${num / 1000} K`),
        toMillions: (num) => (`$${num / 1000000} M`),
        type: Number,
    },

    // Mostrar sólo el primer nombre en un String antes del espacio
    [LABELS_FORMATS_SETTINGS.ONLY_NAME]: {
        raw: (text) => (text.slice(0, text.indexOf(" "))),
        type: String,
    },
}
```

Para tomar alguna de las funciones, se accede de la siguiente forma, sin incluir los paréntesis que indican la ejecución de la función:
```js
const callback = labelsFormats[<formatType>].raw
const callback = labelsFormats[<formatType>].toThousands
const callback = labelsFormats[<formatType>].toMillions
```

>   En el caso de las funciones para formateo de texto, sólo existen las de tipo `raw` pues no abrevian en miles o millones por obvias razones.
> Cada índice contiene un atributo `type` para un fácil uso en la validación del tipo de formateo que se realizará, en base al tipo de valor que formatea.

## Asignación de formateo numérico

Esta función recibe el objeto de datos para el componente de gráfica, un tipo de formateo numérico y el eje en donde se aplicará. Retorna una función para formateo de las etiquetas numéricas y también realiza una evaluación del valor máximo en los conjuntos de datos para determinar si requieren una abreviación, por ejemplo, números más grandes como `1234567` se mostrarán como `1.2 M`:
```js
const assignNumericLabelsFormatter = ({
    series,
    axisFormat,
    axis = undefined
}) => {

    // Creación de contenedor de número mayor
    let maxNumber = 0;

    // Iteración de conjuntos de datos
    series.datasets.forEach(
        (dataset) => {
            // Iteración por cada valor de cada conjunto de datos
            dataset.data.forEach(
                (value) => {
                    // Búsqueda del número mayor en todos los conjuntos de datos de la gráfica
                    if (axis) {
                        if (value[axis] > maxNumber ) {
                            maxNumber = value[axis]
                        }
                    } else {
                        if (value > maxNumber ) {
                            maxNumber = value
                        }
                    }
                }
            )
        }
    )

    // Asignación de abreviación por millones
    if ( maxNumber >= 1000000 ) {
        return labelsFormats[axisFormat].toMillions

    // Asignación de abreviación por miles
    } else if ( maxNumber >= 3000 ) {
        return labelsFormats[axisFormat].toThousands
    
    // Formateo por defecto
    } else {
        return labelsFormats[axisFormat].raw
    }
}
```

Los argumentos de entrada disponibles son:

| Atributo | Tipo | Valor por defecto | Descripción |
|----------|------|-------------------|-------------|
| `series` | `object` | *Requerido | Objeto de datos transformado por alguna de las siguietes funciones: <br> • [Construcción de estructura de datos para gráficas de burbuja](#construcción-de-estructura-de-datos-para-gráficas-de-burbuja)  <br> • [Construcción de estructura de datos para gráficas de dispersión](#construcción-de-estructura-de-datos-para-gráficas-de-dispersión) <br> • [Construcción de estructura de datos para gráficas cartesianas y radiales](#construcción-de-estructura-de-datos-para-gráficas-cartesianas-y-radiales) |
| `axisFormat` | `(Opción)` <br> <br> • `'numeric'`: Valor numérico con punto decimal <br> • `'monetary'`: Valor de tipo moneda nacional | *Requerido | Tipo de formateo numérico a aplicar. |
| `axis` | `string` | `undefined` | Eje a aplicar el formateo. Se omite este argumento en objetos de datos que no almacenen los valores numéricos en un eje sino en una matriz. |

>   A continuación se describe el funcionamiento paso a paso:
>   
>   Se crea una variable para almacenar el número mayor encontrado:
>   ```js
>   // Creación de contenedor de número mayor
>   let maxNumber = 0;
>   ```
>   
>   Se itera el objeto de datos por cada uno de sus conjuntos de datos para buscar el número mayor:
>   ```js
>   // Iteración de conjuntos de datos
>   series.datasets.forEach(
>       (dataset) => {
>           ...
>       }
>   )
>   ```
>   
>   >   Se hace una iteración por cada uno de los valores de cada uno de los conjuntos de datos:
>   >   ```js
>   >   // Iteración por cada valor de cada conjunto de datos
>   >   dataset.data.forEach(
>   >       (value) => {
>   >           ...
>   >       }
>   >   )
>   >   ```
>   >   
>   >   >   Se realiza una evaluación de si existe un valor en la variable `axis` y se ejecuta alguno de los dos bloques de código a continuación si es que la función se cumple o no:
>   >   >   ```js
>   >   >   // Búsqueda del número mayor en todos los conjuntos de datos de la gráfica
>   >   >   if (axis) {
>   >   >       if (value[axis] > maxNumber ) {
>   >   >           maxNumber = value[axis]
>   >   >       }
>   >   >   } else {
>   >   >       if (value > maxNumber ) {
>   >   >           maxNumber = value
>   >   >       }
>   >   >   }
>   >   >   ```
>   >   >   
>   >   >   >   Si la condición se cumple significa que cada uno de los valores no son números individuales sino objetos. Por lo tanto se ejecuta el siguiente bloque de código:
>   >   >   >   
>   >   >   >   ```js
>   >   >   >   if (value[axis] > maxNumber ) {
>   >   >   >       maxNumber = value[axis]
>   >   >   >   }
>   >   >   >   ```
>   >   >   >   >   - Se evalúa si el valor numérico en el índice de `axis` es mayor al número máximo registrado.
>   >   >   >   >   - Se ser así, este valor numérico sobreescribe el valor del número máximo en la variable `maxNumber`.
>   >   >   >   
>   >   >   >   Si la condición no se cumple significa que cada uno de los valores son numéricos y sólo se procede a evaluar cada uno:
>   >   >   >   ```js
>   >   >   >   else {
>   >   >   >       if (value > maxNumber ) {
>   >   >   >           maxNumber = value
>   >   >   >       }
>   >   >   >   }
>   >   >   >   ```
>   >   >   >   >   - Se evalúa si el valor es mayor al número máximo registrado.
>   >   >   >   >   - Se ser así, este valor sobreescribe el valor del número máximo en la variable `maxNumber`.
>   >   >   
>   >   >   Finaliza el ciclo `forEach` de iteración por valores.
>   >   
>   >   Finaliza el ciclo `forEach` de iteración por conjuntos de datos.
>   
>   Finalmente se valida el número máximo para determinar la función a retornar, en base al tipo de formateo numérico provisto:
>   ```js
>   // Asignación de abreviación por millones
>   if ( maxNumber >= 1000000 ) {
>       return labelsFormats[axisFormat].toMillions
>   
>   // Asignación de abreviación por miles
>   } else if ( maxNumber >= 3000 ) {
>       return labelsFormats[axisFormat].toThousands
>   
>   // Formateo por defecto
>   } else {
>       return labelsFormats[axisFormat].raw
>   }
>   ```
>   
>   >   - Si el valor máximo es igual o mayor a 1 millón se retorna la función encontrada en el atributo `toMillios` del mapa de funciones de formateo.
>   >   - De no cumplirse la primera condición se valida si el valor máximo es igual o mayor a 1 millón y se retorna la función encontrada en el atributo `toThousands` del mapa de funciones de formateo.
>   >   - De no cumplirse la segunda condición se retorna la función encontrada en el atributo `raw` del mapa de funciones de formateo, que es la función que sólo formatea el número sin abreviarlo.
>   
>   >   Para saber más sobre el mapa de funciones de formateo, consultar la sección [Funciones de formateo numérico y de texto](#funciones-de-formateo-numérico-y-de-texto).

## Asignación de formateo de etiquetas

Esta función recibe el objeto de datos para el componente de gráfica y un tipo de formateo numérico o de texto. Retorna una función para formateo de las etiquetas:
```js
const assignLabelsFormatter = ({
    series,
    axisFormat
}) => {

    // Inicialización de la función a retornar
    let labelsFormatter
    
    if ( labelsFormats[axisFormat].type === Number ) {
        labelsFormatter = assignNumericLabelsFormatter({ series, axisFormat })
    } else {
        labelsFormatter = labelsFormats[axisFormat].raw
    }

    // Retorno de la función
    return labelsFormatter
}
```

Los argumentos de entrada disponibles son:

| Atributo | Tipo | Valor por defecto | Descripción |
|----------|------|-------------------|-------------|
| `series` | `object` | *Requerido | Objeto de datos transformado por alguna de las siguietes funciones: <br> • [Construcción de estructura de datos para gráficas de burbuja](#construcción-de-estructura-de-datos-para-gráficas-de-burbuja)  <br> • [Construcción de estructura de datos para gráficas de dispersión](#construcción-de-estructura-de-datos-para-gráficas-de-dispersión) <br> • [Construcción de estructura de datos para gráficas cartesianas y radiales](#construcción-de-estructura-de-datos-para-gráficas-cartesianas-y-radiales) |
| `axisFormat` | `(Opción)` <br> <br> • `'numeric'`: Valor numérico con punto decimal <br> • `'monetary'`: Valor de tipo moneda nacional | *Requerido | Tipo de formateo numérico a aplicar. |

>   A continuación se describe el funcionamiento paso a paso:
>   
>   Se inicializa la variable para almacenar la función a retornar
>   ```js
>   let labelsFormatter
>   ```
>   
>   >   - Se valida si el tipo de formateo en el índice de funciones de formateo es numérico:
>   ```js
>   if ( labelsFormats[axisFormat].type === Number ) {
>       ...
>   } else {
>       ...
>   }
>   ```
>   
>   >   De cumplirse esta condición se ejecuta el siguiente bloque de código:
>   >   ```js
>   >   labelsFormatter = assignNumericLabelsFormatter({ series, axisFormat })
>   >   ```
>   >   
>   >   >   - Se realiza la llamada a la función de asignación de valores numéricos proporcionándole los siguientes argumentos:
>   >   >       - `series`: `series`.
>   >   >       - `axisFormat`: `xAxisFormat`.
>   >   
>   >   >   Para saber más sobre el uso de las funciones de formateo, consultar la sección [Asignación de formateo numérico](#asignación-de-formateo-numérico)
>   >   
>   >   De no cumplirse esta condición se asume que el formateo es de tipo texto y se ejecuta el siguiente bloque de código:
>   >   ```js
>   >   labelsFormatter = labelsFormats[axisFormat].raw
>   >   ```
>   >   
>   >   >   - Se asigna la función encontrada en el atributo `raw` del mapa de funciones de formateo de etiquetas de ejes en el índice del tipo de formateo.
>   >   
>   >   >   Para saber más sobre el mapa de funciones de formateo, consultar la sección [Funciones de formateo numérico y de texto](#funciones-de-formateo-numérico-y-de-texto).
>   >   
>   
>   Finalmente se retorna esta función:
>   ```js
>   return labelsFormatter
>   ```

## Formateo de etiquetas en ejes de gráfica de dispersión y burbujas

Esta función formatea la visualización de las etiquetas numéricas en los ejes $X$ y $Y$ de gráficas de dispersión y burbujas si éstas fueron provistas como argumento.

Uso declarando el tipo de gráfico en un `string`:
```js
formatLabels['bubble']({ series, options, xAxisFormat, yAxisFormat, transposed })
formatLabels['scatter']({ series, options, xAxisFormat, yAxisFormat, transposed })
```

Uso declarando el tipo de gráfico usando constante (recomendado):
```js
formatLabels[CHART_TYPES.BUBBLE]({ series, options, xAxisFormat, yAxisFormat, transposed })
formatLabels[CHART_TYPES.SCATTER]({ series, options, xAxisFormat, yAxisFormat, transposed })
```

Los argumentos de entrada disponibles son:

| Atributo | Tipo | Valor por defecto | Descripción |
|----------|------|-------------------|-------------|
| `series` | `object` | *Requerido | Objeto de datos transformado por alguna de las siguietes funciones: <br> • [Construcción de estructura de datos para gráficas de burbuja](#construcción-de-estructura-de-datos-para-gráficas-de-burbuja)  <br> • [Construcción de estructura de datos para gráficas de dispersión](#construcción-de-estructura-de-datos-para-gráficas-de-dispersión) <br> • [Construcción de estructura de datos para gráficas cartesianas y radiales](#construcción-de-estructura-de-datos-para-gráficas-cartesianas-y-radiales) |
| `options` | `object` | *Requerido | Objeto de opciones base construido por alguna de las siguientes funciones: <br> • [Construcción de objeto de opciones para gráfica de burbujas](#construcción-de-objeto-de-opciones-para-gráfica-de-burbujas) <br> • [Construcción de objeto de opciones para gráficas cartesianas](#construcción-de-objeto-de-opciones-para-gráficas-cartesianas) <br> • [Construcción de objeto de opciones para gráficas radiales](#construcción-de-objeto-de-opciones-para-gráficas-radiales) <br> • [Construcción de objeto de opciones para gráficas de radar](#construcción-de-objeto-de-opciones-para-gráficas-de-radar) |
| `xAxisFormat` | `(Opción)` <br> <br> • `'numeric'`: Valor numérico con punto decimal <br> • `'monetary'`: Valor de tipo moneda nacional <br> • `'only name'`: Sólo nombre | `undefined` | Tipo de formateo para las etiquetas del eje $X$. |
| `yAxisFormat` | `(Opción)` <br> <br> • `'numeric'`: Valor numérico con punto decimal <br> • `'monetary'`: Valor de tipo moneda nacional <br> • `'only name'`: Sólo nombre | `undefined` | Tipo de formateo para las etiquetas del eje $Y$. |
| `transposed` | `boolean` | `false` | Indicador de transposición de los ejes $X$ y $Y$ de la gráfica. |

Por dentro la función luce así:
```js
const formatScatterChartLabels = ({
    series,
    options,
    xAxisFormat,
    yAxisFormat,
    transposed
}) => {

    // Inicialización de las funciones formateadoras
    let xLabelsFormatter
    let yLabelsFormatter

    // Validación de indicación de gráfica transpuesta
    if ( transposed ) {
        // Formateo de etiquetas en ambos ejes
        if ( xAxisFormat ) {
            yLabelsFormatter = assignNumericLabelsFormatter({ series, axisFormat: xAxisFormat, axis: 'x' })
            options.scales.y.ticks.callback = yLabelsFormatter
        }
        if ( yAxisFormat ) {
            xLabelsFormatter = assignNumericLabelsFormatter({ series, axisFormat: yAxisFormat, axis: 'y' })
            options.scales.x.ticks.callback = xLabelsFormatter
        }
    } else {
        // Formateo de etiquetas en ambos ejes
        if ( xAxisFormat ) {
            xLabelsFormatter = assignNumericLabelsFormatter({ series, axisFormat: xAxisFormat, axis: 'x' })
            options.scales.x.ticks.callback = xLabelsFormatter
        }
        if ( yAxisFormat ) {
            yLabelsFormatter = assignNumericLabelsFormatter({ series, axisFormat: yAxisFormat, axis: 'y' })
            options.scales.y.ticks.callback = yLabelsFormatter
        }
    }

    // Retorno de los conjuntos de datos y objeto de opciones
    return [ series, options ]
}
```

>   A continuación se describe el funcionamiento paso a paso:
>   
>   Se inicializan las variables contenedoras de las funciones de formateo:
>   >   ```js
>   >       // Inicialización de las funciones formateadoras
>   >       let xLabelsFormatter
>   >       let yLabelsFormatter
>   >   ```
>   
>   Se valida si `transposed` es `true`:
>   ```js
>       // Validación de indicación de gráfica transpuesta
>       if ( transposed ) {
>           ...
>       } else {
>           ...
>       }
>   ```
>   
>   >   En caso de cumplirse la condición se ejecuta lo siguiente:
>   >   
>   >   >   **IMPORTANTE**: Leer cuidadosamente ya que la ejecución puede ser un poco antiintuitiva ya que se toman las declaraciones del formateo en un eje y los resultados se almacenan en la configuración del otro eje.
>   >   
>   >   ```js
>   >   // Formateo de etiquetas en ambos ejes
>   >   if ( xAxisFormat ) {
>   >       ...
>   >   }
>   >   if ( yAxisFormat ) {
>   >       ...
>   >   }
>   >   ```
>   >   
>   >   >   - Se valida si existe un tipo de formateo para el eje $X$. En caso de existir se ejecuta el siguiente bloque de código:
>   >   >   ```js
>   >   >   yLabelsFormatter = assignNumericLabelsFormatter({ series, axisFormat: xAxisFormat, axis: 'x' })
>   >   >   options.scales.y.ticks.callback = yLabelsFormatter
>   >   >   ```
>   >   >   
>   >   >   >   - Se realiza la llamada a la función de asignación de valores numéricos proporcionándole los siguientes argumentos:
>   >   >   >       - `series`: `series`.
>   >   >   >       - `axisFormat`: `xAxisFormat`
>   >   >   >       - `axis`: `'x'`
>   >   >   >   - El resultado del retorno de la función `assignNumericLabelsFormatter` se asigna al atributo `callback` del atributo `ticks` del eje $Y$ de la configuración de escalas del objeto de opciones.
>   >   >   
>   >   >   >   Para saber más sobre el mapa de funciones de formateo numérico, consular la sección [Funciones de formateo numérico y de texto](#funciones-de-formateo-numérico-y-de-texto).
>   >   >   
>   >   >   - Se valida si existe un tipo de formateo para el eje $Y$. En caso de existir se ejecuta el siguiente bloque de código:
>   >   >   ```js
>   >   >   xLabelsFormatter = assignNumericLabelsFormatter({ series, axisFormat: yAxisFormat, axis: 'y' })
>   >   >   options.scales.x.ticks.callback = xLabelsFormatter
>   >   >   ```
>   >   >   
>   >   >   >   - Se realiza la llamada a la función de asignación de valores numéricos proporcionándole los siguientes argumentos:
>   >   >   >       - `series`: `series`.
>   >   >   >       - `axisFormat`: `yAxisFormat`
>   >   >   >       - `axis`: `'y'`
>   >   >   >   - El resultado del retorno de la función `assignNumericLabelsFormatter` se asigna al atributo `callback` del atributo `ticks` del eje $X$ de la configuración de escalas del objeto de opciones.
>   >   >   
>   >   >   >   Para saber más sobre el mapa de funciones de formateo numérico, consular la sección [Funciones de formateo numérico y de texto](#funciones-de-formateo-numérico-y-de-texto).
>   >   
>   >   En caso de no cumplirse la condición se ejecuta lo siguiente:
>   >   
>   >   ```js
>   >   // Formateo de etiquetas en ambos ejes
>   >   if ( xAxisFormat ) {
>   >       ...
>   >   }
>   >   if ( yAxisFormat ) {
>   >       ...
>   >   }
>   >   ```
>   >   
>   >   >   - Se valida si existe un tipo de formateo para el eje $X$. En caso de existir se ejecuta el siguiente bloque de código:
>   >   >   ```js
>   >   >   xLabelsFormatter = assignNumericLabelsFormatter({ series, axisFormat: xAxisFormat, axis: 'x' })
>   >   >   options.scales.x.ticks.callback = xLabelsFormatter
>   >   >   ```
>   >   >   
>   >   >   >   - Se realiza la llamada a la función de asignación de valores numéricos proporcionándole los siguientes argumentos:
>   >   >   >       - `series`: `series`.
>   >   >   >       - `axisFormat`: `xAxisFormat`
>   >   >   >       - `axis`: `'x'`
>   >   >   >   - El resultado del retorno de la función `assignNumericLabelsFormatter` se asigna al atributo `callback` del atributo `ticks` del eje $X$ de la configuración de escalas del objeto de opciones.
>   >   >   
>   >   >   >   Para saber más sobre el mapa de funciones de formateo numérico, consular la sección [Funciones de formateo numérico y de texto](#funciones-de-formateo-numérico-y-de-texto).
>   >   >   
>   >   >   - Se valida si existe un tipo de formateo para el eje $Y$. En caso de existir se ejecuta el siguiente bloque de código:
>   >   >   ```js
>   >   >   yLabelsFormatter = assignNumericLabelsFormatter({ series, axisFormat: yAxisFormat, axis: 'y' })
>   >   >   options.scales.y.ticks.callback = yLabelsFormatter
>   >   >   ```
>   >   >   
>   >   >   >   - Se realiza la llamada a la función de asignación de valores numéricos proporcionándole los siguientes argumentos:
>   >   >   >       - `series`: `series`.
>   >   >   >       - `axisFormat`: `yAxisFormat`
>   >   >   >       - `axis`: `'y'`
>   >   >   >   - El resultado del retorno de la función `assignNumericLabelsFormatter` se asigna al atributo `callback` del atributo `ticks` del eje $Y$ de la configuración de escalas del objeto de opciones.
>   >   >   
>   >   >   >   Para saber más sobre el mapa de funciones de formateo numérico, consular la sección [Funciones de formateo numérico y de texto](#funciones-de-formateo-numérico-y-de-texto).

## Formateo de etiquetas en ejes de gráficas cartesianas

Esta función formatea la visualización de las etiquetas numéricas y categóricas en los ejes $X$ y $Y$ de gráficas de barras y líneas si éstas fueron provistas como argumento. Para los valores numéricos establece una función en el objeto de opciones mientras que para los valores categóricos los formatea directamente en el objeto de datos.

Uso declarando el tipo de gráfico en un `string`:
```js
formatLabels['bar']({ series, options, xAxisFormat, yAxisFormat, transposed })
formatLabels['line']({ series, options, xAxisFormat, yAxisFormat, transposed })
```

Uso declarando el tipo de gráfico usando constante (recomendado):
```js
formatLabels[CHART_TYPES.BAR]({ series, options, xAxisFormat, yAxisFormat, transposed })
formatLabels[CHART_TYPES.LINE]({ series, options, xAxisFormat, yAxisFormat, transposed })
```

Los argumentos de entrada disponibles son:

| Atributo | Tipo | Valor por defecto | Descripción |
|----------|------|-------------------|-------------|
| `series` | `object` | *Requerido | Objeto de datos transformado por alguna de las siguietes funciones: <br> • [Construcción de estructura de datos para gráficas de burbuja](#construcción-de-estructura-de-datos-para-gráficas-de-burbuja)  <br> • [Construcción de estructura de datos para gráficas de dispersión](#construcción-de-estructura-de-datos-para-gráficas-de-dispersión) <br> • [Construcción de estructura de datos para gráficas cartesianas y radiales](#construcción-de-estructura-de-datos-para-gráficas-cartesianas-y-radiales) |
| `options` | `object` | *Requerido | Objeto de opciones base construido por alguna de las siguientes funciones: <br> • [Construcción de objeto de opciones para gráfica de burbujas](#construcción-de-objeto-de-opciones-para-gráfica-de-burbujas) <br> • [Construcción de objeto de opciones para gráficas cartesianas](#construcción-de-objeto-de-opciones-para-gráficas-cartesianas) <br> • [Construcción de objeto de opciones para gráficas radiales](#construcción-de-objeto-de-opciones-para-gráficas-radiales) <br> • [Construcción de objeto de opciones para gráficas de radar](#construcción-de-objeto-de-opciones-para-gráficas-de-radar) |
| `xAxisFormat` | `(Opción)` <br> <br> • `'numeric'`: Valor numérico con punto decimal <br> • `'monetary'`: Valor de tipo moneda nacional <br> • `'only name'`: Sólo nombre | `undefined` | Tipo de formateo para las etiquetas del eje $X$. |
| `yAxisFormat` | `(Opción)` <br> <br> • `'numeric'`: Valor numérico con punto decimal <br> • `'monetary'`: Valor de tipo moneda nacional <br> • `'only name'`: Sólo nombre | `undefined` | Tipo de formateo para las etiquetas del eje $Y$. |
| `transposed` | `boolean` | `false` | Indicador de transposición de los ejes $X$ y $Y$ de la gráfica. |

Por dentro la función luce así:
```js
const formatCartesianChartLabels = ({
    series,
    options,
    xAxisFormat,
    yAxisFormat,
    transposed
}) => {

    let yLabelsFormatter
    let xLabelsFormatter

    // Validación de indicación de gráfica transpuesta
    if ( transposed ) {
        // Formateo de etiquetas en el eje X
        if ( yAxisFormat ) {
            xLabelsFormatter = assignLabelsFormatter({ series, axisFormat: yAxisFormat })
            options.scales.x.ticks.callback = xLabelsFormatter
        }

        // Formateo de etiquetas en el eje Y
        if ( xAxisFormat ) {
            series.labels = series.labels.map(
                (value) => {
                    return labelsFormats[xAxisFormat].raw(value)
                }
            )
        }
    } else {
        // Formateo de etiquetas en el eje X
        if ( xAxisFormat ) {
            series.labels = series.labels.map(
                (value) => {
                    return labelsFormats[xAxisFormat].raw(value)
                }
            )
        }

        // Formateo de etiquetas en el eje Y
        if ( yAxisFormat ) {
            yLabelsFormatter = assignLabelsFormatter({ series, axisFormat: yAxisFormat })
            options.scales.y.ticks.callback = yLabelsFormatter
        }
    }

    // Retorno de los conjuntos de datos y objeto de opciones
    return [ series, options ]
}
```

>   A continuación se describe el funcionamiento paso a paso:
>   
>   Se inicializan las variables contenedoras de las funciones de formateo:
>   >   ```js
>   >       // Inicialización de las funciones formateadoras
>   >       let xLabelsFormatter
>   >       let yLabelsFormatter
>   >   ```
>   
>   Se valida si `transposed` es `true`:
>   ```js
>       // Validación de indicación de gráfica transpuesta
>       if ( transposed ) {
>           ...
>       } else {
>           ...
>       }
>   ```
>   
>   >   En caso de cumplirse la condición se ejecuta lo siguiente:
>   >   
>   >   >   **IMPORTANTE**: Leer cuidadosamente ya que la ejecución puede ser un poco antiintuitiva ya que se toman las declaraciones del formateo en un eje y los resultados se almacenan en la configuración del otro eje.
>   >   
>   >   ```js
>   >   // Formateo de etiquetas en el eje X
>   >   if ( xAxisFormat ) {
>   >       ...
>   >   }
>   >   // Formateo de etiquetas en el eje y
>   >   if ( yAxisFormat ) {
>   >       ...
>   >   }
>   >   ```
>   >   
>   >   >   - Se valida si existe un tipo de formateo para el eje $X$. En caso de existir se ejecuta el siguiente bloque de código:
>   >   >   >   ```js
>   >   >   >   xLabelsFormatter = assignLabelsFormatter({ series, axisFormat: yAxisFormat })
>   >   >   >   options.scales.x.ticks.callback = xLabelsFormatter
>   >   >   >   ```
>   >   >   >   - Se realiza la llamada a la función de asignación de formateo de etiquetas proporcionándole los siguientes argumentos:
>   >   >   >       - `series`: `series`.
>   >   >   >       - `axisFormat`: `yAxisFormat`
>   >   >   >   - El resultado del retorno de la función `assignLabelsFormatter` se asigna al atributo `callback` del atributo `ticks` del eje $X$ de la configuración de escalas del objeto de opciones.
>   >   >   
>   >   >   - Se valida si existe un tipo de formateo para el eje $Y$. En caso de existir se ejecuta el siguiente bloque de código:
>   >   >   
>   >   >   >   Se hace un mapeo de cada uno de los valores de la matriz de etiquetas del objeto de datos:
>   >   >   >   ```js
>   >   >   >   series.labels = series.labels.map(
>   >   >   >       (value) => {
>   >   >   >           ...
>   >   >   >       }
>   >   >   >   )
>   >   >   >   ```
>   >   >   >   
>   >   >   >   >   Por cada una de las etiquetas se retorna el resultado de la siguiente ejecución:
>   >   >   >   >   ```js
>   >   >   >   >   return labelsFormats[xAxisFormat].raw(value)
>   >   >   >   >   ```
>   >   >   >   >   
>   >   >   >   >   >   - Se formatea cada uno de los valores usando la función encontrada en el atributo `raw` del mapa de funciones de formateo en el índice del tipo de formateo.
>   >   
>   >   En caso de no cumplirse la condición se ejecuta lo siguiente:
>   >   
>   >   ```js
>   >   // Formateo de etiquetas en el eje X
>   >   if ( xAxisFormat ) {
>   >       ...
>   >   }
>   >   // Formateo de etiquetas en el eje y
>   >   if ( yAxisFormat ) {
>   >       ...
>   >   }
>   >   ```
>   >   
>   >   >   - Se valida si existe un tipo de formateo para el eje $X$. En caso de existir se ejecuta el siguiente bloque de código:
>   >   >   
>   >   >   >   Se hace un mapeo de cada uno de los valores de la matriz de etiquetas del objeto de datos:
>   >   >   >   ```js
>   >   >   >   series.labels = series.labels.map(
>   >   >   >       (value) => {
>   >   >   >           ...
>   >   >   >       }
>   >   >   >   )
>   >   >   >   ```
>   >   >   >   
>   >   >   >   >   Por cada una de las etiquetas se retorna el resultado de la siguiente ejecución:
>   >   >   >   >   ```js
>   >   >   >   >   return labelsFormats[xAxisFormat].raw(value)
>   >   >   >   >   ```
>   >   >   >   >   
>   >   >   >   >   >   - Se formatea cada uno de los valores usando la función encontrada en el atributo `raw` del mapa de funciones de formateo en el índice del tipo de formateo.
>   >   >   - Se valida si existe un tipo de formateo para el eje $Y$. En caso de existir se ejecuta el siguiente bloque de código:
>   >   >   >   ```js
>   >   >   >   xLabelsFormatter = assignLabelsFormatter({ series, axisFormat: yAxisFormat })
>   >   >   >   options.scales.x.ticks.callback = xLabelsFormatter
>   >   >   >   ```
>   >   >   >   - Se realiza la llamada a la función de asignación de formateo de etiquetas proporcionándole los siguientes argumentos:
>   >   >   >       - `series`: `series`.
>   >   >   >       - `axisFormat`: `yAxisFormat`
>   >   >   >   - El resultado del retorno de la función `assignLabelsFormatter` se asigna al atributo `callback` del atributo `ticks` del eje $X$ de la configuración de escalas del objeto de opciones.
>   
>   Finalmente se realiza el retorno del objeto de datos y el objeto de opciones:
>   ```js
>   return [ series, options ]
>   ```

## Formateo de etiquetas en ejes de gráficas radiales

No hace nada.

Uso declarando el tipo de gráfico en un `string`:
```js
formatLabels['pie']({ series, options })
formatLabels['doughnut']({ series, options })
formatLabels['polarArea']({ series, options })
```

Uso declarando el tipo de gráfico usando constante (recomendado):
```js
formatLabels[CHART_TYPES.PIE]({ series, options })
formatLabels[CHART_TYPES.DOUGHNUT]({ series, options })
formatLabels[CHART_TYPES.POLAR_AREA]({ series, options })
```

Los argumentos de entrada disponibles son:

| Atributo | Tipo | Valor por defecto | Descripción |
|----------|------|-------------------|-------------|
| `series` | `object` | *Requerido | Objeto de datos transformado por alguna de las siguietes funciones: <br> • [Construcción de estructura de datos para gráficas de burbuja](#construcción-de-estructura-de-datos-para-gráficas-de-burbuja)  <br> • [Construcción de estructura de datos para gráficas de dispersión](#construcción-de-estructura-de-datos-para-gráficas-de-dispersión) <br> • [Construcción de estructura de datos para gráficas cartesianas y radiales](#construcción-de-estructura-de-datos-para-gráficas-cartesianas-y-radiales) |
| `options` | `object` | *Requerido | Objeto de opciones base construido por alguna de las siguientes funciones: <br> • [Construcción de objeto de opciones para gráfica de burbujas](#construcción-de-objeto-de-opciones-para-gráfica-de-burbujas) <br> • [Construcción de objeto de opciones para gráficas cartesianas](#construcción-de-objeto-de-opciones-para-gráficas-cartesianas) <br> • [Construcción de objeto de opciones para gráficas radiales](#construcción-de-objeto-de-opciones-para-gráficas-radiales) <br> • [Construcción de objeto de opciones para gráficas de radar](#construcción-de-objeto-de-opciones-para-gráficas-de-radar) |

```js
const formatRadialChartsLabels = ({
    series,
    options,
}) => {

    // Retorno de los conjuntos de datos y objeto de opciones
    return [ series, options ]
}
```

>   No hace nada.

## Formateo de etiquetas en ejes de gráficas de radar

Esta función formatea la visualización de las etiquetas numéricas y categóricas en el eje radial y los ángulos de gráficas de radar si éstas fueron provistas como argumento. Para los valores numéricos establece una función en el objeto de opciones mientras que para los valores categóricos los formatea directamente en el objeto de datos.

Uso declarando el tipo de gráfico en un `string`:
```js
formatLabels['radar']({ series, options, xAxisFormat, yAxisFormat, transposed })
```

Uso declarando el tipo de gráfico usando constante (recomendado):
```js
formatLabels[CHART_TYPES.RADAR]({ series, options, xAxisFormat, yAxisFormat, transposed })
```

Los argumentos de entrada disponibles son:

| Atributo | Tipo | Valor por defecto | Descripción |
|----------|------|-------------------|-------------|
| `series` | `object` | *Requerido | Objeto de datos transformado por alguna de las siguietes funciones: <br> • [Construcción de estructura de datos para gráficas de burbuja](#construcción-de-estructura-de-datos-para-gráficas-de-burbuja)  <br> • [Construcción de estructura de datos para gráficas de dispersión](#construcción-de-estructura-de-datos-para-gráficas-de-dispersión) <br> • [Construcción de estructura de datos para gráficas cartesianas y radiales](#construcción-de-estructura-de-datos-para-gráficas-cartesianas-y-radiales) |
| `options` | `object` | *Requerido | Objeto de opciones base construido por alguna de las siguientes funciones: <br> • [Construcción de objeto de opciones para gráfica de burbujas](#construcción-de-objeto-de-opciones-para-gráfica-de-burbujas) <br> • [Construcción de objeto de opciones para gráficas cartesianas](#construcción-de-objeto-de-opciones-para-gráficas-cartesianas) <br> • [Construcción de objeto de opciones para gráficas radiales](#construcción-de-objeto-de-opciones-para-gráficas-radiales) <br> • [Construcción de objeto de opciones para gráficas de radar](#construcción-de-objeto-de-opciones-para-gráficas-de-radar) |
| `xAxisFormat` | `(Opción)` <br> <br> • `'numeric'`: Valor numérico con punto decimal <br> • `'monetary'`: Valor de tipo moneda nacional <br> • `'only name'`: Sólo nombre | `undefined` | Tipo de formateo para las etiquetas del eje $X$. |
| `yAxisFormat` | `(Opción)` <br> <br> • `'numeric'`: Valor numérico con punto decimal <br> • `'monetary'`: Valor de tipo moneda nacional <br> • `'only name'`: Sólo nombre | `undefined` | Estandarización del eje radial para facilitar su uso. Tipo de formateo para las etiquetas del eje radial. |

Por dentro la función luce así:
```js
const formatRadarChartLabels = ({
    series,
    options,
    xAxisFormat,
    yAxisFormat
}) => {

    // Definción del formateador de etiquetas numéricas
    if ( yAxisFormat ) {
        const yLabelsFormatter = assignLabelsFormatter({ series, axisFormat: yAxisFormat })
        options.scales.r.ticks.callback = yLabelsFormatter 
    }

    // Formateo de etiquetas en el eje X
    if ( xAxisFormat ) {
        options.scales.r.pointLabels.callback = labelsFormats[xAxisFormat].raw
    }

    // Retorno de los conjuntos de datos y objeto de opciones
    return [ series, options ]
}
```

>   A continuación se describe el funcionamiento paso a paso:
>   
>   ```js
>   // Definción del formateador de etiquetas numéricas
>   if ( yAxisFormat ) {
>       ...
>   }
>   ```
>   
>   >   - Se valida si existe un tipo de formateo para el eje radial representado como eje $Y$. En caso de existir se ejecuta el siguiente bloque de código:
>   >   ```js
>   >   const yLabelsFormatter = assignLabelsFormatter({ series, axisFormat: yAxisFormat })
>   >   options.scales.r.ticks.callback = xLabelsFormatter
>   >   ```
>   >   
>   >   >   - Se realiza la llamada a la función de asignación de formateo de etiquetas proporcionándole los siguientes argumentos:
>   >   >       - `series`: `series`.
>   >   >       - `axisFormat`: `yAxisFormat`
>   >   >   - El resultado del retorno de la función `assignLabelsFormatter` se asigna al atributo `callback` del atributo `ticks` del eje radial de la configuración de escalas del objeto de opciones.
>   >   
>   
>   ```js
>   // Formateo de etiquetas en el eje X
>   if ( xAxisFormat ) {
>       options.scales.r.pointLabels.callback = labelsFormats[xAxisFormat].raw
>   }
>   ```
>   >   - Se valida si existe un tipo de formateo para el eje $X$. En caso de existir se ejecuta el siguiente bloque de código:
>   >   
>   >   >   Se hace un mapeo de cada uno de los valores de la matriz de etiquetas del objeto de datos:
>   >   >   ```js
>   >   >   options.scales.r.pointLabels.callback = labelsFormats[xAxisFormat].raw
>   >   >   ```
>   >   >   
>   >   >   >   - Se asigna la función encontrada en el atributo `raw` del mapa de funciones de formateo en el índice del tipo de formateo al atributo `callback` del atributo `pointLabels` del eje radial de la configuración de escalas del objeto de opciones.
>   
>   Finalmente se realiza el retorno del objeto de datos y el objeto de opciones:
>   ```js
>   return [ series, options ]
>   ```

----

# Plug-ins de Charts.js

La librería de Charts.js ofrece una integración para plug-ins personalizados, independientemente de los plug-ins que utiliza para mostrar elementos en sus componentes de gráficas. Esto incrementa potencialmente el nivel de personalización y funcionalidad además de que permite cambiar el comportamiento de las gráficas a nivel visual o funcional. Para saber más sobre cómo funcionan los plug-ins personalizados, consultar la [documentación de Charts.js sobre plug-ins](https://www.chartjs.org/docs/latest/developers/plugins.html).

## htmlLegend: Desacoplamiento de etiquetas de conjuntos de datos

Este plug-in personalizado permite desacoplar las etiquetas a un contenedor `div` separado en cualquier parte del documento de la página. Esto permite modularizar el componente de mejor manera y eficientar el orden y distribución de los elementos en la página.

### Integración

Antes de comenzar a utilizar este plug-in se debe realizar el registro en la clase `ChartsJS` junto con los plug-ins integrados de Charts.js.
```js
// Importación de los plug-ins nativos de Charts.js
import {
    Chart as ChartJS,
    ArcElement,
    BarElement,
    CategoryScale,
} from 'chart.js';

// Importación del plug-in personalizado
import htmlLegend from '../plugins/htmlLegend';

// Registro de los plug-ins
ChartJS.register(
    ArcElement,
    BarElement,
    CategoryScale,
    htmlLegend,
)
```

### Configuración

La configuración del plug-in se realiza a través del objeto de opciones provisto al componente de la gráfica en donde se integrará. También se debe desactivar la visualización de las etiquetas provistas por el plug-in nativo de Charts.js `Legend` especificándolo en el atributo `display` con el valor `false` en la llave del nombre del objeto de plug-ins. La estructura es la siguiente:
```js
options.plugins = {
    htmlLegend: {...}, // Configuración del plug-in
    legend: {
        display: false, // Desactivación de muestra de etiquetas integradas en la gráfica
    },
    // Configuración de otros plug-ins aquí
}
```

Para renderizar las etiquetas en un elemento HTML externo al elemento `canvas` en donde se renderiza la gráfica, es necesario proveer el ID del elemento HTML en donde se realizará esta renderización. Este ID se provee en el atributo `containerID` como se muestra a continuación:
```js
options.plugins = {
    htmlLegend: {
        containerID: 'legend-container'
    },
    ...
}
```

Los parámetros de configuración de etiquetas se deben proveer dentro del atributo `config` como se muestra a continuación:

```js
options.plugins = {
    htmlLegend: {
        containerID: 'legend-container'
        config: {
            labelsDisplay: ...
            labelsList: ...
            legendBox: ...
        }
    },
    ...
}
```

Los parámetros disponibles se listan a continuación:

| Atributo | Tipo | Valor por defecto | Descripción |
|----------|------|-------------------|-------------|
| `labelsDisplay` | `(Opción)` <br> <br> • `1`: Una columna <br> • `2`: 2 columnas <br> • `3`: 3 columnas <br> • `4`: 4 columnas <br> • `6`: 6 columnas | `1` | Número de columnas a ocupar por la lista de etiquetas. |
| `labelsList` | `(Opción)` <br> <br> • `'default'`: Orientación por default (Fila) | `'default'` | Orientación de los elementos dentro de la etiqueta |
| `legendBox` | `(Opción)` <br> <br> • `'circle'`: Cajas en forma de círculo <br> • `'rounded'`: Cajas cuadradas con bordes redondeados <br> • `'square'`: Cajas cuadradas | `'square'` | Forma de las cajas de color de las etiquetas. |

### Funcionamiento

A continuación se detalla el funcionamiento del plug-in a nivel código. Cabe aclarar que, antes de leer la documentación del funcionamiento del plug-in se recomienda estar familiarizado con el funcionamiento de los plug-ins, descrito en la [documentación de Charts.js sobre plug-ins](https://www.chartjs.org/docs/latest/developers/plugins.html).

**Conexión con el API de Charts.js**

Este plug-in se ejecuta únicamente por medio del método provisto por la interfaz del API de Charts.js `afterUpdate` declarado en el objeto que se registra. Este método recibe tres parámetros:

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `chart` | `Chart` | Instancia de la gráfica |
| `args` | `object` | Argumentos de llamada del método |
| `options` | `object` | Objeto de opciones de la gráfica |

La declaración del plug-in se realiza de esta manera:
```js
const htmlLegend = {
    id: 'htmlLegend',
    afterUpdate(chart, args, options) {
        ...
    }
}
```

>   Dentro del objeto de declaración del plug-in se debe proveer una ID del plug-in la cual se utiliza dentro del atributo de plug-ins para su configuración descrito anteriormente en la sección de [configuración](#configuración). Nótese que la declaración de la función `afterUpdate` se utiliza también como nombre del atributo del objeto, así no es necesario declarar el nombre dos veces o declarar la función con otro nombre o dejarla como flecha.

**Estructura del plug-in**

El plug-in cuenta con 3 funciones principales dentro de éste:

- La primera función crea un elemento `<ul>` que incrustará a un `<div>` cuya ID se declara en el objeto de opciones descrito en la sección de [configuración](#configuración).
- La segunda función se encuentra en el bloque de ejecución de una estructura de control `if` que valida si el elemento `<ul>` no cuenta con elementos hijos, se ejecuta si la validación resulta en `true` y se encarga de crear elementos hijos dentro del elemento `<ul>` en caso de no existir elementos hijos:
- La tercera función se encuentra dentro de la estructura de control `if` que se ejecuta si la validación resulta en `false` y se encarga de actualizar estos elementos hijos.
```js
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
```

**Creación u obtención del elemento de lista del contenedor `<div>`**

La función `getOrCreateLegendList` crea u obtiene el elemento `<ul>` del documento de la página en el cual se renderizarán las etiquetas para mostrar u ocultar las categorías en un conjunto de datos o un conjunto de datos en gráficas con más de un conjunto de datos.

```js
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
```

>   A continuación se describe el funcionamiento paso a paso:
>   
>   ```js
>   // Extracción del elemento contenedor de etiquetas
>   const legendContainer = document.getElementById(id);
>   // Extracción de la lista de etiquetas
>   let labelsContainer = legendContainer.querySelector('ul');
>   ```
>  
>  >   - Se realiza la extracción del elemento contenedor `<div>` en base a la ID declarada en el objeto de opciones como se describe en la sección [configuración](#configuración) y se almacena en la constante `legendContainer`.
>  >   - Se realiza la extracción del elemento `<ul>` que se encuentra dentro del elemento `<div>`. Esto puede resultar en un objeto HTML o un valor `undefined` si el elemento nunca se ha creado.
>   
>   Posterior a esto, se realiza una validación para saber si existe un elemento `<ul>` dentro del elemento `<div>`. En caso de no haberlo se ejecuta el bloque de código de su interior:
>   ```js
>   // Validación de existencia de lista de etiquetas
>   if (!labelsContainer) {
>       // De no haber lista de etiquetas se crea una
>       labelsContainer = document.createElement('ul');
>       
>       // Asignación de estilos al elemento
>       const {config} = chart.config._config.options.plugins.htmlLegend;
>       labelsContainer = chartStyleSetter(config, labelsContainer, CHARTS_SETTINGS.LABEL_COLUMNS);
>   
>       // Se añade la lista al contenedor de etiquetas
>       legendContainer.appendChild(labelsContainer);
>   }
>   ```
> 
>   > - Se procede a crear un elemento `<ul>`
>   > - Se extrae el objeto `config` de la configuración de plug-ins contenida en la instancia de la gráfica.
>   > - Se procede a estilizar el contenedor de etiquetas por medio de una función.
>   > - Finalmente se añade el elemento `<ul>` al elemento contenedor `<div>`.

**Creación de las etiquetas**

La función `createLabels` crea cada una de las etiquetas del conjunto de datos dentro del elemento `<ul>`:
```js
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
```

>   A continuación se describe el funcionamiento paso a paso:
>   
>   ```js
>   // Obtención de etiquetas de los conjuntos de datos de la gráfica
>   const items = chart.options.plugins.legend.labels.generateLabels(chart);
>   
>   // Asignación de estilos de configuración
>   const {config} = chart.config._config.options.plugins.htmlLegend;
>   ```
>   
>   >   - Se obtiene una matriz con los items de etiquetas de la gráfica usando su metodo `generateLabels` y proporcionándola a sí misma como argumento.
>   >   - Se obtiene el objeto de configuración de estilos desde las opciones del plug-in declaradas como se describe en la sección de [configuración](#configuración).
>   
>   
>   Se itera la matriz de items:
>   ```js
>   items.forEach(
>       (item) => {
>           ...
>       }
>   );
>   ```
>   
>   >   Se crea un elemento de lista por cada item:
>   >   ```js
>   >   // Se crea un item de lista
>   >   let li = document.createElement('li');
>   >   
>   >   // Creación del elemento de la lista
>   >   li = chartStyleSetter(config, li, CHARTS_SETTINGS.LABELS_LIST);
>   >   ```
>   >   
>   >   >   - Se crea un elemento `<li>` por cada item.
>   >   >   - Se le da estilo por medio de una función.
>   >   
>   >   Se crea una función `onClick` al elemento `<li>`:
>   >   ```js
>   >   li.onclick = () => {
>   >       // Se obtiene la declaración del tipo de gráfica
>   >       const {type} = chart.config;
>   >   
>   >       // Validación del tipo de gráfica
>   >       if (type === CHART_TYPES.PIE || type === CHART_TYPES.DOUGHNUT || type === CHART_TYPES.POLARAREA ) {
>   >           // Asignación de manipulación de vistas por categoría en el conjunto de datos
>   >           chart.toggleDataVisibility(item.index);
>   >       } else {
>   >           // Asignación de manipulación de vistas por conjunto de datos
>   >           chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
>   >       }
>   >       // Actualización de la gráfica
>   >       chart.update();
>   >   };
>   >   ```
>   >   
>   >   >   - Se extrae el tipo de la gráfica para definir qué comportamiento tendrá la función `onClick`.
>   >   >   - Si la gráfica es de tipo pastel, dona o área polar se asigna un comportamiento de interruptor por categoría del conjunto de datos.
>   >   >   - Si la gráfica es de otro tipo se asigna un comportamiento de interruptor por conjunto de datos.
>   >   >   
>   >   >   >   La validación utiliza nombres de constantes. Para entender su funcionamiento leer la sección [Uso de constantes](#uso-de-constantes).
>   >   
>   >   Se crea la caja de color de la etiqueta:
>   >   ```js
>   >   // Caja de color de la etiqueta
>   >   let boxSpan = document.createElement('span');
>   >   
>   >   // Asignación de estilos provenientes de las propiedades del conjunto de datos
>   >   boxSpan.style.background = item.fillStyle;
>   >   boxSpan.style.borderColor = item.strokeStyle;
>   >   
>   >   // Asignación de estilos de configuración
>   >   boxSpan = chartStyleSetter(config, boxSpan, CHARTS_SETTINGS.LEGEND_BOX);
>   >   ```
>   >   
>   >   >   - Se crea la caja de color de la etiqueta con un elemento `<span>`.
>   >   >   - Se le asigna color de fondo en base al color de fondo preestablecido en el conjunto de datos que representará.
>   >   >   - Se le asigna color del borde en base al color de borde preestablecido en el conjunto de datos que representará.
>   >   >   - Se le asigna estilización por medio de una función.
>   >   
>   >   Se crea el contenedor del título de la categoría del conjunto de datos o del nombre del conjunto de datos:
>   >   ```js
>   >   // Texto de la etiqueta
>   >   const textContainer = document.createElement('p');
>   >   // Asignación de estilos provenientes de las propiedades del conjunto de datos
>   >   textContainer.style.textDecoration = item.hidden ? 'line-through' : '';
>   >   textContainer.style.color = chart.options.font.color;
>   >   
>   >   // Asignación del nombre del conjunto de datos o categoría del conjunto de datos
>   >   const text = document.createTextNode(item.text);
>   >   textContainer.appendChild(text);
>   >   ```
>   >   
>   >   >   - Se crea el contenedor del texto con un elemento `<p>`.
>   >   >   - Se le asigna una decoración de tachado si el item en su atributo `hidden` es `true`.
>   >   >   - Se le asigna el color de tema al color de fuente del contenedor usando la configuración de opciones de la gráfica.
>   >   >   - Se extrae el nombre de la categoría o conjunto de datos.
>   >   >   - Finalmente se asigna este nombre como elemento hijo del contenedor de texto que es el elemento `<p>`.
>   >   
>   >   Se realiza la estructuración de los elementos HTML:
>   >   ```js
>   >   // Se agregan la caja de color y el texto de la etiqueta al elemento de la lista
>   >   li.appendChild(boxSpan);
>   >   li.appendChild(textContainer);
>   >   
>   >   // Se agrega el elemento de la lista a la lista
>   >   ul.appendChild(li);
>   >   ```
>   >   
>   >   >   - Se añade la caja de color al elemento de la lista.
>   >   >   - Se añade el contenedor de texto al elemento de la lista.
>   >   >   - Se añade el elemento de la lista a la lista.
>   >   
>   >   Se termina el ciclo `forEach`.
>   
>   Se termina la ejecución de la función, no se requiere un retorno.

**Actualización de las etiquetas**

La función `updateLabels` actualiza las etiquetas previamente creadas por la función `createLabels` tras una actualización visual de la gráfica:
```js
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
```

>   A continuación se describe el funcionamiento paso a paso:
>   
>   ```js
>   // Obtención de etiquetas de los conjuntos de datos de la gráfica
>   const items = chart.options.plugins.legend.labels.generateLabels(chart);
>   
>   // Obtención de elementos en la lista
>   const ulElements = ul.children
>   ```
>   
>   - Se obtiene la matriz de items de cada una de las categorías del conjunto de datos de la gráfica o cada uno de los conjuntos de datos de la gráfica.
>   - Se obtiene una matriz de todos los elementos hijos del elemento HTML lista.
>   
>   Se itera la matriz de items usando indexación:
>   ```js
>   items.forEach(
>       (item, index) => {
>           ...
>       }
>   );
>   ```
>   
>   >   Se realiza la estilización de la etiqueta
>   >   ```js
>   >   // Obtención del elemento contenedor del texto
>   >   const p = ulElements[index].querySelector('p')
>   >   // Asignación de estilos provenientes de las propiedades del conjunto de datos
>   >   p.style.textDecoration = item.hidden ? 'line-through' : '';
>   >   p.style.color = chart.options.font.color;
>   >   ```
>   >   
>   >   >   - Se obtiene el elemento contenedor del texto.
>   >   >   - Se valida si el conjunto de datos correspondiente a la etiqueta está oculto o no para asignar una decoración de tachado al elemento contenedor del texto.
>   >   >   - Se le asigna el color de fuente al elemento contenedor del texto en base al color de fuente preestablecido o asignado en la gráfica.
>   >   
>   >   Se termina el ciclo `forEach`.
>   
>   Se termina la ejecución de la función, no se requiere un retorno.

## darkMode: Integración de modo oscuro

Este plug-in personalizado permite el cambio de colores en las gráficas cuando el modo oscuro se activa o se desactiva en la aplicación.

### Integración

Antes de comenzar a utilizar este plug-in se debe realizar el registro en la clase `ChartsJS` junto con los plug-ins integrados de Charts.js.
```js
// Importación de los plug-ins nativos de Charts.js
import {
    Chart as ChartJS,
    ArcElement,
    BarElement,
    CategoryScale,
} from 'chart.js';

// Importación del plug-in personalizado
import darkMode from '../plugins/darkMode';

// Registro de los plug-ins
ChartJS.register(
    ArcElement,
    BarElement,
    CategoryScale,
    darkMode,
)
```

### Funcionamiento

A continuación se detalla el funcionamiento del plug-in a nivel código. Cabe aclarar que, antes de leer la documentación del funcionamiento del plug-in se recomienda estar familiarizado con el funcionamiento de los plug-ins, descrito en la [documentación de Charts.js sobre plug-ins](https://www.chartjs.org/docs/latest/developers/plugins.html).

**Conexión con el API de Charts.js**

Este plug-in se ejecuta únicamente por medio del método provisto por la interfaz del API de Charts.js `afterUpdate` declarado en el objeto que se registra. Este método recibe un parámetro:

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `chart` | `Chart` | Instancia de la gráfica |

La declaración del plug-in se realiza de esta manera:
```js
const htmlLegend = {
    id: 'htmlLegend',
    afterUpdate(chart, args, options) {
        ...
    }
}
```

La declaración del plug-in se realiza de esta manera:
```js
const darkMode = {
    id: 'darkMode',
    afterUpdate(chart) {
        ...
    }
};
```

>   Nótese que la declaración de la función afterUpdate se utiliza también como nombre del atributo del objeto, así no es necesario declarar el nombre dos veces o declarar la función con otro nombre o dejarla como flecha.

**Estructura del plug-in**

Este plug-in utiliza constantes de colores, un mapa de funciones distribuidas por tipo de gráfica y la función principal integra un observador que se conecta al documento de la página y revisa un cambio en éste. De esta manera puede detectar cuando el modo oscuro se habilita o se deshabilita cuando la clase `dark` se agrega a su lista de clases o se remueve de ésta:
```js
const darkMode = {
    id: 'darkMode',
    afterUpdate(chart) {

        // Extracción del objeto de opciones
        const chartOptions = chart.config._config.options
        // Extracción del tipo de gráfica
        const chartType = chart.config._config.type

        // Se toma el documento HTML para observarlo
        const htmlElement = document.documentElement;

        // Se inicia un observador de mutaciones del elemento HTML
        const observer = new MutationObserver(
            // Lista de cambios
            (mutationList) => {

                // Iteración por cada una de las mutaciones 
                for (let mutation of mutationList) {

                    // Búsqueda de la mutación objetivo, que sea de tipo atributos y que sea de nombre 'class'
                    if ( mutation.type === 'attributes' && mutation.attributeName === 'class' ) {

                        // Ejecución si el modo oscuro está activado
                        if ( htmlElement.classList.contains('dark') ) {
                            // Ejecución de la función y asignación al objeto de opciones de la gráfica
                            chart.config._config.options = setChartsColors[chartType]({mode: 'dark', options: chartOptions})

                        // Ejecución si el modo oscuro está desactivado
                        } else {
                            // Ejecución de la función y asignación al objeto de opciones de la gráfica
                            chart.config._config.options = setChartsColors[chartType]({mode: 'light', options: chartOptions})
                        }

                        // Actualización de la gráfica
                        chart.update();
                        // Desconexión del observador
                        observer.disconnect();
                    }
                }
            }
        )

        // Se inicia la observación por atributos al elemento HTML
        observer.observe(htmlElement, {attributes: true})
    }
};
```

>   - Para saber más sobre el uso de colores por constantes, consultar la sencción [Constantes de colores](#colores).
>   - Para saber más sobre el uso de constantes, consultar la sección [Constantes para la aplicación](#constantes-para-la-aplicación).
>   - Para saber más sobre los mapas de funciones, consultar la sección [Mapas de funciones](#mapas-de-funciones).

**Uso de constantes de colores**

La declaración de colores se realiza de la siguiente forma:
```js
// Definición de los colores a utilizar
const midTransparentWhite = PRESET_COLORS.WHITE + OPACITIES[50] // Blanco con transparencia media
const highTransparentWhite = PRESET_COLORS.WHITE + OPACITIES[10] // Blanco con transparencia alta
const midTransparentBlack = PRESET_COLORS.BLACK + OPACITIES[50] // Negro con transparencia media
const highTransparentBlack = PRESET_COLORS.BLACK + OPACITIES[10] // Negro con transparencia alta
```

>   - Se declara un color blanco con opacidad del 50%
>   - Se declara un color blanco con opacidad del 10%
>   - Se declara un color negro con opacidad del 50%
>   - Se declara un color negro con opacidad del 10%

**Cambio de colores en gráficas cartesianas**

La función `setCartesianChartColors` asigna los colores de la gráfica para todos los tipos de gráfica que contienen ejes cartesianos, es decir, ejes $X$ y $Y$.
```js
const setCartesianChartColors = ({
    mode, // Modo oscuro o claro de la aplicación
    options, // Objeto de opciones de la gráfica
}) => {

    if ( mode === 'dark' ) {
        // Asignación de colores a la cuadrícula
        options.scales.x.grid.color = highTransparentWhite
        options.scales.y.grid.color = highTransparentWhite
        // Asignación de colores a las etiquetas
        options.scales.x.ticks.color = midTransparentWhite
        options.scales.y.ticks.color = midTransparentWhite
        // Color de fuente
        options.font.color = midTransparentWhite

    } else {
        // Asignación de colores a la cuadrícula
        options.scales.x.grid.color = highTransparentBlack
        options.scales.y.grid.color = highTransparentBlack
        // Asignación de colores a las etiquetas
        options.scales.x.ticks.color = midTransparentBlack
        options.scales.y.ticks.color = midTransparentBlack
        // Color de fuente
        options.font.color = midTransparentBlack
    }

    // Retorno del nuevo objeto de opciones
    return options
}
```

>   A continuación se describe el funcionamiento paso a paso:
>   ```js
>   if ( mode === 'dark' ) {
>       ...
>       } else {
>       ...
>   }
>   ```
>   
>   >   - Se realiza una validación por el modo de la aplicación si está establecido en oscuro o en claro usando una estructura de control condicional.
>   
>   >   Si la condición es verdadera se ejecuta el siguiente bloque de código:
>   >   ```js
>   >   // Asignación de colores a la cuadrícula
>   >   options.scales.x.grid.color = highTransparentWhite
>   >   options.scales.y.grid.color = highTransparentWhite
>   >   // Asignación de colores a las etiquetas
>   >   options.scales.x.ticks.color = midTransparentWhite
>   >   options.scales.y.ticks.color = midTransparentWhite
>   >   // Color de fuente
>   >   options.font.color = midTransparentWhite
>   >   ```
>   >   
>   >   >   - Se asigna el color blanco transparente alto a las líneas de cuadrícula en los ejes $X$ y $Y$.
>   >   >   - Se asigna el color blanco transparente medio a las leyendas de los ejes $X$ y $Y$ que es en donde se encuentran las referencias de los valores.
>   >   >   - Se asigna el color blanco transparente medio al color de fuente de la gráfica.
>   >   
>   >   Si la condición es falsa se ejecuta el siguiente bloque de código:
>   >   ```js
>   >   // Asignación de colores a la cuadrícula
>   >   options.scales.x.grid.color = highTransparentBlack
>   >   options.scales.y.grid.color = highTransparentBlack
>   >   // Asignación de colores a las etiquetas
>   >   options.scales.x.ticks.color = midTransparentBlack
>   >   options.scales.y.ticks.color = midTransparentBlack
>   >   // Color de fuente
>   >   options.font.color = midTransparentBlack
>   >   ```
>   >   
>   >   >   - Se asigna el color negro transparente alto a las líneas de cuadrícula en los ejes $X$ y $Y$.
>   >   >   - Se asigna el color negro transparente medio a las leyendas de los ejes $X$ y $Y$ que es en donde se encuentran las referencias de los valores.
>   >   >   - Se asigna el color negro transparente medio al color de fuente de la gráfica.
>   
>   Finalmente se retorna el objeto de opciones modificado:
>   ```js
>   // Retorno del nuevo objeto de opciones
>   return options
>   ```

**Cambio de colores en gráficas radiales**

La función `setRadialChartColors` asigna los colores de la gráfica para casi todos los tipos de gráfica que utilizan ejes radiales. En este caso, sólo se requiere cambiar el color de fuente ya que las gráficas que utilizan esta función no muestran líneas de ejes ni leyendas de referecia:
```js
const setRadialChartColors = ({
    mode, // Modo oscuro o claro de la aplicación
    options, // Objeto de opciones de la gráfica
}) => {

    if ( mode === 'dark' ) {
        // Color de fuente
        options.font.color = midTransparentWhite
    } else {
        // Color de fuente
        options.font.color = midTransparentBlack
    }

    // Retorno del nuevo objeto de opciones 
    return options
}
```

>   A continuación se describe el funcionamiento paso a paso:
>   ```js
>   if ( mode === 'dark' ) {
>       ...
>       } else {
>       ...
>   }
>   ```
>   
>   >   - Se realiza una validación por el modo de la aplicación si está establecido en oscuro o en claro usando una estructura de control condicional.
>   
>   >   Si la condición es verdadera se ejecuta el siguiente bloque de código:
>   >   ```js
>   >   // Color de fuente
>   >   options.font.color = midTransparentWhite
>   >   ```
>   >   
>   >   >   - Se asigna el color blanco transparente medio al color de fuente de la gráfica.
>   >   
>   >   Si la condición es falsa se ejecuta el siguiente bloque de código:
>   >   ```js
>   >   // Color de fuente
>   >   options.font.color = midTransparentBlack
>   >   ```
>   >   
>   >   >   - Se asigna el color negro transparente medio al color de fuente de la gráfica.
>   
>   Finalmente se retorna el objeto de opciones modificado:
>   ```js
>   // Retorno del nuevo objeto de opciones
>   return options
>   ```

**Cambio de colores en gráficas de radar**

La función `setRadarChartColors` asigna los colores de la gráfica de radar que utiliza ejes radiales:
```js
const setRadarChartColors = ({
    mode, // Modo oscuro o claro de la aplicación
    options, // Objeto de opciones de la gráfica
}) => {

    if ( mode === 'dark' ) {
        // Asignación de colores a las etiquetas centrales
        options.scales.r.ticks.color = midTransparentWhite
        // Asignación de colores a las líneas
        options.scales.r.grid.color = highTransparentWhite
        // Asignación de colores a las líneas de ángulo
        options.scales.r.angleLines.color = highTransparentWhite
        // Asignación de colores a las etiquetas radiales
        options.scales.r.pointLabels.color = midTransparentWhite
        // Color de fuente
        options.font.color = midTransparentWhite

    } else {
        // Asignación de colores a las etiquetas centrales
        options.scales.r.ticks.color = midTransparentBlack
        // Asignación de colores a las líneas
        options.scales.r.grid.color = highTransparentBlack
        // Asignación de colores a las líneas de ángulo
        options.scales.r.angleLines.color = highTransparentBlack
        // Asignación de colores a las etiquetas radiales
        options.scales.r.pointLabels.color = midTransparentBlack
        // Color de fuente
        options.font.color = midTransparentBlack
    }

    // Retorno del nuevo objeto de opciones 
    return options
}
```

>   A continuación se describe el funcionamiento paso a paso:
>   ```js
>   if ( mode === 'dark' ) {
>       ...
>       } else {
>       ...
>   }
>   ```
>   
>   >   - Se realiza una validación por el modo de la aplicación si está establecido en oscuro o en claro usando una estructura de control condicional.
>   
>   >   Si la condición es verdadera se ejecuta el siguiente bloque de código:
>   >   ```js
>   >   // Asignación de colores a las etiquetas centrales
>   >   options.scales.r.ticks.color = midTransparentWhite
>   >   // Asignación de colores a las líneas
>   >   options.scales.r.grid.color = highTransparentWhite
>   >   // Asignación de colores a las líneas de ángulo
>   >   options.scales.r.angleLines.color = highTransparentWhite
>   >   // Asignación de colores a las etiquetas radiales
>   >   options.scales.r.pointLabels.color = midTransparentWhite
>   >   // Color de fuente
>   >   options.font.color = midTransparentWhite
>   >   ```
>   >   >   - Se asigna el color blanco transparente medio a las etiquetas centrales de la gráfica, que son los valores de referencia.
>   >   >   - Se asigna el color blanco transparente alto a las líneas radiales de la gráfica.
>   >   >   - Se asigna el color blanco transparente alto a las líneas angulares que señalan las categorías.
>   >   >   - Se asigna el color blanco transparente medio a las leyendas categóricas.
>   >   >   - Se asigna el color blanco transparente medio al color de fuente de la gráfica.
>   >   
>   >   Si la condición es falsa se ejecuta el siguiente bloque de código:
>   >   ```js
>   >   // Asignación de colores a las etiquetas centrales
>   >   options.scales.r.ticks.color = midTransparentBlack
>   >   // Asignación de colores a las líneas
>   >   options.scales.r.grid.color = highTransparentBlack
>   >   // Asignación de colores a las líneas de ángulo
>   >   options.scales.r.angleLines.color = highTransparentBlack
>   >   // Asignación de colores a las etiquetas radiales
>   >   options.scales.r.pointLabels.color = midTransparentBlack
>   >   // Color de fuente
>   >   options.font.color = midTransparentBlack
>   >   ```
>   >   
>   >   >   - Se asigna el color blanco transparente medio a las etiquetas centrales de la gráfica, que son los valores de referencia.
>   >   >   - Se asigna el color blanco transparente alto a las líneas radiales de la gráfica.
>   >   >   - Se asigna el color blanco transparente alto a las líneas angulares que señalan las categorías.
>   >   >   - Se asigna el color blanco transparente medio a las leyendas categóricas.
>   >   >   - Se asigna el color negro transparente medio al color de fuente de la gráfica.

**Mapa de funciones de cambio de color en las gráficas**

Para la ejecución de la función dinámica se un mapa de funciones distribuidas por el tipo de gráfica y utiliza las tres funciones descritas anteriormente. Para este mapa de funciones se utilizan las declaraciones con propiedades computadas. Para saber más, consultar la sección de [Destructuración y propiedades computadas](#destructuración-y-propiedades-computadas):
```js
// Funciones de asignación de colores en modo oscuro y modo claro
const setChartsColors = {
    [CHART_TYPES.BUBBLE]: setCartesianChartColors,
    [CHART_TYPES.SCATTER]: setCartesianChartColors,
    [CHART_TYPES.BAR]: setCartesianChartColors,
    [CHART_TYPES.LINE]: setCartesianChartColors,

    [CHART_TYPES.PIE]: setRadialChartColors,
    [CHART_TYPES.DOUGHNUT]: setRadialChartColors,
    [CHART_TYPES.POLARAREA]: setRadialChartColors,

    [CHART_TYPES.RADAR]: setRadarChartColors,
}
```

>   Para entender cómo funcionan los mapas de funciones, consultar la sección [Mapas de funciones](#mapas-de-funciones).

>   - Todas las funciones reciben dos argumentos:
>       - `mode`: Indicador de modo oscuro o claro en la aplicación.
>       - `options`: Objeto de opciones de la gráfica.

>   - Para las gráficas de burbuja, dispersión, barras y líneas se utiliza la función `setCartesianChartColors`. 
>   - Para las gráficas de pastel, dona y área polar se utiliza la función `setRadialChartColors`. 
>   - Para la gráfica de radar se utiliza la función `setRadarChartColors`. 

**Función principal del plug-in**

La función principal integra un observador que se conecta al documento de la página y revisa un cambio en éste. De esta manera puede detectar cuando el modo oscuro se habilita o se deshabilita cuando la clase `dark` se agrega a su lista de clases o se remueve de ésta:

```js
// Extracción del objeto de opciones
const chartOptions = chart.config._config.options
// Extracción del tipo de gráfica
const chartType = chart.config._config.type

// Se toma el documento HTML para observarlo
const htmlElement = document.documentElement;
```

>   - Se extrae el objeto de opciones desde los atributos de la instancia de la gráfica.
>   - Se extrae el tipo de gráfica.
>   - Se extrae el elemento <html> del documento de la página.

Se crea un observador de mutaciones:
```js
const observer = new MutationObserver(
    // Lista de cambios
    (mutationList) => {
        ...
    }
)
```

>   Dentro de la ejecución de la función del observador se itera por cada elemento de la lista de mutaciones:
>   ```js
>   // Iteración por cada una de las mutaciones
>   for (let mutation of mutationList) {
>       ...
>   }
>   ```
>   
>   >   Dentro del ciclo se realiza la búsqueda de una mutación que sea de tipo `attributes` y que se llame `class`.
>   >   ```js
>   >   // Búsqueda de la mutación objetivo, que sea de tipo atributos y que sea de nombre 'class'
>   >   if ( mutation.type === 'attributes' && mutation.attributeName === 'class' ) {
>   >       ...
>   >   }
>   >   ```
>   >   
>   >   >   Se realiza una validación del modo oscuro y, dependiendo de su valor, se ejecuta uno u otro fragmento de código:
>   >   >   ```js
>   >   >   // Ejecución si el modo oscuro está activado
>   >   >   if ( htmlElement.classList.contains('dark') ) {
>   >   >       // Ejecución de la función y asignación al objeto de opciones de la gráfica
>   >   >       chart.config._config.options = setChartsColors[chartType]({mode: 'dark', options: chartOptions})
>   >   >   
>   >   >   // Ejecución si el modo oscuro está desactivado
>   >   >   } else {
>   >   >       // Ejecución de la función y asignación al objeto de opciones de la gráfica
>   >   >       chart.config._config.options = setChartsColors[chartType]({mode: 'light', options: chartOptions})
>   >   >   }
>   >   >   ```
>   >   >   
>   >   >   >   - Si el documento está en modo oscuro se ejecuta el mapa de funciones usando la función respectiva en base al tipo de gráfica. Se le proveen como atributos el modo con valor `'dark'` y el objeto de opciones de la instancia de la gráfica. Esto se reasigna en el objeto de opciones de la instancia de la gráfica.
>   >   >   >   - Si el documento no está en modo oscuro, también ejecuta la función del mapa de funciones pero con el modo con valor `'light'`.
>   >   >   
>   >   >   Tras la ejecución de la función se ejecuta el método de actualización de la instancia de la gráfica y se procede a desconectar al observador para evitar creaciones de instancias de observadores innecesarias y que la aplicación comience a ralentizarse:
>   >   >   ```js
>   >   >   // Actualización de la gráfica
>   >   >   chart.update();
>   >   >   // Desconexión del observador
>   >   >   observer.disconnect();
>   >   >   ```
>   >   >   Se termina el bloque de la estructura de control `if`.
>   >   
>   >   Se termina el ciclo `for`.
>   
>   Se termina la declaración de la función del observador.

## stylingCSS: Asignación de clases CSS a elementos HTML generados por gráficas

Este plug-in permite la declaración de clases CSS en un objeto que se proporciona a la configuración de opciones de las gráficas. De esta manera se facilita declarar los nombres de clases CSS en elementos HTML generados dinámicamente por los componentes de gráficas y a su vez también modificarlos o realizar pruebas de forma más rápida y legible.

### Integración

Antes de comenzar a utilizar este plug-in se debe realizar el registro en la clase `ChartsJS` junto con los plug-ins integrados de Charts.js.
```js
// Importación de los plug-ins nativos de Charts.js
import {
    Chart as ChartJS,
    ArcElement,
    BarElement,
    CategoryScale,
} from 'chart.js';

// Importación del plug-in personalizado
import stylingCSS from '../plugins/stylingCSS';

// Registro de los plug-ins
ChartJS.register(
    ArcElement,
    BarElement,
    CategoryScale,
    stylingCSS,
)
```

### Configuración

La declaración de las clases CSS se encuentra en la ubicación `src/settings/` en el archivo `chartElementsStyling.js`:
```js
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
```

>   Primeramente se establece la configuración para elementos renderizados por plug-ins (que, por ahora, es la única configuración disponible):
>   ```js
>   export const chartElementsStyling = {
>       plugins: {
>           ...
>       }
>   }
>   ```

| Atributo | Tipo | Descripción |
|----------|------|-------------|
| `plugins` | `object` | Configuración para elementos renderizados por plug-ins |

### Configuración para plug-ins

**Configuración del objeto**

Se declara un atributo con el nombre de la ID del plug-in dentro del atributo de estilos `plugins`, por ejemplo, `htmlLegend`.
```js
export const chartElementsStyling = {
    plugins: {
        // Plug-in de etiquetas desacopladas
        htmlLegend: {
            // Tipo de plug-in
            type: "externalElement",
            // Nombre de la llave del ID de mapeo en las opciones de la gráfica
            idKey: "containerID",
            // Elementos del contenedor a estilizar
            elements: [...]
        }
    }
}
```

**Configuración raíz**

Los atributos disponibles para configuración raíz son los siguientes:

| Atributo | Tipo | Descripción |
|----------|------|-------------|
| `type` | `(Opción)`: <br> <br> • `externalElement`: Elementos externos | Tipo de plug-in |
| `idKey` | `string` | Nombre llave del atributo (no su valor) del ID del contenedor `<div>` en donde se renderizarán los objetos. |
| `elements` | `array` | Matriz de objetos de estilización que se asignarán a los elementos hijos de este elemento. |

**Configuración del árbol de elementos**

Para declarar los nombres de las clases CSS de cada uno de los elementos contenidos dentro del elemento contenedor `<div>` se construye una matriz de objetos, cada objeto declarando el elemento hijo directo del contenedor `<div>`. Si éstos objetos hijos directos a su vez tienen elementos hijos se declara otra matriz de objetos para su configuración. Se pueden anidar tantas matrices de objetos como se desee.
```js
[
    {
        element: "ul",
        styling: "flex",
        children: [...]
    }
]
```

Los atributos disponibles para configuración de elementos son los siguientes:

| Atributo | Tipo | Descripción |
|----------|------|-------------|
| `element` | `string` | Tipo de elemento HTML. |
| `styling` | `string` | Nombres de clases CSS a asignar al elemento. Cada nombre debe estar separado por un espacio. |
| `children` | `array` | Matriz de objetos de estilización que se asignarán a los elementos hijos de este elemento. |

La estructura de datos que se encontraría dentro la matriz del atributo `children` tendría exactamente el mismo formato que el objeto mostrado en el ejemplo anterior, es decir, algo como esto:
```js
[
    {
        element: "ul",
        styling: "flex",
        children: [
            {
                element: "li",
                styling: "flex",
                children: [...]
            }
        ]
    }
]
```

>   Nótese que el código anterior a éste se copió y se pegó en el lugar de la matriz contenedora de los `...` de éste y sólo se cambió el valor `ul` por el valor `li`.

### Funcionamiento

Este plug-in cuenta con una función de asignación de clases, una función recursiva que recorre toda la estructura de configuración y la declaración del plug-in principal.

**Asignación de clases**

La función `classListAssigner` toma una lista de clases CSS desde una cadena de texto provista a la función y las asigna a un elemento HTML también provisto a la función:
```js
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
```

>   A continuación se describe el funcionamiento paso a paso:
>   ```js
>   const classNames = styling.split(" ")
>   ```
>   
>   >   - Se toma el valor de tipo `string` y se convierte a una matriz de valores `string` divididos por un caracter de espacio.
>   
>   ```js
>   classNames.forEach(
>       (className) => {
>           ...
>       }
>   )
>   ```
>   
>   >   - Se itera por cada uno de los nombres de clase de la matriz creada en el paso anterior.
>   
>   >   Se añade el nombre de clase a la lista de clases del elemento HTML.
>   >   ```js
>   >   htmlElement.classList.add(className)
>   >   ```
>   >   Se termina la iteración del ciclo `forEach`.

**Recorrido recursivo del objeto de estilización**

La función `recursiveStyleSetter` recibe un elemento HTML padre del cual buscar elementos hijos además de un objeto de configuración de estilos `config` y recorre el objeto de configuración de estilos usando recursividad. Esto le permite iterar en una cantidad ilimitada de anidaciones dentro del objeto. Para saber cómo funciona la recursividad, consultar la sección de [Funciones recursivas](#funciones-recursivas):
```js
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
```

>   A continuación se describe el funcionamiento paso a paso:
>   
>   Se extrae el tipo de elemento HTML a buscar:
>   ```js
>   // Extracción del tipo de etiqueta HTML
>   const elementType = config.element
>   ```
>   
>   Se itera en `i` por la cantidad de hijos que contiene el elemento padre provisto:
>   ```js
>   // Iteración por cada hijo del elemento HTML
>   for (let i = 0; i < parentElement.children.length; i++) {
>       ...
>   }
>   ```
>   
>   >   Se extrae la referencia del nodo del elemento hijo que se encuentra en índice de la iteración:
>   >   ```js
>   >   // Se extrae el elemento HTML hijo
>   >   let childElement = parentElement.children[i]
>   >   ```
>   >   
>   >   Se valida si el elemento obtenido coincide con el tipo de elemento buscado
>   >   ```js
>   >   // Ejecución si el tipo de elemento coincide con el tipo de elemento buscado
>   >   if ( childElement.matches(elementType) ) {
>   >       ...
>   >   }
>   >   ```
>   >   
>   >   >   Si la condición se cumple, se ejecuta el código siguiente:
>   >   >   
>   >   >   Se ejecuta la función de asignación de nombres de clase. Se provee el elemento HTML de la iteración actual y el atributo `styling` del objeto de configuración de estilos `config`:
>   >   >   ```js
>   >   >   // Asignación de nombres de clases
>   >   >   classListAssigner({ htmlElement: childElement, styling: config.styling })
>   >   >   ```
>   >   >   
>   >   >   Se valida si el objeto de configuración de estilos `config` contiene elementos hijos:
>   >   >   ```js
>   >   >   // Validación de si el objeto de configuración de estilos contiene una matriz de elementos hijos a configurar
>   >   >   if ( config.children ) {
>   >   >       ...
>   >   >   }
>   >   >   ```
>   >   >   
>   >   >   >   De cumplirse la condición se ejecutan los siguientes fragmentos de código:
>   >   >   >   
>   >   >   >   Se ejecuta otro ciclo en `j` por la cantidad de objetos de configuración contenidos en la matriz del atributo `children` del objeto de configuración de estilos `config`:
>   >   >   >   ```js
>   >   >   >   // Iteración de cada elemento hijo de configuración
>   >   >   >   for (let j = 0; j < config.children.length; j++) {
>   >   >   >       ...
>   >   >   >   }
>   >   >   >   ```
>   >   >   >   
>   >   >   >   >   Por cada iteración se realiza una llamada recursiva de esta función:
>   >   >   >   >   ```js
>   >   >   >   >   // Llamada a función recursiva para iterar por ilimitada cantidad anidaciones
>   >   >   >   >   recursiveStyleSetter({ parentElement: childElement, config: config.children[j] })
>   >   >   >   >   ```
>   >   >   >   >   
>   >   >   >   >   - Como elemento padre se provee el elemento HTML encontrado (ya que se realizará una búsqueda y configuración de estilos a los elementos hijos de éste).
>   >   >   >   >   - Como objeto de configuración de estilos se provee el objeto contenido en la posición del índice del ciclo que se encuentre dentro del atributo `children` del objeto de configuración de estilos `config` actual.
>   >   >   >   >   
>   >   >   >   >   Se termina la iteración del ciclo `for` en `j`.
>   >   >   >   
>   >   >   >   De no cumplirse la condición se omite la ejecución.
>   >   >   
>   >   >   De no cumplirse la condición se omite la ejecución.
>   >   
>   >   Se termina la iteración del ciclo `for` en `i`.
>   
>   Se termina la ejecución de la función, no se requiere un retorno.

**Función principal del plug-in**

```js
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
```

>   A continuación se describe el funcionamiento paso a paso:
>   ```js
>   // Extracción de la lista de plug-ins
>   const plugins = chart.config._config.options.plugins
>   // Extracción del objeto de estilización declarado previamente
>   const styler = chart.config._config.options.plugins.stylingCSS
>   ```
>   
>   >   - Se extrae la matriz de plug-ins a configurar desde el objeto de opciones de la instancia de la gráfica.
>   >   - Se extgrae el objeto de configuración de estilos desde el objeto de opciones de la instancia de la gráfica.
>   
>   ```js
>   // Validación de elementos de plug-ins terceros existentes a estilizar
>   if ( styler.plugins ) {
>       ...
>   }
>   ```
>   
>   >   - Se valida que existan configuraciones de estilos para los plug-ins.
>   
>   >   De cumplirse la condición se ejecutan los siguientes fragmentos de código:
>   >   
>   >   Se itera cada una de las llaves del objeto contenido en el atributo `plugins` del objeto estilizador:
>   >   ```js
>   >   // Iteración por las declaraciones de cada plug-in
>   >   Object.keys(styler.plugins).forEach(
>   >       // Declaración de la variable por iteración
>   >       (pluginID) => {
>   >           ...
>   >       }
>   >   )
>   >   ```
>   >   
>   >   >   Se valida que el tipo de configuración del plug-in contenido dentro del índice de la iteración sea del tipo `externalElement`:
>   >   >   ```js
>   >   >   // Si el tipo de plug-in renderiza elementos externos, se ejecuta esto
>   >   >   if ( styler.plugins[pluginID].type === "externalElement" ) {
>   >   >       ...
>   >   >   }
>   >   >   ```
>   >   >   
>   >   >   >   De cumplirse la condición se ejecutan los siguientes fragmentos de código:
>   >   >   >   
>   >   >   >   Se obtiene el elemento HTML contenedor del cual se estilizarán sus elementos contenidos:
>   >   >   >   ```js
>   >   >   >   // Extracción del nombre de la llave contenedora a buscar en las opciones del plug-in
>   >   >   >   const elementID = styler.plugins[pluginID].idKey
>   >   >   >   // Extracción del elemento HTML usando la ID contenida en la variable con nombre de la llave, desde las opciones del plug-in
>   >   >   >   const htmlElement = document.getElementById(plugins[pluginID][elementID])
>   >   >   >   ```
>   >   >   >   
>   >   >   >   >   - Se extrae el nombre de la llave (no el valor) del atributo de referencia para buscar el ID del elemento HTML contenedor de los elementos a estilizar.
>   >   >   >   >   - Con el nombre de la llave se extrae el elemento HTML en cuestión por búsqueda de su ID única.
>   >   >   >   
>   >   >   >   Se hace una iteración por cada uno de los objetos de configuración del plug-in contenidos dentro de una matriz en el atributo `elements` de su configuración raíz:
>   >   >   >   ```js
>   >   >   >   // Iteración por cada uno de los objetos de configuración de estilos correspondientes a los hijos del elemento HTML
>   >   >   >   styler.plugins[pluginID].elements.forEach(
>   >   >   >       // Declaración de la variable por iteración
>   >   >   >       (elementConfig) => {
>   >   >   >           ...
>   >   >   >       }
>   >   >   >   )
>   >   >   >   ```
>   >   >   >   
>   >   >   >   >   Por cada iteración se hace una ejecución de la función recursiva `recursiveStyleSetter`:
>   >   >   >   >   ```js
>   >   >   >   >   // Llamada a función recursiva para iterar por ilimitada cantidad anidaciones
>   >   >   >   >   recursiveStyleSetter({ parentElement: htmlElement, config: elementConfig })
>   >   >   >   >   ```
>   >   >   >   >   
>   >   >   >   >   >   - Como elemento padre se provee el elemento HTML de ID única obtenido en los fragmentos de código anteriores.
>   >   >   >   >   >   - Como objeto de configuración de estilos se provee el elemento de la iteración actual de la matriz
>   >   >   >   >   
>   >   >   >   >   Se termina la iteración del ciclo `forEach`.
>   >   >   >   
>   >   >   >   De no cumplirse la condición no se realiza ninguna ejecución de código.
>   >   >   
>   >   >   Se termina la iteración del ciclo `forEach`.
>   >   
>   >   De no cumplirse la condición no se realiza ninguna ejecución de código.
>   
>   Se termina la ejecución de la función, no se requiere un retorno.

----

# Mapeo de colores en gráficas

Las funciones de mapeo de colores facilitan la asignación y reasignación de colores a partir de múltiples opciones como asignación de colores individuales, paletas de colores o series de paletas de colores, además de que las funciones reciben los parámetros de colores explícitamente en un mismo sitio y estos valores se propagan por la gráfica de la forma más adecuada posible, lo que resulta mucho más rápido y legible que si se hiciera directamente en el objeto de opciones y series manualmente.

## Mapeo de opacidades en formato hexadecimal
- Ubicación: `src/utils/dataFormatting.js`
- Función: `mapOpacities`

Esta función recibe una matriz de colores en formato hexadecimal y les mapea un valor de opacidad en la escala del 0 al 100 en un formato hexadecimal también.

Ejemplo de uso:
```js
const colors = [
    "#8C0413",
    "#B70217",
    "#DC001A",
    "#EC112B",
    "#FE3249",
    "#FE5165",
    "#FC7080",
]

const opacity = 50

const colorsWithOpacity = mapOpacities({ colors, colorOpacity })
```

Los argumentos de entrada disponibles son:

| Atributo | Tipo | Valor por defecto | Descripción |
|----------|------|-------------------|-------------|
| `colors` | `Color` - `array[Color]` | *Requerido | Color o paleta de colores a asignarles la opacidad. |
| `colorOpacity` | `number` | *Requerido | Valor de opacidad a mapear en el color en donde `0` representa transparencia total y `100` representa opacidad total. |

### Funcionamiento

La función `mapOpacities` utiliza el mapeo de opacidades desde la constante `OPACITIES` ubicada en `src/constants/colors.js` la cual cuenta con valores predefinidos de opacidad a los cuales se accede por valor entero en un rango del 1% al 100%:
```js
export const OPACITIES = {
    0: "00",
    5: "0B",
    10: "18",
    ...
}
```

Entonces, si el mapeo es del 50%, se accedería al valor ubicado en la llave `50`:
```js
OPACITIES[50]

// Valor hexadecimal
"7F"
```

La función `mapOpacities` luce de esta forma:
```js
// Concatenación de la opacidad si el color es un texto
if (typeof colors === 'string') {
    return (colors + OPACITIES[colorOpacity])

// Concatenación de la opacidad a cada uno de los valores de la matriz
} else {
    return (
        colors.map(
            (color) => (color + OPACITIES[colorOpacity])
        )
    )
}
```

>   - Si la entrada de la variable `color` es un único valor, se concatena el color junto con la opacidad correspondiente en formato hexadecimal.
>   - En caso contrario el color sería una matriz de colores hexadecimales y se mapea cada uno de los colores concatenado con la opacidad correspondiente en formato hexadecimal.

Retorno de la función:
```js
[
    "#8C04137F",
    "#B702177F",
    "#DC001A7F",
    "#EC112B7F",
    "#FE32497F",
    "#FE51657F",
    "#FC70807F",
]
```

>   Se retorna un color en formato RGBA hexadecimal o una matriz de colores RGBA hexadecimales.

## Mapeo de colores a conjuntos de datos

La función `mapColors` mapea los colores de fondo y borde a uno o varios conjuntos de datos según su estructura y la cantidad de colores provista en sus argumentos.

Declaración del tipo de color usando un `string`:
```js
series = mapColors({ series, colors: ..., colorType: `backgroundColor` })
```

Declaraciónel tipo de color usando una constante (recomendado):
```js
series = mapColors({ series, colors: ..., colorType: CHARTS_SERIES_SETTINGS.BACKGROUND_COLOR })
```

Los argumentos de entrada disponibles son:

| Atributo | Tipo | Valor por defecto | Descripción |
|----------|------|-------------------|-------------|
| `series` | `object` | *Requerido | Objeto de datos transformado por alguna de las siguietes funciones: <br> • [Construcción de estructura de datos para gráficas de burbuja](#construcción-de-estructura-de-datos-para-gráficas-de-burbuja)  <br> • [Construcción de estructura de datos para gráficas de dispersión](#construcción-de-estructura-de-datos-para-gráficas-de-dispersión) <br> • [Construcción de estructura de datos para gráficas cartesianas y radiales](#construcción-de-estructura-de-datos-para-gráficas-cartesianas-y-radiales) |
| `colors` | `Color` - `array[Color]` | *Requerido | Color o paleta de colores a mapear en el o los conjuntos de datos. |
| `colorType` | `(Opción)` <br> <br> • `backgroundColor`: Color de fondo <br> • `borderColor`: Color de borde | *Requerido | Color o paleta de colores a mapear en el o los conjuntos de datos. |

La función por dentro luce así:
```js
const mapColors = ({
    series,
    colors,
    colorType
}) => {

    if (series.datasets.length === 1) {
        series.datasets[0][colorType] = colors

    // Mapeo de paleta de colores a varios conjuntos de datos
    } else if (colors.length > 1) {
        for (let i = 0; i < series.datasets.length; i++) {
            series.datasets[i][colorType] = colors[i]
        }

    // Mapeo de color a varios conjuntos de datos
    } else {
        for (let i = 0; i < series.datasets.length; i++) {
            series.datasets[i][colorType] = colors
        }
    }

    // Retorno de los datos con colores mapeados
    return series;
}
```

>   A continuación se describe el funcionamiento paso a paso:
>   
>   Mapeo de colores a un solo conjunto de datos:
>   ```js
>   if (series.datasets.length === 1) {
>       series.datasets[0][colorType] = colors
>   }
>   ```
>   
>   >   - Si el objeto `series` sólo contiene un elemento en su atributo `datasets`, es decir, si el objeto de datos solo contiene un solo conjunto de datos se mapea el valor de colores en ese único elemento en su atributo correspondiente, ya sea color de fondo o de borde.
>   
>   Mapeo de paleta de colores a varios conjuntos de datos:
>   ```js
>       if (...) {
>           ...
>       } else if (colors.length > 1) {
>           for (let i = 0; i < series.datasets.length; i++) {
>               series.datasets[i][colorType] = colors[i]
>           }
>       }
>   ```
>   
>   >   - De no cumplirse la condición de un sólo conjunto de datos, se asume que el objeto de datos contiene más de un conjunto de datos y sólo se realiza una validación de la matriz de colores en la que su longitud sea mayor a 1.
>   >   - De ser así realiza una iteración para mapear cada color a cada conjunto de datos en su atributo correspondiente, ya sea color de fondo o de borde.
>   
>   Mapeo de un solo color a varios conjuntos de datos:
>   ```js
>       {
>           ...
>       } else {
>           for (let i = 0; i < series.datasets.length; i++) {
>               series.datasets[i][colorType] = colors
>           }
>       }
>   ```
>   
>   - De no cumplirse la condición se asume que el objeto de datos contiene más de un conjunto de datos y la matriz de colores sólo contiene un color.
>   - Se realiza una iteración para mapear el color a cada conjunto de datos en su atributo correspondiente, ya sea color de fondo o de borde.
>   
>   Retorno del objeto de datos
>   ```js
>   return series;
>   ```

## Mapeo de opacidades y tipos de colores en los conjuntos de datos

La función `colorMapping` mapea las opacidades de color en los valores de colores provistos, mapea los colores de fondo, de borde y, en caso de que la gráfica sea de tipo línea o radar, se mapea color de relleno usando los colores de fondo:
```js
const colorMapping = ({
    series,
    backgroundColors,
    backgroundOpacity,
    borderColors,
    borderOpacity,
    chartType,
}) => {

    // Variables booleanas
    const isFillableChart = chartType === CHART_TYPES.LINE || chartType === CHART_TYPES.RADAR

    // Mapeo de opacidad a los colores de fondo
    if ( backgroundOpacity !== undefined ) {
        backgroundColors = mapOpacities({ colors: backgroundColors, colorOpacity: backgroundOpacity })
    }
    // Mapeo de opacidad a los colores de borde
    if ( borderOpacity !== undefined ) {
        borderColors = mapOpacities({ colors: borderColors, colorOpacity: borderOpacity })
    }

    // Mapeo de colores de fondo a los conjuntos de datos
    if ( backgroundColors ) {
        series = mapColors({ series, colors: backgroundColors, colorType: CHARTS_SERIES_SETTINGS.BACKGROUND_COLOR })
    }
    // Mapeo de colores de borde a los conjuntos de datos
    if ( borderColors ) {
        series = mapColors({ series, colors: borderColors, colorType: CHARTS_SERIES_SETTINGS.BORDER_COLOR })
    }

    // Activación de color de fondo para gráficas de línea y radar
    if ( isFillableChart && backgroundColors ) {
        // Activación por dataset
        series.datasets.forEach(
            (dataset) => {
                dataset.fill = chartSettings.fillableCharts[CHARTS_SERIES_SETTINGS.FILL]
            }
        )
    }

    return series
}
```

Los argumentos de entrada disponibles son:

| Atributo | Tipo | Valor por defecto | Descripción |
|----------|------|-------------------|-------------|
| `series` | `object` | *Requerido | Objeto de datos transformado por alguna de las siguietes funciones: <br> • [Construcción de estructura de datos para gráficas de burbuja](#construcción-de-estructura-de-datos-para-gráficas-de-burbuja)  <br> • [Construcción de estructura de datos para gráficas de dispersión](#construcción-de-estructura-de-datos-para-gráficas-de-dispersión) <br> • [Construcción de estructura de datos para gráficas cartesianas y radiales](#construcción-de-estructura-de-datos-para-gráficas-cartesianas-y-radiales) |
| `backgroundColors` | `Color` - `array[Color]` | *Declarado en los ajustes predeterminados* | Color o paleta de colores de fondo para la gráfica. |
| `backgroundOpacity` | `number` | *Declarado en los ajustes predeterminados* | Valor de opacidad a mapear en los colores de fondo en donde `0` representa transparencia total y `100` representa opacidad total. |
| `borderColors` | `Color` - `array[Color]` | *Declarado en los ajustes predeterminados* | Color o paleta de colores de borde para la gráfica. |
| `borderOpacity` | `number` | *Declarado en los ajustes predeterminados* | Valor de opacidad a mapear en los colores de borde en donde `0` representa transparencia total y `100` representa opacidad total. |
| `chartType` | `string` | *Requerido | Valor de opacidad a mapear en los colores de borde en donde `0` representa transparencia total y `100` representa opacidad total. |


>   A continuación se describe el funcionamiento paso a paso:
>   
>   Se realizan validaciones para crear variables booleanas y usarlas en estructuras de control condicionales más legibles:
>   ```js
>   const isFillableChart = chartType === CHART_TYPES.LINE || chartType === CHART_TYPES.RADAR
>   ```
>   
>   >   - Se valida que la gráfica sea rellenable, esto es, que la gráfica sea de tipo línea o de tipo radar.
>   
>   Mapeo de opacidad a los colores de fondo:
>   ```js
>       if ( backgroundOpacity !== undefined ) {
>           backgroundColors = mapOpacities({ colors: backgroundColors, colorOpacity: backgroundOpacity })
>       }
>   ```
>   
>   >   - Si existe un valor de opacidad de fondo proporcionado a la función se realiza el mapeo de opacidad a los colores de fondo con la función de [mapeo de opacidades](#mapeo-de-opacidades-en-formato-hexadecimal).
>   
>   Mapeo de opacidad a los colores de borde:
>   ```js
>       if ( borderColors ) {
>           series = mapColors({ series, colors: borderColors, colorType: CHARTS_SERIES_SETTINGS.BORDER_COLOR })
>       }
>   ```
>   
>   >   - Si existe un valor de opacidad de borde proporcionado a la función se realiza el mapeo de opacidad a los colores de borde con la función de [mapeo de opacidades](#mapeo-de-opacidades-en-formato-hexadecimal).
>   
>   Mapeo de colores de fondo a los conjuntos de datos:
>   ```js
>       if ( backgroundColors ) {
>           series = mapColors({ series, colors: backgroundColors, colorType: CHARTS_SERIES_SETTINGS.BACKGROUND_COLOR })
>       }
>   ```
>   
>   >   - Si existe un valor de colores de fondo proporcionado a la función se realiza el mapeo de colores en el o los conjuntos de datos del objeto de datos usando la función de [mapeo de colores a conjuntos de datos](#mapeo-de-colores-a-conjuntos-de-datos), especificando en el argumento `colorType` que se hará el mapeo de los colores de fondo.
>   
>   Mapeo de colores de borde a los conjuntos de datos:
>   ```js
>       if ( borderColors ) {
>           series = mapColors({ series, colors: borderColors, colorType: CHARTS_SERIES_SETTINGS.BORDER_COLOR })
>       }
>   ```
>   
>   >   - Si existe un valor de colores de borde proporcionado a la función se realiza el mapeo de colores en el o los conjuntos de datos del objeto de datos usando la función de [mapeo de colores a conjuntos de datos](#mapeo-de-colores-a-conjuntos-de-datos), especificando en el argumento `colorType` que se hará el mapeo de los colores de borde.
>   
>   Activación de color de fondo para gráficas de línea y radar:
>   ```js
>   if ( isFillableChart && backgroundColors ) {
>       ...
>   }
>   ```
>   
>   >   - Para excepciones en las que el tipo de gráfica sea rellenable y se hayan proporcionado colores de fondo se ejecuta el siguiente bloque de código:
>   >   Se ejecuta una activación de color de relleno por cada conjunto de datos del objeto de datos: 
>   >   ```js
>   >   // Activación por dataset
>   >   series.datasets.forEach(
>   >       (dataset) => {
>   >           dataset.fill = chartSettings.fillableCharts[CHARTS_SERIES_SETTINGS.FILL]
>   >       }
>   >   )
>   >   ```
>   >   
>   >   >   - Se realiza una iteración por cada conjunto de datos
>   >   >   - Se le indica a cada conjunto de datos en su atributo `fill` que debe contener el valor preestablecido en los *ajustes predeterminados*. Por defecto la gráfica tomará los valores de color de fondo como colores de relleno de estos elementos de línea y radar dependiendo del tipo de ésta.
>   >   
>   >   Finaliza iteración del ciclo `forEach`.
>   
>   Retorno del objeto de datos:
>   ```js
>   return series
>   ```

## Mapeo de colores en conjuntos de datos

La función `mapColorsOnSeries` toma los colores declarados o por default en la entrada de la función `buildData` y los distribuye o reasigna dependiendo del tipo de gráfica y los valores definidos e indefinidos para mapearlos con usando las funciones de mapeo de colores y opacidades:
```js
export const mapColorsOnSeries = ({
    series,
    chartType,
    backgroundColors,
    backgroundOpacity,
    borderColors,
    borderOpacity
}) => {

    // Validación de tipos de gráfica
    const isPolarArea = chartType === CHART_TYPES.POLARAREA
    const isPie = chartType === CHART_TYPES.PIE
    const isDoughtnut = chartType === CHART_TYPES.DOUGHNUT

    // Asignación de opacidad de colores de fondo para gráficas de área polar
    if ( isPolarArea && !backgroundOpacity ) {
        backgroundOpacity = chartSettings[CHART_TYPES.POLARAREA][CHARTS_SETTINGS.BACKGROUND_OPACITY];
    }

    // Asignación de colores de borde para gráficas circulares
    if ( (isPie || isDoughtnut) && !borderColors ) {
        borderColors = chartSettings.circularCharts[CHARTS_SETTINGS.BORDER_COLORS];
    }

    // Asignación de opacidades y colores de borde para gráficas de área polar
    if ( isPolarArea && !borderColors ) {
        borderColors = backgroundColors; // Asignación de mismos colores de fondo para colores de borde
        borderOpacity = chartSettings[CHART_TYPES.POLARAREA][CHARTS_SETTINGS.BORDER_OPACITY];
    }

    series = colorMapping({ series, backgroundColors, backgroundOpacity, borderColors, borderOpacity, chartType });

    return series;
}
```

Los argumentos de entrada disponibles son:

| Atributo | Tipo | Valor por defecto | Descripción |
|----------|------|-------------------|-------------|
| `series` | `object` | *Requerido | Objeto de datos transformado por alguna de las siguietes funciones: <br> • [Construcción de estructura de datos para gráficas de burbuja](#construcción-de-estructura-de-datos-para-gráficas-de-burbuja)  <br> • [Construcción de estructura de datos para gráficas de dispersión](#construcción-de-estructura-de-datos-para-gráficas-de-dispersión) <br> • [Construcción de estructura de datos para gráficas cartesianas y radiales](#construcción-de-estructura-de-datos-para-gráficas-cartesianas-y-radiales) |
| `chartType` | `string` | *Requerido | Valor de opacidad a mapear en los colores de borde en donde `0` representa transparencia total y `100` representa opacidad total. |
| `backgroundColors` | `Color` - `array[Color]` | *Declarado en los ajustes predeterminados* | Color o paleta de colores de fondo para la gráfica. |
| `backgroundOpacity` | `number` | *Declarado en los ajustes predeterminados* | Valor de opacidad a mapear en los colores de fondo en donde `0` representa transparencia total y `100` representa opacidad total. |
| `borderColors` | `Color` - `array[Color]` | *Declarado en los ajustes predeterminados* | Color o paleta de colores de borde para la gráfica. |
| `borderOpacity` | `number` | *Declarado en los ajustes predeterminados* | Valor de opacidad a mapear en los colores de borde en donde `0` representa transparencia total y `100` representa opacidad total. |

>   A continuación se describe el funcionamiento paso a paso:
>   
>   Se realizan validaciones para crear variables booleanas y usarlas en estructuras de control condicionales más legibles:
>   ```js
>   // Validación de tipos de gráfica
>   const isPolarArea = chartType === CHART_TYPES.POLARAREA
>   const isPie = chartType === CHART_TYPES.PIE
>   const isDoughtnut = chartType === CHART_TYPES.DOUGHNUT
>   ```
>   
>   >   - Se crea un valor booleano de la validación de si la gráfica es de área polar.
>   >   - Se crea un valor booleano de la validación de si la gráfica es de pastel.
>   >   - Se crea un valor booleano de la validación de si la gráfica es de dona.
>   
>   Asignación de opacidad de colores de fondo para gráficas de área polar:
>   ```js
>   if ( isPolarArea && !backgroundOpacity ) {
>       backgroundOpacity = chartSettings[CHART_TYPES.POLARAREA][CHARTS_SETTINGS.BACKGROUND_OPACITY];
>   }
>   ```
>   
>   >   - Si la gráfica es de área polar y no hay valores de opacidad definidos se asigna el valor de opacidad preestablecido en los *ajustes predeterminados*.
>   
>   Asignación de colores de borde para gráficas circulares:
>   ```js
>   if ( (isPie || isDoughtnut) && !borderColors ) {
>       borderColors = chartSettings.circularCharts[CHARTS_SETTINGS.BORDER_COLORS];
>   }
>   ```
>   >   - Si la gráfica es de pastel o dona y no hay colores de borde definidos se asignan los colores de borde preestablecidos en los *ajustes predeterminados*.
>   
>   Asignación de opacidades y colores de borde para gráficas de área polar:
>   ```js
>   if ( isPolarArea && !borderColors ) {
>       borderColors = backgroundColors; // Asignación de mismos colores de fondo para colores de borde
>       borderOpacity = chartSettings[CHART_TYPES.POLARAREA][CHARTS_SETTINGS.BORDER_OPACITY];
>   }
>   ```
>   
>   >   - SI la gráfica es de área polar y no hay colores de borde definidos se asignan los colores de borde y valores de opacidad preestablecidos en los *ajustes predeterminados*.
>   
>   Una vez que se definieron los colores preestablecidos se realiza la llamada a la función `colorMapping` que a su vez mapea opacidades y los colores convertidos a los conjuntos de datos al objeto de datos `series`:
>   ```js
>   series = colorMapping({ series, backgroundColors, backgroundOpacity, borderColors, borderOpacity, chartType });
>   ```
>   
>   >   - Se realiza una llamada a la función de [mapeo de opacidades y tipos de colores en los conjuntos de datos](#mapeo-de-opacidades-y-tipos-de-colores-en-los-conjuntos-de-datos).
>   
>   Finalmente se retorna el objeto de datos:
>   ```js
>   return series;
>   ```
