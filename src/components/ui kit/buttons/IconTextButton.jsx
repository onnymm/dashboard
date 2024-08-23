import ButtonTemplate from "./ButtonTemplate";

const IconTextButton = ({
    children,
    icon: Icon, // Ícono del botón
    onClick, // Función del botón
    disabled, // Estado de botón deshabilitado
    type, // Apariencia del botón
}) => {

    return (
        <ButtonTemplate onClick={onClick} disabled={disabled} rounded={'lg'} type={type} size={"text"}>
            <Icon className="size-4 mr-2 fill-current duration-current" />
            <div>
                {children}
            </div>
        </ButtonTemplate>
    )
}

export default IconTextButton;