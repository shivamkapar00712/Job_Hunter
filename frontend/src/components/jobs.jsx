import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAllJobs } from "../services/jobService";
import FilterMenu from "./common/filter";
import SearchMenu from "./common/search";
import JobTable from "./jobTable";
import "../css/job.css";
const handleJobSearch = (e, jobs, setSearchFilter) => {
  e.preventDefault();
  const { currentTarget: input } = e;
  const alljobs = [...jobs];
  setSearchFilter(
    alljobs.filter(
      (job) =>
        job.title.toLowerCase().includes(input.value) ||
        job.company.name.toLowerCase().includes(input.value) ||
        job.location.toLowerCase().includes(input.value)
    )
  );
  console.log(alljobs);
};

const Jobs = () => {
  const [jobs, setJobs] = useState(null);
  const [filter, setFilter] = useState(null);
  const [searchFilter, setSearchFilter] = useState(null);
  console.log(filter);
  useEffect(() => {
    getAllJobs().then((result) => setJobs(result));
  }, []);
  return (
    <div className="background-job p-4">
      {window.innerWidth <= 700 && (
        <FilterMenu
          style="m-3"
          jobs={jobs}
          handleFilter={(Filter) => setFilter(Filter)}
        />
      )}

      <div className="row">
        {window.innerWidth > 700 && (
          <FilterMenu
            style="col-3"
            jobs={jobs}
            handleFilter={(Filter) => setFilter(Filter)}
          />
        )}
        <div
          className={
            window.innerWidth > 700
              ? "col-7 container job-container"
              : "container job-container"
          }
        >
          <div className="container">
            <div className="container m-4 ">
              <SearchMenu
                handleSubmit={(e) => handleJobSearch(e, jobs, setSearchFilter)}
              />
            </div>
          </div>
          <JobTable jobs={searchFilter || jobs} filter={{ ...filter }} />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Jobs;
