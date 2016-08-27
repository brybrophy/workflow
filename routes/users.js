'use strict';

const express = require('express');
const router = express.Router();

const knex = require('../knex');

const boom = require('boom');
const { camelizeKeys, decamelizeKeys } = require('humps');

const appId = process.env.APP_ID;
const appSecret = process.env.APP_SECRET;

const Linkedin = require('node-linkedin')(appId, appSecret, 'http://workflow-react.herokuapp.com/api/users/oauth/linkedin/callback');

const scope = ['r_basicprofile', 'r_emailaddress'];

router.get('/users/oauth/linkedin', function(req, res) {
    Linkedin.auth.authorize(res, scope);
});

router.get('/users/oauth/linkedin/callback', function(req, res, next) {
  Linkedin.auth.getAccessToken(res, req.query.code, req.query.state, function(err, result) {
      if ( err ) {
        throw boom.create(400, 'Linkedin oauth failed');
        res.redirect('/auth');
      }

      const token = (result.accessToken || result.access_token);

      const linkedin = Linkedin.init(token);
      linkedin.people.me(function(err, $in) {
        const linkedinId = $in.id;
        const email = $in.emailAddress;
        const accessToken = token;

        return knex('users')
          .select(knex.raw('1=1'))
          .where('linkedin_id', linkedinId)
          .first()
          .then((exists) => {
            if (exists) {
              const updateUser = { email, accessToken };
                const row = decamelizeKeys(updateUser);

                return knex('users')
                  .update(row, '*')
                  .where('linkedin_id', linkedinId);
            }

            const newUser = { linkedinId, email, accessToken };
               const row = decamelizeKeys(newUser);

               return knex('users').insert(row, '*');
          })
          .then((users) => {
            res.cookie('userId', users[0]['id']);
            res.cookie('loggedIn', 'true');
            res.cookie('token', token);
            return res.redirect('/dashboard');
          })
          .catch((err) => {
            next(err);
          });
      });
    });
});

module.exports = router;
