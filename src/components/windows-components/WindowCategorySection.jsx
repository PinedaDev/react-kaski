import React from 'react'
import "./css/WindowCategorySection.css"
import WindowCart from './WindowCart'
//
import Navegation from "../navegation/Navegation"
//
import windImg1 from "./img/windows/Kaski_MSEA_ikkuna-kopio-scaled.jpg"
import windImg2 from "./img/windows/MSEA_Thermo_musta.png"
import windImg3 from "./img/windows/Kaski_MSEA_Thermo_PLUS-scaled.jpg"


const WindowCategorySection = () => {
    const windows = [
        {
            img: windImg1,
            name: "MSEA",
            uValue: "1.0",
            subTextValues: ["1.0", "38dB"],
            category: "openable",
            itemDes: "Ikkuna, joka sopii kohteeseen kuin kohteeseen. Monikäyttöinen, edistyksellisen tiivis ja energiatehokas valinta.",
            itemChar: ["Ulkopuite säänkestävää ja huoltovapaata alumiinia", "Vahvarakenteinen karmi sormiliitoksilla"]
        },
        {
            img: windImg2,
            name: "MSEA THERMO MUSTA",
            uValue: " 0.8",
            subTextValues: ["0.8", "38dB"],
            category: "openable",
            itemDes: "Loistava energiatehokkuus ja lämmöneristyskyky. Sopii erinomaisesti matalaenergiataloon.",
            itemChar: ["Sisäpuolella tuplaselektiivi lämpölasielementti", "Vakiona huurtumisen estävä lasi", "TGI välilistat, silikonit ja kahva mustia"]
        },
        {
            img: windImg3,
            name: "MSEA THERMO 2+2",
            uValue: "0.6",
            subTextValues: [" 0.6", "41dB"],
            category: "openable",
            itemDes: "Paras energiatehokkuus ja lämmöneristyskyky, joka sopii hyvin passiivitaloihin, tai kohteisiin, joissa vaaditaan maksimaalista energiatehokkuutta.",
            itemChar: ["Molemmissa puitteissa kaksinkertainen eristyslasielementti", "Vakiona huurtumaton lasi"]
        }
    ]
    return (
        <div className='category-section'>
            <Navegation />
            <div className='fix-content' id='top'>
                <p className='category-section-first-text'>
                    Pienempiä lämmityskustannuksia ja vähemmän
                    hukkaenergiaa kotimaisilla avattavilla MSEA- ikkunoilla
                </p>
                <p className='category-section-second-text'>
                    Oikeanlaiset ikkunat ovat ilo niin asukkaille kuin ympäristölle.
                    Erittäin eristyskykyisillä ja kotimaisilla Kaski-ikkunoilla lisäät
                    asumisen viihtuisuuttä ja vähennät energian kulutusta.
                    Parhaan energiatehokkuuden saat Kasken Thermo -ikkunoilla,
                    joissa U-arvo on jopa 0,6. Kasken avattavat ikkunat sopivat
                    joka kohteeseen ja ne ovat monikäyttöisiä, edistyksellisen tiiviitä
                    ja energiatehokkaita. Kotimaiset ikkunat valmistetaan modernissa
                    ikkunatehtaassa Viitasaarella ja niille on myönnetty avainlippumerkki.
                </p>
            </div>
            <div className='bottom-section'>
                <div className='carts-container'>
                    {
                        windows.map((cart, i) => {
                            return (
                                <WindowCart key={i}
                                    name={cart.name}
                                    uValue={cart.uValue}
                                    subTextValues={cart.subTextValues}
                                    category={cart.category}
                                    description={cart.itemDes}
                                    itemChar={cart.itemChar}
                                    img={cart.img}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default WindowCategorySection
