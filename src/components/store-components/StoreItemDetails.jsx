import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import './css/StoreItemDetails.css'

const StoreItemDetails = (props) => {

    const details = props.details
    function show_item_details() {
        if (details) {
            return (
                <div className='details-window '>
                    <header>
                        <h1>
                            {details.name}
                        </h1>
                        <AiOutlineClose
                            className='cls-details-btn'
                            onClick={() => props.cleanUpItemDetails().then(() => props.closeDetailsOverlay())}>
                        </AiOutlineClose>
                        <div className="details-divition">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                            </svg>
                        </div>
                    </header>
                    <main>
                        {/* img section */}
                        <div>
                            <div className={`details-img-container ${details.category}`}>
                            </div>
                            <div className='color-selection'>
                                {/* feature for future */}
                                <div className='color-option'></div>
                                <div className='color-option'></div>
                                <div className='color-option'></div>
                                <div className='color-option'></div>
                            </div>
                        </div>
                        {/* Description and actions */}
                        <div>
                            <h2>
                                Description:
                            </h2>
                            <p style={{ fontSize: (details.category_id[0].description.length > 30 ? ".4em" : "1em") }}>
                                {details.category_id[0].description}
                            </p>
                            <h3>
                                Price: {details.price}
                            </h3>
                            <div className='btns-wraper'>
                                <NavLink
                                    className='details-btn details-window-btn'
                                    to='/online-store/cart'
                                    onClick={() => props.addItems(details.id, 1).then(props.updateState)}>
                                    Buy
                                </NavLink>
                                <button
                                    className='details-btn details-window-btn'
                                    onClick={() => props.addItems(details.id).then(props.updateState)}>
                                    {!details.onCart ? "Add+" : "Remove"}
                                </button>
                            </div>
                        </div>
                    </main>
                </div>
            )
        } else {
            return null
        }
    }

    return (
        <div>
            {show_item_details()}
        </div>
    )
}

export default StoreItemDetails
