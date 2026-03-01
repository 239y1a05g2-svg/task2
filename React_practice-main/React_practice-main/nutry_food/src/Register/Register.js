import { Link } from "react-router-dom";
import "./Register.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
export default function Register(){
    return(
        <>
        <Nav/>
        <div className="register">
            <form>
                <label>enter full name</label>
                <input type="text" placeholder="enter your fullname"/><br></br>
                <label>enter your email</label>
                <input type="email" placeholder="enter your email"/><br></br>
                   <label>create password</label>
                <input type="password" placeholder="create password"/><br></br>
                <label>confirm password</label>
                <input type="password" placeholder="confirm password"/><br></br>
             
                 <button>    <Link to="/login">Register </Link></button>
                
                

            </form>
        </div>
        <Footer/>
        </>
    )
}