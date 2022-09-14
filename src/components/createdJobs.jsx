import React, { useEffect, useState } from "react";
import { findUser, getCurrentUser } from "../services/authService";
import { getAllJobs } from "../services/jobService";
import Job from "./common/job";

const getUserWithJWT = async (setUser) => {
  findUser(getCurrentUser()).then((result) => setUser(result));
};

const CreatedJobs = () => {
  const [jobs, setJobs] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUserWithJWT(setUser);
    getAllJobs().then((result) => setJobs(result));
  }, []);
  return (
    <React.Fragment>
      <div className="container card p-2" style={{margin:"2vh auto"}}>
        <h4 className="text-center">Created Jobs</h4>
      </div>
      
      <div className="container card p-4">


        {jobs && user && jobs
        .filter((j) => j.company._id === user._id)
        .map(job => (
          <Job
          key={job._id}
          job={job}
          isCompany={true}
          />
        ))
        }
      </div>
    </React.Fragment>
  );
};

export default CreatedJobs;
