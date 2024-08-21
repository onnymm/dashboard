import ButtonTemplate from "./ButtonTemplate";

const TextButton = ({
    children, // Texto del botón
    onClick, // Función del botón
    type // Apariencia del botón
}) => {

    return (
        <ButtonTemplate type={type} size="text" onClick={onClick} rounded={"lg"}>
            {children}
        </ButtonTemplate>
    )
}

export default TextButton;
