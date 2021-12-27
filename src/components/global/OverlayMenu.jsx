import React from 'react'
import './css/OverlayMenu.css'
import { AiOutlineClose } from "react-icons/ai"
import { NavLink } from 'react-router-dom'

const OverlayMenu = ({ defOverlay, hideMenu }) => {

    const menuItems = [
        {
            id: "home",
            name: 'Home',
            link: '/',
            class: 'menu-item'
        },
        {
            id: "windows",
            name: 'Windows',
            link: '/pages/Kaski-Windows',
            class: 'menu-item'
        },
        {
            id: "doors",
            name: 'Doors',
            link: '/pages/doors',
            class: 'menu-item'
        },
        {
            id: "shop",
            name: 'Shop',
            link: '/pages/Kaski-Online-Store',
            class: 'menu-item'
        },
        {
            id: "contact",
            name: 'Contact',
            link: '/Contact',
            class: 'menu-item'
        }
    ]

    const items = () => {
        return (
            menuItems.map((item) => {
                return (
                    <NavLink onClick={hideMenu} className={item.class} key={item.id} to={item.link}>{item.name}</NavLink>
                );
            })
        );
    }

    return (
        <div className='overlay' style={defOverlay}>
            <div className='overlay-content'>
                <AiOutlineClose onClick={hideMenu} className='close-btn' />
                {items()}
            </div>
        </div>
    )
}

export default OverlayMenu
