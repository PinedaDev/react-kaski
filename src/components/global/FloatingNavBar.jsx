import './css/FloatingNavBar.css'
import React from 'react'
import cartIcon from '../../img/icons/cart-icon.png'
import searchIcon from '../../img/icons/search-icon.png'
import KaskiLogo from './KaskiLogo'
import { NavLink } from 'react-router-dom'


const FloatingNavBar = ({ showMenu, state }) => {
    return (
        <div style={state} className='floating-nav-bar'>
            <KaskiLogo />
            <NavLink className="floating-nav-link" to="/windows" >Windows</NavLink>
            <NavLink className="floating-nav-link" to="/doors" >Doors</NavLink>
            <NavLink className="floating-nav-link" to="" >Company</NavLink>
            <i><NavLink to="/online-store"><img className='cart-icon' src={cartIcon} alt="cart icon" /></NavLink></i>
            <i><img className='search-icon' src={searchIcon} alt="search icon" /></i>
            <i onClick={showMenu} className="fas fa-ellipsis-v fa-2x menu-icon"></i>
        </div>
    )
}

export default FloatingNavBar