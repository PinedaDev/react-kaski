import React, { useState } from 'react'
import './css/Cart.css'
import Navegation from '../../navegation/Navegation'
import CartItem from './cart-item/CartItem'
import { NavLink } from 'react-router-dom'
import AnimatedComponent from '../../global/AnimatedComponent'
import { useEffect } from 'react/cjs/react.development'
const Cart = ({ itemsInCart }) => {

    //const itemsInCart = itemsInCart

    const [carState, setCartState] = useState(false)

    let sum = 0

    function increaseAmount(itemId) {
        return new Promise((resolve, reject) => {
            let targetItem = itemsInCart.filter((item) => item.id === itemId ? true : "")
            targetItem[0].amount += 1
            console.log(itemsInCart)

            const error = false

            if (!error) {
                resolve()
            } else {
                reject("Error: Something went wrong")
            }
        })
    }

    function decreaseAmount(itemId) {
        return new Promise((resolve, reject) => {
            let targetItem = itemsInCart.filter((item) => item.id === itemId ? true : "")
            if (targetItem[0].amount > 0) {
                targetItem[0].amount -= 1
            } else {
                deleteItem(itemId).then(updateCart)
            }
            const error = false

            if (!error) {
                resolve()
            } else {
                reject("Error: Something went wrong")
            }
        })
    }

    function deleteItem(itemId) {
        return new Promise((resolve, reject) => {
            let targetItem = itemsInCart.filter((item) => item.id === itemId ? true : "")
            if (itemsInCart.includes(targetItem[0])) {
                const index = itemsInCart.indexOf(targetItem[0])
                if (index > -1) {
                    itemsInCart.splice(index, 1)
                }
                targetItem[0].onCart = false
                targetItem[0].amount = 1
            }
            const error = false

            if (!error) {
                resolve()
            } else {
                reject("Error: Something went wrong")
            }
        })
    }

    function updateCart() {
        if (!carState) {
            setCartState(true)
        } else {
            setCartState(!carState)
        }
    }

    if (itemsInCart != []) {
        itemsInCart.forEach(item => sum += item.price * item.amount)
    }

    useEffect(() => {
        updateCart()
        console.log(itemsInCart)
    }, [])

    return (
        <AnimatedComponent>
            <div className='cart-section'>
                <div className='cart-items-section'>
                    <Navegation />
                    <div className='cart-item-container'>
                        {
                            itemsInCart.map((item) =>
                                <CartItem
                                    background={`url(${item.image})`}
                                    increaseAmount={increaseAmount}
                                    decreaseAmount={decreaseAmount}
                                    deleteItem={deleteItem}
                                    updateCart={updateCart}
                                    id={item.id}
                                    key={item.id}
                                    price={item.price}
                                    amount={item.amount} />)
                        }
                    </div>
                </div>
                <div className='checkout-section'>
                    <div className='divition-line'></div>
                    <h1
                        style={{ color: "black" }}
                        className='cart-main-header'>
                        Ostoskori
                    </h1>
                    <h2 className='sum'>
                        Summa: {sum} €
                    </h2>

                    <button className='checkout-btn'>CHECKOUT!</button>
                    <i className="fas fa-shopping-basket fa-7x basket-icon"></i>
                    <NavLink to="/online-store"><button className='back-to-store'>Takaisin</button></NavLink>
                </div>
            </div>
        </AnimatedComponent>
    )
}

export default Cart
