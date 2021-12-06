import React from 'react'

const ServiceBox = ({ servName, icon, id }) => {
    return (
        <div className="serv-box" id={id}>
            <i className={icon}></i>
            <p>{servName}</p>
        </div>
    )
}

export default ServiceBox
