import InputTemplate from "./InputTemplate";

const NumericInput = ({ defaultValue, valueHandle, min, max, instantUpdate }) => {
    const sendValue = (e) => {
        let value = Number(e.target.value)
        if ( value < min) {
            value = min
        } else if ( value > max ) {
            value = max
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
        <InputTemplate type="number" defaultValue={defaultValue} keyDownCallbacks={keyDownCallbacks} min={min} max={max} onBlur={updateCallback} centerText />
    )
}

export default NumericInput;
