import React from 'react'
//
const OverlayLink = ({ link, linkName }) => {
    return (
        <>
            <a href={{ link }} className="menuItem">{linkName}</a>
        </>
    )
}

export default OverlayLink
