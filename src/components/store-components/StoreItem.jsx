import React, { useState, useRef, useEffect } from 'react'
import StoreBuyBtn from './StoreBuyBtn'
import StoreAddBtn from './StoreAddBtn';
import "./css/StoreItem.css"

const StoreItem = (props) => {

    // Default and on hover statemenst
    const defaultState = {
        iconOpacity: "1",
        textOpacity: "0",
        btnWidth: "15%",
        btnBackground: "transparent"
    }
    const onHoverState = {
        iconOpacity: "0",
        textOpacity: "1",
        btnWidth: "40%",
        btnBackground: "#f13939"
    }

    //Buy now button
    const [buyBtn, setBuyState] = useState(() => {
        return (defaultState)
    })

    const onBuyHover = () => {
        setBuyState(onHoverState)
    }

    const mouseOutBuy = () => {
        setBuyState(defaultState)
    }

    // Add to cart    
    const [addBtn, setAddState] = useState(() => {
        return (defaultState)
    })
    const onAddHover = () => {
        setAddState(onHoverState)
    }

    const mouseOutAdd = () => {
        setAddState(defaultState)
    }


    return (
        <div style={{ background: props.background }} className={"store-item all " + props.category}>
            <div className="store-item-top">
                <StoreBuyBtn
                    onHover={onBuyHover}
                    mouseOut={mouseOutBuy}
                    state={buyBtn} />
                <StoreAddBtn
                    onHover={onAddHover}
                    mouseOut={mouseOutAdd}
                    state={addBtn} />
            </div>
            <div className="store-item-details">
                <p>{props.storeItemName}</p>
                <p>{props.price}</p>
            </div>
        </div>
    )
};

StoreItem.defaultProps = {
    background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
    category: ""
}

export default StoreItem;