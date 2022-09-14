import React,{useState} from "react";
import {login} from "../services/authService";
import Input from "./common/formInput";
import { Routes, Route, Link } from "react-router-dom";
import {toast} from 'react-toastify';

const handleSubmit = async (e,user)=>{
  e.preventDefault();
  try{
    const result = await login(user.email,user.password);
    if(result) window.location.href = '/';
  }catch(err){
    toast.error(err.response.data)
  }
}

const handleChange = (e,user,setUser)=>{
  const {currentTarget: input} = e;
  const demoUser = {...user};
  demoUser[input.name] = input.value;
  setUser(demoUser)
}

const LoginForm = () => {
  const [user,setUser] = useState({name:'',email:'',password:''})

  return (
    <form onSubmit={(e)=>handleSubmit(e,user)} className="form w-50 m-auto">
      <div className="card p-3">
      <div className="container p-3">
      <div className="container m-2">
        <h2 className="text-center">Login</h2>
      </div>
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
      </div>
    </form>
  );
};

export default LoginForm;
