import React from 'react';
import './App.css';
import { useState } from "react/cjs/react.development";
//pages
import MainPage from './components/pages/MainPage';
import StorePage from './components/pages/StorePage';
import Demopage from './components/pages/Demopage'
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
  const hiddenOverlay = {
    opacity: "0",
    visibility: "hidden"
  };
  //statement passed when click a menu btn
  const visibleOverlay = {
    opacity: "1",
    visibility: "visible"
  };
  // hook to return the default overlay statement
  const [defaultState, setState] = useState(() => {
    return (hiddenOverlay);
  });
  // show the menu when click on an menu btn
  function showMenu() {
    setState(visibleOverlay)
  }
  // hide menu with the cross inside the overlay
  function hideMenu() {
    setState(hiddenOverlay)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage defaultState={defaultState} hideMenu={hideMenu} showMenu={showMenu} />} />
        <Route path="/pages/Demopage" element={<Demopage />} />
        <Route path="/pages/StorePage" element={<StorePage defaultState={defaultState} hideMenu={hideMenu} showMenu={showMenu} />} />
      </Routes>
    </Router>
  );
};

export default App;
