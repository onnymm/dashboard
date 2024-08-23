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
    backgroundColor.forEach(
        (className) => {
            circle.classList.add(className)
        }
    )

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

export default createCircle;
