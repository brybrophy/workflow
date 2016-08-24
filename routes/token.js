'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys } = require('humps');
const jwt = require('jsonwebtoken');

const router = express.Router(); // eslint-disable-line new-cap

const appId = process.env.APP_ID;
const appSecret = process.env.APP_SECRET;

const Linkedin = require('node-linkedin')(appId, appSecret, 'http://localhost:8000/api/oauth/linkedin/callback');

const scope = ['r_basicprofile', 'r_emailaddress'];
let me;

router.get('/oauth/linkedin', function(req, res) {
    Linkedin.auth.authorize(res, scope);
});

router.get('/oauth/linkedin/callback', function(req, res) {
    Linkedin.auth.getAccessToken(res, req.query.code, req.query.state, function(err, result) {
        if ( err ) {
          console.error(err);
          res.redirect('/auth');
        }

        console.log(result);

        const token = (result.accessToken || result.access_token);

        const linkedin = Linkedin.init(token);
        linkedin.people.me(function(err, $in) {
          console.log($in);
        });

        res.cookie('token', token);
        return res.redirect('/jobs');
    });
    console.log(me);
});

router.post('/token', (req, res, next) => {
  let user;

  knex('users')
    .where('username', req.body.username)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(401, 'User could not be logged in');
      }

      user = camelizeKeys(row);

      return bcrypt.compare(req.body.password, user.hashedPassword);
    })
    .then(() => {
      const expiry = new Date(Date.now() + 1000 * 60 * 60 * 3); // 3 hours

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '3h' });

      res.cookie('accessToken', token, {
        httpOnly: true,
        expires: expiry,
        secure: router.get('env') === 'production'
      });
      res.cookie('loggedIn', true, {
        expires: expiry,
        secure: router.get('env') === 'production'
      });

      res.sendStatus(200);
    })
    .catch(bcrypt.MISMATCH_ERROR, () => {
      throw boom.create(401, 'User could not be logged in');
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/token', (req, res) => {
  res.clearCookie('accessToken');
  res.clearCookie('loggedIn');
  res.sendStatus(200);
});

module.exports = router;
