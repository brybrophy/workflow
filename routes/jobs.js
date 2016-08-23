'use strict';

const express = require('express');
const router = express.Router();

const knex = require('../knex');

const ev = require('express-validation');
const validations = require('../validations/jobs');
const { checkAuth } = require('../middleware');

const boom = require('boom');
const { camelizeKeys, decamelizeKeys } = require('humps');

router.get('/jobs', (req, res, next) => {
  knex('jobs')
    .then((rows) => {
      const jobs = camelizeKeys(rows);

      for (const job of jobs) {
        job.interviewApplied = job.interviewStatus.applied;
        job.interviewInformational = job.interviewStatus.informational;
        job.interviewPhone = job.interviewStatus.phone;
        job.interviewTakeHome = job.interviewStatus.takeHome;
        job.interviewTechnical = job.interviewStatus.technical;
        job.interviewOnsite = job.interviewStatus.onsite;
        job.interviewOffer = job.interviewStatus.offer;
        job.interviewRejected = job.interviewStatus.rejected;
        delete job.interviewStatus;
      }

      res.send(jobs);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/jobs/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    return next();
  }

  knex('jobs')
    .where('id', id)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(404, 'Not Found');
      }

      const job = camelizeKeys(row);

      job.interviewApplied = job.interviewStatus.applied;
      job.interviewInformational = job.interviewStatus.informational;
      job.interviewPhone = job.interviewStatus.phone;
      job.interviewTakeHome = job.interviewStatus.takeHome;
      job.interviewTechnical = job.interviewStatus.technical;
      job.interviewOnsite = job.interviewStatus.onsite;
      job.interviewOffer = job.interviewStatus.offer;
      job.interviewRejected = job.interviewStatus.rejected;

      delete job.interviewStatus;

      res.send(job);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/jobs/:id/contacts', (req, res, next) => {
  const jobId = Number.parseInt(req.params.id);

  if (Number.isNaN(jobId)) {
    return next();
  }

  knex('contacts')
    .innerJoin('contacts_jobs', 'contacts_jobs.contact_id', 'contacts.id')
    .where('contacts_jobs.job_id', jobId)
    .then((rows) => {
      const contacts = camelizeKeys(rows);

      res.send(contacts);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/jobs', ev(validations.post), (req, res, next) => {
  const { title, jobPostUrl, companyName, companyAddress_1, companyCity, companyState, companyZip, companyPhone, interviewInformational, interviewApplied, interviewPhone, interviewTechnical, interviewOnsite, interviewTakeHome, interviewOffer, interviewRejected, notes, userId } = req.body;

  const interviewStatus = JSON.stringify({
    informational: interviewInformational,
    applied: interviewApplied,
    phone: interviewPhone,
    technical: interviewTechnical,
    onsite: interviewOnsite,
    takeHome: interviewTakeHome,
    offer: interviewOffer,
    rejected: interviewRejected
  });

  if (!title || !title.trim()) {
    return next(boom.create(400, 'Job title must not be blank'));
  }

  if (!companyName || !companyName.trim()) {
    return next(boom.create(400, 'Company name must not be blank'));
  }

  const insertJob = { title, jobPostUrl, companyName, companyAddress_1, companyCity, companyState, companyZip, companyPhone, interviewStatus, notes, userId };

  knex('jobs')
    .insert(decamelizeKeys(insertJob), '*')
    .then((rows) => {
      const job = camelizeKeys(rows[0]);

      job.interviewApplied = job.interviewStatus.applied;
      job.interviewInformational = job.interviewStatus.informational;
      job.interviewPhone = job.interviewStatus.phone;
      job.interviewTakeHome = job.interviewStatus.takeHome;
      job.interviewTechnical = job.interviewStatus.technical;
      job.interviewOnsite = job.interviewStatus.onsite;
      job.interviewOffer = job.interviewStatus.offer;
      job.interviewRejected = job.interviewStatus.rejected;

      delete job.interviewStatus;

      res.send(job);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/jobs/:id', ev(validations.patch), (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    return next();
  }

  knex('jobs')
    .where('id', id)
    .first()
    .then((job) => {
      if (!job) {
        throw boom.create(404, 'Not Found');
      }

      const { title, jobPostUrl, companyName, companyAddress_1, companyCity, companyState, companyZip, companyPhone, interviewInformational, interviewApplied, interviewPhone, interviewTechnical, interviewOnsite, interviewTakeHome, interviewOffer, interviewRejected, notes } = req.body;

      const interviewStatus = {
        informational: interviewInformational,
        applied: interviewApplied,
        phone: interviewPhone,
        technical: interviewTechnical,
        onsite: interviewOnsite,
        takeHome: interviewTakeHome,
        offer: interviewOffer,
        rejected: interviewRejected
      };

      const updateJob = {};

      if (title) {
        updateJob.title = title;
      }

      if (jobPostUrl) {
        updateJob.jobPostUrl = jobPostUrl;
      }

      if (companyName) {
        updateJob.companyName = companyName;
      }

      if (companyAddress_1) {
        updateJob.companyAddress_1 = companyAddress_1;
      }

      if (companyCity) {
        updateJob.companyCity = companyCity;
      }

      if (companyState) {
        updateJob.companyState = companyState;
      }

      if (companyZip) {
        updateJob.companyZip = companyZip;
      }

      if (companyPhone) {
        updateJob.companyPhone = companyPhone;
      }

      if (interviewStatus) {
        updateJob.interviewStatus = interviewStatus;
      }

      if (notes) {
        updateJob.notes = notes;
      }

      return knex('jobs')
        .update(decamelizeKeys(updateJob), '*')
        .where('id', id);
    })
    .then((rows) => {
      const job = camelizeKeys(rows[0]);

      job.interviewApplied = job.interviewStatus.applied;
      job.interviewInformational = job.interviewStatus.informational;
      job.interviewPhone = job.interviewStatus.phone;
      job.interviewTakeHome = job.interviewStatus.takeHome;
      job.interviewTechnical = job.interviewStatus.technical;
      job.interviewOnsite = job.interviewStatus.onsite;
      job.interviewOffer = job.interviewStatus.offer;
      job.interviewRejected = job.interviewStatus.rejected;

      delete job.interviewStatus;

      res.send(job);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/jobs/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    return next();
  }

  let job;

  knex('jobs')
    .where('id', id)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(404, 'Not Found');
      }

      job = camelizeKeys(row);

      return knex('jobs')
        .del()
        .where('id', id)
    })
    .then(() => {
      delete job.id;

      job.interviewApplied = job.interviewStatus.applied;
      job.interviewInformational = job.interviewStatus.informational;
      job.interviewPhone = job.interviewStatus.phone;
      job.interviewTakeHome = job.interviewStatus.takeHome;
      job.interviewTechnical = job.interviewStatus.technical;
      job.interviewOnsite = job.interviewStatus.onsite;
      job.interviewOffer = job.interviewStatus.offer;
      job.interviewRejected = job.interviewStatus.rejected;

      delete job.interviewStatus;

      res.send(job);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
