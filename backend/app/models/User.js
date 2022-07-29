const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
});

userSchema.methods.generateToken = function () {
  return jwt.sign(
    { id: this._id },
    JWT_SECRET
  );
};

module.exports.User = mongoose.model("user", userSchema);
module.exports.userSchema=userSchema;
