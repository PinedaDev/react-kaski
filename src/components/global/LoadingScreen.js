import React, { useState, useEffect } from 'react'
import LoadingDots from "./LoadingDots"
import KaskiLogo from "./KaskiLogo"
import "../css/Loading_screen.css"


const LoadingScreen = () => {
    //default statement for the loading screen
    const defaultScreen = {
        height: "100vh",
        opacity: "100%"
    }
    // final status to the loading screen
    const screenUp = {
        height: "0vh",
        opacity: "0%"
    }
    // declare the default status to assing to the laoding screen
    const [defaultState, setState] = useState(() => {
        return (defaultScreen)
    })
    // funtion to update the status of the loading screen
    function ScreenFade() {
        setState(screenUp)
    }
    // set charging time for the loading screen (2s)



    return (
        // set the default status to the loading screen
        <div className="loading_screen" style={defaultState}>
            <KaskiLogo />
            <LoadingDots />
        </div>

    )
}



export default LoadingScreen