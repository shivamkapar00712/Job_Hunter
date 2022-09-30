import React, { useState } from 'react';
import { useEffect } from 'react';

import "../../css/job.css";

const FilterMenu = ({jobs,handleFilter,style}) => {
  
  const [Filter, setFilter] = useState(null);
  useEffect(()=>{
    handleFilter(Filter)
  },[Filter])
  return ( 
    <div className={`container ${style}`}>
          <ul className="list-group "> 
            <li className={`dropdown-center filter-control ${Filter && Filter.location ? 'bg-warning':''}`}>
              <button
                className="form-control dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Location
              </button>
              <ul className="dropdown-menu">
                {jobs &&
                  jobs.map((job) => (
                    <li key={job._id}>
                      <button
                        className={
                          (Filter ? job.location === Filter.location : false)
                            ? "dropdown-item active"
                            : "dropdown-item"
                        }
                        onClick={() => {
                          if (Filter ? job.location === Filter.location : false)
                          {
                          const filter = {...Filter}
                          filter.location = null;
                          setFilter({...filter});
                          console.log(Filter)
                        }
                          else
                          {
                            const filter = {...Filter}
                            filter.location = job.location;
                            setFilter({...filter});
                            
                          console.log(Filter)
                          }
                        }}
                      >
                        {job.location.toUpperCase()}
                      </button>
                    </li>
                  ))}
              </ul>
            </li>
            <li className="filter-control dropdown-center">
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
            <li className="filter-control dropdown-center">
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
   );
}
 
export default FilterMenu;