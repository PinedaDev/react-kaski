import React, { useRef, useEffect } from 'react'
// Store comp
import StoreItem from '../store-comp/StoreItem'
// navegation
import StaticNavBar from '../global/StaticNavBar'
import OverlayMenu from '../global/OverlayMenu'
//style
import '../css/Store.css'
import '../css/MediaStyles.css'

const StorePage = ({ defaultState, hideMenu, showMenu }) => {
    //Default state for the navegation bar 

    // List of all existen categories
    const categories = [
        {
            id: 1,
            name: "All",
            value: "all"
        },
        {
            id: 2,
            name: "Windows",
            value: "windows"
        },
        {
            id: 3,
            name: "Doors",
            value: "doors"
        },
        {
            id: 4,
            name: "Parts",
            value: "parts"
        },
    ]
    // components to render the categories
    const Categories = () => {
        return (
            <>
                {   //use the (map method to loop and render through the (categories) list)
                    categories.map((category) => <option className="category" key={category.id} value={category.value}>{category.name}</option>)
                }
            </>
        )
    }

    //Store-Items
    const testItems = [
        {
            id: 1,
            name: "The window",
            price: "20€",
            category: "window",
        },
        {
            id: 2,
            name: "The window",
            price: "20€",
            category: "window"
        }, {
            id: 3,
            name: "The the part",
            price: "20€",
            category: "door"
        }, {
            id: 4,
            name: "The door",
            price: "20€",
            category: "door"
        }
    ]
    // loop through an given item list and render them inside the store item
    // container. 
    const Items = () => {
        return (
            <>
                {
                    testItems.map((item) => {
                        return (
                            <StoreItem key={item.id} background={item.img} category={item.category} storeItemName={item.name} price={item.price} />
                        )
                    })
                }
            </>
        )
    }
    return (
        <div className="store_page">
            {/* Navegation */}
            <StaticNavBar showMenu={showMenu} />
            <OverlayMenu visibility={defaultState.visibility} hideMenu={hideMenu} opacity={defaultState.opacity} />
            <div className="main">
                <div className="categories">
                    <select>{Categories()}</select>
                    <i className="fas fa-sort-amount-down fa-2x arrow_icon"></i>
                </div>
                <div className="store_items_container">
                    {Items()}
                </div>
            </div>
        </div>
    )
}

export default StorePage
