import React, { useState } from "react";
import "./css/HomePage.css"
import background from "./img/bgImg.png"
import FinnishLogos from "./FinnishLogos";

import OverlayMenu from "./OverlayMenu";
import KaskiLogo from "./KaskiLogo";
import UtilitiesContainer from "./Home-Components/UtilitiesContainer";

import HomeNavegationLinks from "./Home-Components/HomeNavegationLinks";
import MainSlogan from "./Home-Components/MainSlogan";
import SideNavBar from "./Home-Components/SideNavBar";
import UnderLogoText from "./Home-Components/UnderLogoText";

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
            <OverlayMenu visibility={defaultState.visibility} hideMenu={hideMenu} opacity={defaultState.opacity} />
            <KaskiLogo />
            <UtilitiesContainer />
            <UnderLogoText />
            <HomeNavegationLinks />
            <MainSlogan />
            <SideNavBar onClick={showMenu} />
            {/* finnish logos  */}
            <FinnishLogos />
        </div>
    )
}
export default HomePage

const imgStyle = {
    zIndex: "0",
    position: "absolute",
    left: "60%",
    height: "100vh",
    width: "40%",
}