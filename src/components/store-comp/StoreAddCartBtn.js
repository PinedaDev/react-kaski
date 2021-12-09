import React from 'react'

const StoreAddCartBtn = ({ state, onHover, mouseOut }) => {
    return (
        <div
            style={{ width: state.btnWidth, background: state.btnBackground }}
            onMouseOut={mouseOut}
            onMouseOver={onHover}
            className="store_item_btn add_to_btn">
            <i
                style={{ opacity: state.iconOpacity }}
                className="fas fa-cart-plus fa-2x"></i>
            <p
                style={{ opacity: state.textOpacity }}
                className="hidden-text">Add+</p>
        </div>
    )
}

export default StoreAddCartBtn
