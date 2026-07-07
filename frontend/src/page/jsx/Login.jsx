import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Login.css'
function Login(){
    const navigate=useNavigate();
    const [logindata,setLogindat]=useState({
        email:" ",
        password:""
    });
    const onChange=(e)=>{
        setError(false);
        setLogindat({
            ...logindata,
            [e.target.name]:e.target.value
        });
    };
    ;
    const [loading, setLoding]=useState(false);
    const [error,setError ]=useState(false);
    
    const handelSubmit=(e)=>{
        e.preventDefault();
        setLoding(true);
        console.log(logindata);
        setTimeout(()=>{
            if(logindata.email=="francis@gmail.com" && logindata.password=="123"){
               navigate("/home");
    }
            else {
               setError(true);
               alert("password or email wrong (:");
               setLoding(false);
               
   
            }        
        },2000);
        
    }
    

    return (
        <div className="container">
            <h1>Login</h1>
        <form onSubmit={handelSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          required
          name="email"
          onChange={onChange}
          
        />
        <input
          type="password"
          placeholder="Enter your password"
          required
          name="password"
          onChange={onChange}
        />
        
        <button type="submit" disabled={loading}
          disabled={loading} >
          {`${loading ? "Logging in..." : "Login"}`}
          </button> 
          {error && <p>Invalid email or password</p>}
          
        
        
          </form>
        </div>
    );
}
export default Login;