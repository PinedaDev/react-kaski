import React, { useState, useEffect } from 'react'
import './css/LoadingScreen.css'
import KaskiLogo from './KaskiLogo'
const LoadingScreen = () => {

    const loading = {
        height: "100%",
        opacity: "100%",
    }
    const loaded = {
        height: "0%",
        opacity: "0%",
    }

    const [loadScreenState, setLoadScreenState] = useState(() => loading)

    useEffect(() => {
        setTimeout(() => setLoadScreenState(loaded), 1000)
    }, [])

    return (
        <div className='loading-screen' style={loadScreenState}>
            <KaskiLogo />
            <div className='loading-dots'>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    )
}

export default LoadingScreen
