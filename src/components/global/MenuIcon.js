import React from 'react'
import "../css/Home_section.css"

const MenuIcon = (props) => {
    return (
        <>
            <i style={{ margin: props.margin }} className="fas fa-ellipsis-v fa-3x menu_icon" onClick={props.onClick}></i>
        </>
    )
}
MenuIcon.defaultProps = {
    margin: "0"
}
export default MenuIcon
