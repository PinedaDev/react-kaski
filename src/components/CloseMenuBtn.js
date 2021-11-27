import { AiOutlineClose } from "react-icons/ai"
import "./css/OverlayMenu.css"

const CloseMenuBtn = ({ hideMenu }) => {
    function chgColor() {
        console.log("click")
    }
    return (
        <>
            <AiOutlineClose className="clsBtn" onClick={hideMenu} onMouseOver={chgColor} />
        </>
    )
}

/* const btnStyle = {
    color: "white",
    top: "0",
    fontSize: "4em",
    textAlign: "right",
    marginRight: "10px",
    cursor: "pointer"
}*/
export default CloseMenuBtn
