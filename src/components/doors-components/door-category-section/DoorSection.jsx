import React from 'react'
import "./css/DoorSection.css"
import DoorCart from '../doors-carts/DoorCart'
import Navegation from '../../navegation/Navegation'
import testImg from './img/uol1-2-265x553.jpg'

const DoorSection = () => {

    const testItems = [
        {
            img: testImg,
            itemName: "test door",
            vintage: "Kaski Classic",
            feature: "Glass"
        },
        {
            img: testImg,
            itemName: "test door",
            vintage: "Kaski Design",
            feature: "Glass"
        },
        {
            img: testImg,
            itemName: "test door",
            vintage: "Kaski Classic",
            feature: "Glass"
        },
        {
            img: testImg,
            itemName: "test door",
            vintage: "Kaski Ratia",
            feature: "Glass"
        },
        {
            img: testImg,
            itemName: "test door",
            vintage: "Kaski Classic",
            feature: "Glass"
        },
    ]

    return (
        <div className='door-section'>
            <Navegation />
            <div className='top-section'>

                <h1 className='door-section-first-text'>
                    Ulko-ovet
                </h1>

                <p className='door-section-second-text'>
                    Ulko-ovet ja niiden edistyksellinen rakenne on Kaskipuulla
                    suunniteltu sopimaan nimenomaan suomalaisiin koteihin ja pohjoisiin
                    sääolosuhteisiin. Siksi myönnämme ulko-ovillemme markkinoiden pisimmän
                    suoranapysymistakuun - 15 vuotta.
                </p>

            </div>

            <div className='bottom-section'>
                <div className='doors-container'>
                    {
                        testItems.map((door, i) => {
                            return (
                                <DoorCart key={i} itemName={door.itemName} img={door.img} feature={door.feature} vintage={door.vintage} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default DoorSection
