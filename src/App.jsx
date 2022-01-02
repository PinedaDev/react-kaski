import React, { useState } from 'react';
import './App.css';
//pages
import MainPage from './pages/MainPage';
import Store from './pages/store/Store';
//windows components
import Windows from './pages/windows/Windows';
import WindowCategorySection from './components/windows-components/WindowCategorySection';
//---------------
//doors components
import Doors from './pages/doors/Doors';
import DoorSection from './components/doors-components/door-category-section/DoorSection';
//Routing 
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useEffect } from 'react/cjs/react.development';


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

  const overlayVisible = {
    opacity: "1",
    visibility: "visible"
  };

  const [overlayState, setOverlayStateState] = useState(() => overlayHidden)


  function hideOverlayMenu() {
    setOverlayStateState(overlayHidden)
  }

  function showOverlayMenu() {
    setOverlayStateState(overlayVisible)
  }

  const serverItems = [
    {
      id: 1,
      name: "The Window",
      price: 10,
      category: [{
        id: 1,
        name: "windows",
        description: "lorem ipsum..."
      }],
      amount: 1,
      onCart: false
    },
    {
      id: 2,
      name: "The Door",
      price: 10,
      category: [{
        id: 2,
        name: "doors",
        description: "lorem ipsum..."
      }],
      amount: 1,
      onCart: false
    },
    {
      id: 4,
      name: "The Door with a window",
      price: 10,
      category: [{
        id: 2,
        name: "doors",
        description: "lorem ipsum..."
      },
      {
        id: 1,
        name: "windows",
        description: "lorem ipsum..."
      }],
      amount: 1,
      onCart: false
    },
    {
      id: 3,
      name: "The Part",
      price: 10,
      category: [{
        id: 3,
        name: "parts",
        description: "lorem ipsum..."
      }],
      amount: 1,
      onCart: false
    },
  ]

  const storeItems = []

  const getList = (list) => {
    list.forEach((item) => {
      item.category = item.category.map(category => category.name)
      storeItems.push(item)
    })
  }

  useEffect(() => {
    getList(serverItems)
  })
  //Basket


  const itemsInCart = [];


  const addItems = (elementId) => {
    return new Promise((resolve, reject) => {

      let targetItem = serverItems.filter((item, i) => {
        if (item.id === elementId) {
          return true
        }
      })


      if (itemsInCart.includes(targetItem[0])) {
        const index = itemsInCart.indexOf(targetItem[0])
        if (index > -1) {
          itemsInCart.splice(index, 1)
        }
      } else {
        targetItem[0].onCart = true
        itemsInCart.push(targetItem[0])
      }

      const error = false

      if (!error) {
        resolve()
      } else {
        reject("Error: Something went wrong")
      }
    });
  }

  console.log(storeItems)

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
            itemsInCart={itemsInCart}
            storeItems={storeItems}
            addItems={addItems}
            hideMenu={hideOverlayMenu} />} />

        <Route
          path="/windows"
          element={<Windows defOverlay={overlayState}
            showMenu={showOverlayMenu}
            hideMenu={hideOverlayMenu} />} />

        <Route
          path="/windows/avattavat-ikkunat"
          element={<WindowCategorySection defOverlay={overlayState}
            showMenu={showOverlayMenu}
            hideMenu={hideOverlayMenu} />} />

        <Route
          path="/doors"
          element={<Doors
            defOverlay={overlayState}
            showMenu={showOverlayMenu}
            hideMenu={hideOverlayMenu} />} />

        <Route
          path="/doors/door-section"
          element={<DoorSection
            defOverlay={overlayState}
            showMenu={showOverlayMenu}
            hideMenu={hideOverlayMenu} />} />
      </Routes>
    </Router>
  )
}

export default App;
