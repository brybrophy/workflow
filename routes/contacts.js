'use strict';

const userId = 1;

const express = require('express');
const router = express.Router();

const knex = require('../knex');

const ev = require('express-validation');
const validations = require('../validations/contacts');
const { checkAuth } = require('../middleware');

const boom = require('boom');
const { camelizeKeys, decamelizeKeys } = require('humps');

router.post('/api/contacts', ev(validations.post), (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    linkedInUrl,
    userId
  } = req.body;

  const phone = phoneNumber.replace('\\D', '');

  knex('contacts')
    .select(knex.raw('1=1'))
    .where('email', email)
    .first()
    .then((exists) => {
      if (exists) {
        throw boom.create(409, 'Contact already exists.')
      }

      const newContact = {
        firstName,
        lastName,
        email,
        phone,
        linkedInUrl,
        userId
      }
      const row = decamelizeKeys(newContact);

      return knex('contacts').insert(row, '*');
    })
    .then((newUsers) => {
      res.send(newUsers[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/api/contacts', (req, res, next) => {
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

// router.patch('/api/contacts/:contactId', checkAuth, ev(validations.patch), (req, res, next) => {
//   const postId = Number.parseInt(req.params.postId);
//   const rating = req.body.rating;
//
//   if (Number.isNaN(postId)) {
//     throw boom.create(400, 'Invalid Post Id');
//   };
//
//   knex('posts')
//     .update({ rating }, '*')
//     .where('id', postId)
//     .then((posts) => {
//       res.send(posts[0]);
//     })
//     .catch((err) => {
//       next(err);
//     });
// });


module.exports = router;
