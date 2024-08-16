const ButtonTemplate = ({
    children, // Contenido del botón
    onClick, // Función del botón
    disabled, // Deshabilitado
    type='secondary', // Tipo de botón
    rounded, // Redondeo de los bordes del botón
}) => {

    const typeOptions = {
        primary: 'bg-blue-500 text-white',
        secondary: 'text-gray-500 hover:bg-white hover:text-gray-500 border border-gray-300 dark:text-white dark:hover:text-gray-500',
        danger: 'bg-red-500 text-white',
        success: 'bg-green-500 text-white',
    }

    const circleEffect = {
        primary: 'bg-white/25',
        secondary: 'bg-gray-600/25',
        danger: 'bg-white/25',
        success: 'bg-white/25',
    }

    const roundedOptions = {
        min: '',
        none: '-none',
        sm: '-sm',
        md: '-md',
        xl: '-xl',
        full: '-full',
    }

    const roundedClassName = `rounded${roundedOptions[rounded] || roundedOptions.xl}`
    const typeClassName = typeOptions[type]

    const callback = (event) => {
        createCircle(event, circleEffect[type]);
        onClick();
    }

    return (
        <button
            className={`${roundedClassName} ${typeClassName} shadow-lg p-2 overflow-hidden relative active:scale-95 transition duration-150 disabled:bg-gray-400 disabled:text-white dark:disabled:bg-gray-400 dark:disabled:border-gray-400 dark:disabled:text-white disabled:transform-none`}
            onClick={(event) => callback(event)}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default ButtonTemplate;

const createCircle = (event, backgroundColor) => {

    // Obtención del elemento HTML
    const buttonElement = event.currentTarget;

    // Creación del círculo
    const circle = document.createElement("span");

    // Obtención de las coordenadas del cuadro del botón
    const rect = buttonElement.getBoundingClientRect();

    // Definición de coordenadas para ubicar el círculo
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Adición de clases para estilización
    circle.classList.add("circle")
    circle.classList.add(backgroundColor)

    // Definición de altura y ancho del círculo
    circle.style.width = `${buttonElement.offsetWidth}px`;
    circle.style.height = `${buttonElement.offsetWidth}px`;

    // Definición de coordenadas del círculo
    circle.style.left = `${x - buttonElement.offsetWidth / 2}px`;
    circle.style.top = `${y - buttonElement.offsetWidth / 2}px`;

    // Escuchador de evento para desparecer cuando terminó se animarse
    circle.addEventListener(
        'animationend',
        () => circle.remove()
    );

    // Se añade el círculo al botón
    buttonElement.appendChild(circle);
}
