import React from 'react'
//style
import "./css/Doors.css"
import "./css/Doors-PC.css"
//global components
import NavBar from '../../components/global/NavBar'
import ChatBot from '../../components/global/ChatBot'
import OffertForm from '../../components/global/OffertForm'
import OverlayMenu from '../../components/global/OverlayMenu'
//imgs
//category container backgrounds
import Img1 from "./img/categories-container/door-cat-1.jpg"
import Img2 from "./img/categories-container/door-cat-2.jpg"
import Img3 from "./img/categories-container/door-cat-3.jpg"
import Img4 from "./img/categories-container/door-cat-4.jpg"
import Img5 from "./img/categories-container/door-cat-5.jpg"
import Img6 from "./img/categories-container/door-cat-6.jpg"
import { NavLink } from 'react-router-dom'
//category bg img

const Doors = ({ defOverlay, showMenu, hideMenu }) => {
    const categories = [
        {
            name: "Ulko-ovet",
            img: Img1
        },
        {
            name: "Mökkiovet",
            img: Img2
        },
        {
            name: "Varastonovet",
            img: Img3
        },
        {
            name: "Saunanovet",
            img: Img4
        },
        {
            name: "Autotallinovet",
            img: Img5
        },
        {
            name: "Levikkeet",
            img: Img6
        },
    ]
    return (
        <div className='doors-page'>
            <NavBar showMenu={showMenu} />
            <OverlayMenu defOverlay={defOverlay} hideMenu={hideMenu} />
            <ChatBot />
            <OffertForm />
            <div className='doors-bg-container'>
            </div>
            <div className='doors-page-content'>

                <h1 className='page-header'>Ulko-ovi - siitä Kaskipuu tunnetaan</h1>
                <p className='page-text'>
                    Kaskipuu valmistaa kotimaisia ulko-ovia ja muita ovia suomalaisiin koteihin.
                    Alusta alkaen pohjoissuomalaisen perheyhtiön perustana on ollut laadukkaat,
                    käsintehdyt puuovet. Ensimmäisten, perustaja Eero Kasken valmistamien ulko-ovien laatu ja
                    tunnelma seuraavat mukana kaikissa Kasken tuotteissa - säilyen puusepältä asiakkaan
                    jälkipolville asti. Huolella valittu ulko-ovi täydentää talon arkkitehtuuria ja on
                    sopusoinnussa ilmeen kanssa: ulkoa päin se antaa leimansa talon luonteelle, sisältä päin se on
                    osa eteistilan ilmettä. Ovi on portti, josta perhe kulkee ulos ja vieraat kutsutaan sisään.
                    Kaskilaiset ovat tunnustettuja muotoilun ammattilaisia ja käsityön osaajia, jotka ymmärtävät mikä
                    merkitys heidän työllään on asiakkaalle - sinulle.
                </p>
                <div className='categories-container'>
                    {categories.map((category, i) => {
                        return (
                            <NavLink to="/doors/door-section">
                                <div style={{
                                    background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${category.img})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                }}
                                    key={i} className='category-container'>
                                    <p className='category-name'>{category.name}</p>
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Doors
