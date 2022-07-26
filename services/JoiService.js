const Joi = require("joi");

const JoiEmail = Joi.string().email();
const JoiUsername = Joi.string()
  .regex(/^[0-9+]{7}-[0-9+]{1}$/)
  .required();

module.exports = { JoiEmail, JoiUsername };
