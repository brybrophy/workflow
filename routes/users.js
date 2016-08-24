'use strict';

const express = require('express');
const router = express.Router();

const knex = require('../knex');

const ev = require('express-validation');
// const validations = require('../validations/users');
// const { checkAuth } = require('../middleware');

const boom = require('boom');
const { camelizeKeys, decamelizeKeys } = require('humps');

const appId = process.env.APP_ID;
const appSecret = process.env.APP_SECRET;

const Linkedin = require('node-linkedin')(appId, appSecret, 'http://localhost:8000/api/users/oauth/linkedin/callback');

const scope = ['r_basicprofile', 'r_emailaddress'];

router.get('/users/oauth/linkedin', function(req, res) {
    Linkedin.auth.authorize(res, scope);
});

router.get('/users/oauth/linkedin/callback', function(req, res) {
    Linkedin.auth.getAccessToken(res, req.query.code, req.query.state, function(err, result) {
        if ( err ) {
          console.error(err);
          res.redirect('/auth');
        }

        const token = (result.accessToken || result.access_token);

        const linkedin = Linkedin.init(token);
        linkedin.people.me(function(err, $in) {
          console.log($in);
        });

        res.cookie('token', token);
        return res.redirect('/jobs');
    });
});

router.post('/users', (req, res, next) => {
  // const { username, email, password } = req.body;
  //
  // knex('users')
  //   .select(knex.raw('1=1'))
  //   .where('username', username)
  //   .first()
  //   .then((exists) => {
  //     if (exists) {
  //       throw boom.create(409, 'Username already exists');
  //     }
  //
  //     return bcrypt.hash(password, 12);
  //   })
  //   .then((hashedPassword) => {
  //     const newUser = { username, email, hashedPassword };
  //     const row = decamelizeKeys(newUser);
  //
  //     return knex('users').insert(row, '*');
  //   })
  //   .then((newUsers) => {
  //     delete newUsers[0].hashed_password;
  //
  //     res.send(newUsers[0]);
  //   })
  //   .catch((err) => {
  //     next(err);
  //   });
});

module.exports = router;
