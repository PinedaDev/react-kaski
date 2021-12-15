import React from 'react'
import './css/MainPage.css'
import LoadingScreen from '../components/global/LoadingScreen'
import NavBar from '../components/global/NavBar'
//sections
import Home from '../components/main-page-components/home/Home'


const MainPage = () => {
    return (
        <div className='main-page'>
            <LoadingScreen />
            <NavBar />
            <Home />
        </div>
    )
}

export default MainPage
