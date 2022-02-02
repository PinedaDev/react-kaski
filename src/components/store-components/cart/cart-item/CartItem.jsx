import React from 'react'
import './css/CartItem.css'

const CartItem = ({ category, price, amount, increaseAmount, deleteItem, decreaseAmount, updateCart, id }) => {


    return (
        <div className='cart-item'>
            <div className='cart-item-product cart-item-section'>
                <p>Tuote</p>
                <div className={'product-img cart-item-content ' + category[0]}>
                </div>
            </div>
            <div className='cart-item-price cart-item-section'>
                <p>Hinta</p>
                <p className='cart-item-content '>{price} €</p>
            </div>
            <div className='cart-item-qty cart-item-section'>
                <p>Määrä</p>
                <div className='cart-item-qty-handler cart-item-content'>
                    <button onClick={() => increaseAmount(id).then(updateCart)} > <span className='qty-handler-plus'>+</span> </button>
                    <p>{amount}</p>
                    <button onClick={() => decreaseAmount(id).then(updateCart)}> <span className='qty-handler-minus'>-</span> </button>
                </div>
            </div>
            <div className='cart-item-delete cart-item-section'>
                <p>Poista</p>
                <i onClick={() => deleteItem(id).then(updateCart)} className="fas fa-backspace fa-2x cart-item-content"></i>
            </div>
        </div>
    )
}

export default CartItem
