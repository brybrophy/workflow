'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    firstName: Joi.string()
      .min(3)
      .max(31)
      .label('First Name')
      .trim()
      .required(),
    lastName: Joi.string()
      .min(3)
      .max(31)
      .label('Last Name')
      .trim()
      .required(),
    phoneNumber: Joi.string()
      .min(10)
      .max(13)
      .label('Phone Number')
      .trim()
      .required(),
    email: Joi.string()
      .email()
      .max(63)
      .label('Email')
      .trim()
      .required(),
    title: Joi.string()
      .min(3)
      .label('Title')
      .trim(),
    company: Joi.string()
      .min(2)
      .label('Company')
      .trim(),
    linkedInUrl: Joi.string()
      .max(63)
      .label('LinkedIn URL')
      .trim()
      .required()
  }
};

module.exports.patch = {
  body: {
    firstName: Joi.string()
      .min(3)
      .max(31)
      .label('First Name')
      .trim(),
    lastName: Joi.string()
      .min(3)
      .max(31)
      .label('Last Name')
      .trim(),
    phoneNumber: Joi.string()
      .min(10)
      .max(13)
      .label('Phone Number')
      .trim(),
    email: Joi.string()
      .email()
      .max(63)
      .label('Email')
      .trim(),
    title: Joi.string()
      .min(3)
      .label('Title')
      .trim(),
    company: Joi.string()
      .min(2)
      .label('Company')
      .trim(),
    linkedInUrl: Joi.string()
      .max(63)
      .label('LinkedIn URL')
      .trim()
  }
};
