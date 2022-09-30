import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import JobModal from "./jobModal";
import "../../css/job.css";
import { getUserProfile } from "../../services/profileService";

const isApplied = (id, appliedJobs) => {
  if (!appliedJobs) return;

  for (let jobId of appliedJobs) {
    if (jobId === id) return true;
  }
  return false;
};

async function getUserWithJWT(profile, setProfile) {
  getUserProfile().then((result) => {
    const demoProfile = { ...profile };
    for (let item in result) {
      demoProfile[item] = result[item];
    }
    return setProfile(demoProfile);
  });
}

const Job = ({ job, isCompany }) => {
  const {
    title,
    description,
    location,
    salary,
    duration: timing,
    _id: id,
  } = job;
  const [profile, setProfile] = useState({
    user: {
      name: "",
      email: "",
    },
    bio: "",
    gender: "",
    dateOfBirth: "",
    mobileNumber: 0,
    address: "",
    skills: [],
    diploma: "",
    experience: "",
    appliedJobs: [],
  });
  useEffect(() => {
    getUserWithJWT(profile, setProfile);
  }, []);
  return (
    <React.Fragment>
      <div
        className="job-card m-2"
        style={{ transform: "scale(1)" }}
        data-bs-toggle="modal"
        data-bs-target={`#${job.company.name + id}Modal`}
      >
        <div className="row">
          <div className="col d-flex justify-content-end align-items-center">
            <FontAwesomeIcon icon={faBriefcase} className="h-25 w-100" />
          </div>

          <div className="card-body col-8">
            <h5 className="card-title">
              {`${title}`}
              {isApplied(id, profile.appliedJobs) && (
                <div className="btn btn-outline-success" style={{marginLeft:'5%'}}>Applied</div>
              )}
            </h5>
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
        toggleID={`${job.company.name + id}Modal`}
        label_ID={`${job.company.name + id}LabelModal`}
        isCompany={isCompany}
        job={job}
        profile={profile}
        isApplied={isApplied}
      />
    </React.Fragment>
  );
};

export default Job;
