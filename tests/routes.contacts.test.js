'use strict';

process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const { suite, test } = require('mocha');
const request = require('supertest');
const server = require('../server');
const knex = require('../knex');

suite('Routes contacts', () => {
  before((done) => { // eslint-disable-line no-undef
    knex.migrate.latest()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  beforeEach((done) => { // eslint-disable-line no-undef
    knex.seed.run()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('GET /api/contacts/1', (done) => {
    request(server)
      .get('/api/contacts/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, [{
        id: 1,
        firstName: 'Bobby',
        lastName: 'Kennedy',
        email: 'admin@workflow.com',
        phone: '5555555555',
        title: 'President and CEO',
        company: 'ABC Company',
        linkedInUrl: 'https://www.linkedin.com/in/bobby-joe-kennedy-40b5b0a2',
        userId: 1,
        createdAt: new Date('2016-08-13 11:14:00 UTC').toISOString(),
        updatedAt: new Date('2016-08-13 11:14:00 UTC').toISOString()
      }], done);
  });

  test('POST /api/contacts', (done) => {
    request(server)
      .post('/api/contacts')
      .set('Accept', 'application/json')
      .send({
        firstName: 'Neil',
        lastName: 'Armstrong',
        email: 'neil@themoon.space',
        phone: '(123)456-7890',
        title: 'Chief Astronaut',
        company: 'NASA',
        linkedInUrl: 'https://www.linkedin.com/in/neil-armstrong-8b6b59b',
        userId: 1
      })
      .expect('Content-Type', /json/)
      .expect((res) => {
        delete res.body.createdAt;
        delete res.body.updatedAt;
      })
      .expect(200, {
        id: 2,
        firstName: 'Neil',
        lastName: 'Armstrong',
        email: 'neil@themoon.space',
        phone: '1234567890',
        title: 'Chief Astronaut',
        company: 'NASA',
        linkedInUrl: 'https://www.linkedin.com/in/neil-armstrong-8b6b59b',
        userId: 1
      }, done);
  });

  test('PATCH /api/contacts/:contactsId', (done) => {
    request(server)
      .patch('/api/contacts/1')
      .set('Accept', 'application/json')
      .send({
        firstName: 'Robert',
        lastName: 'Dole'
      })
      .expect('Content-Type', /json/)
      .expect((res) => {
        delete res.body.createdAt;
        delete res.body.updatedAt;
      })
      .expect(200, {
        id: 1,
        firstName: 'Robert',
        lastName: 'Dole',
        email: 'admin@workflow.com',
        phone: '5555555555',
        title: 'President and CEO',
        company: 'ABC Company',
        linkedInUrl: 'https://www.linkedin.com/in/bobby-joe-kennedy-40b5b0a2',
        userId: 1
      }, done);
  });
});
