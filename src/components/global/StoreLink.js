import React from 'react'

const StoreLink = (props) => {
    return (
        <>
            <a href="#"><i style={{ margin: props.margin }} id="shoppingCar" className="fas fa-shopping-cart fa-2x utility_icon"></i></a>
        </>
    )
}

StoreLink.defaultProps = {
    margin: "0"
}

export default StoreLink
