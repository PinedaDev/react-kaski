import React from 'react'
import ServiceBox from './ServiceBox'

const ServicesContainer = () => {


    return (
        <div className="services-container">
            <ServiceBox id="box1" servName="Kuluttajat" icon="fas fa-house-user fa-3x" />
            <ServiceBox id="box2" servName="Kuluttajat" icon="fas fa-building fa-3x" />
            <ServiceBox id="box3" servName="Jäkkeenmyyjät" icon="fas fa-users fa-3x" />
            <ServiceBox id="box4" servName="Talotehtaat" icon="fas fa-industry fa-3x" />
            <ServiceBox id="box5" servName="Rakenunusliikkeet" icon="fas fa-hard-hat fa-3x" />
        </div>
    )
}

export default ServicesContainer

//list of icons
/*
fas fa-house-user fa-3x
fas fa-building fa-3x
fas fa-users fa-3x
fas fa-industry fa-3x
fas fa-hard-hat fa-3x
*/