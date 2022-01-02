import React, { useState, useEffect } from 'react';
import NavBar from '../../components/global/NavBar';
import OverlayMenu from '../../components/global/OverlayMenu';
import StoreItem from '../../components/store-components/StoreItem';
import Filter from '../../components/store-components/filter/Filter';

import './css/Store.css'

const Store = ({ defOverlay, clearCartList, addItems, storeItems, itemsInCart, showMenu, hideMenu }) => {

    //Filter 
    const categories = ["All", "windows", "doors", "parts"]
    // set "ALl" as a default category
    const [currentCategory, setCategory] = useState(() => categories[0])

    function updateCurrentCategory(category) {
        setCategory(category)
    }

    //show all the items when the current category is All if it's not use the 
    //filtered item list to render de itmes
    const filteredItems = storeItems.filter((element) => {
        if (element.category.includes(currentCategory)) {
            return true
        }
    });


    // Set an store  page state to update it when
    // user click on add+/remove item from the cart
    const [storeState, setStoreState] = useState(false)

    const updateState = () => {
        if (!storeState) {
            setStoreState(true)
        } else {
            setStoreState(!storeState)
        }
    }


    // show items 
    const showItems = () => {
        if (currentCategory === "All") {
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
    return (
        <div className='store-page'>
            <NavBar updateState={updateState} showMenu={showMenu} count={itemsInCart.length} />
            <OverlayMenu updateState={updateState} defOverlay={defOverlay} hideMenu={hideMenu} />
            <Filter categories={categories} currentCategory={currentCategory} updateCurrentCategory={updateCurrentCategory} />
            <div className='store-items-container'>
                {showItems()}
            </div>
        </div>
    )
}

export default Store
