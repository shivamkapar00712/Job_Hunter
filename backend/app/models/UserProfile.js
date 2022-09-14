const mongoose = require("mongoose");
const Joi = require("joi");
const {userSchema} = require('../models/User');

const userProfileSchema = new mongoose.Schema({
  user: {
    _id:mongoose.Types.ObjectId,
    name:String,
    email:String
  },
  bio: {
    type: String,
    maxlength: 255,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  dateOfBirth: {
    type: String,
  },
  mobileNumber: {
    type: Number,
  },
  address: {
    type: String,
    maxlength: 255,
  },
  skills: {
    type: Array,
  },
  diploma: {
    type: String,
    maxlength: 255,
  },
  experience: {
    type: String,
  },
  appliedJobs: {
    type: Array,
    default:[]
  }
});

module.exports.UserProfile = mongoose.model("userProfile", userProfileSchema);
module.exports.userProfileSchema = userProfileSchema;
