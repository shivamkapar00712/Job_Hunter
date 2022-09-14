import { toast } from "react-toastify";
import httpServices from "./httpServices";


export async function requestJob(user,job){
  try{
    const {data} = await httpServices.post('/companys/jobrequests',{
      user:{...user},
      job:{...job}
    })
    console.log(data);
    // window.location.href = 
  }catch(ex){
    if (ex.response && ex.response.status === 400){
      toast.error(ex.response.data)
    }
  }
  
}



export async function rejectJobReq(user,job,index){
  try{
    const {data} = await httpServices.post('/companys/rejectRequest',{
      user:{...user},
      job:{...job},
      index:index
    })
    console.log(data);
    // window.location.href = 
  }catch(ex){
    if (ex.response && ex.response.status === 400){
      toast.error(ex.response.data)
    }
  }
  
}

export async function getCompanyByJWT(){
  try{
    const {data} = await httpServices.get('/companys/myself')
    console.log(data);
    return data;
    // window.location.href = 
  }catch(ex){
    if (ex.response && ex.response.status === 400){
      toast.error(ex.response.data)
    }
  }
  
}