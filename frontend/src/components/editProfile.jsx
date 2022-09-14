import React, { useState, useEffect } from "react";
import { getUserProfile, setUserProfile } from "../services/profileService";
import Input from "./common/formInput";

const handleChange = (e, profile, setProfile) => {
  const { currentTarget: input } = e;
  const demoUser = { ...profile };
  if (input.type === "checkbox") {
    if (input.checked) demoUser[input.name].push(input.value);
    if (!input.checked)
      demoUser[input.name].splice(demoUser[input.name].indexOf(input.value), 1);
  } else {
    if(input.name === 'name') demoUser.user.name = input.value;
    else demoUser[input.name] = input.value;
  }
  setProfile(demoUser);
};
const checkUserSkills = (profile,s)=>{
  for (let skill of profile.skills){
    if (skill === s) return true
  }
  return false;
}
const handleSubmit = async (e,profile) => {
  e.preventDefault();
  try{
    const demoProfile = {...profile}
    console.log(demoProfile.dateOfBirth)
    const result = await setUserProfile({...profile});
    console.log(result)
    if(result) window.location.href = '/profile';
  }catch(err){
    console.log(err.response.data)
  }
}

async function getUserWithJWT(profile, setProfile) {
  getUserProfile().then((result) => {
    const demoProfile = { ...profile };
    console.log(result)
    for (let item in result){
      demoProfile[item] = result[item];
    }

    return setProfile(demoProfile);
  });
}
const EditProfile = () => {
  const allSkills =[
    'NodeJs','React','Express','MongoDB','MySql','Data structures and algorithms','Cloud computing',
    'Web development', 'Full-stack Developer','Mechanic','Taxi-Driver','Human Resources','Backend',
    'AI','Machine Learning'
  ]
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
    <div className="container">
      <form className="form card p-5" onSubmit={e=>handleSubmit(e,profile,setProfile)}>
        <div className="container">
          <h3 className="text-center">Edit Your Profile</h3>
        </div>
        <div className=" m-4">
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="UserName"
            onChange={(e) => handleChange(e, profile, setProfile)}
            label="Full Name"
            value={profile.user.name}
          />
          <Input
            type="text"
            id="bio"
            name="bio"
            placeholder="Summary"
            onChange={(e) => handleChange(e, profile, setProfile)}
            label="Bio"
            value={profile.bio}
          />
          <Input
            type="gender"
            id="Gender"
            name="gender"
            placeholder="Gender"
            onChange={(e) => handleChange(e, profile, setProfile)}
            label="Gender"
            value={profile.gender}
          />
          <Input
            type="date"
            id="DOB"
            name="dateOfBirth"
            placeholder="Date Of Birth"
            onChange={(e) => handleChange(e, profile, setProfile)}
            label="Date of Birth"
            value={profile.dateOfBirth}
          />
          <Input
            type="tel"
            id="mobile"
            name="mobileNumber"
            placeholder="Mobile Number"
            onChange={(e) => handleChange(e, profile, setProfile)}
            label="Moblile Number"
            value={profile.mobileNumber}
          />
          <Input
            type="text"
            id="address"
            name="address"
            placeholder="Address Field"
            onChange={(e) => handleChange(e, profile, setProfile)}
            label="Address"
            value={profile.address}
          />
          <p>
            <button
              className=" form-control text-left"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Skills
            </button>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
              <div className="form-check">

                <div className="row">
                  {
                    allSkills.map(s=>(
                      <React.Fragment key={s}>
                        <div className="col-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="skills"
                            value={s}
                            id={s}
                            onChange={(e) => handleChange(e, profile, setProfile)}
                            checked={checkUserSkills(profile,s)}
                          />
                          <label className="form-check-label" htmlFor={s}>
                            {s}
                          </label>
                        
                        </div>
                        <br />
                      </React.Fragment>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>

          <Input
            type="text"
            id="Diploma"
            name="diploma"
            placeholder="Diploma"
            onChange={(e) => handleChange(e, profile, setProfile)}
            label={<span className="text-secondary">Diploma (Optional)</span>}
            value={profile.diploma}
          />
          <Input
            type="text"
            id="Experience"
            name="experience"
            placeholder="Experience"
            onChange={(e) => handleChange(e, profile, setProfile)}
            label={<span className="text-secondary">Experience (Optional)</span>}
            value={profile.experience}
          />
          <button className="btn btn-outline-primary form-control">Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
