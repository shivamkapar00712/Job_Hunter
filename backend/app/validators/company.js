const Joi = require("joi");

exports.validateLogin = function (obj) {
  return Joi.object({
    email: Joi.string().required().min(3).max(255).email(),
    password: Joi.string().required().min(3).max(255),
  }).validate(obj);
};

exports.validateRegister = function (obj) {
  return Joi.object({
    name: Joi.string().required().min(3).max(255),
    email: Joi.string().required().min(3).max(255).email(),
    password: Joi.string().required().min(3).max(255),
  }).validate(obj);
};
