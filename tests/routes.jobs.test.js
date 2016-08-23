'use strict';

process.env.NODE_ENV = 'test';

const { assert, expect, should } = require('chai');
const { suite, test } = require('mocha');
const request = require('supertest');
const server = require('../server');
const knex = require('../knex');

const posts = require('../routes/jobs');

suite('Routes jobs', () => {
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

  test('GET /api/jobs', (done) => {
    request(server)
      .get('/api/jobs')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, [{
        id: 1,
        title: 'Software Engineer, Front End',
        jobPostUrl: 'https://us-amazon.icims.com/jobs/429406/software-engineer%2c-front-end/job',
        companyName: 'Amazon',
        companyAddress1: '410 Terry Ave. North',
        companyCity: 'Seattle',
        companyState: 'WA',
        companyZip: '98109-5210',
        companyPhone: '',
        interviewStatus: 'Applied',
        interviewInformational: null,
        interviewApplied: new Date('2016-08-12 17:00:00 UTC').toISOString(),
        interviewPhone: null,
        interviewTechnical: null,
        interviewOnsite: null,
        interviewTakeHome: null,
        interviewOffer: null,
        interviewRejected: null,
        notes: 'I found the job on Indeed and then my friend at Amazon encouraged me to apply.',
        userId: 1,
        createdAt: new Date('2016-08-13 13:00:00 UTC').toISOString(),
        updatedAt: new Date('2016-08-13 13:00:00 UTC').toISOString()
      },
      {
        id: 2,
        title: 'Clown',
        jobPostUrl: 'http://en.ext.casting.cirquedusoleil.com/ts2mmx__JobDetails?jobId=a0xA00000012HcsIAE',
        companyName: 'Cirque du Soleil',
        companyAddress1: '3799 South Las Vegas Blvd',
        companyCity: 'Las Vegas',
        companyState: 'NV',
        companyZip: '89109',
        companyPhone: '',
        interviewStatus: 'Waiting for offer',
        interviewInformational: null,
        interviewApplied: new Date('2016-06-20 14:00:00 UTC').toISOString(),
        interviewPhone: new Date('2016-07-10 16:00:00 UTC').toISOString(),
        interviewTechnical: null,
        interviewOnsite: new Date('2016-08-03 15:00:00 UTC').toISOString(),
        interviewTakeHome: null,
        interviewOffer: null,
        interviewRejected: null,
        notes: 'I\'ve always wanted to be a clown. Here\'s my chance!',
        userId: 1,
        createdAt: new Date('2016-06-21 13:00:00 UTC').toISOString(),
        updatedAt: new Date('2016-06-21 13:00:00 UTC').toISOString()
      }], done);
  });

  test('GET /api/jobs/:id', (done) => {
    request(server)
      .get('/api/jobs/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        id: 1,
        title: 'Software Engineer, Front End',
        jobPostUrl: 'https://us-amazon.icims.com/jobs/429406/software-engineer%2c-front-end/job',
        companyName: 'Amazon',
        companyAddress1: '410 Terry Ave. North',
        companyCity: 'Seattle',
        companyState: 'WA',
        companyZip: '98109-5210',
        companyPhone: '',
        interviewStatus: 'Applied',
        interviewInformational: null,
        interviewApplied: new Date('2016-08-12 17:00:00 UTC').toISOString(),
        interviewPhone: null,
        interviewTechnical: null,
        interviewOnsite: null,
        interviewTakeHome: null,
        interviewOffer: null,
        interviewRejected: null,
        notes: 'I found the job on Indeed and then my friend at Amazon encouraged me to apply.',
        userId: 1,
        createdAt: new Date('2016-08-13 13:00:00 UTC').toISOString(),
        updatedAt: new Date('2016-08-13 13:00:00 UTC').toISOString()
      }, done);
  });

  test('GET /api/jobs/:id/contacts', (done) => {
    request(server)
      .get('/api/jobs/1/contacts')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, [{
        contactId: 1,
        createdAt: '2016-08-13T19:25:00.000Z',
        email: 'admin@workflow.com',
        firstName: 'bobby',
        id: 1,
        jobId: 1,
        lastName: 'kennedy',
        linkedInUrl: 'https://www.linkedin.com/in/bobby-joe-kennedy-40b5b0a2',
        phone: '5555555555',
        updatedAt: '2016-08-13T19:25:00.000Z',
        userId: 1
      }], done);
  });

  test('POST /api/jobs', (done) => {
    request(server)
      .post('/api/jobs')
      .set('Accept', 'application/json')
      .send({
        title: 'User Experience (UX) Designer',
        jobPostUrl: 'http://www.indeed.jobs/career/JobDetail/User-Experience-UX-Designer/896',
        companyName: 'Indeed',
        companyCity: 'Seattle',
        companyState: 'WA',
        companyZip: '98104',
        interviewStatus: 'Applied',
        interviewApplied: new Date('2016-06-20 14:00:00 UTC').toISOString(),
        notes: 'I applied online and reached out to my friend Sam who works at Indeed.',
        userId: 1
      })
      .expect('Content-Type', /json/)
      .expect((res) => {
        delete res.body.createdAt;
        delete res.body.updatedAt;
      })
      .expect(200, {
        id: 3,
        title: 'User Experience (UX) Designer',
        jobPostUrl: 'http://www.indeed.jobs/career/JobDetail/User-Experience-UX-Designer/896',
        companyName: 'Indeed',
        companyAddress1: '',
        companyCity: 'Seattle',
        companyState: 'WA',
        companyZip: '98104',
        companyPhone: '',
        interviewStatus: 'Applied',
        interviewInformational: null,
        interviewApplied: new Date('2016-06-20 14:00:00 UTC').toISOString(),
        interviewPhone: null,
        interviewTechnical: null,
        interviewOnsite: null,
        interviewTakeHome: null,
        interviewOffer: null,
        interviewRejected: null,
        notes: 'I applied online and reached out to my friend Sam who works at Indeed.',
        userId: 1
      }, done);
  });

  test('PATCH /api/jobs/:id', (done) => {
    request(server)
      .patch('/api/jobs/2')
      .set('Accept', 'application/json')
      .send({
        interviewOffer: new Date('2016-09-10 15:00:00 UTC'),
        notes: 'I\'ve always wanted to be a clown. Here\'s my chance! I got an offer but I\'ll have to give it some thought.'
      })
      .expect('Content-Type', /json/)
      .expect((res) => {
        delete res.body.createdAt;
        delete res.body.updatedAt;
      })
      .expect(200, {
        id: 2,
        title: 'Clown',
        jobPostUrl: 'http://en.ext.casting.cirquedusoleil.com/ts2mmx__JobDetails?jobId=a0xA00000012HcsIAE',
        companyName: 'Cirque du Soleil',
        companyAddress1: '3799 South Las Vegas Blvd',
        companyCity: 'Las Vegas',
        companyState: 'NV',
        companyZip: '89109',
        companyPhone: '',
        interviewStatus: 'Waiting for offer',
        interviewInformational: null,
        interviewApplied: new Date('2016-06-20 14:00:00 UTC').toISOString(),
        interviewPhone: new Date('2016-07-10 16:00:00 UTC').toISOString(),
        interviewTechnical: null,
        interviewOnsite: new Date('2016-08-03 15:00:00 UTC').toISOString(),
        interviewTakeHome: null,
        interviewOffer: new Date('2016-09-10 15:00:00 UTC').toISOString(),
        interviewRejected: null,
        notes: 'I\'ve always wanted to be a clown. Here\'s my chance! I got an offer but I\'ll have to give it some thought.',
        userId: 1
      }, done);
  });

  test('DELETE /api/jobs/:id', (done) => {
    request(server)
    .delete('/api/jobs/2')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, {
      title: 'Clown',
      jobPostUrl: 'http://en.ext.casting.cirquedusoleil.com/ts2mmx__JobDetails?jobId=a0xA00000012HcsIAE',
      companyName: 'Cirque du Soleil',
      companyAddress1: '3799 South Las Vegas Blvd',
      companyCity: 'Las Vegas',
      companyState: 'NV',
      companyZip: '89109',
      companyPhone: '',
      interviewStatus: 'Waiting for offer',
      interviewInformational: null,
      interviewApplied: new Date('2016-06-20 14:00:00 UTC').toISOString(),
      interviewPhone: new Date('2016-07-10 16:00:00 UTC').toISOString(),
      interviewTechnical: null,
      interviewOnsite: new Date('2016-08-03 15:00:00 UTC').toISOString(),
      interviewTakeHome: null,
      interviewOffer: null,
      interviewRejected: null,
      notes: 'I\'ve always wanted to be a clown. Here\'s my chance!',
      userId: 1,
      createdAt: new Date('2016-06-21 13:00:00 UTC').toISOString(),
      updatedAt: new Date('2016-06-21 13:00:00 UTC').toISOString()
    }, done);
  });
});
