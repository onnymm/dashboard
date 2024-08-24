import { useState } from "react";
import InputTemplate from "./InputTemplate";

const NumericInput = ({ defaultValue, valueHandle, min, max, instantUpdate }) => {
    const [render, setRender] = useState(false)

    const sendValue = (e) => {
        let value = Number(e.target.value)
        if ( value < min) {
            value = min
            setRender( (prevState) => (!prevState) );
        } else if ( value > max ) {
            value = max
            setRender( (prevState) => (!prevState) );
        }

        valueHandle(value)
    }

    const updateCallback = (e) => {
        if ( instantUpdate ) {
            sendValue(e)
        } 
    }

    const keyDownCallbacks = {
        "Enter": sendValue,
    }

    return (
        <InputTemplate key={render} type="number" defaultValue={defaultValue} keyDownCallbacks={keyDownCallbacks} min={min} max={max} onBlur={updateCallback} centerText />
    )
}

export default NumericInput;
