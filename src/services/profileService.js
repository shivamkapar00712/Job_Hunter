import { toast } from "react-toastify";
import { findUser, getCurrentUser } from "./authService";
import httpServices from "./httpServices";

export const setUserProfile = async (demoProfile) => {
  try {
    const result = await httpServices.post(`/userProfile`, {
      user: {
        _id: demoProfile.user._id,
        name: demoProfile.user.name,
        email: demoProfile.user.email,
      },
      bio: demoProfile.bio,
      gender: demoProfile.gender,
      dateOfBirth: demoProfile.dateOfBirth,
      mobileNumber: demoProfile.mobileNumber,
      address: demoProfile.address,
      skills: demoProfile.skills,
      diploma: demoProfile.diploma,
      experience: demoProfile.experience,
    });
    return true;
  } catch (ex) {
    if (ex.response && ex.response.status === 400) {
      console.log(ex.response.data);
    }
  }
};

export const getUserProfile = async (profile) => {
  try {
    const user = await findUser(getCurrentUser());
    if(!user.isCompany){
      const result = await httpServices.get(`/userProfile`);
      return result.data;
    }
  } catch (ex) {
    if (ex.response && ex.response.status === 400) {
      toast.error(ex.response.data);
    }
    // return false
  }
};
