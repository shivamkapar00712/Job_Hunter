import React from "react";
import SearchMenu from "./common/search";
import "../css/home.style.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className="home-container">
        <div className="header">
          <h1 className="text-center ">Find your Dream job here!!</h1>
        <hr />
          <p className="text-center">Best jobs for you to explore</p>
        </div>
        <div className="searchMenu">
          <SearchMenu />
        </div>
      </div>
        <div className="services">
          <div className="container title">
            <h2 className="text-center">Services</h2>
          </div>
          <div className="ad-container">
            <div className="ad-card m-4">
              <div className="container flex justify-content-center align-items-center m-auto">
                <h5 className="text-center">
                  Getby Biggest Compnaines and Get Hired
                </h5>
              </div>
            </div>
            <div className="ad-card m-4">
              <div className="container m-auto ">
                <h5 className="text-center">
                  Getby Biggest Compnaines and Get Hired
                </h5>
              </div>
            </div>
            <div className="ad-card m-4">
              <div className="container m-auto ">
                <h5 className="text-center">
                  Getby Biggest Compnaines and Get Hired
                </h5>
              </div>
            </div>
            <div className="ad-card m-4">
              <div className="container m-auto">
                <h5 className="text-center">
                  Getby Biggest Compnaines and Get Hired
                </h5>
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  );
};

export default Home;
