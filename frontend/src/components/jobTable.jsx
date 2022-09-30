import React, { useEffect, useState, memo } from "react";
import Job from "./common/job";

const JobTable = ({ jobs, filter }) => {
  const { location } = filter;
  let filteredJobs;
  if (location) {
    filteredJobs = jobs.filter((job) => job.location === location);
  } else {
    filteredJobs = jobs;
  }
  console.log(location,filter)
  return (
    <React.Fragment>
      {jobs && filteredJobs.map((job) => <Job key={job._id} job={job} />)}
    </React.Fragment>
  );
};

export default JobTable;
