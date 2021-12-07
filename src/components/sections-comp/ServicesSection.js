import React from 'react'
// Styling
import "../css/ServicesSection.css"
//Services components
import BackgroundText from '../services-section-comp/BackgroundText'
import ServicesContainer from '../services-section-comp/ServicesContainer'
// divition component
import WaveDivition2 from '../global/WaveDivition2'

const ServicesSection = () => {

    return (
        <div className="services_section">
            <BackgroundText text="Palvelut" />
            <ServicesContainer />
            <WaveDivition2 />
        </div>
    )
}

export default ServicesSection
