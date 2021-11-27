import React from 'react'
import "./css/HomePage.css"

const MenuIcon = ({ onClick }) => {
    return (
        <>
            <i className="fas fa-ellipsis-v fa-3x icon" onClick={onClick}></i>
        </>
    )
}

export default MenuIcon
