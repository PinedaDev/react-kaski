import React from 'react'

const StoreAddBtn = ({ state, onCart, onHover, mouseOut, addItems, id, updateState }) => {
    return (
        <div
            id={id}
            style={{ width: state.btnWidth, background: state.btnBackground }}
            onMouseOut={mouseOut}
            onMouseOver={onHover}
            onClick={() => addItems(id).then(updateState)}
            className="store-item-btn add-to-btn">
            <i
                style={{ opacity: state.iconOpacity, color: (!onCart ? 'rgb(0,0,0)' : 'rgb(0,255,0)') }}
                className="fas fa-cart-plus fa-2x"></i>
            <p
                style={{ opacity: state.textOpacity }}
                className="hidden-text">{!onCart ? 'Add+' : 'Remove'} </p>
        </div>
    )
}

export default StoreAddBtn
