import React from 'react';
import './App.css';
import { useState } from "react/cjs/react.development";
//pages
import MainPage from './pages/MainPage';
import Store from './pages/store/Store';
import Windows from './pages/windows/Windows';
//window openable windows page
import CategorySection from './components/windows-components/CategorySection';
import Doors from './pages/doors/Doors';
//import Demopage from './components/pages/Demopage'
//Routing 
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  // Overlay Menu (global component)
  /*The overlay menu requires to
  pass it's statemens and functions as properties
  to where it is going to be use*/

  //default global statement for the overlay menu
  const overlayHidden = {
    opacity: "0",
    visibility: "hidden"
  };
  //statement passed when click a menu btn
  const overlayVisible = {
    opacity: "1",
    visibility: "visible"
  };
  // hook to return the default overlay statement
  const [overlayState, setOverlaystateState] = useState(() => overlayHidden)

  // hide menu with the cross inside the overlay
  function hideOverlayMenu() {
    setOverlaystateState(overlayHidden)
  }
  // show the menu when click on an menu btn
  function showOverlayMenu() {
    setOverlaystateState(overlayVisible)
  }


  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainPage
            defOverlay={overlayState}
            showMenu={showOverlayMenu}
            hideMenu={hideOverlayMenu} />} />

        <Route
          path="/online-store"
          element={<Store defOverlay={overlayState}
            showMenu={showOverlayMenu}
            hideMenu={hideOverlayMenu} />} />

        <Route
          path="/windows"
          element={<Windows defOverlay={overlayState}
            showMenu={showOverlayMenu}
            hideMenu={hideOverlayMenu} />} />

        <Route
          path="/windows/avattavat-ikkunat"
          element={<CategorySection defOverlay={overlayState}
            showMenu={showOverlayMenu}
            hideMenu={hideOverlayMenu} />} />

        <Route
          path="/doors"
          element={<Doors
            defOverlay={overlayState}
            showMenu={showOverlayMenu}
            hideMenu={hideOverlayMenu} />} />

      </Routes>
    </Router>
  )
}

export default App;
