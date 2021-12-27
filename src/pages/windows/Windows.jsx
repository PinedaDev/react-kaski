import React from 'react'
//style
import "./css/Windows.css"
import "./css/Windows-PC.css"
//global components
import NavBar from '../../components/global/NavBar'
import ChatBot from '../../components/global/ChatBot'
import OffertForm from '../../components/global/OffertForm'
import OverlayMenu from '../../components/global/OverlayMenu'
//imgs
//category container backgrounds
import Img1 from "./img/categories/wind-cat-1.jpeg"
import Img2 from "./img/categories/wind-cat-2.jpg"
import Img3 from "./img/categories/wind-cat-3.jpg"
import Img4 from "./img/categories/wind-cat-4.jpg"
import Img5 from "./img/categories/wind-cat-5.jpg"
import Img6 from "./img/categories/wind-cat-6.jpg"
//category section background
import cat_bg_1 from "./img/categories-bg/cat-bg-1.jpg"
//
import CategorySection from '../../components/windows-components/CategorySection'


const Windows = ({ defOverlay, showMenu, hideMenu }) => {

    const windows = [
        {
            img: "",
            name: "MSEA",
            uValue: "1.0",
            subTextValues: ["1.0", "38dB"],
            category: "openable",
            itemDes: "Ikkuna, joka sopii kohteeseen kuin kohteeseen. Monikäyttöinen, edistyksellisen tiivis ja energiatehokas valinta.",
            itemChar: ["Ulkopuite säänkestävää ja huoltovapaata alumiinia", "Vahvarakenteinen karmi sormiliitoksilla"]
        },
        {
            img: "",
            name: "MSEA THERMO MUSTA",
            uValue: " 0.8",
            subTextValues: ["0.8", "38dB"],
            category: "openable",
            itemDes: "Loistava energiatehokkuus ja lämmöneristyskyky. Sopii erinomaisesti matalaenergiataloon.",
            itemChar: ["Sisäpuolella tuplaselektiivi lämpölasielementti", "Vakiona huurtumisen estävä lasi", "TGI välilistat, silikonit ja kahva mustia"]
        },
        {
            img: "",
            name: "MSEA THERMO 2+2",
            uValue: "0.6",
            subText: [" 0.6", "41dB"],
            category: "openable",
            itemDes: "Paras energiatehokkuus ja lämmöneristyskyky, joka sopii hyvin passiivitaloihin, tai kohteisiin, joissa vaaditaan maksimaalista energiatehokkuutta.",
            itemChar: ["Molemmissa puitteissa kaksinkertainen eristyslasielementti", "Vakiona huurtumaton lasi"]
        }
    ]

    const categories = [
        {
            name: "Avattavat Ikkunat",
            img: Img1,
            bgImage: cat_bg_1
        },
        {
            name: "Kiinteät ikkunat",
            img: Img2
        },
        {
            name: "Mökki-ikkunat",
            img: Img3
        },
        {
            name: "Paloikkunat",
            img: Img4
        },
        {
            name: "Saunan ikkunat",
            img: Img5
        },
        {
            name: "Ikkunoiden lisävarusteet",
            img: Img6
        },
    ]
    return (
        <div className='windows-page'>
            <NavBar showMenu={showMenu} />
            <OverlayMenu defOverlay={defOverlay} hideMenu={hideMenu} />
            <CategorySection />
            <ChatBot />
            <OffertForm />
            <div className='windows-bg-container'></div>
            <div className='windows-page-content'>
                <h1 className='page-header'>Ikkunat kortimausella laadulla</h1>
                <p className='page-text'>
                    Sukupolvelta toiselle siirtynyt käsityöosaaminen ja moderni
                    tekniikka kohtaavat Kaski-ikkunoissa. Ne kestävät pohjoisen
                    pakkaset ja tuiskut sekä kesän paahteen. Kaski-ikkunat on tehty
                    voittamaan pohjoisten olojen haasteet ja tarjoamaan valoa ja lämpöä -
                    lisäämään asumismukavuutta ja vähentämään lämmityskustannuksia. Myönnämme
                    Kaski-ikkunoille peräti 25 vuoden lahoamattomuustakuun.
                </p>
                <div className='categories-container'>
                    {categories.map((category, i) => {
                        return (
                            <div style={{
                                background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${category.img})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                            }}
                                key={i} className='category-container'>
                                <p className='category-name'>{category.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Windows
