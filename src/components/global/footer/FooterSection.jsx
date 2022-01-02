import './css/Footer.css'
import FooterContainer from './FooterContainer'
import avainLippu from "../../../img/logos/avainlippu.png"
import dff from "../../../img/logos/DFF.png"

const FooterSection = () => {

    const contactContent = [
        {
            id: "1",
            title: "Puhelin",
            subtext: "+358 123810293"
        },
        {
            id: "2",
            title: "Sähköposti",
            subtext: "myynti@kaski.fi"
        },
        {
            id: "3",
            title: "Vaihde avoinna:",
            subtext: "Ma-Pe 8-15"
        },
        {
            id: "3",
            subtext: "Puhelun hinnat: 8,35 snt/puhelu + 16,69 snt/min"
        },
    ]
    const officesContent = [
        {
            id: "1",
            title: "Vantaa",
            subtext: "Petikontie 1 B 2:krs, 01720"
        },
        {
            id: "2",
            title: "Raisio",
            subtext: "Tuotekatu 3 B 27, 21200"
        },
        {
            id: "3",
            title: "Pori",
            subtext: "Otavankatu 15 B 31, 28100"
        },
        {
            id: "4",
            title: "Pirkkala",
            subtext: "Haikanvuori 6 C 46, 33920 Pirkkala"
        },
        {
            id: "5",
            title: "Oulu",
            subtext: "Kansankatu 49, 90100"
        },
        {
            id: "6",
            title: "Kuopio",
            subtext: "Tulemantie 1 B 5, 70800 Kuopio"
        }
    ]
    const factoriesContent = [
        {
            id: "1",
            title: "Kaskipuu Oy",
            subtext: "Ovitie 1 91300, Ylikiiminki"
        },
        {
            id: "2",
            title: "Kaskipuu Viitasaari",
            subtext: "Puutie 4, 44500 Viitasaari"
        }
    ]

    return (
        <div id='contact' className='footer-section'>
            <div className='info-container'>
                <FooterContainer content={contactContent} containerTitle="Ota yhteyttä" />
                <FooterContainer content={officesContent} containerTitle="Toimistot" />
                <FooterContainer content={factoriesContent} containerTitle="Tehtaat" />
            </div>
            <div className='logos-container'>
                <img src={avainLippu} alt="avain lippu logo" />
                <img src={dff} alt="design in finland" />
            </div>
        </div>
    )
}

export default FooterSection