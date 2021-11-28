import React, { useState } from "react";
import "./css/HomePage.css"
import background from "./img/bgImg.png"
//Global components
import LoadingScreen from "./LoadingScreen"
import OverlayMenu from "./OverlayMenu";
import KaskiLogo from "./KaskiLogo";
import UtilitiesContainer from "./Home-Components/UtilitiesContainer";
import FinnishLogos from "./FinnishLogos";
// Home components
import HomeNavegationLinks from "./Home-Components/HomeNavegationLinks";
import MainSlogan from "./Home-Components/MainSlogan";
import SideNavBar from "./Home-Components/SideNavBar";
import UnderLogoText from "./Home-Components/UnderLogoText";

const HomePage = ({ defaultState, showMenu, hideMenu }) => {
    return (
        <div className="home_page_section">
            {/* main home page
            (background-img)
            (side navegation bar)
            (menu icon)
            (overlay manu)

            (Kaski logo)
            (shoping link to the store and search utilities btns)
            (text under the kaski logo)

            (main navegation links)

            (main text)

            (finnish key/design imgs)
         */}
            <LoadingScreen />
            <img src={background} style={imgStyle} alt="girl and window" />
            <OverlayMenu visibility={defaultState.visibility} hideMenu={hideMenu} opacity={defaultState.opacity} />
            <KaskiLogo marginLeft="6rem" />
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