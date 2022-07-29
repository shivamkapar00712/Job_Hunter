const mongoose = require('mongoose');
const {validateProfile} = require('../validators/userProfile');
const {UserProfile}= require('../models/UserProfile');
const {User} = require('../models/User');
const auth = require('../middleware/auth');
const {JWT_SECRET} = process.env;
const jwt = require('jsonwebtoken');

module.exports.viewUserProfile = async function(req,res){
  const userObj = await User.findById(req.user.id);
  if(!userObj) return res.status(400).send('something went wrong');
  const userProfile = await UserProfile.findOne({'user._id':userObj._id});
  if(!userProfile) return res.status(400).send('something went wrong');
  res.send(userProfile);
  
}

module.exports.editUserProfile = async function(req,res){
  const user = await User.findById(req.user.id);
  if(!user) return res.status(400).send('something went wrong');

  
  
}
