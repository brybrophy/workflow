'use strict';

const express = require('express');
const router = express.Router();

const knex = require('../knex');

const ev = require('express-validation');
const validations = require('../validations/contacts');
const { checkAuth } = require('../middleware');

const boom = require('boom');
const { camelizeKeys, decamelizeKeys } = require('humps');

router.post('/contacts', ev(validations.post), (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    title,
    company,
    linkedInUrl,
    userId
  } = req.body;

  let { phone } = req.body;

  if (phone) {
    phone = phone.replace(/[^\d]/g, '');
  }

  // knex('contacts')
  //   .select(knex.raw('1=1'))
  //   .where('email', email)
  //   .first()
  //   .then((exists) => {
  //     if (exists) {
  //       throw boom.create(409, 'Contact already exists.')
  //     }
  //
  //     const newContact = {
  //       firstName,
  //       lastName,
  //       email,
  //       phone,
  //       title,
  //       company,
  //       linkedInUrl,
  //       userId: 1
  //     }
  //     const row = decamelizeKeys(newContact);
  //
  //     return knex('contacts').insert(row, '*');
  //   })

  const newContact = {
    firstName,
    lastName,
    email,
    phone,
    title,
    company,
    linkedInUrl,
    userId: 1
  };

  const row = decamelizeKeys(newContact);

  knex('contacts').insert(row, '*')
    .then((newContacts) => {
      res.send(camelizeKeys(newContacts[0]));
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/contacts', (req, res, next) => {
  knex('contacts')
    .where('user_id', userId)
    .orderBy('first_name')
    .then((contacts) => {
      if (contacts.length <= 0) {
        throw boom.create(404, 'You don\'t have any contacts yet. :(')
      }

      res.send(camelizeKeys(contacts));
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/contacts/:id/jobs', (req, res, next) => {
  const contactId = Number.parseInt(req.params.id);

  if (Number.isNaN(contactId)) {
    return next();
  }

  knex('jobs')
    .innerJoin('contacts_jobs', 'contacts_jobs.job_id', 'jobs.id')
    .where('contacts_jobs.contact_id', contactId)
    .then((rows) => {
      const jobs = camelizeKeys(rows);

      res.send(jobs);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/contacts/:contactId', ev(validations.patch), (req, res, next) => {
  const contactId = Number.parseInt(req.params.contactId);
  let {
    firstName,
    lastName,
    email,
    phoneNumber,
    title,
    company,
    linkedInUrl } = req.body;

  if (Number.isNaN(contactId)) {
    throw boom.create(400, 'Invalid Contact Id');
  }

  knex('contacts')
    .where('id', contactId)
    .first()
    .then((contact) => {
      if (!firstName) {
        firstName = contact.first_name;
      }

      if (!lastName) {
        lastName = contact.last_name;
      }

      if (!email) {
        email = contact.email;
      }

      if (!phoneNumber) {
        phoneNumber = contact.phone;
      }

      if (!title) {
        title = contact.title;
      }

      if (!company) {
        company = contact.company;
      }

      if (!linkedInUrl) {
        linkedInUrl = contact.linked_in_url;
      }

      const phone = phoneNumber.replace(/[^\d]/g, '');
      const updatedContact = {
        firstName,
        lastName,
        email,
        phone,
        title,
        company,
        linkedInUrl
      }
      const row = decamelizeKeys(updatedContact);

      return knex('contacts')
        .update(row, '*')
        .where('id', contactId)
    })
    .then((contacts) => {
      res.send(contacts[0]);
    })
    .catch((err) => {
      next(err);
    });
});


module.exports = router;
