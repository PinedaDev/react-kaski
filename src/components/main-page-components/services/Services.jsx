import React from 'react'
import './css/Services.css'

const Services = () => {

    const servicesList = [
        {
            id: "service1",
            text: "Kulluttajat",
            icon: "fas fa-house-user fa-3x",
            class: "service-box"
        },
        {
            id: "service2",
            text: "Taloyhtiöt",
            icon: "fas fa-building fa-3x",
            class: "service-box"
        },
        {
            id: "service3",
            text: "Taloyhtiöt",
            icon: "fas fa-users fa-3x",
            class: "service-box"
        },
        {
            id: "service4",
            text: "Jäkkeenmyyjät",
            icon: "fas fa-industry fa-3x",
            class: "service-box"
        },
        {
            id: "service5",
            text: "Rakenunusliikkeet",
            icon: "fas fa-hard-hat fa-3x",
            class: "service-box"
        },
    ]

    const showServices = () => {
        return (
            servicesList.map((service) => {
                return (
                    <div key={service.id} id={service.id} className={service.class}>
                        <i className={service.icon}></i>
                        <p>{service.text}</p>
                    </div>
                )
            })
        )
    }

    return (
        <div className='services-section'>
            <p>Services</p>
            <div className='services-container'>
                {showServices()}
            </div>

        </div>
    )
}

export default Services
