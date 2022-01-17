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
    const categories = ["All", "Windows", "Doors", "Parts"]
    // set "ALl" as a default category
    const [currentCategory, setCategory] = useState(() => categories[0])

    function updateCurrentCategory(category) {
        setCategory(category)
    }

    //show all the items when the current category is All if it's not use the 
    //filtered item list to render de itmes

    const [filtered_items, set_filtered_items] = useState([])

    useEffect(() => {
        if (currentCategory !== "All") {
            const filter = storeItems.filter(item => item.category_id[0] === currentCategory ? true : "")
            set_filtered_items(filter)
        } else {
            set_filtered_items([])
        }
    }, [currentCategory])
    // Set an store  page state to update it when
    // user click on add+/remove item from the cart


    // show items 

    const show_items = () => {
        if (storeItems) {
            if (currentCategory === "All") {
                return (
                    storeItems.map(item => {
                        return (
                            <StoreItem
                                background={`url(${item.image})`}
                                key={item.id}
                                id={item.id}
                                addItems={addItems}
                                updateState={updateState}
                                storeItemName={item.name}
                                category={item.category_id[0]}
                                price={item.price}
                                onCart={item.onCart}
                            />
                        )
                    })
                )
            } else {
                return (
                    filtered_items.map(item => {
                        return (
                            <StoreItem
                                background={`url(${item.image})`}
                                key={item.id}
                                id={item.id}
                                addItems={addItems}
                                updateState={updateState}
                                storeItemName={item.name}
                                category={item.category_id[0]}
                                price={item.price}
                                onCart={item.onCart}
                            />
                        )
                    })
                )
            }
        }

    }
    return (
        <div className='store-page'>
            <Navegation count={itemsInCart.length} />
            <AnimatedComponent>
                <Filter categories={categories} currentCategory={currentCategory} updateCurrentCategory={updateCurrentCategory} />
                <div className='store-items-container'>
                    {show_items()}
                </div>
            </AnimatedComponent>
        </div>
    )
}

export default Store
