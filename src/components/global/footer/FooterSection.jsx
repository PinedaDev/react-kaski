import './css/Footer.css'
import FooterContainer from './FooterContainer'
import avainLippu from "../../../img/logos/avainlippu.png"
import dff from "../../../img/logos/DFF.png"

const FooterSection = () => {

    const contactContent = [
        {
            id: "1",
            title: "Phone",
            subtext: "+358 123810293"
        },
        {
            id: "2",
            title: "asiohdasd@asdasd.com"
        }
    ]
    const officesContent = [
        {
            id: "1",
            title: "ASDASD",
            subtext: "+358 123810293"
        }
    ]
    const factoriesContent = [
        {
            id: "1",
            title: "Viitasari",
            subtext: "+358 123810293"
        }
    ]

    return (
        <div className='footer-section'>
            <div className='info-container'>
                <FooterContainer content={contactContent} containerTitle="Contact" />
                <FooterContainer content={officesContent} containerTitle="Offices" />
                <FooterContainer content={factoriesContent} containerTitle="Factories" />
            </div>
            <div className='logos-container'>
                <img src={avainLippu} alt="avain lippu logo" />
                <img src={dff} alt="design in finland" />
            </div>
        </div>
    )
}

export default FooterSection