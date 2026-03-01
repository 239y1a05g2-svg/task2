import { Link } from "react-router-dom";
import "./Login.css";
export default function Login(){
    return(
        <>
        <div className="loginform">
            <form>
                <lable >Mail:</lable>
                <input type="email" placeholder="enter your email" /><br></br>
                 <label >Password:</label>
                <input type="password" placeholder="enter your password" /><br></br><br></br>

                 
                 <button className="login1"> <Link to="/products">Login </Link></button>
                
                
                
                 <button> <Link to="/register">New User=Register  </Link></button>
               
                
            </form>
        </div>
        </>
    )
}