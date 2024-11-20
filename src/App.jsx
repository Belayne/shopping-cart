import { Outlet } from 'react-router-dom'
import './App.css'
import NavigationBar from './components/NavigationBar'
import { useState } from 'react'

function App() {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);

  if(firstLoad) {
    localStorage.clear();
    setFirstLoad(false);
  }

  function handleCartQuantity() {
    if(localStorage?.cart != undefined) {
      const cart = JSON.parse(localStorage.cart)
      const quantity = cart.reduce((totalQuantity, item) => item.quantity + totalQuantity, 0)
      setNumberOfItems(quantity)
    }
  }

  return (
    <>
      <NavigationBar numberOfItems={numberOfItems}/>
      <Outlet context={handleCartQuantity}/>
    </>
  )
}

export default App
