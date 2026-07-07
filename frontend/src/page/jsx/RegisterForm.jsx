import { useState } from "react";
import "../css/RegisterForm.css"
import { useNavigate } from "react-router-dom";
function RegisterForm(){
    const navigate=useNavigate();
    const [register, setRegister] = useState({
    Email: "",
    Name:"",
    age:"",
    dept:"",
    batch:" ",
    phone:" ",
    cpga:""

  });
    const onChange1 = (e) => {
    setRegister({ 
        ...register,
        [e.target.name]: e.target.value });
  };
  console.log(register);
    return (
        <div className="container">
            <h1>registration form</h1>
            <form>
            <input type="text"
            placeholder="Email"
            name="Email"
            onChange={onChange1}
             />
             <input type="text"
            placeholder="Name"
            name="Name"
            onChange={onChange1}
             />
             <input type="text"
            placeholder="age"
            name="age"
            onChange={onChange1}
             />
             <input type="text"
            placeholder="dept"
            name="dept"
            onChange={onChange1}
             />
             <input type="text"
            placeholder="batch"
            name="batch"
            onChange={onChange1}
             />
             <input type="text"
            placeholder="phone number"
            name="phone"
            onChange={onChange1}
             />
             <input type="text"
            placeholder="cgpa"
            name="cgpa"
            onChange={onChange1}
             />
            </form>
            <button  onClick={()=>navigate("/login")}type="submit">Register</button>
        </div>
    );
};
export default RegisterForm;