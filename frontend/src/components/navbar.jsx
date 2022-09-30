import React, { useState, useEffect } from "react";
import logo from "../images/companyLogo.png";
import "../css/logo.css";
import { Link } from "react-router-dom";
import { findUser, getCurrentUser } from "../services/authService";
import Search from "./common/basicSearch";
import '../css/navbar.css';


const getUserWithJWT = async (setUser) => {
  findUser(getCurrentUser()).then((result) => setUser(result));
};

const Navbar = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUserWithJWT(setUser);
  }, []);

  console.log(user);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <div className="container-fluid">
          <img src={logo} className="navbar-brand logo"></img>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {user && !user.isCompany && (
                <li className="nav-item">
                  <a
                    className="nav-link active me-2"
                    aria-current="page"
                    href="#"
                  >
                    Compaines
                  </a>
                </li>
              )}
              {(user && user.isCompany && (
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Users
                </a>
              </li>
              ))}
              <li className="nav-item dropdown" id="navbarNavDarkDropdown">
                <a
                  className="nav-link dropdown-toggle me-2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Jobs
                </a>
                <ul className="dropdown-menu dropdown-menu-dark bg-dark">
                  {user && user.isCompany && (
                  <React.Fragment>
                    <Link className="dropdown-item bg-dark" to="/new-job">
                      Create New Job
                    </Link>
                    <Link className="dropdown-item bg-dark" to="/my-jobs">
                      My Jobs
                    </Link>
                  </React.Fragment>
                  )}
                  {user && !user.isCompany && (
                    <Link className="dropdown-item bg-dark" to="/jobs">
                      Browse Jobs
                    </Link>
                  )}
                </ul>
              </li>
            </ul>
            {/* <form className="" role="search">
              <Search /> 
            </form> */}
            {!user && (
              <Link className="btn login-btn btn-outline-success m-2" to="/login">
                Login
              </Link>
            )}
            {!user && (
              <div className="nav-item m-2" id="navbarNavDarkDropdown">
                <ul className="navbar-nav me-2">
                  <li className="nav-item dropdown">
                    <a
                      className="btn btn-warning dropdown-toggle me-2"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Register
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark bg-dark">
                      <Link
                        className="dropdown-item bg-dark"
                        to="/register-employees"
                      >
                        For Employees
                      </Link>
                      <Link
                        className="dropdown-item bg-dark"
                        to="/register-employers"
                      >
                        For Employers
                      </Link>
                    </ul>
                  </li>
                </ul>
              </div>
            )}

            {user && (
              <div className="m-3 dropdown text-end">
                <a
                  href="#"
                  className="d-block link-dark text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="mdo"
                    width="48"
                    height="48"
                    className="rounded-circle"
                  />
                </a>
                <ul className="dropdown-menu text-small">
                  <li>
                    <h6 className="container">{user.name}</h6>
                  </li>
                  <hr className="dropdown-divider"></hr>
                  {(user && user.isCompany && (
                  <li>
                    <Link className="dropdown-item" to="/job-requests">
                      Job Requests
                    </Link>
                  </li>
                  ))}
                  {(user && !user.isCompany && (
                  <li>
                    <a className="dropdown-item" href="#">
                      Saved Jobs
                    </a>
                  </li>
                  ))}
                  {(user && !user.isCompany && (
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                  </li>
                  ))}
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/logout">
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
