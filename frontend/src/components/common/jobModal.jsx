import React from "react";
import { requestJob } from "../../services/companyService";
import { applyJob } from "../../services/jobService";
import { getUserProfile } from "../../services/profileService";


const handleChange = async (profile,job,isApplied)=>{
  try{
    const applied = isApplied(job._id,profile.appliedJobs)
    if(applied) return console.log('already Applied');
    requestJob(profile,job).then((result)=>{
      applyJob(job._id).then(
        data=>{
          window.location.href = '/jobs'
        }
      )
    })
  }catch(ex){
    console.log(ex)
  }
}




const JobModal = ({
  toggleID,
  label_ID,
  job,
  isCompany,
  profile,
  isApplied
}) => {
  const { title, description, location, salary, duration: timing,_id: id } = job;
  return (
    <div
      className="modal fade"
      style={{transform: 'scale(0.8)'}}
      id={toggleID}
      tabIndex="-1"
      aria-labelledby={label_ID}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id={label_ID}>
              {title}
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col">
                <h5>Description:</h5>
              </div>
              <div className="col">
                <p>{description}</p>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <h5>Job Created By:</h5>
              </div>
              <div className="col">
                <p>{job.company.name}</p>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <h5>Salary offered:</h5>
              </div>
              <div className="col">
                <p>{salary}</p>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <h5>Work Location:</h5>
              </div>
              <div className="col">
                <p>{location}</p>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <h5>Timing:</h5>
              </div>
              <div className="col">
                <p>{timing}</p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-danger"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            {!isCompany && (<button type="button" disabled={isApplied(job._id,profile.appliedJobs)} onClick={()=>handleChange(profile,job,isApplied)} className="btn btn-success">
              {
                isApplied(job._id,profile.appliedJobs) && `Already Applied`
              }
              {
                !isApplied(job._id,profile.appliedJobs) && `Apply`
              }
              
            </button>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobModal;
