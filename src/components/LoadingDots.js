// dots bar to add to the loading_screen component
import React from 'react'
import "./css/loading_screen.css"

const LoadingDots = () => {
    return (
        <div className="dots_bar" id="dotsContainer">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
    )
}

export default LoadingDots
