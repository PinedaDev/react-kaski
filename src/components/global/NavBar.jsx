import React from 'react'
import cartIcon from '../../img/icons/cart-icon.png'
import searchIcon from '../../img/icons/search-icon.png'
import KaskiLogo from './KaskiLogo'
import { NavLink } from 'react-router-dom'
import './css/NavBar.css'



const NavBar = (props) => {

    const BasketCounter = () => {
        return (
            <div className='basket-counter'>
                <span>{props.count}</span>
            </div>
        )
    }

    return (
        <div className='nav-bar'>
            <KaskiLogo />
            <div className='links'>
                <div className='text-links'>
                    <NavLink className="nav-link" to="/" >Home</NavLink>
                    <NavLink className="nav-link" to="/windows" >Windows</NavLink>
                    <NavLink className="nav-link" to="/doors" >Doors</NavLink>
                    <NavLink className="nav-link" to="/company" >Company</NavLink>
                </div>
                <div className='icon-links'>
                    <i><NavLink to="/online-store"><img className='cart-icon' src={cartIcon} alt="cart icon" /></NavLink></i>
                    <i className="fas fa-shopping-basket basket-icon">
                        {props.count == 0 ? "" : BasketCounter()}
                    </i>
                    <i><img className='search-icon' src={searchIcon} alt="search icon" /></i>
                    <i onClick={props.showMenu} className="fas fa-ellipsis-v fa-2x menu-icon"></i>
                </div>
            </div>
        </div>
    )
}

NavBar.defaultProps = {
    count: 0
}

export default NavBar
