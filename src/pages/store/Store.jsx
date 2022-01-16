import React, { useState, useEffect } from 'react';
import StoreItem from '../../components/store-components/StoreItem';
import Filter from '../../components/store-components/filter/Filter';
import Navegation from '../../components/navegation/Navegation';
import './css/Store.css'
import AnimatedComponent from '../../components/global/AnimatedComponent';

const Store = ({ addItems, storeItems, itemsInCart }) => {
    const [storeState, setStoreState] = useState(false)

    const updateState = () => {
        if (!storeState) {
            setStoreState(true)
        } else {
            setStoreState(!storeState)
        }
    }
    useEffect(() => {
        updateState()
    }, [])
    //Filter 
    const categories = ["Kaikki", "Ikkunat", "Ovet", "Varaosat"]
    // set "ALl" as a default category
    const [currentCategory, setCategory] = useState(() => categories[0])

    function updateCurrentCategory(category) {
        setCategory(category)
    }

    //show all the items when the current category is All if it's not use the 
    //filtered item list to render de itmes
    const filteredItems = storeItems.filter((element) => element.category.includes(currentCategory) ? true : "")

    // Set an store  page state to update it when
    // user click on add+/remove item from the cart


    // show items 
    const showItems = () => {
        if (currentCategory === "Kaikki") {
            return (
                storeItems.map((item) => {
                    return (
                        <StoreItem
                            key={item.id}
                            id={item.id}
                            addItems={addItems}
                            updateState={updateState}
                            storeItemName={item.name}
                            price={item.price}
                            onCart={item.onCart}
                        />
                    )
                })
            )
        } else {
            return (
                filteredItems.map((item) => {
                    return (
                        <StoreItem
                            key={item.id}
                            id={item.id}
                            addItems={addItems}
                            updateState={updateState}
                            storeItemName={item.name}
                            price={item.price}
                            onCart={item.onCart}
                        />
                    )
                })
            )
        }
    }
    console.log(storeItems)
    return (
        <div className='store-page'>
            <Navegation count={itemsInCart.length} />
            <AnimatedComponent>
                <Filter categories={categories} currentCategory={currentCategory} updateCurrentCategory={updateCurrentCategory} />
                <div className='store-items-container'>
                    {showItems()}
                </div>
            </AnimatedComponent>
        </div>
    )
}

export default Store
