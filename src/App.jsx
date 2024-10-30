import { Outlet } from 'react-router-dom'
import './App.css'
import NavigationBar from './components/NavigationBar'
import { useState } from 'react'

function App() {
  const numberOfItems = useState(0);

  return (
    <>
      <NavigationBar numberOfItems={numberOfItems}/>
      <Outlet />
    </>
  )
}

export default App
