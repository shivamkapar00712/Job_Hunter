import httpServices from "./httpServices";
import {toast} from 'react-toastify'
import jwtDecode from 'jwt-decode';
const tokenkey = 'token'; 


export async function login(email, password) {
  try{
    const {data:token} = await httpServices.post("/users/login", {
      email,
      password,
    });
    localStorage.setItem(tokenkey,token)
    return true;
  }catch(ex){
    if (ex.response && ex.response.status === 400){
      toast.error(ex.response.data)
    }
  }
}



export function logout(){
  localStorage.removeItem(tokenkey);
}

httpServices.setJWT(
  localStorage.getItem(tokenkey)
);


export async function registerEmployee(name,email,password){
  try{
    const {data} = await httpServices.post('/users/register',{
      name,
      email,
      password
    })
    toast.success(data);
    toast.success('Register Successfully, Please Login again to continue');
    window.location.href = '/';
    toast.success('Register Successfully, Please Login again to continue');
  }catch(ex){
    if (ex.response && ex.response.status === 400){
      toast.error(ex.response.data)
    }
  }
  
}
export async function registerEmployer(name,email,password){
  try{
    const {data} = await httpServices.post('/companys/register',{
      name,
      email,
      password
    })
    toast.success('Register Successfully, Please Login again to continue');
    window.location.href = '/';
    toast.success('Register Successfully, Please Login again to continue');
  }catch(ex){
    if (ex.response && ex.response.status === 400){
      toast.error(ex.response.data)
    }
  }
  
}


export async function findUser(id){
  try{
    const result = await httpServices.get(`/users/${id}`)

    return result.data;
  }catch(ex){
    if (ex.response && ex.response.status === 400){
      console.log(ex.response.data)
    }
  }
  
}
export async function getAllCompanies(){
  try{
    const result = await httpServices.get(`/companys/all`)
    console.log(result)
  }catch(ex){
    if (ex.response && ex.response.status === 400){
      console.log(ex.response.data)
    }
  }
  
}

export function getCurrentUser(){
  const token = localStorage.getItem(tokenkey);
  const result = jwtDecode(token);

  return result.id
}