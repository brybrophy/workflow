'use strict';

const express = require('express');
const router = express.Router();

const knex = require('../knex');

const ev = require('express-validation');
const validations = require('../validations/jobs');
const { checkAuth } = require('../middleware');

const boom = require('boom');
const { camelizeKeys, decamelizeKeys } = require('humps');

router.get('/api/jobs', (req, res, next) => {
  knex('jobs')
    .then((jobs) => {
      res.send(jobs);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/api/jobs/:id', (req, res, next) => {
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

      res.send(job);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/api/jobs', (req, res, next) => {
  const { title, jobPostUrl, companyName, companyAddress_1, companyAddress_2, companyCity, companyState, companyZip, companyWebsite, interviewStatus, interviewInformational, interviewApplied, interviewPhone, interviewTechnical, interviewOnsite, interviewTakeHome, interviewOffer, interviewRejected, notes, userId } = req.body;

  if (!title || !title.trim()) {
    return next(boom.create(400, 'Job title must not be blank'));
  }

  if (!companyName || !companyName.trim()) {
    return next(boom.create(400, 'Company name must not be blank'));
  }

  const insertJob = { title, jobPostUrl, companyName, companyAddress_1, companyAddress_2, companyCity, companyState, companyZip, companyWebsite, interviewStatus, interviewInformational, interviewApplied, interviewPhone, interviewTechnical, interviewOnsite, interviewTakeHome, interviewOffer, interviewRejected, notes, userId };

  knex('jobs')
    .insert(decamelizeKeys(insertJob), '*')
    .then((rows) => {
      const job = camelizeKeys(rows[0]);

      res.send(job);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/api/jobs/:id', (req, res, next) => {
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

      const { title, jobPostUrl, companyName, companyAddress_1, companyAddress_2, companyCity, companyState, companyZip, companyWebsite, interviewStatus, interviewInformational, interviewApplied, interviewPhone, interviewTechnical, interviewOnsite, interviewTakeHome, interviewOffer, interviewRejected, notes } = req.body;
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

      if (companyAddress_2) {
        updateJob.companyAddress_2 = companyAddress_2;
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

      if (companyWebsite) {
        updateJob.companyWebsite = companyWebsite;
      }

      if (interviewStatus) {
        updateJob.interviewStatus = interviewStatus;
      }

      if (interviewInformational) {
        updateJob.interviewInformational = interviewInformational;
      }

      if (interviewApplied) {
        updateJob.interviewApplied = interviewApplied;
      }

      if (interviewPhone) {
        updateJob.interviewPhone = interviewPhone;
      }

      if (interviewTechnical) {
        updateJob.interviewTechnical = interviewTechnical;
      }

      if (interviewOnsite) {
        updateJob.interviewOnsite = interviewOnsite;
      }

      if (interviewTakeHome) {
        updateJob.interviewTakeHome = interviewTakeHome;
      }

      if (interviewOffer) {
        updateJob.interviewOffer = interviewOffer;
      }

      if (interviewRejected) {
        updateJob.interviewRejected = interviewRejected;
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

      res.send(job);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/api/jobs/:id', (req, res, next) => {
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

      res.send(job);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
