//React comp
import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
//Global comp
import MenuIcon from './MenuIcon'
import SearchBtn from './SearchBtn'
import StoreLink from './StoreLink'
import HomeSection from '../sections-comp/HomeSection'
//Stiling and logo
import img from '../img/withe-logo.png'
import "../css/FloatingNavBar.css"

const FloatingNavBar = ({ showMenu }) => {
    return (
        <div className="floating_nav_bar">
            <img src={img} alt="kaski logo" className="logo" />
            <NavLink className="nav_link" to="/Windows">Windows</NavLink>
            <NavLink className="nav_link" to="/Doors">Doors</NavLink>
            <NavLink className="nav_link" to="/Company">Company</NavLink>
            <SearchBtn />
            <StoreLink />
            <MenuIcon onClick={showMenu} />
        </div>
    )
}

let exporting = "hola"

export let hello = exporting
export default FloatingNavBar
