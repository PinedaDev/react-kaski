import React, { useState } from 'react'

const StoreAddBtn = ({ state, onCart, onHover, mouseOut, addItems, id, updateState }) => {

    const [clickedState, setBtnState] = useState(false)

    return (
        <div
            id={id}
            style={{ width: state.btnWidth, background: state.btnBackground }}
            onMouseOut={mouseOut}
            onMouseOver={onHover}
            onClick={() => addItems(id).then(updateState)}
            className="store-item-btn add-to-btn">
            <i
                style={{ opacity: state.iconOpacity, color: (!clickedState ? state.iconColor : "rgb(0, 255, 0)") }}
                className="fas fa-cart-plus fa-2x"></i>
            <p
                style={{ opacity: state.textOpacity }}
                className="hidden-text">Add+</p>
        </div>
    )
}

export default StoreAddBtn
