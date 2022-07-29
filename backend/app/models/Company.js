const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

const companySchema = new mongoose.Schema({
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
  isPremium: {
    type: Boolean,
    default: false,
  },
});

companySchema.methods.generateToken = function () {
  return jwt.sign(
    {
      _id: this._id
    },
    JWT_SECRET
  );
};

exports.Company = mongoose.model("Company", companySchema);
