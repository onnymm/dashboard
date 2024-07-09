# Manejadores de solicitudes a APIs

### Índice:
**API local**
- [Dominios del Backend](#dominios-del-backend)

## API local
- **Archivo:** `local.js`

En este archivo se encuentran los métodos provisionales para solicitud de información al API local que se usará hasta que se conecte el API real.

Para utilizar la función de solicitud al API se requiere una función de cambio de estado y un endpoint a utilizar, por ejemplo:

```js
getChartData(setLoadData, "quotation_amounts")
```

>   Esta función realizaría una solicitud a la URL `http://192.168.1.89:8000/quotation_amounts`.