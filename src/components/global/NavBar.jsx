import React from 'react'
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
            <NavLink className="nav-link" to="/" ><KaskiLogo /></NavLink>
            <div className='links'>
                <div className='text-links'>
                    <NavLink className="nav-link" to="/" >Etusivu</NavLink>
                    <NavLink className="nav-link" to="/windows" >Ikkunat</NavLink>
                    <NavLink className="nav-link" to="/doors" >Ovet</NavLink>
                </div>
                <div className='icon-links'>
                    <NavLink to="/online-store"><i className="fas fa-store store-icon"></i></NavLink>
                    <NavLink to="/online-store/cart">
                        <i className="fas fa-shopping-cart cart-icon">
                            {props.count === 0 ? "" : BasketCounter()}
                        </i>
                    </NavLink>
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
