import React from 'react'
import './css/Cart.css'
import CartItem from './CartItem'

const Cart = ({ itemsInCart }) => {

    let sum = 0
    const items = itemsInCart

    items.forEach(item => {
        sum += item.price
    })



    return (
        <div className='cart-overlay'>
            <div className='cart-overlay-content'>
                <p>Basket</p>
                <i className="fas fa-times cart-overlay-cls-btn"></i>
                <div className='cart-item-container'>

                </div>
                <div className='cart-bottom'>
                    <div className='cart-buy-btn'><p>Buy</p></div>
                    <p>{"Total:" + " " + sum + ".00€"}</p>
                </div>
            </div>
        </div >
    )
}

export default Cart
