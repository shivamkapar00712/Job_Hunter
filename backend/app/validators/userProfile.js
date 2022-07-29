const Joi = require('joi')
// name,emal,bio,gender,dateob,mobileno,address skill diploma experience

exports.validateProfile = function(profile){
  return Joi.object({
    bio:Joi.string().max(1024),
    gender:Joi.string().required(),
    dateOfBirth:Joi.string().required(),
    mobileNumber:Joi.number().required().min(10).max(12),
    address:Joi.string().max(1024),
    skill:Joi.array().required(),
    diploma:Joi.array(),
    experience:Joi.array()
  }).validate(profile);
}

