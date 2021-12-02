//styling
import "../css/Home_section.css"
import background from "../img/bgImg.png"
//Global components
import KaskiLogo from "../global/KaskiLogo";
import FinnishLogos from "../global/FinnishLogos";
// Home section components
import UtilitiesContainer from "../home-section-comp/UtilitiesContainer";
import HomeNavegationLinks from "../home-section-comp/HomeNavegationLinks";
import MainSlogan from "../home-section-comp/MainSlogan";
import SideNavBar from "../home-section-comp/SideNavBar";
import UnderLogoText from "../home-section-comp/UnderLogoText";
//Home sections


const HomeSection = ({ showMenu }) => {

    return (
        <div className="home_page_section">
            {/* main home page
            (background-img)
            (side navegation bar)
            (menu icon)
            (overlay manu)

            (Kaski logo)
            (shoping link to the store and search utilities btns)
            (text under the kaski logo)

            (main navegation links)

            (main text)

            (finnish key/design imgs)
            */}
            {/* {home} */}
            <img src={background} style={imgStyle} alt="girl and window" />
            <KaskiLogo marginLeft="6rem" marginTop="1rem" />
            <UtilitiesContainer />
            <UnderLogoText />
            <HomeNavegationLinks />
            <MainSlogan />
            <SideNavBar showMenu={showMenu} />
            {/* finnish logos */}
            <FinnishLogos />
            {/* service*/}
        </div>
    )
}
export default HomeSection

const imgStyle = {
    zIndex: "0",
    position: "absolute",
    left: "60%",
    height: "100vh",
    width: "40%",
}