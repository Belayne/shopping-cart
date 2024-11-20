import { Outlet } from 'react-router-dom'
import './App.css'
import NavigationBar from './components/NavigationBar'
import { useState } from 'react'

function App() {
  const [numberOfItems, setNumberOfItems] = useState(0);

  function handleCartQuantity(quantity) {
    setNumberOfItems(quantity)
  }

  return (
    <>
      <NavigationBar numberOfItems={numberOfItems}/>
      <Outlet context={handleCartQuantity}/>
    </>
  )
}

export default App
