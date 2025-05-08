const Joi = require('joi');

const validateRegister = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(10).required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const validateLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const validateBooking = (data) => {
  const schema = Joi.object({
    activityId: Joi.string().required(),
  });
  return schema.validate(data);
};

module.exports = { validateRegister, validateLogin, validateBooking };