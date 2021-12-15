import React from 'react'
import './css/MainPage.css'
import LoadingScreen from '../components/global/LoadingScreen'
//sections
import Home from '../components/main-page-components/home/Home'


const MainPage = () => {
    return (
        <div className='main-page'>
            {<LoadingScreen />}
        </div>
    )
}

export default MainPage
