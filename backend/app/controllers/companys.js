const bcrypt = require('bcrypt');
const {Company} = require('../models/Company');
const {validateRegister,validateLogin} = require('../validators/company');


module.exports.companyRegister = async function (req, res) {
  const { error } = validateRegister(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let company = await Company.findOne({ email: req.body.email });
  if (company)
    return res.status(400).send("Company already exists with same email");

  company = new Company({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(company.password, salt);
  company.password = hash;
  const result = company.save();
  res.send(`successfully registered with emailId ${company.email}!!`);
};


exports.companyLogin = async function(req, res){
  const { error } = validateLogin(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const company = await Company.findOne({ email: req.body.email });
  if (!company) return res.status(400).send("Invalid emailID or Password");

  const check_password = await bcrypt.compare(
    req.body.password,
    company.password
  );
  if (!check_password)
    return res.status(400).send("Invalid emailId or Password");

  const token = company.generateToken();
  res.send({ message: "successfully loged in", token });
}