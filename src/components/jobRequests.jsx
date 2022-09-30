import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { getCompanyByJWT, rejectJobReq } from "../services/companyService";
import '../css/userProfile.css'
const handleReject = async (e,company,setCompany) =>{
  const companys = {...company}
  const oldCompanyValue = {...company}
  const {currentTarget: input} = e;
  for(let req of companys.jobRequests){
    if (req.user.user._id === input.name){
      const index = companys.jobRequests.indexOf(req)
      companys.jobRequests.splice(index,1);
      setCompany(companys)
      try{
        const result = await rejectJobReq(req.user,req.job,index);
        toast.info(`Rejected ${req.user.user.name} Request`)
      }catch(ex){
        setCompany(oldCompanyValue);
      }
    }
  }
  
}


const handleAccept = (e,company,setCompany) =>{
  const { currentTarget: input} = e;
  for (let req of company.jobRequests){
    if(req.user.user._id === input.name){
      toast.info(`Calling ${req.user.user.name}`)
    }
  }
}



const JobRequests = () => {
  const [company, setCompany] = useState(null);
  useEffect(() => {
    getCompanyByJWT().then((result) => setCompany(result));
  }, []);
  return (
    <div className="profile-container" style={{height:'100vh'}}>
      <div className="container profile-body" style={{ margin: "3vh auto" }}>
        <div className="container">
          <h2 className="text-center">Job Requested by users</h2>
        </div>
        {company && company.jobRequests.map((req) => (
          <div key={req.user.user._id} id={req.user.user._id} className="top" style={{color:'goldenrod'}}>
            <h5>{req.user.user.name} has requested for {req.job.title} job</h5>
            <div className="row d-flex justify-content-end">
              <div className="col-9 d-flex justify-content-end">
                <button onClick={(e)=>handleReject(e,company,setCompany)} name={req.user.user._id} className="btn btn-outline-danger">Reject</button>
              </div>
              <div className="col d-flex justify-content-start">
                <button onClick={(e)=>handleAccept(e,company,setCompany)} className="btn btn-primary">Call</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobRequests;
