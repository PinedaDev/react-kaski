import React, { useRef } from 'react'
//style
import './css/MainPage.css'
import './css/MainPageTablets.css'
import './css/MainPagePc.css'
//global components
import HomeNavegation from '../components/navegation/HomeNavegation'
//sections
import Home from '../components/main-page-components/home/Home'
import Services from '../components/main-page-components/services/Services'
import SmallGallery from '../components/main-page-components/small-gallery/SmallGallery'
import FooterSection from '../components/global/footer/FooterSection'
//
import AnimatedComponent from '../components/global/AnimatedComponent'

const MainPage = () => {
    const homeRef = useRef(null)
    return (
        <div>
            <HomeNavegation homeRef={homeRef} />
            <AnimatedComponent>
                <div className='main-page'>
                    {/* sections */}
                    <Home ref={homeRef} />
                    <Services />
                    <SmallGallery />
                    <FooterSection />
                </div>
            </AnimatedComponent>
        </div>
    )
}

export default MainPage
