import React, { useRef, useEffect, useState } from "react"
//Loading component
import LoadingScreen from "../global/LoadingScreen"
// Auxiliar overlay menu and Navegation bar
import OverlayMenu from "../global/OverlayMenu"
import FloatingNavBar from "../global/FloatingNavBar"
// Sections
import HomeSection from "../sections-comp/HomeSection"
import ServicesSection from "../sections-comp/ServicesSection"
import LilGallerySection from "../sections-comp/LilGallerySection"
import FooterSection from "../sections-comp/FooterSection"
// useRef hook to check with js if its in the viewport

const MainPage = ({ defaultState, hideMenu, showMenu }) => {

    //Hook the floating navegation bar and the home section to manipulate the DOM
    const navBarRef = useRef(null)
    const homeSectionRef = useRef(null)
    //Floating navegation var states 
    const hiddenBarState = {
        height: "0",
        width: "0",
        opacity: "0"
    }
    const visibleState = {
        height: "4rem",
        width: "1000px",
        opacity: "1"
    }

    const [barState, setBarState] = useState(() => {
        return (hiddenBarState)
    })
    // use the Insection Observer API to check if HomeSection is in the view port
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio > 0) {
            setBarState(hiddenBarState)
        } else {
            setBarState(visibleState)
        }
    })
    // run the observer inside of a useEffect hook to check just when the viewport change
    useEffect(() => {
        observer.observe(homeSectionRef.current)
    }, [homeSectionRef])

    return (
        <div>
            {/* Loading Screen at the top */}
            <LoadingScreen />
            {/* {hidden overlay menu} */}
            <OverlayMenu visibility={defaultState.visibility} hideMenu={hideMenu} opacity={defaultState.opacity} />
            {/* Floating nav var */}
            <FloatingNavBar ref={navBarRef} state={barState} showMenu={showMenu} />
            {/* {sections} */}
            <HomeSection ref={homeSectionRef} showMenu={showMenu} />
            <ServicesSection />
            <LilGallerySection />
            <FooterSection />
        </div>
    )
}
export default MainPage