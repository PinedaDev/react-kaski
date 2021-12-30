import React from 'react'
import { NavLink } from 'react-router-dom'
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


const Windows = ({ defOverlay, showMenu, hideMenu }) => {

    const categories = [
        {
            name: "Avattavat Ikkunat",
            img: Img1,
            link: "/windows/avattavat-ikkunat",
        },
        {
            name: "Kiinteät ikkunat",
            link: "/windows/avattavat-ikkunat",
            img: Img2
        },
        {
            name: "Mökki-ikkunat",
            link: "/windows/avattavat-ikkunat",
            img: Img3
        },
        {
            name: "Paloikkunat",
            link: "/windows/avattavat-ikkunat",
            img: Img4
        },
        {
            name: "Saunan ikkunat",
            link: "/windows/avattavat-ikkunat",
            img: Img5
        },
        {
            name: "Ikkunoiden lisävarusteet",
            link: "/windows/avattavat-ikkunat",
            img: Img6
        },
    ]
    return (
        <div className='windows-page'>
            <NavBar showMenu={showMenu} />
            <OverlayMenu defOverlay={defOverlay} hideMenu={hideMenu} />
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
                            <NavLink to={category.link}>
                                <div style={{
                                    background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${category.img})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover"
                                }}
                                    key={i}
                                    className='category-container'>
                                    <p className='category-name'>
                                        {category.name}
                                    </p>
                                </div>
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Windows
