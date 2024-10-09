import { CalendarIcon, CheckIcon, ClockIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import InlineIcon from "../components/ui kit/text/InlineIcon"

export const char = (
    contentName, // Nombre de atributo a extraer,
    {
        info = undefined, // Resaltado en color azul
        success = undefined, // Resaltado en color verde
        warning = undefined, // Resaltado en color amarillo
        danger = undefined, // Resaltado en color rojo
    } = {}
) => {

    const RenderedChar = ({ [contentName]: content, className }) => {
        // Color del texto
        let textColor = "ui-text-none"

        if (info) {
            textColor = info(content) ? "ui-text-info" : textColor
        }

        if (success) {
            textColor = success(content) ? "ui-text-success" : textColor
        }

        if (warning) {
            textColor = warning(content) ? "ui-text-warning" : textColor
        }

        if (danger) {
            textColor = danger(content) ? "ui-text-danger" : textColor
        }

        return (
            <span className={`${textColor} ${className} inline`}>
                {content}
            </span>
        )
    }

    return RenderedChar
}

export const badge = (
    contentName, // Nombre de atributo a extraer,
    {
        info = undefined, // Resaltado en color azul
        success = undefined, // Resaltado en color verde
        warning = undefined, // Resaltado en color amarillo
        danger = undefined, // Resaltado en color rojo
    } = {}
) => {

    const RenderedBadge = ({ [contentName]: content }) => {
        // Color del texto
        let textColor = "ui-text-none"
        let backgroundColor = "ui-background-none"

        if (info) {
            textColor = info(content) ? "ui-text-info" : textColor
            backgroundColor = info(content) ? "ui-background-info" : backgroundColor
        }

        if (success) {
            textColor = success(content) ? "ui-text-success" : textColor
            backgroundColor = success(content) ? "ui-background-success" : backgroundColor
        }

        if (warning) {
            textColor = warning(content) ? "ui-text-warning" : textColor
            backgroundColor = warning(content) ? "ui-background-warning" : backgroundColor
        }

        if (danger) {
            textColor = danger(content) ? "ui-text-danger" : textColor
            backgroundColor = danger(content) ? "ui-background-danger" : backgroundColor
        }

        return (
            <div className="select-none"> {/* Contenedor extra para evitar el resaltado de color por hover */}
                <div className={`px-2 inline text-sm rounded-full w-max ${backgroundColor} ${textColor}`}>
                    {content}
                </div>
            </div>
        )
    }

    return RenderedBadge
}

export const monetary = (
    contentName, // Nombre de atributo a extraer,
    {
        info = undefined, // Resaltado en color azul
        success = undefined, // Resaltado en color verde
        warning = undefined, // Resaltado en color amarillo
        danger = undefined, // Resaltado en color rojo
    } = {}
) => {

    const RenderedMonetary = ({ [contentName]: content }) => {
        // Color del texto
        let textColor = "ui-text-none"

        if (info) {
            textColor = info(content) ? "ui-text-info" : textColor
        }

        if (success) {
            textColor = success(content) ? "ui-text-success" : textColor
        }

        if (warning) {
            textColor = warning(content) ? "ui-text-warning" : textColor
        }

        if (danger) {
            textColor = danger(content) ? "ui-text-danger" : textColor
        }

        return (
            <span className={`${textColor} inline-flex`}>
                {content.toLocaleString('es-MX', {style: 'currency', currency: 'MXN'})}
            </span>
        )
    }

    return RenderedMonetary
}

export const datetime = (
    contentName, // Nombre de atributo a extraer,
    {
        info = undefined, // Resaltado en color azul
        success = undefined, // Resaltado en color verde
        warning = undefined, // Resaltado en color amarillo
        danger = undefined, // Resaltado en color rojo
    } = {}
) => {

    const RenderedDatetime = ({ [contentName]: content }) => {
        // Color del texto
        let textColor = "ui-text-none"

        if (info) {
            textColor = info(content) ? "ui-text-info" : textColor
        }

        if (success) {
            textColor = success(content) ? "ui-text-success" : textColor
        }

        if (warning) {
            textColor = warning(content) ? "ui-text-warning" : textColor
        }

        if (danger) {
            textColor = danger(content) ? "ui-text-danger" : textColor
        }

        const [date, hour] = content.split(" ")

        return (
            <div className={`${textColor} text-start`}>
                <span className="inline-flex flex-wrap gap-1 text-end align-baseline">
                    <InlineIcon icon={CalendarIcon} />
                    {date}
                        <InlineIcon icon={ClockIcon}/>
                    {hour}
                </span>
            </div>
        )
    }

    return RenderedDatetime
}

export const date = (
    contentName, // Nombre de atributo a extraer,
    {
        info = undefined, // Resaltado en color azul
        success = undefined, // Resaltado en color verde
        warning = undefined, // Resaltado en color amarillo
        danger = undefined, // Resaltado en color rojo
    } = {}
) => {

    const RenderedDate = ({ [contentName]: content, className }) => {
        // Color del texto
        let textColor = "ui-text-none"

        if (info) {
            textColor = info(content) ? "ui-text-info" : textColor
        }

        if (success) {
            textColor = success(content) ? "ui-text-success" : textColor
        }

        if (warning) {
            textColor = warning(content) ? "ui-text-warning" : textColor
        }

        if (danger) {
            textColor = danger(content) ? "ui-text-danger" : textColor
        }

        return (
            <span className={`${className} ${textColor} text-start`}>
                <span className={`inline-flex items-center gap-1 align-baseline w-max `}>
                    <InlineIcon icon={CalendarIcon} />
                    {content}
                </span>
            </span>
        )
    }

    return RenderedDate
}

export const time = (
    contentName, // Nombre de atributo a extraer,
    {
        info = undefined, // Resaltado en color azul
        success = undefined, // Resaltado en color verde
        warning = undefined, // Resaltado en color amarillo
        danger = undefined, // Resaltado en color rojo
    } = {}
) => {

    const RenderedTime = ({ [contentName]: content, className }) => {
        // Color del texto
        let textColor = "ui-text-none"

        if (info) {
            textColor = info(content) ? "ui-text-info" : textColor
        }

        if (success) {
            textColor = success(content) ? "ui-text-success" : textColor
        }

        if (warning) {
            textColor = warning(content) ? "ui-text-warning" : textColor
        }

        if (danger) {
            textColor = danger(content) ? "ui-text-danger" : textColor
        }

        return (
            <div className={`${className} ${textColor} w-fit`}>
                <span className="inline-flex flex-wrap gap-1 text-end align-baseline">
                    <div className="w-fit text-start">
                        <span className="mr-1">
                            <InlineIcon icon={ClockIcon} />
                        </span>
                        {content}
                    </div>
                </span>
            </div>
        )
    }

    return RenderedTime
}

export const many2one = (
    contentName, // Nombre de atributo a extraer,
    {
        info = undefined, // Resaltado en color azul
        success = undefined, // Resaltado en color verde
        warning = undefined, // Resaltado en color amarillo
        danger = undefined, // Resaltado en color rojo
    } = {}
) => {

    const RenderedMany2One = ({ [contentName]: content }) => {
        // Color del texto
        let textColor = "ui-text-none"

        if (info) {
            textColor = info(content) ? "ui-text-info" : textColor
        }

        if (success) {
            textColor = success(content) ? "ui-text-success" : textColor
        }

        if (warning) {
            textColor = warning(content) ? "ui-text-warning" : textColor
        }

        if (danger) {
            textColor = danger(content) ? "ui-text-danger" : textColor
        }

        content = content[1]

        return (
            <div className={`${textColor} inline-flex`}>
                {content}
            </div>
        )
    }

    return RenderedMany2One
}

export const float = (
    contentName, // Nombre de atributo a extraer,
    {
        info = undefined, // Resaltado en color azul
        success = undefined, // Resaltado en color verde
        warning = undefined, // Resaltado en color amarillo
        danger = undefined, // Resaltado en color rojo
    } = {}
) => {

    const RenderedFloat = ({ [contentName]: content }) => {
        // Color del texto
        let textColor = "ui-text-none"

        if (info) {
            textColor = info(content) ? "ui-text-info" : textColor
        }

        if (success) {
            textColor = success(content) ? "ui-text-success" : textColor
        }

        if (warning) {
            textColor = warning(content) ? "ui-text-warning" : textColor
        }

        if (danger) {
            textColor = danger(content) ? "ui-text-danger" : textColor
        }

        return (
            <div className={`${textColor} inline-flex`}>
                {content.toFixed(2)}
            </div>
        );
    }

    return RenderedFloat;
}

export const percentage = (
    contentName, // Nombre de atributo a extraer,
    {
        info = undefined, // Resaltado en color azul
        success = undefined, // Resaltado en color verde
        warning = undefined, // Resaltado en color amarillo
        danger = undefined, // Resaltado en color rojo
    } = {}
) => {

    const RenderedPercentage = ({ [contentName]: content }) => {
        // Color del texto
        let textColor = "ui-text-none"

        if (info) {
            textColor = info(content) ? "ui-text-info" : textColor
        }

        if (success) {
            textColor = success(content) ? "ui-text-success" : textColor
        }

        if (warning) {
            textColor = warning(content) ? "ui-text-warning" : textColor
        }

        if (danger) {
            textColor = danger(content) ? "ui-text-danger" : textColor
        }

        return (
            <span className={`${textColor} inline-text`}>
                {content.toFixed(2) * 100}%
            </span>
        )
    }

    return RenderedPercentage
}

export const check = (
    contentName, // Nombre de atributo a extraer
) => {

    const RenderedCheck = ({ [contentName]: content }) => {

        const [checked, setChecked] = useState(content);

        const borderClassName = checked ? "border-main-500" : "border-gray-500";
        const fillClassName = checked ? "scale-100" : "scale-0";
        const iconClassName = checked ? "opacity-100 delay-200" : "opacity-0 delay-0";

        return (
            <div className={`${borderClassName} hover:border-main-500 relative flex justify-center items-center transition-colors duration-200 border-2 rounded-md size-6 cursor-pointer overflow-hidden`} onClick={() => setChecked((prevState) => !prevState)}>
                <span className={`${fillClassName} bg-main-500 rounded-sm size-full duration-300`}/>
                <CheckIcon className={`${iconClassName} transition duration-200 absolute size-6 fill-white pointer-events-none`} />
            </div>
        );
    }

    return RenderedCheck;
}
