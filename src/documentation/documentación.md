# Documentación de la aplicación

En este archivo se documenta todo lo necesario para conocimiento del desarrollador que se integra al proyecto o el desarrollador que desee realizar un mantenimiento y requiera una guía para entender o recordar el funcionamiento de la aplicación.

## Elementos

Los parámetros listados que contengan un `*` son requeridos

```js
/// Esto es un fragmento de código para explicación de funcionamiento
const estoEsUnaVariable = 5
```

>   Esto es un contenedor de texto que indica el funcionamiento de un fragmento código que se encuentre previo a este mismo contenedor

----

## Índice

### Introducción

**Librerías de terceros**
- [Librerías utilizadas en el proyecto](#librerías-utilizadas-en-el-proyecto)

**Estructura del proyecto**
- [Descripción general de la estructura del proyecto](#descripción-general-de-la-estructura-del-proyecto)
- [Uso de constantes](#uso-de-constantes)
- [Destructuración y propiedades computadas](#destructuración-y-propiedades-computadas)
- [Datos de la aplicación](#datos-de-la-aplicación)
- [Ajustes predefinidos](#ajustes-predefinidos)
- [Funciones de utilidades](#funciones-de-utilidades)

### Configuración de la aplicación

**Configuración del Dashboard**
- [Gráficas](#gráficas)

### Constantes para la aplicación

**Estilos para las gráficas**
- [Tipos de gráficas](#tipos-de-gráficas)
- [Nombres de ajustes de gráficas](#nombres-de-ajustes-de-gráficas)
- [Nombres de ajustes de series de los conjuntos de datos](#nombres-de-ajustes-de-series-de-los-conjuntos-de-datos)
- [Colores](#colores)

### Manejadores de solicitudes a APIs

**Manejadores de solicitudes a APIs (Métodos GET)**
- [Obtener datos para las gráficas](#obtener-datos-para-las-gráficas)

### Funcionamiento interno

**Plug-ins de Charts.js**

- [htmlLegend: Desacoplamiento de etiquetas de conjuntos de datos](#htmllegend-desacoplamiento-de-etiquetas-de-conjuntos-de-datos)
- [darkMode: Integración de modo oscuro](#darkmode-integración-de-modo-oscuro)

----

# Librerías de terceros

## Librerías utilizadas en el proyecto

Este proyecto utiliza varias librerías para su funcionamiento, listadas a continuación:

- **React Router**: Es una biblioteca estándar para enrutamiento en aplicaciones React. Proporciona una manera declarativa para gestionar la navegación y el enrutamiento en aplicaciones de una sola página .Permite definir rutas de manera declarativa, lo que permite especificar qué componentes deben renderizarse para diferentes rutas además de soportar rutas anidadas. Para saber más, consultar su [documentación](https://reactrouter.com/en/main).

- **Charts.js**
Es una biblioteca de código abierto que permite crear gráficos y visualizaciones de datos de manera sencilla y atractiva. Es altamente personalizable y fácil de usar y  soporta varios tipos de gráficos interactivos, lo que permite al usuario interactuar con el gráfico para ver información adicional. Para saber más, consultar su [documentación](https://www.chartjs.org/docs/latest/)

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

Las constantes son una implementación en la aplicación que ayudan a reducir *typos* en el código al usar valores de tipo *string* eficientando el flujo de trabajo en el desarrollo. Las constantes también son una forma de escalar el proyecto y homogeneizar valores en la aplicación ya que sólo requieren un cambio que se propaga por ésta y no muchos cambios en varios archivos.

## Destructuración y propiedades computadas

La declaración de funciones en este proyecto utiliza propiedades computadas a partir de [constantes](#uso-de-constantes) declaradas en la ubicación `src/constants/`. Las propiedades computadas permiten definir propiedades de objetos usando expresiones dinámicas que se evalúan en tiempo de ejecución además de que centralizan las claves en un solo objeto, lo que facilita la actualización de las constantes y hace explícito qué propiedades del objeto de entrada se están utilizando y asignando a variables específicas.

### Ejemplo de uso

En el archivo `settings.js` que se encuentra en la ubicación antes mencionada, se cuenta con una constante llamada `CHARTS_SETTINGS` utilizada para definir los atributos configurables de componentes de gráficas. Para más información sobre estos ajustes, leer la sección de [gráficas](#gráficas). La constante está declarada de la siguiente forma:
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

Generalmente estos valores se declaran en colecciones de objetos y se mapean usando el método nativo de los *arrays* `map` en los componentes a renderizar. También se utilizan las declaraciones con propiedades computadas. Para saber más, consultar la sección de [destructuración y propiedades computadas](#destructuración-y-propiedades-computadas).

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

También se utilizan las declaraciones con propiedades computadas. Para saber más, consultar la sección de [destructuración y propiedades computadas](#destructuración-y-propiedades-computadas).

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

También se utilizan las declaraciones con propiedades computadas. Para saber más, consultar la sección de [destructuración y propiedades computadas](#destructuración-y-propiedades-computadas)

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

| Atributo | Tipo | Valor por defecto | Descripción |
|--------------|----------|--------------------|------------------------------|
| `ENDPOINT` | `string` | *Requerido | Endpoint de la URL de donde se solicitará la información. Por ejemplo, si la URL completa es `https://www.estoesunsitio.com/esto_es_el_endpoint`, en este campo se debe ingresar el fragmento `esto_es_el_endpoint`. |
| `CHART_TYPE` | `(opción)` <br><br> `'bar'`: Gráfica de barras <br> `'line'`: Gráfica de líneas <br> `'pie'`: Gráfica de pastel <br> `'doughnut'`: Gráfica de dona <br> `'polar area'`: Gráfica de área polar <br> `'radar'`: Gráfica de radar <br> `'scatter'`: Gráfica de dispersión <br> `'bubble'`: Gráfica de burbujas  | *Requerido | Tipo de gráfica a renderizar. |
| `NAME` | `string` | *Requerido | Nombre de la gráfica a renderizar .|
| `DATASET_NAMES` | `array [string]` | *Requerido | Nombre de la variable del JSON del endpoint de la cual se obtendrán los valores del o los conjuntos de datos a renderizar en los elementos de la gráfica. |
| `LABELS` | `string` | *Requerido | Nombre de la variable del JSON del endpoint de la cual se obtendrá la variable categórica que funcionará para segmentar el o los conjuntos de datos. |
| `LABELS_NAME` | `string` | *Requerido | Nombre descriptivo del grupo de etiquetas que se renderizará en la gráfica. |
| `BACKGROUND_COLORS` | `Color` - `array [color]` | `RED_PALETTE` | Colores de fondo para los elementos de la gráfica. El formato de cada color debe ser hexadecimal, por ejemplo `#FFFFFF`. Los colores deben tener ser RGB en formato hexadecimal y contener el símbolo `#` antes de éstos. |
| `BACKGROUND_OPACITY` | `number` | `100` | Opacidad de los colores de fondo de los elementos de la gráfica. Debe ser un número del `0` al `100` en donde el `0` representa la transparencia total y el `100` un color totalmente sólido sin transparencia. |
| `BORDER_COLORS` | `Color` - `array[Color]` | `RED_PALETTE` | Colores de borde para los elementos de la gráfica. El formato de cada color debe ser hexadecimal, por ejemplo `#FFFFFF`. Los colores deben tener ser RGB en formato hexadecimal y contener el símbolo `#` antes de éstos. |
| `BORDER_OPACITY` | `number` | `100` | Opacidad de los colores de borde de los elementos de la gráfica. Debe ser un número del `0` al `100` en donde el `0` representa la transparencia total y el `100` un color totalmente sólido sin transparencia. |
| `ASPECT_RATIO` | `number` - `(División)` | `1.5` | Relación de aspecto de la gráfica. Puede ser un número, como por ejemplo `1.5` o una división como `3/2` en donde el primer número o numerador representa la proporción horizontal y el segundo número o denominador representa la proporción vertical. Por ejemplo, `3/2` significa que, por cada 3 pixeles de ancho, la gráfica tendrá 2 pixeles de alto. |
| `Y_VALUE_TYPE` | `(Opción)` <br> <br> `'numeric'`: Numérico <br> `'monetary'`: Moneda nacional <br> `'only name'` | `undefined` | Tipo de valor numérico que se representará en las etiquetas numéricas y el tooltip. |
| `X_VALUE_TYPE` | `(Opción)` <br> <br> `'numeric'`: Numérico <br> `'monetary'`: Moneda nacional <br> `'only name'` | `undefined` | Tipo de valor numérico que se representará en las etiquetas numéricas y el tooltip. |
| `CATEGORY_STRATIFICATION_BY` | `string` | `undefined` | Variable categórica de estratificación para segmentar un conjunto de datos en varios conjuntos de datos para renderizarse en la gráfica. |
| `LABEL_COLUMNS` | `(Opción)` <br> <br> `1`: Organización en forma de lista <br> `2`: Organización en lista de 2 columnas <br> `3`: Organización en lista de 3 columnas <br> `4`: Organización en lista de 4 columnas <br> `6`: Organización en lista de 6 columnas | `1` | Orientación y alineación de las etiquetas. |
| `LABELS_LIST` | `(Opción)` <br> <br> `'default'`: Disposición por defecto | `'default'` | Orientación y alineación de cada contenedor de etiqueta. |
| `LEGEND_BOX` | `(Opción)` <br> <br> `'circle'`: Cajas circulares <br> `'rounded'`: Cajas cuadradas con bordes redondeados <br> `'square'`: Cajas cuadradas | `'square'` | Apariencia de la caja de color de las etiquetas. |
| `MIN_BUBBLE_SIZE` | `number` | `2` | Tamaño mínimo de elementos de burbuja en gráfica de burbuja. |
| `MAX_BUBBLE_SIZE` | `number` | `16` | Tamaño máximo de elementos de burbuja en gráfica de burbuja. |
| `TRANSPOSED` | `boolean` | `false` | Transponer gráfica. Si se activa este parámetro, los datos de los ejes $X$ y $Y$ se invertirán. Esto sólo es válido para gráficas de barras, de dispersión y de burbuja. |

----

# Constantes para la aplicación

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

>   Para más información sobre esta declaración, leer la sección [Gráficas](#gráficas)

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

## Colores
- **Ubicación:** `src/constants/colors.js`

En este archivo se encuentran los valores utilizados por los componentes de gráficas, desde la paleta de colores, colores preestablecidos en formato hexadecimal hasta valores de opacidad en formato hexadecimal. Los colores preestablecidos en formato hexadecimal se pueden concatenar con los valores de opacidad en los casos en los que los componentes de graficación lo requieran, por ejemplo:
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
| `domain` | `string` | (Dominio por defecto preconfigurado en el archivo `appConfig.js`). Leer la sección [sección](#) para más información | Dominio que sólo se usa en casos en los que se quiera especficar un dominio diferente al configurado por defecto en el archivo `src/data/appConfig.js`, por ejemplo, `https://www.estoesunsitio.com/` (Nota: el dominio debe contener el `/` al final). |

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
| `labelsDisplay` | `(Opción)` <br> <br> `1`: Una columna <br> `2`: 2 columnas <br> `3`: 3 columnas <br> `4`: 4 columnas <br> `6`: 6 columnas | `1` | Número de columnas a ocupar por la lista de etiquetas. |
| `labelsList` | `(Opción)` <br> <br> `'default'`: Orientación por default (Fila) | `'default'` | Orientación de los elementos dentro de la etiqueta |
| `legendBox` | `(Opción)` <br> <br> `'circle'`: Cajas en forma de círculo <br> `'rounded'`: Cajas cuadradas con bordes redondeados <br> `'square'`: Cajas cuadradas | `'square'` | Forma de las cajas de color de las etiquetas. |

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

Este plug-in utiliza constantes de colores, un mapa de funciones distribuidas por tipo de gráfico y la función principal integra un observador que se conecta al documento de la página y revisa un cambio en éste. De esta manera puede detectar cuando el modo oscuro se habilita o se deshabilita cuando la clase `dark` se agrega a su lista de clases o se remueve de ésta:
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

Para la ejecución de la función dinámica se un mapa de funciones distribuidas por el tipo de gráficos y utiliza las tres funciones descritas anteriormente. Para este mapa de funciones se utilizan las declaraciones con propiedades computadas. Para saber más, consultar la sección de [Destructuración y propiedades computadas](#destructuración-y-propiedades-computadas):
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
- Para las gráficas de burbuja, dispersión, barras y líneas se utiliza la función `setCartesianChartColors`. 
- Para las gráficas de pastel, dona y área polar se utiliza la función `setRadialChartColors`. 
- Para la gráfica de radar se utiliza la función `setRadarChartColors`. 

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
