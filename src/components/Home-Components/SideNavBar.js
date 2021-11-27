import React from 'react'
import "../css/HomePage.css"
import MenuIcon from '../MenuIcon'

const SideNavBar = ({ onClick }) => {
    return (
        <div className="sideMenu">
            <MenuIcon onClick={onClick} />
        </div>
    )
}

export default SideNavBar
