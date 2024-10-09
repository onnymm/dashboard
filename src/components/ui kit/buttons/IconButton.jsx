import ButtonTemplate from "./ButtonTemplate";

const IconButton = ({
    className,
    icon: Icon, // Ícono del botón
    onClick, // Función del botón
    disabled, // Estado de botón deshabilitado
    size="sm", // Tamaño del botón
    type, // Apariencia del botón
}) => {

    return (
        <ButtonTemplate className={className} onClick={onClick} disabled={disabled} type={type} size={size}>
            <Icon className="duration-current fill-current" />
        </ButtonTemplate>
    )
}

export default IconButton;