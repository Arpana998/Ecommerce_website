import React from 'react';
import './App.css';
import ContainerTop from './Components/Container';
import Music from './Components/Body/Music';
import NavbarHeader from './Components/Navbar'
import Merch from './Components/Body/Merch';


let App = () => {
  return (
    <div>
      <NavbarHeader />
      <ContainerTop />
      <Music />
      <Merch />
      <h2>Welcome</h2>
    </div>
  )
}

export default App