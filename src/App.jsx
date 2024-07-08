import { useEffect } from "react"
import getBarData from "./samples/localAPI"

const App = () => {
    useEffect(
        () => {
            getBarData()
        }, []
    )

    return (
        <div>
            App
        </div>
    )
}

export default App
