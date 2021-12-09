import React, { useRef, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../css/Demopage.css"

const Demopage = () => {

    const defaultState = {
        backgroundColor: "#000"
    }
    const redState = {
        backgroundColor: "#f00"
    }

    const [state, setState] = useState(() => {
        return (defaultState)
    });

    const squareRef = useRef(null);


    const observer = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio > 0) {
            setState(redState)
        } else {
            setState(defaultState)
        }
    })

    useEffect(() => {

        observer.observe(squareRef.current)

    }, [squareRef]);

    return (
        <div>
            <NavLink to="/">Home</NavLink>

            <div ref={squareRef} className="square" style={state}></div>
        </div>
    )
}


export default Demopage
