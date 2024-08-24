import React from "react";
import ButtonTemplate from "../../buttons/ButtonTemplate";

const NavigationButton = React.memo(
    ({
        onClick,
        icon: Icon,
        disabled
    }) => {

        return (
            <ButtonTemplate
                disabled={disabled}
                onClick={onClick}
                className="flex w-12 h-12 justify-center items-center bg-gray-200 shadow-md rounded-xl"
            >
                <div className="h-8 w-8 ">
                    <Icon className="fill-white" />
                </div>
            </ButtonTemplate>
        )
    }
)

export default NavigationButton;