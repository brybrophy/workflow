'use strict';

exports.seed = function(knex) {
  return knex('jobs').del()
    .then(() => {
      return knex('jobs').insert([{
        id: 1,
        title: 'Software Engineer, Front End',
        job_post_url: 'https://us-amazon.icims.com/jobs/429406/software-engineer%2c-front-end/job',
        company_name: 'Amazon',
        company_address_1: '410 Terry Ave. North',
        company_city: 'Seattle',
        company_state: 'WA',
        company_zip: '98109-5210',
        interview_status: 'Applied',
        interview_applied: new Date('2016-08-12 17:00:00 UTC'),
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
        interview_status: 'Waiting for offer',
        interview_applied: new Date('2016-06-20 14:00:00 UTC'),
        interview_phone: new Date('2016-07-10 16:00:00 UTC'),
        interview_onsite: new Date('2016-08-03 15:00:00 UTC'),
        notes: 'I\'ve always wanted to be a clown. Here\'s my chance!',
        user_id: 1,
        created_at: new Date('2016-06-21 13:00:00 UTC'),
        updated_at: new Date('2016-06-21 13:00:00 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('jobs_id_seq', (SELECT MAX(id) FROM jobs));"
      );
    });
};
