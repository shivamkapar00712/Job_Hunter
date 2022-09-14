import React, { useEffect, useState } from 'react';
import Job from './common/job';
import { getAllJobs } from '../services/jobService';


const handleSelectedJob = (e) =>{
  e.preventDefault();
  console.log(e);
}

const JobTable = () => {
  const [jobs, setJobs] = useState(null);
  useEffect(()=>{
    getAllJobs().then(result =>setJobs(result));
  },[])
  console.log(jobs)
  return ( 
    <React.Fragment>
      {jobs &&
        jobs.map(job => (
          <Job 
          key={job._id}
          job={job}
          />
        ))
      }
    </React.Fragment>
   );
}
 
export default JobTable;