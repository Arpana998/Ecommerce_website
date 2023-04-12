import About from "./Components/Pages/AboutPage/About";
import Home from "./Components/Pages/HomePage/Home";
import Store from "./Components/Pages/Store"
import { Routes, Route } from 'react-router-dom';
import NavbarHeader from "./Components/Pages/StorePage/Navbar";
import ContactUsPage from "./Components/Pages/ContactPage/ContactUsPage";
import ProductSpecificPage from "./Components/Pages/StorePage/ProductSpecificPage";
import Login from "./Components/Pages/LoginPage/Login";




let App = () => {

  
  
  return(
    <>
    {/* <Store/> */}
    <NavbarHeader />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/store" element={<Store />}/>
        <Route path="/contactus" element={<ContactUsPage />}/>
        <Route path="/store/product/:selectedItemId" element={<ProductSpecificPage />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
      </>
   
  )

}

export default App