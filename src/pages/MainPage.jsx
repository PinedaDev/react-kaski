import React from 'react'
import './css/MainPage.css'
//global components
import OffertForm from '../components/global/OffertForm'
import ChatBot from '../components/global/ChatBot'
import LoadingScreen from '../components/global/LoadingScreen'
import NavBar from '../components/global/NavBar'
import OverlayMenu from '../components/global/OverlayMenu'
//sections
import Home from '../components/main-page-components/home/Home'
import Services from '../components/main-page-components/services/Services'
import SmallGallery from '../components/main-page-components/small-gallery/SmallGallery'
import FooterSection from '../components/global/footer/FooterSection'


const MainPage = ({ defOverlay, showMenu, hideMenu }) => {
    return (
        <div className='main-page'>
            {/* global utyliies components */}
            <OverlayMenu defOverlay={defOverlay} hideMenu={hideMenu} />
            <LoadingScreen />
            <NavBar showMenu={showMenu} />
            <OffertForm />
            <ChatBot />
            {/* sections */}
            <Home />
            <Services />
            <SmallGallery />
            <FooterSection />
        </div>
    )
}

export default MainPage
