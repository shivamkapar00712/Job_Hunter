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
  isPremium:{
    type:Boolean,
    default:false
  },
  isCompany: {
    type: Boolean,
    default: true,
  },
  jobRequests:{
    type: Array,
    default:[]
  }
});

companySchema.methods.generateToken = function () {
  return jwt.sign(
    {
      id: this._id
    },
    JWT_SECRET
  );
};

exports.Company = mongoose.model("Company", companySchema);
