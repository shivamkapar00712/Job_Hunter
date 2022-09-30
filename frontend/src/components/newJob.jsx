import React from "react";
import { useState } from "react";
import { createJob } from "../services/jobService";
import InputGroup from "./common/InputGroup";
import Skills from "./common/skills";
import '../css/userProfile.css'
import { Link } from "react-router-dom";
const handleSubmit = async (e,job) => {
  e.preventDefault();
  try{
    const result = await createJob(job);
    if(result) window.location.href = '/my-jobs';
  }catch(err){
    console.log(err.response.data)
  }
};

const handleChange = (e, job, setJob) => {
  const { currentTarget: input } = e;
  const demoUser = { ...job };
  if (input.type === "checkbox") {
    if (input.checked) demoUser[input.name].push(input.value);
    if (!input.checked)
      demoUser[input.name].splice(demoUser[input.name].indexOf(input.value), 1);
  } else {
    if (input.name === "name") demoUser.user.name = input.value;
    else demoUser[input.name] = input.value;
  }
  setJob(demoUser);
};

const NewJob = () => {
  const [job, setJob] = useState({
    title: "",
    description: "",
    location:"",
    duration: "",
    salary: "",
    skillRequired: [],
    company: { _id: "", name: "", email: "", isCompany: "", isPremium: "" },
  });
  const [errors, setErrors] = useState(null);
  return (
    <form className="profile-container" onSubmit={e=>handleSubmit(e,job)}>
      <div className="profile-body">
        <div className="container m-2">
          <h3 className="text-center">Create New Job</h3>
        </div>
        <div className="container m-3">
          <InputGroup
            name="title"
            value={job.title}
            placeholder="Enter Job Title"
            errors={errors}
            onChange={(e) => handleChange(e, job, setJob)}
            type="text"
            label="Title: "
          />
          <InputGroup
            name="description"
            value={job.description}
            placeholder="Description"
            errors={errors}
            onChange={(e) => handleChange(e, job, setJob)}
            type="text"
            label="description: "
          />
          <InputGroup
            name="location"
            value={job.location}
            placeholder="location"
            errors={errors}
            onChange={(e) => handleChange(e, job, setJob)}
            type="text"
            label="location: "
          />
          <InputGroup
            name="duration"
            value={job.duration}
            placeholder="Enter Job duration"
            errors={errors}
            onChange={(e) => handleChange(e, job, setJob)}
            type="text"
            label="duration: "
          />
          <InputGroup
            name="salary"
            value={job.salary}
            placeholder="Enter Job salary(in LPA)"
            errors={errors}
            onChange={(e) => handleChange(e, job, setJob)}
            type="number"
            label="salary(LPA): "
          />
          <div className=" m-4">
            <Skills
              lable="Skills Required"
              name="skillRequired"
              onChange={(e) => handleChange(e, job, setJob)}
            />
          </div>
        </div>
        <div className="row container p-2">
          <div className="col">
            <button className="btn btn-success form-control">Sumbit</button>
          </div>
          <div className="col-4">
            <Link className="btn btn-outline-danger form-control" to='/'>Cancel</Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewJob;
