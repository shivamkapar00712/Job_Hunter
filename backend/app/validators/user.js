const Joi = require("joi");

exports.validateRegister = function (user) {
  return Joi.object({
    name: Joi.string().required().min(3).max(255),
    email: Joi.string().required().min(3).max(255).email(),
    password: Joi.string().required().min(3).max(255)
  }).validate(user)
};

exports.validateLogin = function (user) {
  return Joi.object({
    email: Joi.string().required().min(3).max(255).email(),
    password: Joi.string().required().min(3).max(255)
  }).validate(user);
};