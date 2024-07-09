# Constantes para la aplicación

### Índice:
**API**
- [Dominios del Backend](#dominios-del-backend)

**Estilos para las gráficas**
- [Colores](#colores)

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