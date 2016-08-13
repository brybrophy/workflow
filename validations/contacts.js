'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    firstName: Joi.string()
      .min(3)
      .max(31)
      .label('firstName')
      .trim()
      .required(),
    lastName: Joi.string()
      .min(3)
      .max(31)
      .label('lastName')
      .trim()
      .required(),
    phoneNumber: Joi.string()
      .min(10)
      .max(13)
      .label('phoneNumber')
      .trim()
      .required(),
    email: Joi.string()
      .email()
      .max(63)
      .label('First name')
      .trim()
      .required(),
    linkedInUrl: Joi.string()
      .max(63)
      .label('linkedInUrl')
      .trim()
      .required()
  }
};

module.exports.patch = {
  body: {
    firstName: Joi.string()
      .min(3)
      .max(31)
      .label('firstName')
      .trim(),
    lastName: Joi.string()
      .min(3)
      .max(31)
      .label('lastName')
      .trim(),
    phoneNumber: Joi.string()
      .min(10)
      .max(13)
      .label('phoneNumber')
      .trim(),
    email: Joi.string()
      .email()
      .max(63)
      .label('First name')
      .trim(),
    linkedInUrl: Joi.string()
      .max(63)
      .label('linkedInUrl')
      .trim()
  }
};
