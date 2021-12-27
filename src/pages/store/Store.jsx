import React, { useEffect, useState } from 'react'
import NavBar from '../../components/global/NavBar'
import OverlayMenu from '../../components/global/OverlayMenu'
import StoreItem from '../../components/store-components/StoreItem'
import Filter from '../../components/store-components/Filter'
import Cart from '../../components/store-components/Cart'
import './css/Store.css'

const Store = ({ defOverlay, showMenu, hideMenu }) => {

    //Filter 
    const categories = ["All", "windows", "doors", "parts"]
    //render the filter options
    const filterOptions = () => {
        return (
            categories.map((category) => {
                return (
                    <div key={category} onClick={() => changeCategory(category)} className={"filter-option " + category}><p>{category}</p></div>
                )
            })
        )
    }
    // set "ALl" as a default category
    const [currentCategory, setCategory] = useState(() => categories[0])

    const changeCategory = (cat) => {
        setCategory(cat)
    }
    // filter items and store them in a list

    const items = [
        {
            id: "1",
            name: "The Window",
            price: 10,
            category: "windows"
        },
        {
            id: "2",
            name: "The Door",
            price: 15,
            category: "doors"
        },
        {
            id: "3",
            name: "The Part",
            price: 5,
            category: "parts"
        },
        {
            id: "4",
            name: "another Part",
            price: 5,
            category: "parts"
        },
    ]
    const filteredItems = items.filter((item) => {
        if (item.category === currentCategory) {
            return true
        }
    })
    //show all the items when the current category is All if it's not use the filtered item list to render de itmes
    const showItems = () => {

        if (currentCategory == "All") {
            return (
                items.map((item) => {
                    return (
                        <StoreItem key={item.id} price={item.price} storeItemName={item.name} category={item.category} />
                    )
                })
            )
        } else {
            return (
                filteredItems.map((item) => {
                    return (
                        <StoreItem key={item.id} price={item.price} storeItemName={item.name} category={item.category} />
                    );
                })
            )
        }
    }
    //
    const itemsToCart = []
    return (
        <div className='store-page'>
            <NavBar showMenu={showMenu} />
            <OverlayMenu defOverlay={defOverlay} hideMenu={hideMenu} />
            <Cart itemsInCart={items} />
            <Filter activeCategory={currentCategory} filterOptions={filterOptions} />
            <div className='store-items-container'>
                {showItems()}
            </div>
        </div>
    )
}

export default Store
