const {validateJob} = require('../validators/jobs')
const mongoose = require('mongoose');
const {Company} = require('../models/Company');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = process.env;
const {Job} = require('../models/Job');

exports.createJob = async function(req,res){
  const {error} = validateJob(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  const hireCompany = await Company.findById(req.user._id);
  if(!hireCompany) return res.status(400).send('failed to finding user for this job');

  const job = new Job({
    title:req.body.title,
    description:req.body.description,
    duration:req.body.duration,
    salary:req.body.salary,
    company:{
      _id:hireCompany._id,
      name:hireCompany.name,
      email:hireCompany.email,
      isPremium:hireCompany.isPremium
    }
  });
  const result = await job.save();
  res.send('succefully added 1 job');
}

// Search all jobs
module.exports.browseJobs = async function(req,res){
  const jobs = await Job.find().sort('title');
  res.send(jobs);
}

//search particular job
module.exports.selectedJob = async function(req,res){
  const job = await Job.findById(req.params.id);
  if(!job) return res.status(404).send('job not available');

  res.send(job);
}