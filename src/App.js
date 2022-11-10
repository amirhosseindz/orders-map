import React, {useCallback, useEffect, useState} from "react"
import "./App.css"
import Cart from "./components/Cart"
import Map from "./components/Map"

function App() {
    const getAppHeight = () => window.innerWidth >= 992 ? window.innerHeight : 400
    const [appHeight, setAppHeight] = useState(getAppHeight())
    const updateAppHeight = useCallback(() => setAppHeight(getAppHeight()), [])
    const appStyle = {
        height: appHeight
    }

    useEffect(() => {
        window.addEventListener("resize", updateAppHeight)

        return () => {
            window.removeEventListener("resize", updateAppHeight)
        }
    }, [updateAppHeight])

    return (
        <div className="App" style={appStyle}>
            <Cart/>
            <Map/>
        </div>
    )
}

export default App;
