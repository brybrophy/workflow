'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    username: Joi.string()
      .min(3)
      .max(31)
      .label('Username')
      .trim()
      .required(),
    email: Joi.string()
      .max(63)
      .label('First name')
      .trim(),
    password: Joi.string()
      .alphanum()
      .label('Password')
      .trim()
      .required()
  }
};
