const mongoose = require('mongoose');
const {validateProfile} = require('../validators/userProfile');
const {UserProfile}= require('../models/UserProfile');
const {User} = require('../models/User');
const auth = require('../middleware/auth');
const {JWT_SECRET} = process.env;
const jwt = require('jsonwebtoken');

module.exports.viewUserProfile = async function(req,res){
  const userObj = await User.findById(req.user.id);
  if(!userObj) return res.status(400).send('User Not Founded');
  const userProfile = await UserProfile.findOne({'user._id':userObj._id});
  if(!userProfile) return res.status(400).send('Error in Founding Profile');
  res.send(userProfile);
}

module.exports.editUserProfile = async function(req,res){
  const profile = await UserProfile.find({'user._id':req.user.id});
  if(!profile) return res.status(400).send('something went wrong');
  try{
    const {error} = validateProfile(req.body);
    if (error) return res.status(400).send(error.details[0].message)
    const updatedProfiile = {
      user:{
        _id: req.body.user._id,
        name: req.body.user.name,
        email: req.body.user.email,
      },
      bio:req.body.bio,
      gender:req.body.gender,
      dateOfBirth:req.body.dateOfBirth,
      mobileNumber:req.body.mobileNumber,
      address:req.body.address,
      skills:req.body.skills,
      diploma:req.body.diploma,
      experience:req.body.experience
    }
      const result =await UserProfile.findOneAndUpdate({'user._id':req.user.id},updatedProfiile)
      res.send('Successfully Saved');
      
    }catch(err){
      console.log(err)
    }
}

module.exports.applyJob = async (req,res) =>{
  const profile = await UserProfile.findOne({'user._id':req.user.id});
  if(!profile) return res.status(400).send('something went wrong');

  if(!profile.appliedJobs) profile.appliedJobs = [];
  for(let job of profile.appliedJobs){
    if(job === req.body.jobId) return res.status(400).send('Already Applied')
  }
  
  profile.appliedJobs.push(req.body.jobId)


  try{
    await UserProfile.findByIdAndUpdate(profile._id,{...profile});
    res.send('Job Request sended to the owner of the company');
  }catch(ex){
  }
}
