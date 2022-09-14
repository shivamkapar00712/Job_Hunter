const bcrypt = require('bcrypt');
const {Company} = require('../models/Company');
const { UserProfile } = require('../models/UserProfile');
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

module.exports.allCompanies = async (req,res) =>{
  const companys = await Company.find();
  res.send(companys);
}

module.exports.jobRequested = async (req,res) =>{
  const users = {...req.body.user};
  const jobs = {...req.body.job};
  const company = await Company.findById(jobs.company._id);
  if (!company)
    return res.status(400).send("Please Login Again, Something went wrong");

  if(!company.jobRequests) company.jobRequests = [];

  company.jobRequests.push(
    {
      user:users,
      job:jobs
    }
  )
  
    try{
      const result = await Company.findByIdAndUpdate(company._id,{...company});
      res.send('successfully updated company request');
    }catch(ex){
      
  }
}

module.exports.RejectRequest = async (req,res) =>{
  const users = {...req.body.user};
  const jobs = {...req.body.job};

  const company = await Company.findById(jobs.company._id);
  const userProfile = await UserProfile.findById(users._id);
  if (!company) return res.status(400).send("Please Login Again, Something went wrong");
  if (!userProfile) return res.status(400).send("Please Login Again, Something went wrong");


  company.jobRequests.splice(req.body.index,1)
  for(let userID of userProfile.appliedJobs){
    userProfile.appliedJobs.splice(userProfile.appliedJobs.indexOf(userID),1)
  }
  
    try{
      await Company.findByIdAndUpdate(company._id,{...company});
      await UserProfile.findByIdAndUpdate(userProfile._id,{...userProfile});

      res.send('successfully removed request');
    }catch(ex){
  }
}

module.exports.getCompanyByAuth = async (req,res) =>{
  const company = await Company.findById(req.user.id);
  if (!company) return res.status(400).send('Please Login Again, Something went wrong');

  res.send(company);

}