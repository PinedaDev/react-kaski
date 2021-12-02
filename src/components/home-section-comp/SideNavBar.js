import React from 'react'
import "../css/Home_section.css"
import MenuIcon from '../global/MenuIcon'

const SideNavBar = ({ showMenu }) => {
    return (
        <div className="sideMenu">
            <MenuIcon onClick={showMenu} />
        </div>
    )
}

export default SideNavBar