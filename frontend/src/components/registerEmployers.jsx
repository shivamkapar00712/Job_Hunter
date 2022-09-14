import React,{useState} from "react";
import { Link } from "react-router-dom";
import { registerEmployer } from "../services/authService";
import Input from "./common/formInput";


const handleChange = (e,user,setUser)=>{
  const {currentTarget: input} = e;
  const demoUser = {...user};
  demoUser[input.name] = input.value;
  setUser(demoUser)
}

const handleSubmit = async (e,user,setUser) => {
  e.preventDefault();
  const result = await registerEmployer(user.name,user.email,user.password)
  console.log(result)
}
 
 
const RegisterEmployers = () => {
  const [user,setUser] = useState({name:'',email:'',password:''});
  return (
    <form className="form w-50 m-auto" onSubmit={e=>handleSubmit(e,user,setUser)}>
      <div className="row m-2">
        <div className="col">
          <Link className="btn btn-outline-primary form-control text-center" to='/register-employers'>Employers</Link>
        </div>
        <div className="col">
          <Link className="btn btn-outline-primary form-control text-center" to='/register-employees'>Employees</Link>
        </div>
      </div>
      <div className="container p-3">
      <div className="container m-2">
        <h2 className="text-center">Register As Employers</h2>
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
    <button className="btn btn-outline-success w-75 m-auto" type="submit">Login</button>
      <span className="m-3"></span>
    </form>
  );
};

export default RegisterEmployers;
