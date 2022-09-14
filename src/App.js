import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/home";
import Navbar from "./components/navbar";
import LoginForm from "./components/login";
import NotFound from "./components/notfound";
import RegisterEmployees from "./components/registerEmployees";
import RegisterEmployers from "./components/registerEmployers";
import Jobs from "./components/jobs";
import "react-toastify/dist/ReactToastify.css";
import Logout from "./components/logout";
import Profile from "./components/profile";
import EditProfile from "./components/editProfile";
import NewJob from "./components/newJob";
import CreatedJobs from "./components/createdJobs";
import JobRequests from "./components/jobRequests";
import { findUser, getCurrentUser } from "./services/authService";

const getUserWithJWT = async (setUser) => {
  findUser(getCurrentUser()).then((result) => setUser(result));
};

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUserWithJWT(setUser);
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <ToastContainer />
      <Routes>
        {user && user.isCompany && (
          <React.Fragment>
            <Route path="/job-requests" element={<JobRequests />} />
            <Route path="/my-jobs" element={<CreatedJobs />} />
            <Route path="/new-job" element={<NewJob />} />
          </React.Fragment>
        )}
        {user && !user.isCompany && (
          <React.Fragment>
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/jobs" element={<Jobs />} />
          </React.Fragment>
        )}

        {!user && (
          <React.Fragment>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register-employees" element={<RegisterEmployees />} />
            <Route path="/register-employers" element={<RegisterEmployers />} />
          </React.Fragment>
        )}

        {user && <Route path="/logout" element={<Logout />} />}

        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
