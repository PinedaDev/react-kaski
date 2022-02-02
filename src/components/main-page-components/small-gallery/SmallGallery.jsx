import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/SmallGallery.css'
import FooterWaveDivition from '../../global/FooterWaveDivition'

const SmallGallery = () => {

    const imgsList = [
        {
            id: "main-img",
            class: "img-container"
        },
        {
            id: "img2",
            class: "img-container"
        },
        {
            id: "img3",
            class: "img-container"
        },
        {
            id: "img4",
            class: "img-container"
        }
    ]

    const imgs = (() => imgsList.map((img) => <div key={img.id} className={img.class + " " + img.id}></div>))

    return (
        <div className='small-gallery-section'>
            <p>Inspiroidu</p>
            <div className='imgs-container'>
                {imgs()}
            </div>
            <FooterWaveDivition />
        </div>
    )
}

export default SmallGallery
