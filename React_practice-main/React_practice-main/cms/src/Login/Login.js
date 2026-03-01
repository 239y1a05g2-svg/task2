//import { useState } from "react";
import "./Login.css";
function Login() {
   //let[login,setlogin]=useState(false);
  return (
    <div className="login">
    
      <form className="login-form">
        <h2>Login</h2>

        <label>Enter Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Password</label>
        <input type="password" placeholder="Enter password" />

        <button type="button">Login</button>
      </form>
    </div>
    
  //  <>
   
  //   {login?(
  //     <nav>
  //       <a>Home</a>{" |"}
  //       <a>about</a>{" | "}
  //       <a>conatct</a>{" | "}
  //       <button onClick={()=>setlogin(false)}>logout</button>
  //     </nav>
  //   ):(
  //     <nav>
  //       <button onClick={()=>setlogin(true)}>login</button>
  //     </nav>
  //   )
  // }
   
  //  </>
      
    );
    
  
}

export default Login;
