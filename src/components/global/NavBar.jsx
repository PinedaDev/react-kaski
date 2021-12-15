import React from 'react'
import cartIcon from '../../img/icons/cart-icon.png'
import searchIcon from '../../img/icons/search-icon.png'
import KaskiLogo from './KaskiLogo'
import { NavLink } from 'react-router-dom'
import './css/NavBar.css'



const NavBar = () => {
    return (
        <div className='nav-bar'>
            <KaskiLogo />

            <div className='links'>
                <div className='text-links'>
                    <NavLink to="" >Home</NavLink>
                    <NavLink to="" >Doors</NavLink>
                    <NavLink to="" >Company</NavLink>
                </div>
                <div className='icon-links'>
                    <i><NavLink to="/pages/store"><img className='cart-icon' src={cartIcon} alt="cart icon" /></NavLink></i>
                    <i><img className='search-icon' src={searchIcon} alt="search icon" /></i>
                    <i className="fas fa-ellipsis-v fa-2x menu-icon"></i>
                </div>
            </div>
        </div>
    )
}

export default NavBar
