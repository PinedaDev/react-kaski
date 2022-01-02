import React from 'react'
import "./css/WindowCart.css"

const WindowCart = (props) => {
    const subTextValues = props.subTextValues
    const windowFeatures = props.itemChar
    return (
        <div className='window-cart'>
            <div className='window-img-container'>
                <div className='window-cart-img'
                    style={{
                        backgroundImage: `url(${props.img})`,
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat"
                    }}>
                </div>
            </div>
            <div className="window-details">
                <h1 className='window-name'>
                    {props.name}
                </h1>
                <div className='u-value'>
                    <div className='decorator-element'></div>
                    <p className='u-value-text'>
                        U-arvo {props.uValue}
                    </p>
                </div>
                <div className='sub-uValue-text'>
                    <p>
                        Lämmöneristyskyky  U = {subTextValues[0]}
                    </p>
                    <p>
                        Ääneneristyskyky  = {subTextValues[1]}
                    </p>
                </div>

                <p className='window-description'>
                    {props.description}
                </p>
                <ul className='window-features'>
                    {
                        windowFeatures.map((windowCart, i) => {
                            return (
                                <li key={i}>{windowCart}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default WindowCart
