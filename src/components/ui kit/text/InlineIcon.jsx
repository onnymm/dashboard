const InlineIcon = ({ icon: Icon }) => {
    return (
        <span className="inline-flex items-start w-4 h-5 align-middle">
            <Icon className="fill-current size-4" />
        </span>
    )
}

export default InlineIcon;