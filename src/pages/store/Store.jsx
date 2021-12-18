import React from 'react'
import NavBar from '../../components/global/NavBar'
import OverlayMenu from '../../components/global/OverlayMenu'
import './css/Store.css'

const Store = ({ defOverlay, showMenu, hideMenu }) => {
    return (
        <div className='store-page'>
            <NavBar showMenu={showMenu} />
            <OverlayMenu defOverlay={defOverlay} hideMenu={hideMenu} />

            <div className='filter'>
                <div className='filter-dropdpwn'></div>
            </div>

            <div className='store-items-container'>

            </div>
        </div>
    )
}

export default Store
