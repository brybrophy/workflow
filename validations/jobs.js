'use strict';

const Joi = require('joi');

module.exports.post = {
  body: {
    title: Joi.string()
      .min(3)
      .label('Job Title')
      .trim()
      .required(),
    JobPostUrl: Joi.string()
      .min(7)
      .label('Job Post URL')
      .trim()
      .uri(),
    companyName: Joi.string()
      .min(2)
      .label('Company Name')
      .trim()
      .required(),
    companyStreetAddress: Joi.string()
      .min(3)
      .label('Company Street Address')
      .trim(),
    companyCity: Joi.string()
      .min(3)
      .label('Company City')
      .trim(),
    companyState: Joi.string()
      .min(2)
      .max(2)
      .label('Company State')
      .uppercase()
      .trim(),
    companyZip: Joi.string()
      .min(5)
      .label('Company Zip')
      .trim(),
    companyPhone: Joi.string()
      .min(7)
      .label('Company Phone Number')
      .trim(),
    interviewInformational: Joi.object()
      .label('Informational Interview'),
    interviewApplied: Joi.object()
      .label('Applied'),
    interviewPhone: Joi.object()
      .label('Phone Interview'),
    interviewTechnical: Joi.object()
      .label('Technical Interview'),
    interviewOnsite: Joi.object()
      .label('On-site Interview'),
    interviewTakeHome: Joi.object()
      .label('Take-home Interview'),
    interviewOffer: Joi.object()
      .label('Offer'),
    interviewRejected: Joi.object()
      .label('Rejected'),
    notes: Joi.string()
      .label('Notes')
      .trim()
  }
};

module.exports.patch = {
  body: {
    title: Joi.string()
      .min(3)
      .label('Job Title')
      .trim(),
    JobPostUrl: Joi.string()
      .min(7)
      .label('Job Post URL')
      .trim()
      .uri(),
    companyName: Joi.string()
      .min(2)
      .label('Company Name')
      .trim(),
    companyStreetAddress: Joi.string()
      .min(3)
      .label('Company Street Address')
      .trim(),
    companyCity: Joi.string()
      .min(3)
      .label('Company City')
      .trim(),
    companyState: Joi.string()
      .min(2)
      .max(2)
      .label('Company State')
      .uppercase()
      .trim(),
    companyZip: Joi.string()
      .min(5)
      .label('Company Zip')
      .trim(),
    companyPhone: Joi.string()
      .min(7)
      .label('Company Phone Number')
      .trim(),
    interviewInformational: Joi.object()
      .label('Informational Interview'),
    interviewApplied: Joi.object()
      .label('Applied'),
    interviewPhone: Joi.object()
      .label('Phone Interview'),
    interviewTechnical: Joi.object()
      .label('Technical Interview'),
    interviewOnsite: Joi.object()
      .label('On-site Interview'),
    interviewTakeHome: Joi.object()
      .label('Take-home Interview'),
    interviewOffer: Joi.object()
      .label('Offer'),
    interviewRejected: Joi.object()
      .label('Rejected'),
    notes: Joi.string()
      .label('Notes')
      .trim()
  }
};
