import React, { useState } from 'react'
import LoadingDots from "./LoadingDots"
import KaskiLogo from "./KaskiLogo"
import "./css/loading_screen.css"


const LoadingScreen = () => {

    const defaultScreen = {
        height: "100vh",
        opacity: "100%"
    }
    const screenUp = {
        height: "0vh",
        opacity: "0%"
    }
    const [defaultState, setState] = useState(() => {
        return (defaultScreen)
    })
    function ScreenFade() {
        setState(screenUp)
    }

    setTimeout(ScreenFade, 2000)

    return (
        <div className="loading_screen" style={defaultState}>
            <KaskiLogo />
            <LoadingDots />
        </div>

    )
}



export default LoadingScreen
