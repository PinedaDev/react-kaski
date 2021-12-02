//Loading component
import LoadingScreen from "../global/LoadingScreen"
// Auxiliar overlay menu
import OverlayMenu from "../global/OverlayMenu"
// Sections
import HomeSection from "../sections-comp/HomeSection"
import ServicesSection from "../sections-comp/ServicesSection"

const HomePage = ({ defaultState, hideMenu, showMenu }) => {

    return (
        <div>
            <LoadingScreen />
            {/* {hidden overlay menu} */}
            <OverlayMenu visibility={defaultState.visibility} hideMenu={hideMenu} opacity={defaultState.opacity} />
            {/* Floating nav var */}
            {/* {sections} */}
            <HomeSection showMenu={showMenu} />
            <ServicesSection />
        </div>
    )
}
export default HomePage