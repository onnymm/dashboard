# Manejadores de solicitudes a APIs

### Índice:
**Solicitudes GET**
- [Obtener datos para las gráficas](#obtener-datos-para-las-gráficas)

## Obtener datos para las gráficas
- **Archivo:** `get.js`

En este archivo se encuentran los métodos GET para solicitudes de información a APIs. La configuración de los APIs se encuentra en el archivo `appConfig.js` encontrado en la carpeta `/src/data`.

**Parámetros de entrada:**
- `stateSetter` - [function]: Función de cambio de estado para ingresar la información a un estado de React.js.
- `endpoint` - [string]: Endpoint de la URL de donde se solicitará la información. Por ejemplo, si la URL completa es `https://www.estoesunsitio.com/esto_es_el_endpoint`, en este campo se debe ingresar el fragmento `esto_es_el_endpoint`.
- `domain` - [string, undefined]: Este argumento no es necesario. Sólo se usa en casos en los que se quiera especficar un dominio diferente al configurado por defecto en el archivo `src/data/appConfig.js`, por ejemplo, `https://www.estoesunsitio.com/` (Nota: el dominio debe contener el `/` al final).

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