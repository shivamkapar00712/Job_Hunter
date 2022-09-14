import { toast } from "react-toastify";
import httpServices from "./httpServices";


export async function getAllJobs(){
  try{
    const {data} = await httpServices.get("/browseJobs");
    return data
  }catch(ex){
    if(ex.response && ex.response.status === 400)
      toast.error(ex.response.data);
  }

}

export async function createJob(job){
  try{
    const {data} = await httpServices.post('/companys/createjob',{...job});
    toast.success(data)
    return true
  }catch(ex){
    if(ex.response && ex.response.status === 400)
      toast.error(ex.response.data);
  }

}

export async function applyJob(job){
  try{
    const {data} = await httpServices.post('/applyforjob',{jobId:job});
    toast.success(data)
    return true
  }catch(ex){
    if(ex.response && ex.response.status === 400)
      toast.error(ex.response.data);
  }

}