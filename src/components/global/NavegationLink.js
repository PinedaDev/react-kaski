import React from 'react'
import { Link, NavLink } from 'react-router-dom'
//
const NavegationLink = ({ link, linkName, passedCalss }) => {
    return (
        <>
            <NavLink to={link} className={passedCalss}>{linkName}</NavLink>
        </>
    )
}

export default NavegationLink
