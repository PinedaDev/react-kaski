import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import './css/StoreItemDetails.css'

const StoreItemDetails = (props) => {

    const validation = props.details

    return (
        <div className={'item-detail-window ' + (!props.state ? "detail-window-hidden" : "detail-window-visible")}>
            <header className='details-window-top'>
                <AiOutlineClose className='details-cls-btn' onClick={() => props.closeDetailsOverlay().then(props.stateOfWindowDetails).then(() => props.cleanUpItemDetails())} />
                <h1 className='item-detail-name'>
                    {validation ? validation.name : null}
                </h1>
                <div className='wave-divition'>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </header>
            <main>
                <div className='details-window-img'
                    style={{ backgroundImage: `url(${validation ? validation.image : null})`, backgroundPosition: (validation ? "center" : null), backgroundSize: (validation ? "cover" : null) }}>
                </div>
                <div className='color variations'>
                    {/* map trough a list of colors */}
                </div>
                <div className='details-text-container'>
                    <p>Description:</p>
                    <p className='details-description'>{validation ? validation.description : null}</p>
                </div>
            </main>
            <footer>
                <p className='detail-window-price'>Price: {validation ? validation.price : null}€</p>
                <button className='detail-window-btn red-background'>Buy</button>
                <button
                    onClick={validation ? () => props.addItems(validation.id).then(props.updateState) : null}
                    className={validation ? 'detail-window-btn ' + (!validation.onCart ? "red-background" : "green-background") : null}>
                    {validation ? !validation.onCart ? 'Add+' : 'Remove' : null}
                </button>
            </footer>
        </div>
    )
}

export default StoreItemDetails
