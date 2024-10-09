import createCircle from "../../../core/uiEffects";

const ButtonTemplate = ({
    className = "",
    children, // Contenido del botón
    onClick, // Función del botón
    disabled, // Deshabilitado
    type='secondary', // Tipo de botón
    rounded="xl", // Redondeo de los bordes del botón
    size = 'lg',
}) => {

    // Apariencia del botón
    const buttonType = {
        primary: 'bg-main-500 sm:hover:bg-main-400 text-white',
        secondary: 'text-gray-500 bg-white dark:bg-gray-500/30 sm:hover:bg-gray-50/20 dark:sm:hover:bg-white/10 border-gray-500/50 dark:text-white',
        danger: 'text-red-500 border-red-500/50 sm:hover:bg-red-500/20 dark:text-red-400 border dark:border-red-400/50',
        success: 'text-green-500 border-green-500/50 sm:hover:bg-green-500/20 dark:text-green-400 dark:border border-green-400/50'
    };

    // Color del efecto de pulso en el botón
    const circleEffectColor = {
        primary: 'bg-white/25',
        secondary: 'bg-gray-600/25 dark:bg-white/50',
        danger: 'bg-white/25',
        success: 'bg-white/25',
        dangerSecondary: 'bg-red-400',
        successSecondary: 'bg-green-400',
    };

    // Valor de redondeo de bordes del botón
    const roundedValue = {
        min: 'rounded',
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
    };

    // Tamaño y aspecto del botón
    const buttonSizevalue = {
        sm: 'size-8 p-2',
        lg: 'size-12 sm:size-10 p-2',
        text: "w-max h-12 sm:h-10 py-2 px-4 sm:px-2"
    };

    // Tamaño y aspecto del contenido del botón
    const contentSizeValue = {
        sm: 'size-4',
        lg: 'size-8',
        text: "w-min"
    }

    // Definición de nombres de clases para su asignación
    const buttonSizeClassName = buttonSizevalue[size];
    const contentSizeClassName = contentSizeValue[size];
    const roundedClassName = roundedValue[rounded];
    const typeClassName = buttonType[type];

    // Función de ejecución por el botón
    const callback = (event) => {
        // Efecto visual de pulso
        createCircle(event, circleEffectColor[type].split(" "));
        // Función provista
        onClick();
    }

    return (
        <button
            className={`${className} ${buttonSizeClassName} ${roundedClassName} ${typeClassName} sm:text-sm whitespace-nowrap flex justify-center items-center shadow-md overflow-hidden relative active:scale-95 transition duration-150 disabled:transform-none disabled:bg-gray-300 disabled:dark:bg-transparent disabled:hover:bg-gray-300 disabled:hover:dark:bg-transparent dark:disabled:border disabled:border-none border disabled:dark:border-gray-500/50 disabled:dark:text-gray-500/50`}
            onClick={callback}
            disabled={disabled}
        >
            <div className={`${contentSizeClassName} h-full flex justify-center items-center content-center`}>
                {children}
            </div>
        </button>
    )
}

export default ButtonTemplate;
