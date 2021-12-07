import React from 'react'
import "../css/LittleGallery.css"
import { NavLink } from 'react-router-dom'

//outside comp
import BackgroundText from "../services-section-comp/BackgroundText"
import WaveDivition1 from '../global/WaveDivition1'
//clases to assing divs backgrounds and area
const imgList = ["main_img ", "img2", "img3", "img4", "img5"]

const LilGallery = () => {
    return (
        <div className="little_gallery_section">
            <BackgroundText style={{ margin: "0" }} className="section_text" text="Inspiroidu" />
            <div className="container">
                <div className={imgList[0]}></div>
                <div className={imgList[1]}></div>
                <div className={imgList[2]}></div>
                <div className={imgList[3]}></div>
                <div className={imgList[4]}></div>
            </div>
            <NavLink className="link" to="/Gallery"> More </NavLink>
            <WaveDivition1 />
        </div>
    )
}

export default LilGallery
