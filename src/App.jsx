import React from 'react';
import './App.css';
//pages
import MainPage from './pages/MainPage';
import Store from './pages/store/Store';
import Cart from './components/store-components/cart/Cart';
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
  const serverItems = [
    {
      id: 1,
      name: "The Window",
      price: 56.20,
      category: [{
        id: 1,
        name: "Ikkunat",
        description: "lorem ipsum..."
      }],
      amount: 1,
    },
    {
      id: 2,
      name: "The Door",
      price: 20,
      category: [{
        id: 2,
        name: "Ovet",
        description: "lorem ipsum..."
      }],
      amount: 1,
    },
    {
      id: 4,
      name: "The Door with a window",
      price: 10,
      category: [{
        id: 2,
        name: "Ovet",
        description: "lorem ipsum..."
      },
      {
        id: 1,
        name: "Ikkunat",
        description: "lorem ipsum..."
      }],
      amount: 1,
    },
    {
      id: 3,
      name: "The Part",
      price: 35,
      category: [{
        id: 3,
        name: "Varaosat",
        description: "lorem ipsum..."
      }],
      amount: 1
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
  }, [])
  //Basket

  const itemsInCart = [];

  const addItems = (elementId) => {
    return new Promise((resolve, reject) => {

      let targetItem = serverItems.filter((item) => item.id === elementId ? true : "")


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

  console.log(storeItems)

  return (
    <Router>
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
    </Router>
  )
}

export default App;
