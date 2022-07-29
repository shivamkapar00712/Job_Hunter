const _ = require('lodash');
const bcrypt = require('bcrypt');
const { User } = require("../models/User");
const { validateRegister,validateLogin } = require("../validators/user");
const {UserProfile} = require('../models/UserProfile');

module.exports.userLogin = async function (req, res) {
  const { error } = validateLogin(req.body);
  if (error) return res.status(400).send(err.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid Email id or Password");

  const authentication = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!authentication)
    return res.status(400).send("Invalid Email id or Password");

  const token = user.generateToken();
  res.send({ message: "successfully login", token ,user});
};


module.exports.userRegister = async function (req, res) {
  const { error } = validateRegister(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let newUser = await User.findOne({ email: req.body.email });
  
  if (newUser)
    return res
      .status(400)
      .send(`worker with this email already exists`);

  newUser = new User(
    _.pick(req.body, ["name", "email", "password"])
  );
  const userProfile = new UserProfile({
    user:new User({
      _id:newUser._id,
      name:newUser.name,
      email:newUser.email
    }),
    bio:undefined,
    gender:undefined,
    dateOfBirth:undefined,
    mobileNumber:undefined,
    address:undefined,
    skill:undefined,
    diploma:undefined,
    experience:undefined
  });
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(newUser.password, salt);
  newUser.password = hashPassword;
  const saveResult = await newUser.save();
  const saveProfile = await userProfile.save();
  res.send('Successfully registered');
};
