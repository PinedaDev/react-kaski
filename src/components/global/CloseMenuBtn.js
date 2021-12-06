import { AiOutlineClose } from "react-icons/ai"
import "../css/OverlayMenu.css"

const CloseMenuBtn = ({ hideMenu }) => {
    return (
        <>
            <AiOutlineClose className="cls_btn" onClick={hideMenu} />
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
