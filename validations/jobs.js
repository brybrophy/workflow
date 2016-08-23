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
    companyAddress1: Joi.string()
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
    interviewStatus: Joi.string()
      .min(3)
      .label('Interview Status')
      .trim(),
    interviewInformational: Joi.string()
      .isoDate()
      .label('Informational Interview')
      .trim(),
    interviewApplied: Joi.string()
      .isoDate()
      .label('Applied')
      .trim(),
    interviewPhone: Joi.string()
      .isoDate()
      .label('Phone Interview')
      .trim(),
    interviewTechnical: Joi.string()
      .isoDate()
      .label('Technical Interview')
      .trim(),
    interviewOnsite: Joi.string()
      .isoDate()
      .label('On-site Interview')
      .trim(),
    interviewTakeHome: Joi.string()
      .isoDate()
      .label('Take-home Interview')
      .trim(),
    interviewOffer: Joi.string()
      .isoDate()
      .label('Offer')
      .trim(),
    interviewRejected: Joi.string()
      .isoDate()
      .label('Rejected')
      .trim(),
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
    companyAddress1: Joi.string()
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
    interviewStatus: Joi.string()
      .min(3)
      .label('Interview Status')
      .trim(),
    interviewInformational: Joi.string()
      .isoDate()
      .label('Informational Interview')
      .trim(),
    interviewApplied: Joi.string()
      .isoDate()
      .label('Applied')
      .trim(),
    interviewPhone: Joi.string()
      .isoDate()
      .label('Phone Interview')
      .trim(),
    interviewTechnical: Joi.string()
      .isoDate()
      .label('Technical Interview')
      .trim(),
    interviewOnsite: Joi.string()
      .isoDate()
      .label('On-site Interview')
      .trim(),
    interviewTakeHome: Joi.string()
      .isoDate()
      .label('Take-home Interview')
      .trim(),
    interviewOffer: Joi.string()
      .isoDate()
      .label('Offer')
      .trim(),
    interviewRejected: Joi.string()
      .isoDate()
      .label('Rejected')
      .trim(),
    notes: Joi.string()
      .label('Notes')
      .trim()
  }
};
