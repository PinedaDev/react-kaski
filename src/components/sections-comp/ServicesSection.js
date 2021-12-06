import React from 'react'
// Styling
import "../css/ServicesSection.css"
//Services components
import BackgroundText from '../services-section-comp/BackgroundText'
import ServicesContainer from '../services-section-comp/ServicesContainer'

const ServicesSection = () => {

    return (
        <div className="services_section">
            <BackgroundText text="Palvelut" />
            <ServicesContainer />
        </div>
    )
}

export default ServicesSection
