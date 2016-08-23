'use strict';

process.env.NODE_ENV = 'test';

const { assert, expect, should } = require('chai');
const { suite, test } = require('mocha');
const request = require('supertest');
const server = require('../server');
const knex = require('../knex');

const users = require('../routes/users');

suite('Routes Users', () => {
  before((done) => {
    knex.migrate.latest()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  beforeEach((done) => {
    knex.seed.run()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('POST /api/users', (done) => {
    request(server)
      .post('/api/users')
      .set('Accept', 'application/json')
      .send({
        username: 'geneBelcher',
        email: 'royalBaby@bobsburger.biz',
        password: 'burgermusic'
      })
      .expect('Content-Type', /json/)
      .expect((res) => {
        delete res.body.created_at;
        delete res.body.updated_at;
        delete res.body.hashed_password;
      })
      .expect(200, {
        id: 2,
        username: 'geneBelcher',
        email: 'royalBaby@bobsburger.biz'
      }, done);
  });
});
