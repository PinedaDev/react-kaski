import React from 'react'
import { NavLink } from 'react-router-dom'
//global comp
import KaskiLogo from './KaskiLogo'
import MenuIcon from './MenuIcon'
import SearchBtn from './SearchBtn'
import StoreLink from './StoreLink'
import NavegationLinks from './NavegationLink'
//style
import '../css/StaticNavBar.css'

const StaticNavBar = ({ showMenu }) => {
    return (
        <div className="static_nav_bar">
            <div className="logo_container">
                <KaskiLogo />
            </div>
            <nav className="midle_links">
                <NavegationLinks passedCalss="static_nav_link " link="/" linkName="Home" />
                <NavegationLinks passedCalss="static_nav_link " link="/pages/Blog" linkName="Blog" />
                <NavegationLinks passedCalss="static_nav_link " link="/pages/Company" linkName="Company" />
            </nav>
            <nav className="last_links">
                <SearchBtn />
                <StoreLink />
                <MenuIcon className="static_store_link" margin="0 1rem 0 1rem" onClick={showMenu} />
            </nav>
        </div>
    )
}

export default StaticNavBar
