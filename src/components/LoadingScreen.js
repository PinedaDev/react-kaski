import React from 'react'
import LoadingDots from "./LoadingDots"
import KaskiLogo from "./KaskiLogo"
import "./css/loading_screen.css"


const LoadingScreen = () => {
    function screenUP() {

    }
    return (
        <div className="loading_screen">
            <KaskiLogo />
            <LoadingDots />
        </div>
    )
}

export default LoadingScreen
