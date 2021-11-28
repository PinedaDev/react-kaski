import React from 'react';
import './App.css';
import { useState } from "react/cjs/react.development";
import HomePage from './components/HomePage';
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
        <Route path="/" element={<HomePage defaultState={defaultState} showMenu={showMenu} hideMenu={hideMenu} />} />
      </Routes>
    </Router>
  );
};

export default App;
