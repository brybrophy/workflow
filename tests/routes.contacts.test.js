'use strict';

process.env.NODE_ENV = 'test';

const { assert, expect, should } = require('chai');
const { suite, test } = require('mocha');
const request = require('supertest');
const server = require('../server');
const knex = require('../knex');

const posts = require('../routes/contacts');

suite('Routes contacts', () => {
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

  test('GET /api/contacts/1', (done) => {
    request(server)
      .get('/api/contacts')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, [{
        id: 1,
        firstName: 'bobby',
        lastName: 'kennedy',
        email: 'admin@workflow.com',
        phone: '5555555555',
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
        firstName: 'neil',
        lastName: 'armstrong',
        email: 'neil@themoon.space',
        phoneNumber: '(123)456-7890',
        linkedInUrl: 'https://www.linkedin.com/in/neil-armstrong-8b6b59b',
        userId: 1
      })
      .expect('Content-Type', /json/)
      .expect((res) => {
        delete res.body.created_at;
        delete res.body.updated_at;
      })
      .expect(200, {
        id: 2,
        first_name: 'neil',
        last_name: 'armstrong',
        email: 'neil@themoon.space',
        phone: '1234567890',
        linked_in_url: 'https://www.linkedin.com/in/neil-armstrong-8b6b59b',
        user_id: 1
      }, done);
  });

  test('PATCH /api/contacts/:contactsId', (done) => {
    request(server)
      .patch('/api/contacts/1')
      .set('Accept', 'application/json')
      .send({
        firstName: 'Bobby',
        lastName: 'Kennedy'
      })
      .expect('Content-Type', /json/)
      .expect((res) => {
        delete res.body.created_at;
        delete res.body.updated_at;
      })
      .expect(200, {
        id: 1,
        first_name: 'Bobby',
        last_name: 'Kennedy',
        email: 'admin@workflow.com',
        phone: '5555555555',
        linked_in_url: 'https://www.linkedin.com/in/bobby-joe-kennedy-40b5b0a2',
        user_id: 1
      }, done);
  });
});
