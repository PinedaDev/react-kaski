import React from 'react'
import OverlayLink from "./OverlayLink"
import CloseMenuBtn from "./CloseMenuBtn"
import "../css/OverlayMenu.css"


const OverlayMenu = ({ visibility, opacity, hideMenu }) => {

    return (
        <div className="overlay" style={{ visibility: visibility, opacity: opacity }}>
            <div className="overlayContent" >
                {/* button to closes the overlay menu */}
                <CloseMenuBtn hideMenu={hideMenu} />
                {/* fist value (link) assign the addres of the link second (linkName) the link text displayed */}
                <OverlayLink link="/" linkName="Home" />
                <OverlayLink link="/pages/Demopage" linkName="Demo-Page" />
                <OverlayLink link="#" linkName="Store" />
                <OverlayLink link="#" linkName="Company" />
                <OverlayLink link="#" linkName="Contact" />
            </div>
        </div>
    )
}


export default OverlayMenu
