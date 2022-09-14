import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAllJobs } from "../services/jobService";
import SearchMenu from "./common/search";
import JobTable from "./jobTable";



const Jobs = () => {

  return (
    <React.Fragment>
      <div className="container">
        <div className="container m-4 ">
          <SearchMenu />
        </div>
      </div>
      <div className="row">
        <div className="col-3 container">
          <ul className="list-group">
            <li className="list-group-item dropdown-center">
              <button
                className="form-control dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Location
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
              </ul>
            </li>
            <li className="list-group-item dropdown-center">
              <button
                className="form-control dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Experirence
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    0 yr - 1 yr
                  </a>
                </li>
              </ul>
            </li>
            <li className="list-group-item dropdown-center">
              <button
                className="form-control dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Timing
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Full Time
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Morning Shift
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    after noon Shift
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Work From Home
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="col-7">
          <JobTable />
        </div>
        <div className="col"></div>
      </div>
    </React.Fragment>
  );
};

export default Jobs;
