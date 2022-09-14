const _ = require("lodash");
const bcrypt = require("bcrypt");
const { User } = require("../models/User");
const { Company } = require('../models/Company')
const { validateRegister, validateLogin } = require("../validators/user");
const { UserProfile } = require("../models/UserProfile");

module.exports.userLogin = async function (req, res) {
  const { error } = validateLogin(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    user = await Company.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Invalid E-mail or Password");
  }

  const authentication = await bcrypt.compare(req.body.password, user.password);
  if (!authentication)
    return res.status(400).send("Invalid Email id or Password");

  const token = user.generateToken();
  res.send(token);
};

module.exports.userRegister = async function (req, res) {
  const { error } = validateRegister(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let newUser = await User.findOne({ email: req.body.email });

  if (newUser)
    return res.status(400).send(`worker with this email already exists`);

  newUser = new User(_.pick(req.body, ["name", "email", "password"]));
  const userProfile = new UserProfile({
    user: new User({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    }),
    bio: undefined,
    gender: undefined,
    dateOfBirth: undefined,
    mobileNumber: undefined,
    address: undefined,
    skill: undefined,
    diploma: undefined,
    experience: undefined,
  });
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(newUser.password, salt);
  newUser.password = hashPassword;
  const saveResult = await newUser.save();
  const saveProfile = await userProfile.save();
  res.send("Successfully registered");
};

module.exports.getUser = async (req,res)=>{
  let isCompany = false;
  let user = await User.findById(req.params.id || req.user.id);
  if (!user) {
    user = await Company.findById(req.params.id || req.user.id);
    if (!user) return res.status(400).send("Invalid Agent");
    isCompany=true
  }
  if(isCompany){
    res.send({
      _id:user._id,
      name:user.name,
      email:user.email,
      isCompany:user.isCompany,
      isPremium: user.isPremium
    })
  }else{
    res.send({
      _id:user._id,
      name:user.name,
      email:user.email,
    })
  }
}