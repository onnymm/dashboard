const NoRecords = ({
    icon: Icon,
    message
}) => {

    return (
        <div className="flex flex-col justify-center items-center gap-6 size-full">
            <div className="size-16">
                <Icon className="fill-gray-500/50 size-full" />
            </div>
            <span className="text-gray-500/50 select-none">{message}</span>
        </div>
    )
}

export default NoRecords;
