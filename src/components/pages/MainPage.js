import React, { useRef } from "react"
//Loading component
import LoadingScreen from "../global/LoadingScreen"
// Auxiliar overlay menu and Navegation bar
import OverlayMenu from "../global/OverlayMenu"
import FloatingNavBar from "../global/FloatingNavBar"
// Sections
import HomeSection from "../sections-comp/HomeSection"
import ServicesSection from "../sections-comp/ServicesSection"
import LilGallerySection from "../sections-comp/LilGallerySection"
// useRef hook to check with js if its in the viewport

const HomePage = ({ defaultState, hideMenu, showMenu }) => {

    return (
        <div>
            {/* Loading Screen at the top */}
            {/* {hidden overlay menu} */}
            <OverlayMenu visibility={defaultState.visibility} hideMenu={hideMenu} opacity={defaultState.opacity} />
            {/* Floating nav var */}
            <FloatingNavBar showMenu={showMenu} />
            {/* {sections} */}
            <HomeSection showMenu={showMenu} />
            <ServicesSection />
            <LilGallerySection />
        </div>
    )
}
export default HomePage