const Joi = require("joi");

exports.validateJob = function(job){
  return Joi.object({
    title:Joi.string().required().max(255),
    description:Joi.string().required().max(1024),
    duration:Joi.string().required().max(155),
    salary:Joi.number().required().max(10)
  }).validate(job);
}