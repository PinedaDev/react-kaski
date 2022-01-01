import React from 'react'
import './css/DoorCart.css'

const DoorCart = ({ itemName, img }) => {
    return (
        <div className='door-cart'>
            <div className='door-img-container' style={{ backgroundImage: `url(${img})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}></div>
            <p className="door-name">{itemName}</p>
            <div className='door-item-decorator'></div>
        </div>
    )
}

export default DoorCart
