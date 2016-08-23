'use strict';

const express = require('express');
const router = express.Router();

const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');

const ev = require('express-validation');
const validations = require('../validations/users');
const { checkAuth } = require('../middleware');

const boom = require('boom');
const { camelizeKeys, decamelizeKeys } = require('humps');

router.post('/users', ev(validations.post), (req, res, next) => {
  const { username, email, password } = req.body;

  knex('users')
    .select(knex.raw('1=1'))
    .where('username', username)
    .first()
    .then((exists) => {
      if (exists) {
        throw boom.create(409, 'Username already exists');
      }

      return bcrypt.hash(password, 12);
    })
    .then((hashedPassword) => {
      const newUser = { username, email, hashedPassword };
      const row = decamelizeKeys(newUser);

      return knex('users').insert(row, '*');
    })
    .then((newUsers) => {
      delete newUsers[0].hashed_password;

      res.send(newUsers[0]);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
