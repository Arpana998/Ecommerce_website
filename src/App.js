import About from "./Components/Pages/AboutPage/About";
import Home from "./Components/Pages/HomePage/Home";
import Store from "./Components/Pages/Store"
import { Routes, Route, Navigate } from 'react-router-dom';
import NavbarHeader from "./Components/Pages/StorePage/Navbar";
import ContactUsPage from "./Components/Pages/ContactPage/ContactUsPage";
import ProductSpecificPage from "./Components/Pages/StorePage/ProductSpecificPage";
import Login from "./Components/Pages/LoginPage/Login";
import { useContext } from "react";
import AuthContext from "./Store/AuthContext";




let App = () => {

  const authCtx = useContext(AuthContext);
  
  return(
    <>
    {/* <Store/> */}
    <NavbarHeader />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />}/>
        {authCtx.isLoggedin && <Route path="/store" element={<Store />}/>}
        <Route path="/contactus" element={<ContactUsPage />}/>
        <Route path="/store/product/:selectedItemId" element={<ProductSpecificPage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="*" element = {<Navigate to="/login" />} />
      </Routes>
      </>
   //e <Route element={<Navigate to="/" />} /> is the new
   //<Route path="*" element={<Navigate to="/" />} />,
  )

}

export default App