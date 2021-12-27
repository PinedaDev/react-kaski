import React from 'react'
import cartIcon from '../../img/icons/cart-icon.png'
import searchIcon from '../../img/icons/search-icon.png'
import KaskiLogo from './KaskiLogo'
import { NavLink } from 'react-router-dom'
import './css/NavBar.css'



const NavBar = ({ showMenu }) => {
    return (
        <div className='nav-bar'>
            <KaskiLogo />
            <div className='links'>
                <div className='text-links'>
                    <NavLink className="nav-link" to="/" >Home</NavLink>
                    <NavLink className="nav-link" to="/pages/Kaski-Windows" >Windows</NavLink>
                    <NavLink className="nav-link" to="/pages/Kaski-Doors" >Doors</NavLink>
                    <NavLink className="nav-link" to="/pages/company" >Company</NavLink>
                </div>
                <div className='icon-links'>
                    <i><NavLink to="/pages/Kaski-Online-Store"><img className='cart-icon' src={cartIcon} alt="cart icon" /></NavLink></i>
                    <i className="fas fa-shopping-basket basket-icon"><div className='basket-counter'></div></i>
                    <i><img className='search-icon' src={searchIcon} alt="search icon" /></i>
                    <i onClick={showMenu} className="fas fa-ellipsis-v fa-2x menu-icon"></i>
                </div>
            </div>
        </div>
    )
}

export default NavBar
