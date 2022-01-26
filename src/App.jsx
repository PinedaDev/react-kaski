import React, { useEffect, useState } from 'react';
import './App.css';
//global
import LoadingScreen from './components/global/LoadingScreen'
//pages
import MainPage from './pages/MainPage';
import Store from './pages/store/Store';
import Cart from './components/store-components/cart/Cart';
//windows components
import Windows from './pages/windows/Windows';
import WindowCategorySection from './components/windows-components/WindowCategorySection';
//doors components
import Doors from './pages/doors/Doors';
import DoorSection from './components/doors-components/door-category-section/DoorSection';
//Routing 
import {
  Routes,
  Route,
} from "react-router-dom";
//Transitions
import { AnimatePresence } from 'framer-motion'

function App() {

  const [serverItems, setServerItems] = useState(null)
  const [storeItems, setStoreItems] = useState(null)
  const url = "https://django-rest-api-ecommerce.herokuapp.com/api/products/"

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setServerItems(data))
  }, [])


  const getList = (list) => {
    return new Promise((resolve, reject) => {

      if (list) {
        list.forEach((item) => {
          item.category_id = item.category_id.map(category => category.name)
          item.onCart = false
          a.push(item)
        })
      }
      const error = false

      if (!error) {
        resolve()
      } else {
        reject("Error: Something wrong")
      }
    })
  }

  let a = []

  useEffect(() => {
    getList(serverItems)
      .then(setStoreItems(a))
  }, [serverItems])
  //Basket

  let itemsInCart = [];

  function addItems(elementId, toggle) {
    return new Promise((resolve, reject) => {
      toggle = toggle || 0
      let targetItem = storeItems.filter((item) => item.id === elementId ? true : "")

      if (toggle === 1) {
        if (itemsInCart.includes(targetItem[0])) {
          return null
        } else {
          targetItem[0].onCart = true
          targetItem[0].amount = 1
          itemsInCart.push(targetItem[0])
        }
      } else {
        if (itemsInCart.includes(targetItem[0])) {
          const index = itemsInCart.indexOf(targetItem[0])
          if (index > -1) {
            itemsInCart.splice(index, 1)
          }
          targetItem[0].onCart = false
        } else {
          targetItem[0].onCart = true
          targetItem[0].amount = 1
          itemsInCart.push(targetItem[0])
        }
      }

      const error = false

      if (!error) {
        resolve()
      } else {
        reject("Error: Something went wrong")
      }
    });
  }

  let itemDetails = []

  function getItemDetails(itemID) {
    return new Promise((resolve, reject) => {
      let targetItemDetails = storeItems.filter(item => item.id === itemID ? true : "")
      itemDetails.push(targetItemDetails[0])
      const error = false
      if (!error) {
        resolve()
      } else {
        reject("Error")
      }
    })
  }
  function cleanUpItemDetails() {
    return new Promise((resolve, reject) => {
      itemDetails.pop()
      const error = false
      if (!error) {
        resolve()
      } else {
        reject("Error")
      }
    })
  }
  return (
    <div>
      <LoadingScreen />
      <AnimatePresence >
        <Routes>
          <Route
            path="/"
            element={<MainPage />} />

          <Route
            path="/online-store"
            element={<Store
              itemDetails={itemDetails}
              getItemDetails={getItemDetails}
              cleanUpItemDetails={cleanUpItemDetails}
              itemsInCart={itemsInCart}
              storeItems={storeItems}
              addItems={addItems} />} />

          <Route
            path="/online-store/cart"
            element={<Cart
              itemsInCart={itemsInCart} />} />

          <Route
            path="/windows"
            element={<Windows />} />

          <Route
            path="/windows/avattavat-ikkunat"
            element={<WindowCategorySection />} />

          <Route
            path="/doors"
            element={<Doors />} />

          <Route
            path="/doors/door-section"
            element={<DoorSection />} />
        </Routes>
      </AnimatePresence>
    </div >
  )
}

export default App;
