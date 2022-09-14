import React from "react";
import SearchMenu from "./common/search";

const Home = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="header m-5">
          <h1 className="text-center ">Find your Dream job here!!</h1>
          <p className="text-center">Best jobs for you to explore</p>
        </div>
        <SearchMenu />
        <div className=" m-4" style={{width:'50%',margin:'3vh auto'}}>
          <div className="container m-auto card">
            <h5 className="text-center">Get Contacted by Biggest Compnaines and Get Hired</h5>
          </div>
        </div>
        
      </div>
    </React.Fragment>
  );
};

export default Home;
