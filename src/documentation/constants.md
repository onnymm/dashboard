# Constantes para la aplicación

Las constantes son una implementación en la aplicación que ayudan a reducir *typos* en el código al usar valores de tipo *string* eficientando el flujo de trabajo en el desarrollo. Las constantes también son una forma de escalar el proyecto y homogeneizar valores en la aplicación ya que sólo requieren un cambio que se propaga por ésta y no muchos cambios en varios archivos.

### Índice:
**API**
- [Dominios del Backend](#dominios-del-backend)

**Estilos para las gráficas**
- [Tipos de gráficas](#tipos-de-gráficas)
- [Colores](#colores)
- [Nombres de ajustes de gráficas](#nombres-de-ajustes-de-gráficas)

## Dominios del Backend
- **Archivo:** `backendDomains.js`

En este archivo se encuentran todas las URLs de APIs de donde se tomarán los datos.

```js
export const localDomain = "http://192.168.1.89:8000/"
```

Para poder utilizarlos se puede hacer de la siguiente forma:

```js
import axios from "axios"
import { localDomain } from "../constants/backendDomains"

export const getChartData = async (endpoint) => {
    const response = await axios.get(`${localDomain}${endpoint}`)
    ...
}
```

>   En este caso, se utiliza el dominio local que es `http://192.168.1.89:8000/` junto con un endpoint provisto desde la llamada de la función.

## Tipos de gráficas
- **Archivo:** `charts.js`
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
const chartData = {
    chartType: CHART_TYPES.BAR // Se define una gráfica de tipo barras
    ...
}
```

## Nombres de ajustes de gráficas
- **Archivo:** `settings.js`
- **Constante:** `CHARTS_SETINGS`

Este objeto contiene los nombres de ajustes de las gráficas a renderizar, utilizados principalmente para la construcción de la estructura de datos y opciones de cada una de las gráficas.

```js
{
    // Orientación y alineación de las etiquetas
    LABELS_DISPLAY: "labelsDisplay",
    // Orientación y alineación de cada contenedor de etiqueta
    LABELS_LIST: "labelsList",
    // Apariencia de la caja de la etiqueta
    LEGEND_BOX: "legendBox"
}
```

Uso:
```js
const someFunc = ({
    someParam = 'defaultValue',
    [CHARTS_SETINGS.LABELS_DISPLAY]: labelsDisplay = 'defaultDisplay',
    [CHARTS_SETINGS.LABELS_LIST]: labelsList = 'defaultLabelsSetting',
    ... // Resto de parámetros
})
```

## Colores
- **Archivo:** `colors.js`

En este archivo se encuentran los valores utilizados por los componentes de gráficas, desde la paleta de colores, colores preestablecidos en formato hexadecimal hasta valores de opacidad en formato hexadecimal. Los colores preestablecidos en formato hexadecimal se pueden concatenar con los valores de opacidad en los casos en los que los componentes de graficación lo requieran, por ejemplo:

```js
export const saturedRed = "#FF001E"

export const opacity = {
    5: "0B",
    10: "18",
    25: "3F",
    50: "7F",
    75: "BF",
    100: "FF",
}
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

>   En este caso, el color a utilizar sería un rojo saturado con opacidad de 75%, lo que resultaría en el valor `#FF001EBF` en formato hexadecimal.