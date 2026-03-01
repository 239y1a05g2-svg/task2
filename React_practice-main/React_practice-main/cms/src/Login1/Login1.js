import { useState } from "react";

function Login1({students}){
    // function add(){
    //     const a=document.getElementById("num1").value;
    //     const b=document.getElementById("num2").value;
    //     const sum=Number(a)+Number(b);
    //     document.getElementById("result").innerText=sum;
    //     console.log(sum)
    // }
    // return( <div>
    //         <h1>hello</h1>
    //         <input type="number" id="num1"/>
    //         <input type="number" id="num2"/>
    //         <button onClick={add}>Add</button>
    //         <h2 id="result"></h2>  
    //     </div>);
    //const [name,setName]=useState("madhu");
    return(
        <>
        {/* <input type="text"
        onChange={(e)=>setName(e.target.value)}
        />
         <p>{name}</p> */}
         <h2>home components</h2>
         <ul>
            {students.map((stu,index)=>(
                <li key={index}>
                    Name:{stu.name},
                    Age:{stu.age},
                    Loc:{stu.loc},
                </li>
            ))}
         </ul>
        </>
    )
}
export default Login1;