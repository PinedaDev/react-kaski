import React, { useState, useEffect } from 'react';
import StoreItem from '../../components/store-components/StoreItem';
import StoreItemDetails from '../../components/store-components/StoreItemDetails';
import Filter from '../../components/store-components/filter/Filter';
import Navegation from '../../components/navegation/Navegation';
import './css/Store.css'
import AnimatedComponent from '../../components/global/AnimatedComponent';


const Store = ({ itemDetails, getItemDetails, cleanUpItemDetails, addItems, storeItems, itemsInCart }) => {



    const [storeState, setStoreState] = useState(false)
    const updateState = () => {
        if (!storeState) {
            setStoreState(true)
        } else {
            setStoreState(!storeState)
        }
    }
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

    // show items conditionaly using the list that contain all the items if 
    // the filter doesnt have a specific category selected

    const show_items = () => {
        if (storeItems) {
            if (currentCategory === "All") {
                return (
                    storeItems.map(item => {
                        return (
                            <StoreItem

                                key={item.id}
                                id={item.id}

                                showDetailsOver={showDetailsOver}
                                getItemDetails={getItemDetails}
                                stateOfWindowDetails={stateOfWindowDetails}

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

                                key={item.id}
                                id={item.id}

                                showDetailsOver={showDetailsOver}
                                getItemDetails={getItemDetails}
                                stateOfWindowDetails={stateOfWindowDetails}

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

    const [detailsOver, setDetailsOver] = useState(false)
    const [detailsWindow, setDetailsWindow] = useState(false)

    function showDetailsOver() {
        return new Promise((resolve, reject) => {

            setDetailsOver(true)

            const error = false
            if (!error) {
                resolve()
            } else {
                reject("Error: Something so wrong")
            }
        })
    }
    function closeDetailsOverlay() {
        return new Promise((resolve, reject) => {

            setDetailsOver(!detailsOver)

            const error = false
            if (!error) {
                resolve()
            } else {
                reject("Error: Something so wrong")
            }
        })
    }
    function stateOfWindowDetails() {
        return new Promise((resolve, reject) => {

            if (!detailsWindow) {
                setDetailsWindow(true)
            } else {
                setDetailsWindow(!detailsWindow)
            }

            const error = false
            if (!error) {
                resolve()
            } else {
                reject("Error: Something so wrong")
            }
        })
    }
    return (
        <div className='store-page'>
            <Navegation count={itemsInCart.length} />
            <AnimatedComponent>
                <Filter categories={categories} currentCategory={currentCategory} updateCurrentCategory={updateCurrentCategory} />
                <div className='store-items-container '>
                    {show_items()}
                </div>
                <div className={'item-details-overlay ' + (!detailsOver ? "details-overlay-hidden" : "details-overlay-visible")}>
                    <StoreItemDetails
                        addItems={addItems}
                        updateState={updateState}
                        details={itemDetails ? itemDetails[0] : ""}
                        closeDetailsOverlay={closeDetailsOverlay}
                        cleanUpItemDetails={cleanUpItemDetails}
                        state={detailsWindow}
                        stateOfWindowDetails={stateOfWindowDetails} />
                </div>
            </AnimatedComponent>
        </div>
    )
}

export default Store
