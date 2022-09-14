import React,{useState} from "react";
import { Link } from "react-router-dom";
import { registerEmployee } from "../services/authService";
import Input from "./common/formInput";


const handleSubmit = async (e,user,setUser) => {
  e.preventDefault();
  const result = await registerEmployee(user.name,user.email,user.password)
  
}
 

const handleChange = (e,user,setUser)=>{
  const {currentTarget: input} = e;
  const demoUser = {...user};
  demoUser[input.name] = input.value;
  setUser(demoUser)
}
 


const RegisterEmployees = () => {
  const [user,setUser] = useState({name:'',email:'',password:''});

  return (
    <form onSubmit={(e)=>handleSubmit(e,user,setUser)} className="form w-50" style={{margin:'4vh auto'}}>
      <div className="card">
        <div className="row m-2">
          <div className="col">
            <Link className="btn btn-outline-primary form-control text-center" to='/register-employers'>Employers</Link>
          </div>
          <div className="col">
            <Link className="btn btn-outline-primary form-control text-center" to='/register-employees'>Employees</Link>
          </div>
        </div>
      </div>
      <div className="container p-3 card">
      <div className="container m-2">
        <h2 className="text-center">Register As Employees</h2>
      </div>
        <Input
          name="name"
          type="text"
          id="Username"
          placeholder="Enter your name here"
          label='Username'
          value={user.name}
          onChange={(e)=>handleChange(e,user,setUser)}
        />
      <Input
        name="email"
        type="email"
        id="E-mail"
        placeholder="Enter your Email Id here"
        label="E-mail"
        value={user.email}
        onChange={(e)=>handleChange(e,user,setUser)}
      />
      <Input
        name="password"
        type="password"
        id="pass"
        placeholder="Enter your password here"
        label="Password"
        value={user.password}
        onChange={(e)=>handleChange(e,user,setUser)}
      />
    </div>
    <div className="container">

    <button className="btn btn-outline-success form-control" type="submit">Register</button>
    </div>
      <span className="m-3"></span>
    </form>
  );
};

export default RegisterEmployees;
