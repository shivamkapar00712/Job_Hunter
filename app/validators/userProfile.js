const Joi = require('joi')
// name,emal,bio,gender,dateob,mobileno,address skill diploma experience

exports.validateProfile = function(profile){
  return Joi.object({
    user:Joi.object().required(),
    bio:Joi.string().max(1024),
    gender:Joi.string().required(),
    dateOfBirth:Joi.date().iso().required(),
    mobileNumber:Joi.number().required(),
    address:Joi.string().max(1024),
    skills:Joi.required(),
    diploma:Joi.string(),
    experience:Joi.string()
  }).validate(profile);
}

