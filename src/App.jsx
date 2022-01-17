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
import { data, error } from 'jquery';

function App() {

  const [serverItems, setServerItems] = useState(null)
  const [storeItems, setStoreItems] = useState(null)
  const url = "http://127.0.0.1:8000/api/products/"

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

  const a = []

  useEffect(() => {
    getList(serverItems)
      .then(setStoreItems(a))
  }, [serverItems])
  //Basket

  const itemsInCart = [];

  const addItems = (elementId) => {
    return new Promise((resolve, reject) => {

      let targetItem = storeItems.filter((item) => item.id === elementId ? true : "")

      if (itemsInCart.includes(targetItem[0])) {
        const index = itemsInCart.indexOf(targetItem[0])
        if (index > -1) {
          itemsInCart.splice(index, 1)
        }
        targetItem[0].onCart = false
        targetItem[0].amount = 1
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
