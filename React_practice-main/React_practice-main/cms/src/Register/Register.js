import "./Register.css";
function Register(){
    return(
        <>
        <div className="register">

 <form >
            <label>Full Name:</label>
            <input type="text" placeholder="enter full name"></input><br></br>
            <label>Email:</label>
            <input type="email" placeholder="enetr email"></input><br></br>
            <label>Password:</label>
            <input type="password" placeholder="create password"></input><br></br>
            <label>Confirm password:</label>
            <input type="password" placeholder="confirm password"></input><br></br>
            <button>regigter</button>

        </form>

        </div>
       
        </>
    )
}
export default Register;