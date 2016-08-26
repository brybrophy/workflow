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
      .allow(''),
    email: Joi.string()
      .email()
      .max(63)
      .label('Email')
      .trim()
      .allow(''),
    title: Joi.string()
      .min(3)
      .label('Title')
      .trim()
      .allow(''),
    company: Joi.string()
      .min(2)
      .label('Company')
      .trim()
      .allow(''),
    linkedInUrl: Joi.string()
      .max(63)
      .label('LinkedIn URL')
      .trim()
      .allow('')
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
      .trim()
      .allow(''),
    email: Joi.string()
      .email()
      .max(63)
      .label('Email')
      .trim()
      .allow(''),
    title: Joi.string()
      .min(3)
      .label('Title')
      .trim()
      .allow(''),
    company: Joi.string()
      .min(2)
      .label('Company')
      .trim()
      .allow(''),
    linkedInUrl: Joi.string()
      .max(63)
      .label('LinkedIn URL')
      .trim()
      .allow('')
  }
};
