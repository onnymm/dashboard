# Utilidades

### Índice:
**Utilidades para graficación**
- [Preparación de los datos y opciones de visualización](#preparación-de-los-datos-y-opciones-de-visualización)
- [Formateo a objeto de matrices](#formateo-a-objeto-de-matrices)
- [Mapeo de colores en conjuntos de datos](#mapeo-de-colores-en-conjuntos-de-datos)

**Funciones internas**
- [Constructor de opciones](#constructor-de-opciones)
- [Mapeo de opacidades de color de fondo](#mapeo-de-opacidades-de-color-de-fondo)

----

# Utilidades para graficación

## Preparación de los datos y opciones de visualización
- **Archivo:** `utils.js`

Esta función recibe un objeto con los datos provistos por un API y también las opciones especificadas para realizar la conversión de un objeto de datos y un objeto de opciones para ingresarlos a un componente de gráfica.

**Argumentos de entrada:**
- `data`- **[object, array]**: Conjuntos de datos provistos por un API. Es un objeto de objetos.
- `chartType` - **[string]**: Tipo de gráfica.
- `labelsName` - **[string, undefined]**: Nombre de la variable del conjunto de datos, contiene la información de las etiquetas categóricas de la gráfica.
- `datasetNames` - **[array]**: Nombres de variable de cada uno de los conjuntos de datos en el objeto.
- `labels` - **[array]**: Nombres a mostrar para cada conjunto de datos.
- `backgroundColors` - **[string, array]**: Color o paleta de colores a renderizar en la gráfica.
- `bgOpacity` - **[number, undefined]**: Opacidad de los colores de fondo.
- `xLabelsFormatter` - **[function, undefined]** Formateo en las etiquetas del eje X.
- `yLabelsFormatter` - **[function, undefined]** Formateo en las etiquetas del eje Y.

Uso:
```js
// Uso de función de estado
setData(buildData({ data, ... }));
```

## Formateo a objeto de matrices
- **Archivo:** `dataFormatting.js`

Esta función realiza un formateo de un objeto de objetos a un objeto de matrices y formatea las llaves a Camel Case, por ejemplo lo siguiente:

```js
const incomingData = {
    0: {
        first_attribute: "value1",
        second_attribute: "value2",
        third_attribute: "value3",
    },
    1: {
        first_attribute: "value4",
        second_attribute: "value5",
        third_attribute: "value6",
    },
    2: {
        first_attribute: "value7",
        second_attribute: "value8",
        third_attribute: "value9",
    },
};
```

Tras la ejecución de la función, el objeto de objetos se formatea a un objeto de matrices
```js
outcomingData = toArrayObject(incomingData);
```

```js
{
  firstAttribute: [ 'value1', 'value4', 'value7' ],
  secondAttribute: [ 'value2', 'value5', 'value8' ],
  thirdAttribute: [ 'value3', 'value6', 'value9' ]
};
```

----

# Funciones internas

## Mapeo de colores en conjuntos de datos
- **Archivo:** `utils.js`

Esta función interna mapea los colores de fondo provistos a la función `buildData` dependiendo de la cantidad de conjuntos de datos y colores provistos.

Uso:
```js
series = _mapColors(series, backgroundColors, 'backgroundColors');
series = _mapColors(series, borderColors, 'borderColors');
```

>   **Mapeo según la cantidad de conjuntos de datos y colores**
>   
>   La función mapeará de forma dinámica los colores de fondo provistos en el argumento de la función `buildData` dependiendo de la cantidad de conjuntos de datos y la cantidad de valores de color provistas.
>   - 1 color a 1 conjunto de datos: Se asignará el color al conjunto de datos.
>   - Muchos colores a 1 conjunto de datos: Se asignará la paleta de colores al único conjunto de datos en formato de matriz.
>   - Muchos colores a muchos conjuntos de datos: Para este caso en específico, la cantidad de conjuntos de datos y colores debe ser la misma. Se asignará un color a cada conjunto de datos, en el orden en el que fueron provistos. 


## Constructor de opciones
- **Archivo:** `utils.js`

Esta función interna genera un objeto complejo de atributos a modificar, usable por otras funciones de transformación de datos para gráficas. También establece algunas opciones predeterminadas para cierto tipo de gráficas para facilitar la manipulación del objeto.

**Argumentos de entrada:**
- `chartType` - [string]: Tipo de gráfica que se renderizará con este objeto de opciones.

Uso:
```js
const options = _optionsBuilder('pie');
```

La función devuelve un objeto como el siguiente:
```js
{
    scales: {
        x: {
                ticks: {} 
            },
        y: {
            ticks: {}
        }
    }
}
```

## Mapeo de opacidades de color de fondo
- **Archivo:** `utils.js`

Esta función interna ayuda a mapear valores de opacidad en una matriz de colores de fondo en formato hexadecimal.

**Valores de entrada**
- `backgroundColors` - [string, array]: Valores de color en formato hexadecimal
- `bgOpacity` - [Number]: Valor de opacidad a mapear. Leer la documentación de constantes para consultar los valores disponibles.

Uso:
```js
const redPalette = [
    "#8C0413",
    "#B70217",
    "#DC001A",
    "#EC112B",
    "#FE3249",
    "#FE5165",
    "#FC7080"
];

colorsWithOpacity = _mapOpacities(redPalette, 25)

// Resultado
[
    "#8C04133F",
    "#B702173F",
    "#DC001A3F",
    "#EC112B3F",
    "#FE32493F",
    "#FE51653F",
    "#FC70803F",
]
```

>   La función devuelve la misma matriz de colores (O sólo un String en caso de ser un sólo valor provisto a la función como String) con la opacidad provista en formato decimal convertida a formato hexadecimal y concatenada como texto a los valores de color, en este caso, `3F` que representa el 25% de opacidad.