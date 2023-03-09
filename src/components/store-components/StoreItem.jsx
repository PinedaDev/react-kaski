import React, { useState } from 'react'
import StoreBuyBtn from './StoreBuyBtn'
import StoreAddBtn from './StoreAddBtn';
import "./css/StoreItem.css"

const StoreItem = (props) => {

    // Default and on hover statemenst for buy and add btns
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

    const onItemOverlay = {
        opacity: "1",
        background: "rgba(0,0,0,.3)",
        visibility: "visible"
    }
    const offItemOverlay = {
        opacity: "0",
        background: "transparent",
        visibility: "hidden"
    }


    const [itemOverlayState, setItemOverlayState] = useState(() => offItemOverlay)

    function onOverlay() {
        setItemOverlayState(prev => prev = onItemOverlay)
    }
    function offOverlay() {
        setItemOverlayState(prev => prev = offItemOverlay)
    }

    // asign and statement to define when the details window is visible or not


    return (
        <div
            onMouseOver={onOverlay}
            onMouseOut={offOverlay}
            className={`store-item all ${props.category}`} >
            <div style={itemOverlayState} className='store-item-overlay'>
                <button
                    onClick={() => props.getItemDetails(props.id).then(props.showDetailsOver).then(props.stateOfWindowDetails)}
                    className='details-btn'>
                    Details
                </button>
            </div>
            <div className="store-item-top">
                <StoreBuyBtn
                    onHover={onBuyHover}
                    mouseOut={mouseOutBuy}
                    state={buyBtn}
                    id={props.id}
                    addItems={props.addItems}
                    updateState={props.updateState} />

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
                <p>{props.price} €</p>
            </div>

        </div>
    )
};



export default StoreItem;