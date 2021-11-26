import React from 'react'
import OverlayLink from "./OverlayLink"
import "./css/OverlayMenu.css"
import { AiOutlineClose } from "react-icons/ai"


const OverlayMenu = () => {
    return (
        <div className="overlay">
            <div className="overlayContent">
                {/* button to closes the overlay menu */}
                <AiOutlineClose className="closeBtn" />
                {/* fist value assign the addres of the link second the link text displayed */}
                <OverlayLink link="#" linkName="Home" />
                <OverlayLink link="#" linkName="Blog" />
                <OverlayLink link="#" linkName="Store" />
                <OverlayLink link="#" linkName="Company" />
                <OverlayLink link="#" linkName="Contact" />
            </div>
        </div>
    )
}

export default OverlayMenu
