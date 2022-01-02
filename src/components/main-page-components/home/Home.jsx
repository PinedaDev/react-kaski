import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/Home.css'
import girlPhoto from '../../../img/backgrounds/girl-and-bunny-img.png'
import avainLippu from "../../../img/logos/avainlippu.png"
import dff from "../../../img/logos/DFF.png"

const Home = (props, ref) => {
    return (
        <div className='home-section'>
            <div className='section-content'>
                <div className='decor-text'>
                    <div className='decor-line'></div>
                    <span>Ikkunat ja ovet - Stiä maankuulua Kaski-laatua</span>
                </div>
                <p ref={ref}>Tunnelma tulee ikkunoista ja ovista</p>

                <div className='mobile-links-container'>
                    <NavLink className="mobile-home-link" to="/pages/Windows">Windows</NavLink>
                    <NavLink className="mobile-home-link" to="/pages/Doors">Doors</NavLink>
                </div>
            </div>
            <img className='girl-home-picture' src={girlPhoto} alt="girl at the window" />
            <div className='logos-container'>
                <img src={avainLippu} alt="avain lippu logo" />
                <img src={dff} alt="design in finland" />
            </div>
        </div>
    )
}

const fowarTextRef = React.forwardRef(Home);

export default fowarTextRef
