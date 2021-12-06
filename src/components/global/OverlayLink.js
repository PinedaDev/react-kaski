import React from 'react'
import { Link, NavLink } from 'react-router-dom'
//
const OverlayLink = ({ link, linkName }) => {
    return (
        <>
            <NavLink to={link} className="menu_item">{linkName}</NavLink>
        </>
    )
}

export default OverlayLink
