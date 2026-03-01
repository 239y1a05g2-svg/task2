import {BrowserRouter,Routes,Route} from "react-router-dom";
import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Products from "../Products/Products";
import Speciality from "../Specality/Specality";
import Footer from "../Footer/Footer";
 
export default function Link(){
  return(
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/> 
        <Route path="/register" element={<Register/>}/>
         <Route path="/home" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/products" element={<Products/>}/>
         <Route path="/specality" element={<Speciality/>}/>
         <Route path="/footer" element={<Footer/>}/>
     </Routes>
        </BrowserRouter>
    </>
  )
}