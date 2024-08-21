import ButtonTemplate from "./ButtonTemplate";

const IconButton = ({
    icon: Icon, // Ícono del botón
    onClick, // Función del botón
    disabled, // Estado de botón deshabilitado
    size="sm", // Tamaño del botón
    type, // Apariencia del botón
}) => {

    return (
        <ButtonTemplate onClick={onClick} disabled={disabled} rounded={'full'} type={type} size={size}>
            <Icon className="fill-current duration-current" />
        </ButtonTemplate>
    )
}

export default IconButton;