import { CHARTS_SETTINGS_OPTIONS } from "../constants/settings"
import { chartSettings } from "../settings/dashboardSettings"

export const chartStyleSetter = (config, element, styleSetting) => {
    // Declaración de variable sin valor
    let settingOption

    // Validación de si se provee un parámetro en el JSON de configuración de datos
    if ( config[styleSetting] ) {
        // De haberlo se utiliza el valor
        settingOption = config[styleSetting]
    } else {
        // De no haberlo, se utiliza el valor por defecto
        settingOption = chartSettings[styleSetting]
    }

    // Se obtienen los parámetros de apariencia
    const styleParams = CHARTS_SETTINGS_OPTIONS[styleSetting][settingOption]

    // Iteración por cada una de las llaves del objeto de parámetros
    Object.keys(styleParams).forEach(
        (styleKey) => {
            // Se establecen los estilos del objeto de parámetros
            element.style[styleKey] = styleParams[styleKey]
        }
    )

    // Retorno del contenedor de etiquetas
    return element
}