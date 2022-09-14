import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import JobModal from "./jobModal";

const Job = ({job,isCompany}) => {
  const { title, description, location, salary, duration: timing,_id: id } = job;
  return (
    <React.Fragment>
      <div className="card m-2 "
      style={{transform: 'scale(1)'}}
			 data-bs-toggle="modal" data-bs-target={`#${job.company.name+id}Modal`}>
        <div
          className="row"
        >
          <div className="col d-flex justify-content-end align-items-center">
            <FontAwesomeIcon icon={faBriefcase} className="h-25 w-100" />
          </div>

          <div className="card-body col-8">
            <h5 className="card-title">{title}</h5>
            <p className="card-text lh-sm">
              {job.company.name}
              <br />
              <span className="text-secondary">
                {location}
                <br />
                <div className="row">
                  <div className="col-2">{salary}</div>
                  <div className="col">{timing}</div>
                </div>
              </span>
            </p>
          </div>

          <div className="col d-flex flex-column justify-content-center">
            <FontAwesomeIcon icon={faBookmark} className="h-20" />
          </div>
        </div>
      </div>
			<JobModal
			toggleID={`${job.company.name+id}Modal`}
			label_ID ={`${job.company.name+id}LabelModal`}
      isCompany={isCompany}
			job={job}
			/>
    </React.Fragment>
  );
};

export default Job;
