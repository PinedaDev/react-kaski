//Footer components
import FooterContent from '../footer-section-comp/FooterContent'
//Global comp
import avainlippu from "../img/avainlippu.png"
import dff from '../img/DFF.png'
// Style
import "../css/FooterSection.css"


const FooterSection = () => {


    return (
        <div className="footer">
            <div>
                <h2 className="colum_name">Contact-us</h2>
                <p><a className="title" href="mailto:myynti@kaski.fi">myynti@kaski.fi : </a><a className="phone-num"
                    href="tel:+358504150450">050
                    4150 450</a>
                </p>
                <p className="title">Client Suport: <a className="phone-num" href="tel:+207924780"> 0207 924 780</a></p>
                <p className="sub-text"> Open hours: <br></br> Mo-Fr 8-15</p>
                <small className="sub-text">Call cost: 8,35 cent/puhelu + 16,69 cent/min </small>
                <p><a className="title" href="#">Privacy statement</a></p>
                <p><a className="title" href="#">E-commerce delivery and cancellation conditions</a></p>
                <p><a className="contact-page-link" href="#">All contact info</a></p>
            </div>
            <div>
                <h2 className="colum_name">Offices</h2>
                <FooterContent title="Vantaa" insideText="Petikontie 1 B 2:krs, 01720" />
                <FooterContent title="Pirkkala" insideText="Haikanvuori 6 C 46, 33920 Pirkkala" />
                <FooterContent title="Raisio" insideText="Tuotekatu 3 B 28, 21200" />
                <FooterContent title="Oulu" insideText="Kansankatu 49, 90100" />
                <FooterContent title="Pori" insideText="Otavankatu 15 B 31, 28100" />
                <FooterContent title="Kuopio" insideText="Tulemantie 15 B, 70800 Kuopio" />
            </div>
            <div>
                <h2 className="colum_name">Factories</h2>
                <FooterContent title="Kaskipuu Oy" insideText="Ovitie 1 91300 Ylikiiminki" />
                <FooterContent title="Kaskipuu Viitasaari" insideText="Puutie 4 44500 Viitasaari" />
                <img src={dff} alt="" />
                <img src={avainlippu} alt="" />
            </div>
        </div>
    )
}

export default FooterSection
