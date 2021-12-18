import React from 'react'

const StoreBuyBtn = ({ state, onHover, mouseOut }) => {
    return (
        <div
            style={{ width: state.btnWidth, background: state.btnBackground }}
            onMouseOut={mouseOut}
            onMouseOver={onHover}
            className="store_item_btn buy_now_btn">
            <i
                style={{ opacity: state.iconOpacity }}
                className="fas fa-credit-card fa-2x"></i>
            <p
                style={{ opacity: state.textOpacity }}
                className="hidden-text">Buy</p>
        </div>
    )
}

export default StoreBuyBtn
