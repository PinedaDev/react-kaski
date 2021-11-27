import React, { useState } from "react";
import "./css/HomePage.css"
import background from "./img/bgImg.png"
import SideNavBar from "./Home-Components/SideNavBar";
import OverlayMenu from "./OverlayMenu";

const HomePage = ({ defaultState, showMenu, hideMenu }) => {


    return (
        <div className="home_page">
            {/* main home page
            (background-img)
            (side navegation bar)
            (menu icon)
            (overlay manu)

            (Kaski logo)
            (shoping and search utilities)
            (underlogo text)

            (main navegation links)

            (main page text)

            (finnish key/design imgs)
         */}
            <img src={background} style={imgStyle} alt="girl and window" />
            <SideNavBar onClick={showMenu} />
            <OverlayMenu visibility={defaultState.visibility} hideMenu={hideMenu} opacity={defaultState.opacity} />
        </div>
    )
}
export default HomePage

const imgStyle = {
    position: "absolute",
    left: "60%",
    height: "100vh",
    width: "40%",
}