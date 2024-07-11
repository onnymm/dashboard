import { redPalette } from "../constants/colors";

const ColorPalette = () => {

    console.log("colorpalette")
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            {
                redPalette.map(
                    (color, index) => {
                        console.log(color)
                        return (
                            <div
                                key={index}
                                style={
                                    {
                                        backgroundColor: color,
                                        height: '64px',
                                        width: '64px',
                                        // border: '1px solid white',
                                        boxSizing: 'border-box'
                                    }
                                }
                            ></div>
                        )
                    }
                )
            }
        </div>
    )
}

export default ColorPalette;