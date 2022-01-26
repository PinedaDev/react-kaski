import React from 'react'
import { NavLink } from 'react-router-dom'

const StoreBuyBtn = ({ updateState, addItems, id, state, onHover, mouseOut }) => {
    return (
        <NavLink to="/online-store/cart">
            <div
                style={{ width: state.btnWidth, background: state.btnBackground }}
                onMouseOut={mouseOut}
                onMouseOver={onHover}
                onClick={() => addItems(id, 1).then(() => updateState())}
                className="store-item-btn buy-now-btn">
                <i
                    style={{ opacity: state.iconOpacity }}
                    className="fas fa-credit-card fa-2x"></i>
                <p
                    style={{ opacity: state.textOpacity }}
                    className="hidden-text">Buy</p>
            </div>
        </NavLink>
    )
}

export default StoreBuyBtn
