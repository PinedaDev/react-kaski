import React, { useState, useEffect } from 'react';
import NavBar from '../../components/global/NavBar';
import OverlayMenu from '../../components/global/OverlayMenu';
import StoreItem from '../../components/store-components/StoreItem';
import Filter from '../../components/store-components/filter/Filter';

import './css/Store.css'
import { get } from 'jquery';

const Store = ({ defOverlay, addItems, storeItems, itemsInCart, showMenu, hideMenu }) => {

    //Filter 
    const categories = ["All", "windows", "doors", "parts"]
    //render the filter options
    const filterOptions = () => {
        return (
            categories.map((category) => {
                return (
                    <div key={category} onClick={() => changeCategory(category)} className={"filter-option " + category}><p>{category}</p></div>
                );
            })
        );
    };
    // set "ALl" as a default category
    const [currentCategory, setCategory] = useState(() => categories[0])

    const changeCategory = (cat) => {
        setCategory(cat)
    };
    // filter items and store them in a list
    const filteredItems = storeItems.filter((item) => {
        if (item.category === currentCategory) {
            return true
        }
    });

    const [storeState, setStoreState] = useState(false)

    const updateState = () => {
        if (!storeState) {
            setStoreState(true)
        } else {
            setStoreState(!storeState)
        }
    }

    console.log(itemsInCart)

    //show all the items when the current category is All if it's not use the filtered item list to render de itmes
    const showItems = () => {

        if (currentCategory == "All") {
            return (
                storeItems.map((item) => {
                    return (
                        <StoreItem
                            addItems={addItems}
                            updateState={updateState}
                            id={item.id}
                            key={item.id}
                            price={item.price}
                            storeItemName={item.name}
                            category={item.category} />
                    );
                })
            );
        } else {
            return (
                filteredItems.map((item) => {
                    return (
                        <StoreItem
                            id={item.id}
                            key={item.id}
                            price={item.price}
                            storeItemName={item.name}
                            category={item.category} />
                    );
                })
            );
        }
    }

    return (
        <div className='store-page'>
            <NavBar showMenu={showMenu} count={itemsInCart.length} />
            <OverlayMenu defOverlay={defOverlay} hideMenu={hideMenu} />
            <Filter activeCategory={currentCategory} filterOptions={filterOptions} />
            <div className='store-items-container'>
                {showItems()}
            </div>
        </div>
    )
}

export default Store
