import './css/FloatingNavBar.css'
import React from 'react'
import KaskiLogo from './KaskiLogo'
import { NavLink } from 'react-router-dom'


const FloatingNavBar = ({ showMenu, state }) => {
    return (
        <div style={state} className='floating-nav-bar'>
            <KaskiLogo />
            <NavLink className="floating-nav-link" to="/windows" >Windows</NavLink>
            <NavLink className="floating-nav-link" to="/doors" >Doors</NavLink>
            <NavLink className="floating-nav-link" to="" >Company</NavLink>
            <NavLink to="/online-store"><i className="fas fa-store store-icon"></i></NavLink>
            <NavLink to="/"><i className="fas fa-search search-icon"></i></NavLink>
            <i onClick={showMenu} className="fas fa-ellipsis-v fa-2x menu-icon"></i>
        </div>
    )
}

export default FloatingNavBar