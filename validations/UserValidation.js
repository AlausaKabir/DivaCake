const Joi = require("joi");
const { JoiEmail, JoiUsername } = require("../services/JoiService");

//Regsitration Validation

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    username: JoiUsername,
    email: JoiEmail,
    password: Joi.string().min(6).max(1024),
  });

  const response = schema.validateAsync(data, {
    abortEarly: false,
  });

  return response;
};

//Login Validation
const loginValidation = (data) => {
  const schema = Joi.object({
    email: JoiEmail,
    userId: JoiUsername || JoiEmail,
    password: Joi.string().min(6).max(1024),
  });
  const response = schema.validateAsync(data, {
    abortEarly: false,
  });

  return response;
};

module.exports = {
  registerValidation,
  loginValidation,
};
