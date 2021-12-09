import React from 'react'
import NavegationLink from "./NavegationLink"
import CloseMenuBtn from "./CloseMenuBtn"
import "../css/OverlayMenu.css"


const OverlayMenu = ({ visibility, opacity, hideMenu }) => {

    return (
        <div className="overlay" style={{ visibility: visibility, opacity: opacity }}>
            <div className="overlay_content" >
                {/* button to closes the overlay menu */}
                <CloseMenuBtn hideMenu={hideMenu} />
                {/* fist value (link) assign the addres of the link second (linkName) the link text displayed */}
                <NavegationLink passedCalss="menu_item" link="/" linkName="Home" />
                <NavegationLink passedCalss="menu_item" link="/pages/Demopage" linkName="Demo-Page" />
                <NavegationLink passedCalss="menu_item" link="/pages/StorePage" linkName="Store" />
                <NavegationLink passedCalss="menu_item" link="#" linkName="Company" />
                <NavegationLink passedCalss="menu_item" link="#" linkName="Contact" />
            </div>
        </div>
    )
}


export default OverlayMenu
