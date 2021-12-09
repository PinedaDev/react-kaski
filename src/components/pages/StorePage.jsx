import React, { useRef, useEffect } from 'react'
// Store comp
import StoreItem from '../store-comp/StoreItem'
// navegation
import StaticNavBar from '../global/StaticNavBar'
import OverlayMenu from '../global/OverlayMenu'
//style
import '../css/Store.css'

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
                    categories.map((category) => {
                        return (
                            <option className="category" key={category.id} value={category.value}>{category.name}</option>
                        )
                    })
                }
            </>
        )
    }
    //Store Items references

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
                    <StoreItem storeItemName="Test window" price="2000.00$" />
                    <StoreItem storeItemName="Test door" price="1000.00$" />
                    <StoreItem storeItemName="Test Item" price="2000.00$" />
                    <StoreItem storeItemName="Test Item" price="2000.00$" />
                    <StoreItem storeItemName="Test Item" price="2000.00$" />
                    <StoreItem storeItemName="Test Item" price="2000.00$" />
                    <StoreItem storeItemName="Test Item" price="2000.00$" />
                    <StoreItem storeItemName="Test Item" price="2000.00$" />
                    <StoreItem storeItemName="Test Item" price="2000.00$" />
                    <StoreItem storeItemName="Test Item" price="2000.00$" />
                </div>
            </div>
        </div>
    )
}

export default StorePage
