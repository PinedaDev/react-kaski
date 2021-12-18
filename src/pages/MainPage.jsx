import React, { useRef, useEffect, useState } from 'react'
//style
import './css/MainPage.css'
import './css/MainPageTablets.css'
import './css/MainPagePc.css'
//global components
import OffertForm from '../components/global/OffertForm'
import ChatBot from '../components/global/ChatBot'
import LoadingScreen from '../components/global/LoadingScreen'
import NavBar from '../components/global/NavBar'
import OverlayMenu from '../components/global/OverlayMenu'
import FloatingNavBar from '../components/global/FloatingNavBar'
//sections
import Home from '../components/main-page-components/home/Home'
import Services from '../components/main-page-components/services/Services'
import SmallGallery from '../components/main-page-components/small-gallery/SmallGallery'
import FooterSection from '../components/global/footer/FooterSection'


const MainPage = ({ defOverlay, showMenu, hideMenu }) => {
    // homeRef is a reference to the home section to detect when it is not in the view port
    // to show with an observer the floating navegation var 
    const homeRef = useRef(null);
    //floating bar states
    //Floating navegation var states 
    const hiddenState = {
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
        return (hiddenState)
    })
    // use the Insection Observer API to check if HomeSection is in the view port
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio > 0) {
            setBarState(hiddenState)
        } else {
            setBarState(visibleState)
        }
    })
    // run the observer inside of a useEffect hook to check just when the viewport change
    useEffect(() => {
        observer.observe(homeRef.current)
    }, [homeRef])

    return (
        <div className='main-page'>
            <OverlayMenu defOverlay={defOverlay} hideMenu={hideMenu} />

            <NavBar showMenu={showMenu} />
            <OffertForm />
            <ChatBot />
            <FloatingNavBar state={barState} showMenu={showMenu} />
            {/* sections */}
            <Home ref={homeRef} />
            <Services />
            <SmallGallery />
            <FooterSection />
        </div>
    )
}

export default MainPage
