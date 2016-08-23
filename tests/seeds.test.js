'use strict';

process.env.NODE_ENV = 'test';

const { assert } = require('chai');
const { suite, test } = require('mocha');
const knex = require('../knex');

suite('Seeds', () => {
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

  test('Users rows', (done) => {
    knex('users').orderBy('id', 'ASC')
      .then((actual) => {
        const expected = [{
          id: 1,
          username: 'admin',
          email: 'admin@workflow.com',
          hashed_password: '$2a$12$Q3fh1jeJZ2Q19Yr12aVOxO54a/IvBhS01qWCqxNAZc0ABRxq0NnYq',
          created_at: new Date('2016-07-23 14:26:16 UTC'),
          updated_at: new Date('2016-07-23 14:26:16 UTC')
        }];

        for (let i = 0; i < expected.length; i++) {
          assert.deepEqual(
            actual[i],
            expected[i],
            `Row id=${i + 1} not the same`
          );
        }

        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('Jobs rows', (done) => {
    knex('jobs').orderBy('id', 'ASC')
      .then((actual) => {
        const expected = [{
          id: 1,
          title: 'Software Engineer, Front End',
          job_post_url: 'https://us-amazon.icims.com/jobs/429406/software-engineer%2c-front-end/job',
          company_name: 'Amazon',
          company_address_1: '410 Terry Ave. North',
          company_city: 'Seattle',
          company_state: 'WA',
          company_zip: '98109-5210',
          company_phone: '',
          interview_status: {"applied":{"date": "2016-08-12 10:00:00-07"},"informational":{},"phone":{},"technical":{},"onsite":{},"takeHome":{},"offer":{},"rejected":{}},
          notes: 'I found the job on Indeed and then my friend at Amazon encouraged me to apply.',
          user_id: 1,
          created_at: new Date('2016-08-13 13:00:00 UTC'),
          updated_at: new Date('2016-08-13 13:00:00 UTC')
        },
        {
          id: 2,
          title: 'Clown',
          job_post_url: 'http://en.ext.casting.cirquedusoleil.com/ts2mmx__JobDetails?jobId=a0xA00000012HcsIAE',
          company_name: 'Cirque du Soleil',
          company_address_1: '3799 South Las Vegas Blvd',
          company_city: 'Las Vegas',
          company_state: 'NV',
          company_zip: '89109',
          company_phone: '',
          interview_status: {"applied":{"date":"2016-06-20 07:00:00-07"},"informational":{},"phone":{"date":"2016-07-10 09:00:00-07"},"technical":{},"onsite":{"date":"2016-08-03 08:00:00-07"},"takeHome":{},"offer":{},"rejected":{}},
          notes: 'I\'ve always wanted to be a clown. Here\'s my chance!',
          user_id: 1,
          created_at: new Date('2016-06-21 13:00:00 UTC'),
          updated_at: new Date('2016-06-21 13:00:00 UTC')
        }];

        for (let i = 0; i < expected.length; i++) {
          assert.deepEqual(
            actual[i],
            expected[i],
            `Row id=${i + 1} not the same`
          );
        }

        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('Contacts rows', (done) => {
    knex('contacts').orderBy('id', 'ASC')
      .then((actual) => {
        const expected = [{
          id: 1,
          first_name: 'bobby',
          last_name: 'kennedy',
          email: 'admin@workflow.com',
          phone: '5555555555',
          linked_in_url: 'https://www.linkedin.com/in/bobby-joe-kennedy-40b5b0a2',
          user_id: 1,
          created_at: new Date('2016-08-13 11:14:00 UTC'),
          updated_at: new Date('2016-08-13 11:14:00 UTC')
        }];

        for (let i = 0; i < expected.length; i++) {
          assert.deepEqual(
            actual[i],
            expected[i],
            `Row id=${i + 1} not the same`
          );
        }

        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('Contacts_jobs rows', (done) => {
    knex('contacts_jobs').orderBy('id', 'ASC')
      .then((actual) => {
        const expected = [{
          id: 1,
          contact_id: 1,
          job_id: 1,
          created_at: new Date('2016-08-13 19:25:00 UTC'),
          updated_at: new Date('2016-08-13 19:25:00 UTC')
        },
        {
          id: 2,
          contact_id: 1,
          job_id: 2,
          created_at: new Date('2016-08-13 19:26:00 UTC'),
          updated_at: new Date('2016-08-13 19:26:00 UTC')
        }];

        for (let i = 0; i < expected.length; i++) {
          assert.deepEqual(
            actual[i],
            expected[i],
            `Row id=${i + 1} not the same`
          );
        }

        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
