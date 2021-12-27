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
//windows page background
import bg from "../../img/backgrounds/windows-bg.jpg"
//category container backgrounds
import Img1 from "../../img/categories-imgs/windows-cat/wind-cat-1.jpeg"
import Img2 from "../../img/categories-imgs/windows-cat/wind-cat-2.jpg"
import Img3 from "../../img/categories-imgs/windows-cat/wind-cat-3.jpg"
import Img4 from "../../img/categories-imgs/windows-cat/wind-cat-4.jpg"
import Img5 from "../../img/categories-imgs/windows-cat/wind-cat-5.jpg"
import Img6 from "../../img/categories-imgs/windows-cat/wind-cat-6.jpg"

const Windows = ({ defOverlay, showMenu, hideMenu }) => {

    const categories = [
        {
            name: "Avattavat Ikkunat",
            img: Img1
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
            <ChatBot />
            <OffertForm />
            <div className='windows-bg-container'>
            </div>
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
