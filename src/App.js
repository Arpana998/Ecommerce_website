import React, { useState } from 'react';
import './App.css';
import Music from './Components/Body/Music';
import MusicContainer from './Components/Body/MusicContainer';
import ContainerTop from './Components/ContainerTop';
import NavbarHeader from './Components/Navbar';
import Cart from './Components/Cart';



let App = () => {

  const [cartIsShown, setCartIsShown] = useState(false)

  const displayCartHandler = () => {
    setCartIsShown(true)
  }
  const closeCartHandler = () => {
    setCartIsShown(false)
  }
  return (
    <div>
      {cartIsShown && <Cart onCloseCart={closeCartHandler}/>}
      <NavbarHeader  onShowCart={displayCartHandler} />
      <ContainerTop />
      <MusicContainer />
      <Music />
      
    </div>
  )
}

export default App