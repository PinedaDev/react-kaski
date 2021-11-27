import React from 'react'

const UnderLogoText = () => {
    return (
        <div>
            <div style={decorLineStyle}></div>
            <span className="underLogoText">Ikkunat ja ovet - Sitä maankuulua Kaski-laatua</span>
        </div>
    )
}
const decorLineStyle = {
    position: "absolute",
    height: "2.5rem",
    width: "0.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.66)",
}
export default UnderLogoText
