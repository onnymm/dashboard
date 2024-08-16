import ButtonTemplate from "./ButtonTemplate"

const IconButton = ({ icon: Icon, onClick=undefined, disabled, size, type }) => {

    return (
        <ButtonTemplate onClick={onClick} disabled={disabled} rounded={'full'} type={type} size={size}>
            <Icon className="fill-current duration-current" />
        </ButtonTemplate>
    )
}

export default IconButton