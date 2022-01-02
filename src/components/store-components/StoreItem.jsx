import React, { useState, useRef, useEffect } from 'react'
import StoreBuyBtn from './StoreBuyBtn'
import StoreAddBtn from './StoreAddBtn';
import "./css/StoreItem.css"

const StoreItem = (props) => {

    // Default and on hover statemenst
    const defaultState = {
        iconOpacity: "1",
        iconColor: "#000",
        textOpacity: "0",
        btnWidth: "15%",
        btnBackground: "transparent"
    }
    const onHoverState = {
        iconOpacity: "0",
        iconColor: "#000",
        textOpacity: "1",
        btnWidth: "40%",
        btnBackground: "#f13939"
    }

    //Buy now button
    const [buyBtn, setBuyState] = useState(() => defaultState)

    const onBuyHover = () => {
        setBuyState(prevState => prevState = onHoverState)
    }

    const mouseOutBuy = () => {
        setBuyState(prevState => prevState = defaultState)
    }

    // Add to cart    
    const [addBtn, setAddState] = useState(() => "defaultState")

    const onAddHover = () => {
        setAddState(prevState => prevState = onHoverState)
    }

    const mouseOutAdd = () => {
        setAddState(prevState => prevState = defaultState)
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
                    state={addBtn}
                    onCart={props.onCart}
                    id={props.id}
                    addItems={props.addItems}
                    updateState={props.updateState} />
            </div>
            <div className="store-item-details">
                <p>{props.storeItemName}</p>
                <p>{props.price}.00€</p>
            </div>
        </div>
    )
};

StoreItem.defaultProps = {
    background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
    category: ""
}

export default StoreItem;