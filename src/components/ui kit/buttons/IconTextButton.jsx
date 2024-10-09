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
            <div className="mr-2 sm:ml-1 h-[75%] duration-current aspect-square fill-current">
            {Icon && <Icon />}
            </div>
            <div className="flex flex-row items-center gap-1">
                {children}
            </div>
        </ButtonTemplate>
    )
}

export default IconTextButton;
