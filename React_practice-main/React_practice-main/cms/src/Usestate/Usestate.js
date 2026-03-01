import { useState } from "react";
function Usestate(){
    const [username,setuserName]=useState("");
    const [password,setPassword]=useState("");
    const[submittedData,setsubmittedData]=useState(null);
      const handleEvent=(e)=>
      {
        e.preventDefault();
        setsubmittedData({
            username:userName,
            password:password
        });
      }
  return (
    <>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>
      {submittedData && (
        <div>
          <h3>Entered Data</h3>
          <p>Username: {submittedData.username}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </>
  );
}


export default Usestate;