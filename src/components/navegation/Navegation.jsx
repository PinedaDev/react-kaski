import React, { useState } from 'react'
import NavBar from '../global/NavBar'
import OverlayMenu from '../global/OverlayMenu'

const Navegation = (props) => {

    const overlayHidden = {
        opacity: "0",
        visibility: "hidden"
    };

    const overlayVisible = {
        opacity: "1",
        visibility: "visible"
    };

    const [overlayState, setOverlayStateState] = useState(() => overlayHidden)


    function hideOverlayMenu() {
        setOverlayStateState(overlayHidden)
    }

    function showOverlayMenu() {
        setOverlayStateState(overlayVisible)
    }

    return (
        <>
            <NavBar showMenu={showOverlayMenu} count={props.count} />
            <OverlayMenu defOverlay={overlayState} hideMenu={hideOverlayMenu} />
        </>
    )
}
Navegation.defaultProps = {
    count: 0
}

export default Navegation
