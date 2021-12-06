import React from 'react'

const FooterContent = (props) => {
    return (
        <>
            <p className="title">{props.title}</p>
            <p className="insideText">{props.insideText}</p>
        </>
    )
}

FooterContent.defaultProps = {
    insideText: "",
    title: ""
}
export default FooterContent
