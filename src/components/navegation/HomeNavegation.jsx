import React, { useState, useEffect } from 'react'
import NavBar from '../global/NavBar'
import OverlayMenu from '../global/OverlayMenu'
import FloatingNavBar from '../global/FloatingNavBar'

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
    // FLoating nav var
    // homeRef is a reference to the home section to detect when it is not in the view port
    // to show with an observer the floating navegation var 

    //floating bar states
    //Floating navegation var states 
    const hiddenState = {
        height: "0",
        width: "0",
        opacity: "0"
    }
    const visibleState = {
        height: "4rem",
        width: "1000px",
        opacity: "1"
    }

    const [barState, setBarState] = useState(() => {
        return (hiddenState)
    })
    // use the Insection Observer API to check if HomeSection is in the view port
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio > 0) {
            setBarState(hiddenState)
        } else {
            setBarState(visibleState)
        }
    })
    // run the observer inside of a useEffect hook to check just when the viewport change
    useEffect(() => {
        observer.observe(props.homeRef.current)
    }, [props.homeRef])
    return (
        <>
            <NavBar showMenu={showOverlayMenu} count={props.count} />
            <OverlayMenu defOverlay={overlayState} hideMenu={hideOverlayMenu} />
            <FloatingNavBar showMenu={showOverlayMenu} state={barState} />
        </>
    )
}
Navegation.defaultProps = {
    count: 0
}
Navegation.defaultProps = {
    homeRef: null
}
export default Navegation
