import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getUserProfile } from "../services/profileService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faUser,
  faMailBulk,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import "../css/userProfile.css";
async function getUserWithJWT(profile, setProfile) {
  getUserProfile().then((result) => {
    const demoProfile = { ...profile };
    console.log(result);
    for (let item in result) {
      demoProfile[item] = result[item];
    }

    return setProfile(demoProfile);
  });
}

const Profile = () => {
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
    diploma: [],
    experience: [],
  });
  useEffect(() => {
    getUserWithJWT(profile, setProfile);
  }, []);

  return (
    <React.Fragment>
      {profile.mobileNumber && (
        <div className="profile-container">
          <div className="top">
            <div className="row">
              <div className="col-5 ">
                <div className="rounded-circle userDP">
                  <FontAwesomeIcon icon={faUser} className="user" />
                </div>
              </div>
              <div className="col">
                <h3>{profile.user.name}</h3>
                <div className="row m-0">
                  <div className="col-1">
                    <FontAwesomeIcon icon={faMailBulk} className="" />
                  </div>
                  <div className="col">
                    <p>{profile.user.email}</p>
                  </div>
                </div>
                <div className="row m-0">
                  <div className="col-1">
                    <FontAwesomeIcon icon={faMobile} />
                  </div>
                  <div className="col">
                    <p>{profile.mobileNumber}</p>
                  </div>
                </div>
                <div className="container">
                  <Link className="badge bg-danger" to="/edit-profile">
                    Edit Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-body">
            <div className="container p-2 m-4">
              <div className="row">
                <div className="col-3">
                  <h5>Summary:</h5>
                </div>
                <div className="col">{profile.bio}</div>
              </div>
            </div>
            <div className="container p-2 m-4">
              <div className="row">
                <div className="col-3">
                  <h5>Gender:</h5>
                </div>
                <div className="col">{profile.gender}</div>
              </div>
            </div>
            <div className="container p-2 m-4">
              <div className="row">
                <div className="col-3">
                  <h5>Date of birth:</h5>
                </div>
                <div className="col">{profile.dateOfBirth}</div>
              </div>
            </div>
            <div className="container p-2 m-4">
              <div className="row">
                <div className="col-3">
                  <h5>Address: </h5>
                </div>
                <div className="col">{profile.address}</div>
              </div>
            </div>
            <div className="container p-2 m-4">
              <div className="row">
                <div className="col-3">
                  <h5>Skills:</h5>
                </div>
                <div className="col row">
                  {profile.skills.map((s) => (
                    <div key={s} className="col-4">
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {profile.diploma && (
              <div className="container p-2 m-4">
                <div className="row">
                  <div className="col-3">
                    <h5>Diploma: </h5>
                  </div>
                  <div className="col">{profile.diploma}</div>
                </div>
              </div>
            )}
            {profile.experience && (
              <div className="container p-2 m-4">
                <div className="row">
                  <div className="col-3">
                    <h5>Experience: </h5>
                  </div>
                  <div className="col">{profile.experience}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {!profile.mobileNumber && (
        <div className="container text-center">
          <h2>
            Sorry! Its look like you did not have filled your complete Details
          </h2>
          <p>Click on this button to fill your details Properly</p>
          <div className="container row">
            <Link className="btn btn-danger w-75 m-auto" to="/edit-profile">
              Edit Profile
            </Link>
          </div>
          <div className="container">
            <FontAwesomeIcon
              icon={faGears}
              style={{ marginTop: "15vh", height: "40vh", opacity: "0.4" }}
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Profile;
